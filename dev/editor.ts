/**
 * dev/editor.ts
 *
 * Zeigt den visuellen Editor allein – für Screenshots und zum Ausprobieren.
 *
 * Parameter (alle optional):
 *   style   Kartenstil (glass, flat, horizon, scene, clean)
 *   open    geöffnete Bereiche, kommagetrennt (z. B. style,content)
 *   theme   dark | light
 *   lang    de | en
 */

import '../src/sun-moon-card.js';
import { createMockHass } from './mock-hass.js';
import type { SunMoonCardConfig } from '../src/types.js';

const params = new URLSearchParams(location.search);
const theme = (params.get('theme') as 'dark' | 'light') ?? 'light';
document.body.classList.add(theme);

const config = { type: 'custom:sun-moon-card' } as SunMoonCardConfig;
const style = params.get('style');
if (style) config.card_style = style as SunMoonCardConfig['card_style'];

const editor = document.createElement('sun-moon-card-editor');
editor.setConfig(config);
editor.hass = createMockHass({
  locationId: 'berlin',
  theme,
  language: (params.get('lang') as 'de' | 'en') ?? 'de',
  entityMode: 'complete',
});
document.getElementById('stage')!.appendChild(editor);

const open = params.get('open');
if (open) {
  void editor.updateComplete.then(() => {
    (editor as unknown as { _open: ReadonlySet<string> })._open = new Set(open.split(','));
  });
}
document.body.dataset.ready = 'true';
