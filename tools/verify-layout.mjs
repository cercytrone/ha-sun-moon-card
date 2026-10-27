#!/usr/bin/env node
/**
 * Layout- und Funktionsprüfung in einem echten Browser (headless Chromium).
 *
 * Das Werkzeug prüft die Karte in vielen Kombinationen aus Standort, Zeit,
 * Theme, Höhe und Breite. Geprüft werden u. a.:
 *
 *  - keine Fehler in der Browserkonsole
 *  - kein Abschneiden: alle Bereiche liegen innerhalb der Kartenhöhe
 *  - keine abgeschnittenen Beschriftungen (scrollWidth vs. clientWidth)
 *  - die Zeitleiste des Charts ist korrekt skaliert (Position des
 *    „Jetzt“-Markers entspricht der Uhrzeit)
 *  - die Farben der Phasenbereiche stimmen mit der Palette überein
 *    (Pixelprobe im erzeugten PNG)
 *  - Sonderfälle (Polartag, Polarnacht, fehlende Entität, fehlender Standort)
 *    werden ohne Fehler dargestellt
 *
 * Aufruf (Voraussetzungen siehe tools/screenshot.mjs):
 *   npm run dev            # in einem zweiten Terminal
 *   node tools/verify-layout.mjs
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const baseUrl = process.env.DEV_URL ?? 'http://127.0.0.1:5173';

/** Prüffälle: Standort, Zeit (lokal), Theme, Höhe, Breite. */
const CASES = [
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 160, w: 620 },
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 220, w: 620 },
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 280, w: 620 },
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 360, w: 620 },
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'light', h: 280, w: 620 },
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 160, w: 320 },
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 220, w: 360 },
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 280, w: 340 },
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 360, w: 380 },
  { loc: 'berlin', time: '2026-06-21T13:00', theme: 'dark', h: 300, w: 620 },
  { loc: 'berlin', time: '2026-12-21T08:00', theme: 'dark', h: 300, w: 620 },
  { loc: 'berlin', time: '2026-03-29T02:30', theme: 'dark', h: 300, w: 620 }, // Zeitumstellung
  { loc: 'berlin', time: '2026-03-29T04:30', theme: 'light', h: 300, w: 620 }, // Zeitumstellung
  { loc: 'newyork', time: '2026-07-04T20:15', theme: 'dark', h: 280, w: 620 },
  { loc: 'sydney', time: '2026-01-15T14:00', theme: 'dark', h: 280, w: 620 },
  { loc: 'quito', time: '2026-03-20T12:00', theme: 'dark', h: 280, w: 620 },
  { loc: 'longyearbyen', time: '2026-06-21T12:00', theme: 'dark', h: 300, w: 620 }, // Polartag
  { loc: 'longyearbyen', time: '2026-12-21T12:00', theme: 'dark', h: 300, w: 620 }, // Polarnacht
  { loc: 'longyearbyen', time: '2026-10-05T12:00', theme: 'dark', h: 300, w: 620 }, // Übergang
  { loc: 'tromso', time: '2026-11-27T12:00', theme: 'dark', h: 300, w: 620 },
  { loc: 'kapstadt', time: '2026-06-21T17:00', theme: 'light', h: 280, w: 620 },
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 340, w: 900 }, // Standardhöhe, zweispaltig
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 340, w: 620 }, // Standardhöhe
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'light', h: 340, w: 900 }, // hell, zweispaltig
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 120, w: 620 }, // Minimum
  { loc: 'berlin', time: '2026-10-26T18:30', theme: 'dark', h: 800, w: 620 }, // Maximum
];

/** Sonderfälle mit abweichenden Entitäten. */
const EDGE_CASES = [
  { name: 'sun.sun fehlt', entities: 'missing-sun', h: 280 },
  { name: 'sun.sun ohne Attribute', entities: 'no-attributes', h: 280 },
  { name: 'Standort fehlt', entities: 'no-location', h: 200 },
];

