import { defineConfig } from 'vite';

/**
 * Konfiguration des Entwicklungsservers für die Testumgebung in `dev/`.
 *
 * Der Server ist bewusst auf `0.0.0.0` gebunden und akzeptiert beliebige
 * Hostnamen, damit er auch in Container- und Vorschauumgebungen erreichbar ist.
 */
export default defineConfig({
  root: 'dev',
  publicDir: false,
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    // Vorschau-Domains (z. B. *.e2b.app) erlauben
    allowedHosts: true,
    cors: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
  build: {
    outDir: '../build/demo',
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: ['lit'],
  },
});
