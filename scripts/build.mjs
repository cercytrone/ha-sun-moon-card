#!/usr/bin/env node
/**
 * Build-Skript: bündelt die Card mit esbuild nach dist/sun-moon-card.js.
 *
 * Das Ergebnis ist eine eigenständige ES-Module-Datei, die Lit und alle
 * weiteren Abhängigkeiten enthält. Home Assistant lädt Custom Cards als
 * ES-Modul, weshalb keine weiteren Dateien benötigt werden.
 *
 * Aufruf:
 *   node scripts/build.mjs           – einmaliger Build
 *   node scripts/build.mjs --watch   – Build bei Änderungen (Watch-Modus)
 */

import { context } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { mkdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');
const dev = process.argv.includes('--dev');

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: [path.join(root, 'src', 'sun-moon-card.ts')],
  outfile: path.join(root, 'dist', 'sun-moon-card.js'),
  bundle: true,
  format: 'esm',
  target: ['es2022', 'safari16', 'chrome109', 'firefox115'],
  // Kein Tree-Shaking von Seiteneffekten: customElements.define() muss
  // erhalten bleiben.
  minify: !dev,
  sourcemap: dev ? 'inline' : 'external',
  sourcesContent: false,
  legalComments: 'none',
  define: {
    'process.env.NODE_ENV': JSON.stringify(dev ? 'development' : 'production'),
  },
  logLevel: 'info',
  metafile: !watch,
};

async function main() {
  mkdirSync(path.join(root, 'dist'), { recursive: true });

  if (watch) {
    const ctx = await context(options);
    await ctx.watch();
    console.log('Watch-Modus aktiv – Änderungen werden automatisch gebaut.');
    return;
  }

  const result = await (await import('esbuild')).build(options);
  if (result.metafile) {
    const size = statSync(path.join(root, 'dist', 'sun-moon-card.js')).size;
    console.log(
      `dist/sun-moon-card.js: ${(size / 1024).toFixed(1)} kB (minifiziert, inkl. Lit)`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