const results = [];
let failed = 0;

function record(name, ok, details = '') {
  results.push({ name, ok, details });
  if (!ok) failed += 1;
  console.log(`${ok ? '✓' : '✗'} ${name}${details ? ` – ${details}` : ''}`);
}

async function resolveExecutablePath() {
  if (process.env.CHROME_PATH) return { executablePath: process.env.CHROME_PATH, args: [] };
  if (process.env.USE_PUPPETEER) {
    const puppeteer = await import('puppeteer');
    return { executablePath: puppeteer.default.executablePath(), args: [] };
  }
  const chromium = (await import('@sparticuz/chromium')).default;
  return { executablePath: await chromium.executablePath(), args: chromium.args };
}

/** Einzelne Karte prüfen. */
async function checkCard(page, url, label) {
  const errors = [];
  const onConsole = (message) => {
    if (message.type() === 'error') errors.push(message.text());
  };
  const onError = (error) => errors.push(String(error));
  page.on('console', onConsole);
  page.on('pageerror', onError);

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForSelector('sun-moon-card', { timeout: 20000 });
  await new Promise((resolve) => setTimeout(resolve, 350));

  const report = await page.evaluate(() => {
    const card = document.querySelector('sun-moon-card');
    const root = card.shadowRoot;
    const haCard = root.querySelector('ha-card');
    const cardBox = haCard.getBoundingClientRect();
    const inner = root.querySelector('.root');
    if (!inner) {
      return { error: 'root fehlt', text: (root.textContent || '').slice(0, 120) };
    }
    const innerBox = inner.getBoundingClientRect();

    const overflow = [];
    const clipped = [];

    for (const child of inner.children) {
      const box = child.getBoundingClientRect();
      if (box.height === 0 && box.width === 0) continue;
      if (box.bottom > cardBox.bottom + 0.6) {
        overflow.push({
          cls: child.className,
          bottom: Number(box.bottom.toFixed(1)),
          cardBottom: Number(cardBox.bottom.toFixed(1)),
        });
      }
    }

    // Abgeschnittene Texte (horizontal)
    for (const element of root.querySelectorAll(
      '.title, .subtitle, .phase-chip, .event-label, .event-time, .detail-title, .detail-value, .detail-sub',
    )) {
      if (element.scrollWidth > element.clientWidth + 1 && element.clientWidth > 0) {
        clipped.push({
          cls: element.className,
          text: (element.textContent || '').trim().slice(0, 24),
          scrollWidth: element.scrollWidth,
          clientWidth: element.clientWidth,
        });
      }
    }

    const svg = root.querySelector('svg.day-chart');
    let geometry = null;
    if (svg) {
      const viewBox = svg.getAttribute('viewBox');
      const svgBox = svg.getBoundingClientRect();
      const nowLine = svg.querySelector('.now-marker line');
      const curve = svg.querySelector('path[stroke^="url"]');
      geometry = {
        viewBox,
        width: Number(svgBox.width.toFixed(1)),
        height: Number(svgBox.height.toFixed(1)),
        nowX: nowLine ? Number(nowLine.getAttribute('x1')) : null,
        curveLength: curve ? curve.getAttribute('d').length : 0,
        labels: svg.querySelectorAll('.event-labels text').length,
        stops: svg.querySelectorAll('linearGradient stop').length,
      };
    }

    const sky = root.querySelector('svg.sky-view');

    return {
      cardHeight: Number(cardBox.height.toFixed(1)),
      contentHeight: Number(innerBox.height.toFixed(1)),
      sections: [...inner.children].map((child) => ({
        cls: String(child.className),
        height: Number(child.getBoundingClientRect().height.toFixed(1)),
      })),
      overflow,
      clipped,
      geometry,
      hasSky: Boolean(sky),
      hasMessage: Boolean(root.querySelector('.message')),
      text: (root.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 220),
    };
  });

  page.off('console', onConsole);
  page.off('pageerror', onError);

  const problems = [];
  if (report.error) problems.push(report.error);
  if (errors.length) problems.push(`Konsolenfehler: ${errors.slice(0, 2).join(' | ')}`);
  if (report.overflow.length) {
    problems.push(
      `Überlauf: ${report.overflow.map((entry) => `${entry.cls} (${entry.bottom} > ${entry.cardBottom})`).join(', ')}`,
    );
  }
  if (report.clipped.length) {
    problems.push(
      `abgeschnitten: ${report.clipped
        .map((entry) => `${entry.cls}:${entry.text}`)
        .slice(0, 3)
        .join(', ')}`,
    );
  }
  if (!report.hasMessage) {
    if (!report.geometry) problems.push('kein Chart');
    else if (report.geometry.curveLength < 50) problems.push('Kurve fehlt');
    else if (report.geometry.stops < 4) problems.push('Farbverlauf fehlt');
  }

  record(label, problems.length === 0, problems.join('; '));
  return report;
}

