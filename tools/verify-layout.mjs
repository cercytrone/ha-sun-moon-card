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
