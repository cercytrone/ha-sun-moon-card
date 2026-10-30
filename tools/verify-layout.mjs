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

const onErrorUnused = () => {};

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

  
/** Relative Helligkeit einer Farbe nach WCAG. */
function luminance({ r, g, b }) {
  const channel = (value) => {
    const ratio = value / 255;
    return ratio <= 0.03928 ? ratio / 12.92 : ((ratio + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** Kontrast zweier Farben nach WCAG; die Vordergrundfarbe darf Deckkraft haben. */
function contrastInNode(foreground, background) {
  const alpha = foreground.a === undefined ? 1 : foreground.a;
  const mixed = {
    r: foreground.r * alpha + background.r * (1 - alpha),
    g: foreground.g * alpha + background.g * (1 - alpha),
    b: foreground.b * alpha + background.b * (1 - alpha),
  };
  const a = luminance(mixed);
  const b = luminance(background);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

/**
 * Bestimmt die tatsächliche Hintergrundfarbe hinter Beschriftungen.
 *
 * Eine Berechnung aus den CSS-Schichten wird dem Chart nicht gerecht: Dort
 * liegen Farbverläufe, Flächen und Glühen unter dem Text. Deshalb wird die
 * Karte fotografiert und die Farbe im Feld des Textes gemessen. Der
 * häufigste Farbwert ist der Hintergrund – liegt er zu nah an der
 * Textfarbe (sehr große Schrift), wird der nächsthäufige Wert genommen.
 */
async function sampleBackgrounds(page, shot, rects) {
  return page.evaluate(
    async (data, boxes) => {
      const image = new Image();
      image.src = `data:image/png;base64,${data}`;
      await image.decode();
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      context.drawImage(image, 0, 0);

      const distance = (a, b) =>
        Math.abs(a.r - b.r) + Math.abs(a.g - b.g) + Math.abs(a.b - b.b);

      return boxes.map((box) => {
        const x = Math.max(0, Math.round(box.rect.x) - 1);
        const y = Math.max(0, Math.round(box.rect.y) - 1);
        const width = Math.min(canvas.width - x, Math.round(box.rect.width) + 2);
        const height = Math.min(canvas.height - y, Math.round(box.rect.height) + 2);
        if (width <= 0 || height <= 0) return null;

        const pixels = context.getImageData(x, y, width, height).data;
        const counts = new Map();
        for (let i = 0; i < pixels.length; i += 4) {
          const key = ((pixels[i] >> 3) << 10) | ((pixels[i + 1] >> 3) << 5) | (pixels[i + 2] >> 3);
          counts.set(key, (counts.get(key) ?? 0) + 1);
        }
        const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]);
        if (ranked.length === 0) return null;
        const decode = (key) => ({
          r: ((key >> 10) & 31) * 8 + 4,
          g: ((key >> 5) & 31) * 8 + 4,
          b: (key & 31) * 8 + 4,
        });
        const total = width * height;
        let chosen = decode(ranked[0][0]);
        for (const [key, count] of ranked) {
          const color = decode(key);
          // Genug Fläche und klar verschieden von der Textfarbe?
          if (count / total > 0.2 && distance(color, box.foreground) > 90) {
            chosen = color;
            break;
          }
        }
        return chosen;
      });
    },
    shot,
    rects,
  );
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
          // Beschriftungen im Chart und in der Himmelsansicht sind SVG-Text
          // und damit über `fill` gefärbt, nicht über `color`.
          'svg.day-chart text', 'svg.sky-view text',
        ];
        const found = [];
        for (const selector of selectors) {
          for (const element of root.querySelectorAll(selector)) {
            const text = (element.textContent || '').trim();
            if (!text) continue;
            const style = getComputedStyle(element);
            const isSvg = element.ownerSVGElement !== null && element.ownerSVGElement !== undefined;
            const foreground = (isSvg ? parse(style.fill) : null) ?? parse(style.color);
            if (!foreground) {
              found.push({
                selector,
                text: text.slice(0, 20),
                size: Number.parseFloat(style.fontSize),
                ratio: 0,
                required: 4.5,
                unparsed: isSvg ? style.fill : style.color,
                rect: element.getBoundingClientRect().toJSON(),
                foreground: null,
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
              layers: Number(contrast(over(foreground, background), background).toFixed(2)),
              ratio: Number(contrast(over(foreground, background), background).toFixed(2)),
              required: large ? 3 : 4.5,
              rect: element.getBoundingClientRect().toJSON(),
              foreground,
            });
          }
        }
        return found;
      });

      // Echte Messung: Hintergrund aus dem gerenderten Bild.
      const shot = await page.screenshot({ encoding: 'base64' });
      const samples = await sampleBackgrounds(page, shot, results);
      results.forEach((entry, index) => {
        const background = samples[index];
        if (!background || !entry.foreground) return;
        entry.measured = Number(contrastInNode(entry.foreground, background).toFixed(2));
        entry.behind = `${Math.round(background.r)},${Math.round(background.g)},${Math.round(background.b)}`;
      });
      const measured = results.filter((entry) => typeof entry.measured === 'number');
      const tooLow = measured.filter((entry) => entry.measured < entry.required);
      record(
        `Kontrast ${theme} ${height}px gemessen (${measured.length} Beschriftungen)`,
        tooLow.length === 0 && measured.length > 0,
        tooLow.length
          ? tooLow
              .map(
                (entry) =>
                  `${entry.selector} „${entry.text}“ ${entry.measured}:1 < ${entry.required}:1 (auf ${entry.behind})`,
              )
              .join(' | ')
          : `min ${Math.min(...measured.map((entry) => entry.measured))}:1`,
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

  // Horizontstil: Fläche zwischen Kurve und Horizont statt bis zum Rand
  {
    const url = `${baseUrl}/shots.html?preset=horizon&loc=berlin&time=2026-10-26T18:30&theme=dark&h=340&w=620`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForFunction(
      () =>
        Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('svg.day-chart')),
      { timeout: 20000 },
    );
    const report = await page.evaluate(() => {
      const svg = document.querySelector('sun-moon-card').shadowRoot.querySelector('svg.day-chart');
      const texts = [...svg.querySelectorAll('g > text')];
      const horizonNode = texts.find((node) => (node.textContent ?? '').includes('Horizont'));
      const line = horizonNode?.parentElement.querySelector('line');
      const area = [...svg.querySelectorAll('path')].find((path) =>
        (path.getAttribute('fill') ?? '').includes('-area'),
      );
      const numbers = (area?.getAttribute('d') ?? '').match(/-?\d+(?:\.\d+)?/g)?.map(Number) ?? [];
      const sky = [...svg.querySelectorAll('path')].find((path) =>
        (path.getAttribute('fill') ?? '').includes('-sky'),
      );
      return {
        horizonY: line ? Number(line.getAttribute('y1')) : null,
        baseline: numbers.length ? numbers[numbers.length - 1] : null,
        dash: line ? getComputedStyle(line).strokeDasharray : null,
        hasSky: Boolean(sky),
        moonOpacity: svg.querySelector('path.moon-curve')?.getAttribute('opacity') ?? null,
      };
    });
    record(
      `Horizontstil: Fläche endet am Horizont (${report.baseline} vs. ${report.horizonY}), ohne Himmelsverlauf, Mond gedämpft`,
      report.horizonY !== null &&
        Math.abs((report.baseline ?? -1) - report.horizonY) < 0.5 &&
        report.hasSky === false &&
        report.moonOpacity === '0.5' &&
        String(report.dash).startsWith('999'),
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

  console.log('\n— Minimalvariante: Zeitstrahl unter 100 px —');
  await page.setViewport({ width: 700, height: 420, deviceScaleFactor: 1 });
  for (const height of [24, 40, 48, 96]) {
    const errors = [];
    const onConsole = (message) => {
      if (message.type() === 'error') errors.push(message.text());
    };
    page.on('console', onConsole);
    page.on('pageerror', onErrorUnused);
    const url = `${baseUrl}/shots.html?preset=minimalmode&loc=berlin&time=2026-10-26T12:00&theme=dark&h=${height}&w=620`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForFunction(
      () => Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('svg.day-chart')),
      { timeout: 20000 },
    );
    await new Promise((resolve) => setTimeout(resolve, 250));
    const report = await page.evaluate(() => {
      const card = document.querySelector('sun-moon-card');
      const root = card.shadowRoot;
      const haCard = root.querySelector('ha-card');
      const cardBox = haCard.getBoundingClientRect();
      const svg = root.querySelector('svg.day-chart');
      const svgBox = svg.getBoundingClientRect();
      const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
      const line = svg.querySelector('.now-marker line');
      const sun = svg.querySelector('.now-sun circle');
      return {
        cardHeight: Math.round(cardBox.height * 10) / 10,
        svgHeight: Math.round(svgBox.height * 10) / 10,
        distanceToBottom: Math.round((cardBox.bottom - svgBox.bottom) * 10) / 10,
        sections: {
          header: root.querySelectorAll('.header').length,
          events: root.querySelectorAll('.event-tile').length,
          details: root.querySelectorAll('.detail-tile').length,
          footer: root.querySelectorAll('.footer').length,
          legend: root.querySelectorAll('.legend-chip').length,
          sky: root.querySelectorAll('svg.sky-view').length,
          rootChildren: root.querySelector('.root').children.length,
        },
        decorations: {
          grid: svg.querySelectorAll('g[clip-path] > line').length,
          labels: svg.querySelectorAll('.event-labels').length,
          zenith: svg.querySelectorAll('.zenith-chip').length,
          moonCurve: svg.querySelectorAll('.moon-curve').length,
          referenceLines: svg.querySelectorAll('g[clip-path] g > line').length,
        },
        markers: svg.querySelectorAll('.event-markers > g').length,
        nowX: Number(line.getAttribute('x1')),
        width: viewBox[2],
        plotBottom: viewBox[3] - 2,
        sun: sun
          ? {
              cy: Number(sun.getAttribute('cy')),
              r: Number(sun.getAttribute('r')),
            }
          : null,
        role: haCard.getAttribute('role'),
        aria: haCard.getAttribute('aria-label') ?? '',
        times: (() => {
          const row = root.querySelector('.minimal-times');
          if (!row) return null;
          const text = (selector) =>
            row.querySelector(selector)?.textContent?.replace(/\s+/g, ' ').trim() ?? null;
          return {
            height: Math.round(row.getBoundingClientRect().height * 10) / 10,
            rise: text('.minimal-time.rise'),
            zenith: text('.minimal-time.zenith'),
            set: text('.minimal-time.set'),
            titles: [
              row.querySelector('.minimal-time.rise')?.getAttribute('title') ?? '',
              row.querySelector('.minimal-time.zenith')?.getAttribute('title') ?? '',
              row.querySelector('.minimal-time.set')?.getAttribute('title') ?? '',
            ],
          };
        })(),
      };
    });
    page.off('console', onConsole);
    page.off('pageerror', onErrorUnused);

    const label = `Minimal ${height} px`;
    const expectedRow = height >= 36 ? 12 : 0;
    record(
      `${label}: Kartenhöhe eingehalten (${report.cardHeight} px)`,
      Math.abs(report.cardHeight - height) <= 0.6,
    );
    record(
      `${label}: Verlauf füllt die Karte (${report.svgHeight} px, ${report.distanceToBottom} px Rand)`,
      report.svgHeight === height - 8 - expectedRow &&
        Math.abs(report.distanceToBottom - 4) <= 0.6,
    );
    record(
      expectedRow
        ? `${label}: Zeile mit Auf-/Untergang und Zenit (${report.times?.height ?? 0} px)`
        : `${label}: keine Zeile unter 36 px`,
      expectedRow
        ? report.times !== null && Math.abs(report.times.height - expectedRow) <= 0.6
        : report.times === null,
    );
    if (expectedRow) {
      const zeit = report.times ?? { rise: '', zenith: '', set: '', titles: [] };
      record(
        `${label}: Aufgang links, Zenit mittig, Untergang rechts (${zeit.rise} | ${zeit.zenith} | ${zeit.set})`,
        /↑\s?\d{1,2}:\d{2}/.test(zeit.rise ?? '') &&
          /\d{1,2}:\d{2}/.test(zeit.zenith ?? '') &&
          (zeit.zenith ?? '').includes('Zenit') &&
          /↓\s?\d{1,2}:\d{2}/.test(zeit.set ?? ''),
      );
      record(
        `${label}: Tooltips nennen die Ereignisse`,
        (zeit.titles ?? []).some((title) => title.includes('Sonnenaufgang')) &&
          (zeit.titles ?? []).some((title) => title.includes('Sonnenuntergang')) &&
          (zeit.titles ?? []).some((title) => title.includes('Zenit')),
      );
    }
    record(
      `${label}: keine weiteren Bereiche (${JSON.stringify(report.sections)})`,
      report.sections.header === 0 &&
        report.sections.events === 0 &&
        report.sections.details === 0 &&
        report.sections.footer === 0 &&
        report.sections.legend === 0 &&
        report.sections.sky === 0 &&
        // Wurzel: Zeitzeile (falls sichtbar) und Zeitstrahl, mehr nicht.
        report.sections.rootChildren === (expectedRow ? 2 : 1),
    );
    record(
      `${label}: Zeitstrahl abgespeckt (Raster ${report.decorations.grid}, Beschriftung ${report.decorations.labels}, Zenit ${report.decorations.zenith}, Mondgang ${report.decorations.moonCurve}, Höhenlinien ${report.decorations.referenceLines})`,
      report.decorations.grid === 0 &&
        report.decorations.labels === 0 &&
        report.decorations.zenith === 0 &&
        report.decorations.moonCurve === 0 &&
        report.decorations.referenceLines <= 1,
    );
    record(
      `${label}: Auf- und Untergang markiert (${report.markers} Marken)`,
      report.markers >= 2,
    );
    const fraction = (report.nowX - 2) / (report.width - 4);
    record(
      `${label}: Now-Marker bei 12:00 (gemessen ${(fraction * 100).toFixed(1)} %)`,
      Math.abs(fraction - 0.5) < 0.012,
    );
    record(
      `${label}: Sonnenmarke im Verlauf (${report.sun ? `${report.sun.cy} ± ${report.sun.r}` : 'fehlt'})`,
      Boolean(report.sun) &&
        report.sun.cy - report.sun.r >= 1 &&
        report.sun.cy + report.sun.r <= report.plotBottom + 1,
    );
    record(
      `${label}: bedienbar und für Screenreader beschrieben`,
      report.role === 'button' && report.aria.includes('Sonnenaufgang'),
    );
    record(
      `${label}: keine Konsolenfehler`,
      errors.length === 0,
      errors.slice(0, 2).join(' | '),
    );
  }

  // Zeitangaben getrennt abschalten
  {
    const variants = [
      {
        preset: 'minimalmode_notimes',
        name: 'nur Zenit',
        rise: false,
        zenith: true,
        set: false,
        row: 12,
      },
      {
        preset: 'minimalmode_nozenith',
        name: 'nur Auf-/Untergang',
        rise: true,
        zenith: false,
        set: true,
        row: 12,
      },
      {
        preset: 'minimalmode_bare',
        name: 'beide Zeitangaben aus',
        rise: false,
        zenith: false,
        set: false,
        row: 0,
      },
    ];
    for (const variant of variants) {
      const query = `${baseUrl}/shots.html?preset=${variant.preset}&loc=berlin&time=2026-10-26T12:00&theme=dark&h=48&w=620`;
      await page.goto(query, { waitUntil: 'networkidle0' });
      await page.waitForFunction(
        () => Boolean(document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('svg.day-chart')),
        { timeout: 20000 },
      );
      await new Promise((resolve) => setTimeout(resolve, 250));
      const report = await page.evaluate(() => {
        const root = document.querySelector('sun-moon-card').shadowRoot;
        const row = root.querySelector('.minimal-times');
        const wrap = root.querySelector('.chart-wrap');
        return {
          row: row ? Math.round(row.getBoundingClientRect().height) : 0,
          rise: Boolean(row?.querySelector('.minimal-time.rise')),
          zenith: Boolean(row?.querySelector('.minimal-time.zenith')),
          set: Boolean(row?.querySelector('.minimal-time.set')),
          chartHeight: wrap ? Math.round(wrap.getBoundingClientRect().height) : 0,
        };
      });
      record(
        `Minimal: ${variant.name} (Zeile ${report.row} px, Verlauf ${report.chartHeight} px)`,
        report.rise === variant.rise &&
          report.zenith === variant.zenith &&
          report.set === variant.set &&
          report.row === variant.row &&
          report.chartHeight === 48 - 8 - report.row,
      );
    }
  }

  // Sonnenmarke der Minimalvariante
  {
    const radius = async (url) => {
      await page.goto(url, { waitUntil: 'networkidle0' });
      await page.waitForFunction(
        () =>
          Boolean(
            document.querySelector('sun-moon-card')?.shadowRoot?.querySelector('svg.day-chart'),
          ),
        { timeout: 20000 },
      );
      await new Promise((resolve) => setTimeout(resolve, 250));
      return page.evaluate(() => {
        const svg = document
          .querySelector('sun-moon-card')
          .shadowRoot.querySelector('svg.day-chart');
        return Number(svg.querySelector('.now-sun circle').getAttribute('r'));
      });
    };
    const common = 'loc=berlin&time=2026-10-26T12:00&theme=dark&w=620';
    const tiny = await radius(`${baseUrl}/shots.html?preset=minimalmode&${common}&h=24`);
    const strip = await radius(`${baseUrl}/shots.html?preset=minimalmode&${common}&h=96`);
    const compact = await radius(`${baseUrl}/shots.html?preset=compact&${common}&h=160`);
    const full = await radius(`${baseUrl}/shots.html?${common}&h=340`);
    const big = await radius(`${baseUrl}/shots.html?preset=bigsun&${common}&h=340`);
    record(
      `Sonnenmarke in Minimal-, Kompakt- und Volldarstellung gleich groß (${strip} / ${compact} / ${full} px)`,
      strip === compact && compact === full && full === 6,
    );
    record(`Sonnenmarke folgt der Einstellung (12 px → ${big} px)`, big === 12);
    record(`Minimal: Sonnenmarke auch bei 24 px erkennbar (${tiny} px)`, tiny >= 2.8);
  }

  // Klick öffnet die vollständige Variante im Overlay
  {
    const url = `${baseUrl}/shots.html?preset=minimalmode&loc=berlin&time=2026-10-26T12:00&theme=dark&h=48&w=620`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForSelector('sun-moon-card');
    await new Promise((resolve) => setTimeout(resolve, 350));
    await page.click('sun-moon-card');
    await new Promise((resolve) => setTimeout(resolve, 500));
    const open = await page.evaluate(() => {
      const overlay = document.querySelector('.smc-popup');
      if (!overlay) return { open: false };
      const card = overlay.querySelector('sun-moon-card');
      const inner = card?.shadowRoot?.querySelector('ha-card');
      return {
        open: true,
        dialog:
          overlay.getAttribute('role') === 'dialog' &&
          overlay.getAttribute('aria-modal') === 'true',
        height: inner ? Number.parseFloat(getComputedStyle(inner).height) : 0,
        header: Boolean(card?.shadowRoot?.querySelector('.header')),
        events: card?.shadowRoot?.querySelectorAll('.event-tile').length ?? 0,
        minimal: Boolean(card?.shadowRoot?.querySelector('ha-card.smc-minimal')),
        closeButton: Boolean(overlay.querySelector('button')),
        focus: document.activeElement?.tagName ?? '',
        maxWidth: overlay.querySelector('div')?.style.maxWidth ?? '',
      };
    });
    record(
      `Minimal: Klick öffnet die vollständige Karte (${open.height} px, ${open.events} Ereignisse)`,
      open.open && open.header && open.events >= 2 && open.height === 460 && !open.minimal,
    );
    record(
      `Minimal: Overlay in der eingestellten Breite (max ${open.maxWidth})`,
      open.maxWidth === '720px',
    );
    record(
      'Minimal: Overlay ist ein Dialog mit Schließen-Knopf und Fokus',
      open.dialog && open.closeButton && open.focus === 'BUTTON',
    );
    await page.keyboard.press('Escape');
    await new Promise((resolve) => setTimeout(resolve, 300));
    const closed = await page.evaluate(() => ({
      overlays: document.querySelectorAll('.smc-popup').length,
      focus: document.activeElement?.tagName ?? '',
    }));
    record(
      `Minimal: Escape schließt das Overlay (Fokus zurück auf ${closed.focus})`,
      closed.overlays === 0 && closed.focus === 'SUN-MOON-CARD',
    );
  }

  // Overlay in eingestellter Größe
  {
    // Breit genug, damit das 900 px breite Overlay nicht am Fenster klebt.
    await page.setViewport({ width: 1040, height: 900, deviceScaleFactor: 1 });
    const url = `${baseUrl}/shots.html?preset=minimalmode_bigpopup&loc=berlin&time=2026-10-26T12:00&theme=dark&h=48&w=620`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForSelector('sun-moon-card');
    await new Promise((resolve) => setTimeout(resolve, 350));
    await page.click('sun-moon-card');
    await new Promise((resolve) => setTimeout(resolve, 500));
    const popup = await page.evaluate(() => {
      const overlay = document.querySelector('.smc-popup');
      if (!overlay) return { open: false };
      const panel = overlay.querySelector('div');
      const card = overlay.querySelector('sun-moon-card');
      const inner = card?.shadowRoot?.querySelector('ha-card');
      return {
        open: true,
        maxWidth: panel?.style.maxWidth ?? '',
        height: inner ? Number.parseFloat(getComputedStyle(inner).height) : 0,
        columns: Boolean(card?.shadowRoot?.querySelector('.body.columns')),
      };
    });
    record(
      `Minimal: Overlay 900 × 600 px (gemessen ${popup.maxWidth} / ${popup.height} px, zweispaltig: ${popup.columns})`,
      popup.open && popup.maxWidth === '900px' && popup.height === 600 && popup.columns,
    );
    await page.keyboard.press('Escape');
    await new Promise((resolve) => setTimeout(resolve, 250));
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
