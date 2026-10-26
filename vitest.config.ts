/**
 * Vitest-Konfiguration
 *
 * Standardumgebung ist `node` (reine Logiktests). Komponententests
 * aktivieren `jsdom` über einen Docblock (`// @vitest-environment jsdom`).
 */

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    reporters: ['default'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.ts'],
      exclude: ['src/lunar-series.ts', 'src/types.ts'],
    },
  },
});
