#!/usr/bin/env node
/**
 * Screenshot-Werkzeug für die Dokumentation.
 *
 * Erzeugt echte Bildschirmaufnahmen der Karte in einem headless Chromium.
 * Grundlage ist die Entwicklungsseite (`npm run dev`), sodass die Aufnahmen
 * exakt dem entsprechen, was später in Home Assistant dargestellt wird.
 *
 * Voraussetzungen (nur für die Dokumentation, nicht für den Betrieb der Karte):
 *
 *   npm install --no-save puppeteer-core @sparticuz/chromium
 *
 *   # Variante A: mitgeliefertes Chromium von @sparticuz/chromium
 *   node tools/screenshot.mjs
 *
 *   # Variante B: vorhandenes Chrome/Chromium verwenden
 *   CHROME_PATH=/usr/bin/google-chrome node tools/screenshot.mjs
 *
 *   # Variante C: normal per `npm i -D puppeteer` installiertes Chromium
 *   USE_PUPPETEER=1 node tools/screenshot.mjs
 *
 * Die Ausgaben werden nach docs/ geschrieben.
 */

import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.join(root, 'docs');
const baseUrl = process.env.DEV_URL ?? 'http://127.0.0.1:5173';
const deviceScaleFactor = Number(process.env.SCALE ?? 2);

/**
 * Liste der Aufnahmen.
 *  - url:       relative URL der Entwicklungsseite
 *  - selector:  CSS-Selektor des aufzunehmenden Elements
 *  - file:      Zieldatei in docs/
 */
const SHOTS = [
  {
    name: 'Standardansicht (Dark)',
    url: '/shots.html?preset=default&loc=berlin&time=2026-10-26T18:30&theme=dark&w=620&h=340',
    selector: 'sun-moon-card',
    file: 'screenshot-default-dark.png',
  },
  {
    name: 'Standardansicht (Light)',
    url: '/shots.html?preset=default&loc=berlin&time=2026-10-26T18:30&theme=light&w=620&h=340',
    selector: 'sun-moon-card',
    file: 'screenshot-default-light.png',
  },
  {
    name: 'Kartenhöhen 160 / 220 / 280 / 360 px',
    url: '/?loc=berlin&time=2026-10-26T18:30&theme=dark',
    selector: '#app section:nth-of-type(1) .grid',
    file: 'screenshot-heights.png',
    viewport: { width: 1400, height: 1000 },
  },
  {
    name: 'Schmale Karten (Smartphone)',
    url: '/?loc=berlin&time=2026-10-26T18:30&theme=dark',
    selector: '#app section:nth-of-type(2) .grid',
    file: 'screenshot-narrow.png',
    viewport: { width: 1100, height: 900 },
  },
  {
    name: 'Konfigurationsvarianten',
    url: '/?loc=berlin&time=2026-10-26T18:30&theme=dark',
    selector: '#app section:nth-of-type(3) .grid',
    file: 'screenshot-variants.png',
    viewport: { width: 1400, height: 1200 },
  },
  {
    name: 'Astronomische Details',
    url: '/shots.html?preset=details&loc=berlin&time=2026-06-21T13:00&theme=dark&w=620&h=380',
    selector: 'sun-moon-card',
    file: 'screenshot-details.png',
  },
  {
    name: 'Polartag (Longyearbyen, 21. Juni)',
    url: '/shots.html?preset=default&loc=longyearbyen&time=2026-06-21T12:00&theme=dark&w=620&h=340',
    selector: 'sun-moon-card',
    file: 'screenshot-polar-day.png',
  },
  {
    name: 'Polarnacht (Longyearbyen, 21. Dezember)',
    url: '/shots.html?preset=default&loc=longyearbyen&time=2026-12-21T12:00&theme=dark&w=620&h=340',
    selector: 'sun-moon-card',
    file: 'screenshot-polar-night.png',
  },
  {
    name: 'Breite Karte: Verlauf und Himmelsansicht nebeneinander',
    url: '/shots.html?preset=wide&loc=berlin&time=2026-06-21T13:00&theme=dark&w=900&h=380',
    selector: 'sun-moon-card',
    file: 'screenshot-wide.png',
  },
  {
    name: 'Flache Darstellung (card_style: flat)',
    url: '/shots.html?preset=flat&loc=berlin&time=2026-10-26T18:30&theme=dark&w=620&h=340',
    selector: 'sun-moon-card',
    file: 'screenshot-flat.png',
  },
  {
    name: 'Horizontstil (card_style: horizon)',
    url: '/shots.html?preset=horizon&loc=berlin&time=2026-10-26T18:30&theme=dark&w=620&h=340',
    selector: 'sun-moon-card',
    file: 'screenshot-horizon.png',
  },
  {
    name: 'Englisch, 12-Stunden-Format',
    url: '/shots.html?preset=english&loc=newyork&time=2026-10-26T18:30&theme=light&w=620&h=340',
    selector: 'sun-moon-card',
    file: 'screenshot-english.png',
  },
];

async function resolveExecutablePath() {
  if (process.env.CHROME_PATH) return { executablePath: process.env.CHROME_PATH, args: [] };
  if (process.env.USE_PUPPETEER) {
    const puppeteer = await import('puppeteer');
    return { executablePath: puppeteer.default.executablePath(), args: [] };
  }
  const chromium = (await import('@sparticuz/chromium')).default;
  return { executablePath: await chromium.executablePath(), args: chromium.args };
}

async function main() {
  const puppeteer = (await import('puppeteer-core')).default;
  const { executablePath, args } = await resolveExecutablePath();
  mkdirSync(outputDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath,
    args: [...args, '--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
    headless: 'shell',
  });

  let failures = 0;
  for (const shot of SHOTS) {
    const page = await browser.newPage();
    const consoleErrors = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('pageerror', (error) => consoleErrors.push(String(error)));

    await page.setViewport({
      width: 1000,
      height: 600,
      deviceScaleFactor,
      ...(shot.viewport ?? {}),
    });
    await page.goto(`${baseUrl}${shot.url}`, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector(shot.selector, { timeout: 20000 });
    // Dem Layout einen Frame Zeit geben (Schriftarten, ResizeObserver)
    await new Promise((resolve) => setTimeout(resolve, 450));

    const element = await page.$(shot.selector);
    if (!element) {
      console.error(`✗ ${shot.name}: Element ${shot.selector} nicht gefunden`);
      failures += 1;
      await page.close();
      continue;
    }

    const target = path.join(outputDir, shot.file);
    await element.screenshot({ path: target });
    const status = consoleErrors.length === 0 ? '✓' : '⚠';
    console.log(
      `${status} ${shot.name} → docs/${shot.file}${consoleErrors.length ? ` (${consoleErrors.length} Konsolenfehler)` : ''}`,
    );
    if (consoleErrors.length) {
      for (const error of consoleErrors.slice(0, 5)) {
        console.error(`    ${error}`);
      }
      failures += 1;
    }
    await page.close();
  }

  await browser.close();
  console.log(
    `\n${SHOTS.length - failures}/${SHOTS.length} Aufnahmen ohne Konsolenfehler erstellt.`,
  );
  if (failures > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

export { SHOTS, pathToFileURL };