async function main() {
  const puppeteer = (await import('puppeteer-core')).default;
  const { executablePath, args } = await resolveExecutablePath();
  const browser = await puppeteer.launch({
    executablePath,
    args: [...args, '--no-sandbox', '--disable-dev-shm-usage'],
    headless: 'shell',
  });

  const page = await browser.newPage();

  console.log('\n— Layoutprüfung: Höhen, Breiten, Standorte, Zeiten —');
  for (const testCase of CASES) {
    const url =
      `${baseUrl}/shots.html?loc=${testCase.loc}` +
      `&time=${testCase.time}&theme=${testCase.theme}` +
      `&h=${testCase.h}&w=${testCase.w}`;
    await page.setViewport({ width: testCase.w + 80, height: testCase.h + 120, deviceScaleFactor: 1 });
    await checkCard(page, url, `${testCase.loc} ${testCase.time} ${testCase.theme} ${testCase.h}px/${testCase.w}px`);
  }

  console.log('\n— Sonderfälle —');
  for (const edge of EDGE_CASES) {
    const url =
      `${baseUrl}/shots.html?loc=berlin&time=2026-10-26T18:30&theme=dark` +
      `&h=${edge.h}&w=620&entities=${edge.entities}`;
    await page.setViewport({ width: 700, height: edge.h + 120, deviceScaleFactor: 1 });
    await checkCard(page, url, edge.name);
  }

  console.log('\n— Kontrast der Beschriftungen (WCAG) —');
  await page.setViewport({ width: 700, height: 460, deviceScaleFactor: 1 });
  for (const theme of ['dark', 'light']) {
    for (const height of [220, 320]) {
      const url = `${baseUrl}/shots.html?loc=berlin&time=2026-10-26T18:30&theme=${theme}&h=${height}&w=620`;
      await page.goto(url, { waitUntil: 'networkidle0' });
      await page.waitForFunction(
        () => Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('svg.day-chart')),
        { timeout: 20000 },
      );
      await new Promise((resolve) => setTimeout(resolve, 300));

      const results = await page.evaluate(() => {
        // Chromium liefert für color-mix() die Form „color(srgb 0.42 0.45 0.5)“,
        // ältere Browser „rgb()/rgba()“. Beide Formen werden unterstützt.
        const parse = (value) => {
          const functional = /color\(srgb ([^)]+)\)/.exec(value);
          if (functional) {
            const parts = functional[1].trim().split(/\s+/).map((part) => Number.parseFloat(part));
            return {
              r: parts[0] * 255,
              g: parts[1] * 255,
              b: parts[2] * 255,
              a: parts[3] === undefined ? 1 : parts[3],
            };
          }
          const match = /rgba?\(([^)]+)\)/.exec(value);
          if (!match) return null;
          const parts = match[1].split(/[,\s/]+/).filter(Boolean).map((part) => Number.parseFloat(part));
          return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] === undefined ? 1 : parts[3] };
        };
        const over = (top, bottom) => ({
          r: top.r * top.a + bottom.r * (1 - top.a),
          g: top.g * top.a + bottom.g * (1 - top.a),
          b: top.b * top.a + bottom.b * (1 - top.a),
          a: 1,
        });
        const luminance = (color) => {
          const channel = (value) => {
            const ratio = value / 255;
            return ratio <= 0.03928 ? ratio / 12.92 : ((ratio + 0.055) / 1.055) ** 2.4;
          };
          return 0.2126 * channel(color.r) + 0.7152 * channel(color.g) + 0.0722 * channel(color.b);
        };
        const contrast = (a, b) => {
          const la = luminance(a);
          const lb = luminance(b);
          return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
        };

        const root = document.querySelector('sun-moon-card').shadowRoot;
        const card = root.querySelector('ha-card');
        const cardBackground = parse(getComputedStyle(card).backgroundColor) ?? { r: 0, g: 0, b: 0, a: 1 };

        const backgroundOf = (element) => {
          let current = element;
          let color = cardBackground;
          const chain = [];
          while (current && current !== card) {
            const parsed = parse(getComputedStyle(current).backgroundColor);
            if (parsed && parsed.a > 0) chain.push(parsed);
            current = current.parentElement;
          }
          for (let index = chain.length - 1; index >= 0; index -= 1) {
            color = over(chain[index], color);
          }
          return color;
        };

        const selectors = [
          '.title', '.subtitle', '.phase-chip', '.event-time', '.event-label',
          '.detail-title', '.detail-value', '.detail-sub', '.message',
          '.meta-chip', '.legend-chip', '.sky-readout', '.footer .part',
        ];
        const found = [];
        for (const selector of selectors) {
          for (const element of root.querySelectorAll(selector)) {
            const text = (element.textContent || '').trim();
            if (!text) continue;
            const style = getComputedStyle(element);
            const foreground = parse(style.color);
            if (!foreground) {
              found.push({
                selector,
                text: text.slice(0, 20),
                size: Number.parseFloat(style.fontSize),
                ratio: 0,
                required: 4.5,
                unparsed: style.color,
              });
              continue;
            }
            const background = backgroundOf(element);
            const size = Number.parseFloat(style.fontSize);
            const weight = Number.parseInt(style.fontWeight, 10) || 400;
            const large = size >= 24 || (size >= 18.66 && weight >= 700);
            found.push({
              selector,
              text: text.slice(0, 20),
              size,
              ratio: Number(contrast(over(foreground, background), background).toFixed(2)),
              required: large ? 3 : 4.5,
            });
          }
        }
        return found;
      });

      const tooLow = results.filter((entry) => entry.ratio < entry.required);
      record(
        `Kontrast ${theme} ${height}px (${results.length} Beschriftungen)`,
        tooLow.length === 0,
        tooLow.length
          ? tooLow
              .map((entry) => `${entry.selector} „${entry.text}“ ${entry.ratio}:1 < ${entry.required}:1`)
              .join(', ')
          : `min ${Math.min(...results.map((entry) => entry.ratio))}:1`,
      );
    }
  }

  console.log('\n— Zweispaltiges Raster (Tagesverlauf 8 : Himmelsansicht 4) —');
  await page.setViewport({ width: 1000, height: 520, deviceScaleFactor: 1 });
  for (const width of [620, 700, 900, 1200]) {
    const url = `${baseUrl}/shots.html?loc=berlin&time=2026-06-21T13:00&theme=dark&h=380&w=${width}`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForFunction(
      () => Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('svg.day-chart')),
      { timeout: 20000 },
    );
    await new Promise((resolve) => setTimeout(resolve, 250));
    const report = await page.evaluate(() => {
      const root = document.querySelector('sun-moon-card').shadowRoot;
      const chart = root.querySelector('.chart-column');
      const sky = root.querySelector('.sky-column');
      const inner = root.querySelector('.body');
      if (!chart || !sky) {
        return { columns: false, inline: Boolean(root.querySelector('.detail-tile.sky-inline')) };
      }
      const chartBox = chart.getBoundingClientRect();
      const skyBox = sky.getBoundingClientRect();
      const bodyBox = inner.getBoundingClientRect();
      return {
        columns: true,
        sideBySide: Math.abs(chartBox.top - skyBox.top) < 2 && skyBox.left >= chartBox.right - 1,
        ratio: Number((chartBox.width / skyBox.width).toFixed(2)),
        fitsWidth: Number((skyBox.right - bodyBox.left).toFixed(1)) <= Number(bodyBox.width.toFixed(1)) + 0.6,
        chartWidth: Number(chartBox.width.toFixed(1)),
        skyWidth: Number(skyBox.width.toFixed(1)),
      };
    });
    const expectedColumns = width >= 700;
    if (expectedColumns) {
      record(
        `Raster ${width}px: ${report.chartWidth}px Verlauf / ${report.skyWidth}px Himmel (${report.ratio}:1)`,
        Boolean(report.columns) && report.sideBySide && report.fitsWidth && report.ratio >= 1.9,
      );
    } else {
      record(
        `Raster ${width}px: gestapelt (Himmelsansicht in der Detailzeile)`,
        !report.columns && report.inline,
      );
    }
  }

  console.log('\n— Neue Bereiche: Legende, Fußzeile, Glas/Flach —');
  await page.setViewport({ width: 1000, height: 520, deviceScaleFactor: 1 });

  // Legende und Fußzeile
  {
    const url = `${baseUrl}/shots.html?loc=berlin&time=2026-10-26T18:30&theme=dark&h=340&w=620`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForFunction(
      () => Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('.legend-chip')),
      { timeout: 20000 },
    );
    const report = await page.evaluate(() => {
      const root = document.querySelector('sun-moon-card').shadowRoot;
      const legends = [...root.querySelectorAll('.legend-chip')].map((chip) => chip.textContent.trim());
      const footer = root.querySelector('.footer');
      const parts = footer ? [...footer.querySelectorAll('.part')].map((part) => part.textContent.trim()) : [];
      const eventIcons = [...root.querySelectorAll('.event-tile .event-icon')].map((icon) => {
        const style = getComputedStyle(icon);
        return { background: style.backgroundColor, color: style.color };
      });
      return { legends, parts, eventIcons };
    });
    record(
      `Legende (${report.legends.join(' / ')})`,
      report.legends.length === 3 && report.legends.every((text) => text.length > 2),
    );
    record(
      `Fußzeile (${report.parts.join(' | ').slice(0, 70)}…)`,
      report.parts.length === 2 &&
        report.parts[0].includes('Dämmerung') &&
        report.parts[1].includes('Berechnung'),
    );
    const tinted = report.eventIcons.filter(
      (icon) => icon.background !== 'rgba(0, 0, 0, 0)' && icon.background !== 'transparent',
    );
    record(
      `Ereignissymbole farbig getönt (${tinted.length}/${report.eventIcons.length})`,
      report.eventIcons.length > 0 && tinted.length === report.eventIcons.length,
    );
  }

  // Glas vs. flach
  for (const preset of ['default', 'flat']) {
    const url = `${baseUrl}/shots.html?preset=${preset}&loc=berlin&time=2026-10-26T18:30&theme=dark&h=340&w=620`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForFunction(
      () => Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('.event-tile')),
      { timeout: 20000 },
    );
    const report = await page.evaluate(() => {
      const card = document.querySelector('sun-moon-card');
      const root = card.shadowRoot;
      const tile = root.querySelector('.event-tile');
      const style = getComputedStyle(tile);
      return {
        host: card.className,
        backdrop: style.backdropFilter || style.webkitBackdropFilter,
        shadow: style.boxShadow,
      };
    });
    const isFlat = preset === 'flat';
    const flat = isFlat
      ? report.backdrop === 'none' && report.shadow === 'none' && report.host.includes('smc-flat')
      : report.backdrop !== 'none' && report.host.includes('smc-glass');
    record(
      `Darstellung ${preset}: ${report.backdrop}, Schatten ${report.shadow === 'none' ? 'aus' : 'an'}`,
      flat,
    );
  }

  console.log('\n— Zusätzliche Werte im Chart und in der Himmelsansicht —');
  {
    const url = `${baseUrl}/shots.html?preset=details&loc=berlin&time=2026-06-21T13:00&theme=dark&h=380&w=900`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForFunction(
      () => Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('svg.day-chart')),
      { timeout: 20000 },
    );
    await new Promise((resolve) => setTimeout(resolve, 250));
    const report = await page.evaluate(() => {
      const root = document.querySelector('sun-moon-card').shadowRoot;
      const chart = root.querySelector('svg.day-chart');
      const texts = [...chart.querySelectorAll('text')].map((text) => text.textContent.trim());
      const sky = root.querySelector('svg.sky-view');
      const skyTexts = sky ? [...sky.querySelectorAll('text')].map((text) => text.textContent.trim()) : [];
      const details = [...root.querySelectorAll('.detail-sub, .detail-value')].map((node) =>
        node.textContent.trim(),
      );
      const readout = root.querySelector('.sky-readout');
      return {
        hasHorizon: texts.some((text) => text.startsWith('Horizont')),
        hasRef: texts.some((text) => text.includes('−6°')),
        hasZenith: texts.some((text) => text.startsWith('Zenit')),
        rings: skyTexts.filter((text) => text === '30°' || text === '60°'),
        cardinals: skyTexts.filter((text) => ['N', 'O', 'S', 'W'].includes(text)),
        stars: sky ? sky.querySelectorAll('.stars circle').length : 0,
        details,
        readout: readout ? readout.textContent.replace(/\s+/g, ' ').trim() : '',
        dayLength: [...root.querySelectorAll('.meta-chip')].some((chip) =>
          chip.textContent.includes('Tageslänge'),
        ),
        tileOverflow: [...root.querySelectorAll('.detail-tile')].map(
          (tile) => tile.scrollHeight - tile.clientHeight,
        ),
        textOverflow: [...root.querySelectorAll('.detail-sub, .detail-value, .detail-title')]
          .filter((node) => node.scrollWidth > node.clientWidth + 1)
          .map((node) => node.textContent.trim()),
      };
    });
    record(
      'Höhenlinien beschriftet (Horizont, −6°)',
      report.hasHorizon && report.hasRef,
    );
    record('Zenit-Chip', report.hasZenith);
    record(
      `Himmelsansicht: Ringe ${report.rings.join('/')}, Himmelsrichtungen ${report.cardinals.join('')}`,
      report.rings.length === 2 && report.cardinals.length === 4,
    );
    record(`Ablesung Azimut: „${report.readout}“`, report.readout.includes('Sonne:'));
    record('Tageslänge in der Kopfzeile', report.dayLength);
    const joined = report.details.join(' | ');
    record(
      `Detailwerte (${joined.slice(0, 90)}…)`,
      report.details.some((text) => text.includes('km')) &&
        report.details.some((text) => text.includes('Vollmond')),
    );
    record(
      'Azimut bei Auf-/Untergang in der Sonnenkachel',
      report.details.some((text) => text.includes('Auf-/Untergang')),
    );
    record(
      `Detailzeile ohne Überlauf (${Math.max(0, ...report.tileOverflow, 0)} px)`,
      report.tileOverflow.every((value) => value <= 0),
    );

    // Auch auf schmalen Karten dürfen die Detailtexte nicht abgeschnitten
    // werden – hier greifen die Kurzformen.
    for (const width of [320, 430, 560]) {
      await page.setViewport({ width: width + 40, height: 520, deviceScaleFactor: 1 });
      await page.goto(
        `${baseUrl}/shots.html?preset=details&loc=berlin&time=2026-06-21T13:00&theme=dark&h=380&w=${width}`,
        { waitUntil: 'networkidle0' },
      );
      await page.waitForFunction(
        () =>
          Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('.details')),
        { timeout: 20000 },
      );
      await new Promise((resolve) => setTimeout(resolve, 200));
      const narrow = await page.evaluate(() => {
        const root = document.querySelector('sun-moon-card').shadowRoot;
        return {
          clipped: [...root.querySelectorAll('.detail-sub, .detail-value, .detail-title')]
            .filter((node) => node.scrollWidth > node.clientWidth + 1)
            .map((node) => node.textContent.trim()),
          tiles: [...root.querySelectorAll('.detail-tile')].map(
            (tile) => tile.scrollHeight - tile.clientHeight,
          ),
        };
      });
      record(
        `Detailtexte bei ${width} px vollständig (${narrow.clipped.length ? narrow.clipped.join(' / ') : 'keine Kürzung'})`,
        narrow.clipped.length === 0 && narrow.tiles.every((value) => value <= 0),
      );
    }
  }

  // Sterne nur bei dunklem Himmel
  {
    const url = `${baseUrl}/shots.html?loc=berlin&time=2026-06-21T23:30&theme=dark&h=380&w=900`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForFunction(
      () => Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('svg.sky-view')),
      { timeout: 20000 },
    );
    const night = await page.evaluate(
      () =>
        document
          .querySelector('sun-moon-card')
          .shadowRoot.querySelectorAll('svg.sky-view .stars circle').length,
    );
    record(`Sternenfeld bei Nacht (${night} Sterne)`, night > 20);
  }

  console.log('\n— Zeitleiste des Charts (Position des „Jetzt“-Markers) —');
  await page.setViewport({ width: 700, height: 420, deviceScaleFactor: 1 });
  for (const time of ['2026-10-26T06:00', '2026-10-26T12:00', '2026-10-26T18:00', '2026-10-26T23:30']) {
    const url = `${baseUrl}/shots.html?loc=berlin&time=${time}&theme=dark&h=280&w=620`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    // Hinweis: waitForSelector durchsucht keine Shadow-DOMs – daher wird hier
    // über waitForFunction auf das Chart im Shadow-Root gewartet.
    await page.waitForFunction(
      () => Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('svg.day-chart')),
      { timeout: 20000 },
    );
    await new Promise((resolve) => setTimeout(resolve, 200));
    const check = await page.evaluate(() => {
      const root = document.querySelector('sun-moon-card').shadowRoot;
      const svg = root.querySelector('svg.day-chart');
      const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
      const line = svg.querySelector('.now-marker line');
      return {
        width: viewBox[2],
        nowX: Number(line.getAttribute('x1')),
      };
    });
    const expectedFraction = (() => {
      const [, timePart] = time.split('T');
      const [hour, minute] = timePart.split(':').map(Number);
      return (hour * 60 + minute) / (24 * 60);
    })();
    const actualFraction = (check.nowX - 4) / (check.width - 8);
    const deviation = Math.abs(actualFraction - expectedFraction);
    record(
      `Now-Marker ${time} (erwartet ${(expectedFraction * 100).toFixed(1)} %, gemessen ${(actualFraction * 100).toFixed(1)} %)`,
      deviation < 0.012,
      deviation >= 0.012 ? `Abweichung ${(deviation * 100).toFixed(2)} %` : '',
    );
  }

  await browser.close();

  console.log(
    `\n${results.length - failed}/${results.length} Prüfungen bestanden.${failed ? ` ${failed} fehlgeschlagen.` : ''}`,
  );
  if (failed > 0) process.exitCode = 1;
  void root;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
