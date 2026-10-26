// @vitest-environment jsdom
/**
 * Komponententests der Karte und des Editors in einer DOM-Umgebung (jsdom).
 *
 * Geprüft werden die öffentliche Schnittstelle (`setConfig`, `getCardSize`,
 * `getGridOptions`, `getConfigElement`, `getStubConfig`), das Rendern mit
 * einem simulierten `hass`-Objekt, Aktualisierungen sowie das Verhalten bei
 * fehlenden Daten.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { createMockHass } from '../dev/mock-hass.js';
import '../src/sun-moon-card.js';
import { SunMoonCard } from '../src/sun-moon-card.js';
import type { HomeAssistant, SunMoonCardConfig } from '../src/types.js';

const WIDTH = 620;

/** Erzeugt ein simuliertes `hass`-Objekt. */
function mockHass(
  locationId = 'berlin',
  options: { theme?: 'dark' | 'light'; language?: 'de' | 'en'; entityMode?: 'complete' | 'missing-sun' | 'no-attributes' | 'no-location' } = {},
): HomeAssistant {
  return createMockHass({
    locationId,
    theme: options.theme ?? 'dark',
    language: options.language ?? 'de',
    entityMode: options.entityMode ?? 'complete',
  });
}

interface MountOptions {
  /** `null` simuliert „noch kein `hass` von Home Assistant erhalten“. */
  hass?: HomeAssistant | null;
  width?: number;
}

/** Erzeugt eine Karte, hängt sie ins Dokument und versorgt sie mit `hass`. */
async function mountCard(
  config: SunMoonCardConfig = { type: 'custom:sun-moon-card' },
  options: MountOptions = {},
): Promise<SunMoonCard> {
  const hass = options.hass === undefined ? mockHass() : options.hass;
  const width = options.width ?? WIDTH;

  const element = document.createElement('sun-moon-card') as SunMoonCard;
  // jsdom kennt keine Layoutbreite – die Karte messen wir daher direkt ein.
  element.getBoundingClientRect = () => ({ width, height: 260 }) as DOMRect;
  element.setConfig(config);
  if (hass) element.hass = hass;
  document.body.appendChild(element);
  (element as unknown as { _width: number })._width = width;
  await element.updateComplete;
  return element;
}

let consoleError: ReturnType<typeof vi.spyOn>;
let consoleWarn: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);
  consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
});

afterEach(() => {
  document.body.innerHTML = '';
  consoleError.mockRestore();
  consoleWarn.mockRestore();
});

describe('Registrierung', () => {
  it('registriert Karte und Editor als Custom Elements', () => {
    expect(customElements.get('sun-moon-card')).toBe(SunMoonCard);
    expect(customElements.get('sun-moon-card-editor')).toBeDefined();
  });

  it('trägt sich in den Home-Assistant-Kartenkatalog ein', () => {
    const catalog = (window as unknown as { customCards?: Array<{ type: string }> }).customCards;
    expect(Array.isArray(catalog)).toBe(true);
    expect(catalog?.some((entry) => entry.type === 'custom:sun-moon-card')).toBe(true);
  });

  it('liefert eine gültige Standardkonfiguration', () => {
    const stub = SunMoonCard.getStubConfig();
    expect(stub.type).toBe('custom:sun-moon-card');
    const card = document.createElement('sun-moon-card') as SunMoonCard;
    expect(() => card.setConfig(stub)).not.toThrow();
  });

  it('liefert ein Editor-Element', () => {
    const editor = SunMoonCard.getConfigElement();
    expect(editor.tagName.toLowerCase()).toBe('sun-moon-card-editor');
  });
});

describe('setConfig', () => {
  it('nimmt eine gültige Konfiguration an', () => {
    const card = document.createElement('sun-moon-card') as SunMoonCard;
    expect(() => card.setConfig({ type: 'custom:sun-moon-card', card_height: 300 })).not.toThrow();
  });

  it('weist ungültige Konfigurationen ab', () => {
    const card = document.createElement('sun-moon-card') as SunMoonCard;
    expect(() => card.setConfig(null as unknown as SunMoonCardConfig)).toThrow();
    expect(() => card.setConfig('Text' as unknown as SunMoonCardConfig)).toThrow();
    expect(() =>
      card.setConfig({
        type: 'custom:sun-moon-card',
        card_height: 'hoch',
      } as unknown as SunMoonCardConfig),
    ).toThrow();
  });

  it('korrigiert Werte außerhalb des Bereichs ohne Abbruch', () => {
    const card = document.createElement('sun-moon-card') as SunMoonCard;
    expect(() => card.setConfig({ type: 'custom:sun-moon-card', card_height: 9999 })).not.toThrow();
    expect(consoleWarn).toHaveBeenCalled();
  });
});

describe('Größenangaben', () => {
  it('liefert eine Kartenhöhe in Dashboard-Zeilen', () => {
    const card = document.createElement('sun-moon-card') as SunMoonCard;
    card.setConfig({ type: 'custom:sun-moon-card', card_height: 260 });
    expect(card.getCardSize()).toBe(Math.max(1, Math.round(260 / 50)));
  });

  it('liefert Rasteroptionen', () => {
    const card = document.createElement('sun-moon-card') as SunMoonCard;
    card.setConfig({ type: 'custom:sun-moon-card', card_height: 280 });
    const options = card.getGridOptions();
    expect(options.rows).toBeGreaterThanOrEqual(1);
    expect(options.min_rows).toBeGreaterThanOrEqual(1);
    expect(options.columns).toBe(6);
  });

  it('meldet mindestens eine Zeile', () => {
    const card = document.createElement('sun-moon-card') as SunMoonCard;
    card.setConfig({ type: 'custom:sun-moon-card', card_height: 120 });
    expect(card.getCardSize()).toBeGreaterThanOrEqual(1);
  });
});

describe('Darstellung', () => {
  it('rendert Karte, Chart und Ereignisleiste', async () => {
    const card = await mountCard();
    const root = card.shadowRoot!;
    expect(root.querySelector('ha-card')).not.toBeNull();
    expect(root.querySelector('svg.day-chart')).not.toBeNull();
    expect(root.querySelectorAll('.event-tile').length).toBeGreaterThanOrEqual(2);
    expect(root.querySelector('.now-marker')).not.toBeNull();
  });

  it('zeigt Ortsnamen und formatierte Uhrzeiten', async () => {
    const card = await mountCard();
    const text = card.shadowRoot!.textContent ?? '';
    expect(text).toContain('Berlin');
    expect(text).toMatch(/\d{1,2}:\d{2}/);
  });

  it('rendert die Himmelsansicht mit Mond und Sonne', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card', card_height: 360 });
    const svg = card.shadowRoot!.querySelector('svg.sky-view');
    expect(svg).not.toBeNull();
    expect(svg!.querySelectorAll('circle').length).toBeGreaterThanOrEqual(2);
  });

  it('bleibt ohne `hass` stabil', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card' }, { hass: null });
    const root = card.shadowRoot!;
    expect(root.querySelector('.message')).not.toBeNull();
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('zeigt ohne Standort einen Hinweis statt erfundener Zeiten', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card' }, {
      hass: mockHass('berlin', { entityMode: 'no-location' }),
    });
    const root = card.shadowRoot!;
    expect(root.querySelector('.message')).not.toBeNull();
    expect(root.querySelector('svg.day-chart')).toBeNull();
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('funktioniert ohne Sun-Entität', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card' }, {
      hass: mockHass('berlin', { entityMode: 'missing-sun' }),
    });
    expect(card.shadowRoot!.querySelector('svg.day-chart')).not.toBeNull();
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('funktioniert mit attributloser Sun-Entität', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card' }, {
      hass: mockHass('berlin', { entityMode: 'no-attributes' }),
    });
    expect(card.shadowRoot!.querySelector('svg.day-chart')).not.toBeNull();
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('rendert Polartag und Polarnacht ohne Fehler', async () => {
    for (const locationId of ['longyearbyen', 'tromso']) {
      const card = await mountCard({ type: 'custom:sun-moon-card', card_height: 300 }, {
        hass: mockHass(locationId),
      });
      expect(card.shadowRoot!.querySelector('svg.day-chart')).not.toBeNull();
    }
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('rendert schmale Karten ohne Fehler', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card', card_height: 220 }, {
      hass: mockHass('berlin', { theme: 'light', language: 'en' }),
      width: 320,
    });
    expect(card.shadowRoot!.querySelector('svg.day-chart')).not.toBeNull();
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('berücksichtigt abgeschaltete Bereiche', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      show_header: false,
      show_events: false,
      show_sky_view: false,
      show_moon: false,
    });
    const root = card.shadowRoot!;
    expect(root.querySelectorAll('.event-tile')).toHaveLength(0);
    expect(root.querySelector('svg.sky-view')).toBeNull();
  });

  it('rendert im Kompaktmodus', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card', compact_mode: true });
    expect(card.shadowRoot!.querySelector('svg.day-chart')).not.toBeNull();
  });

  it('stellt die astronomischen Details dar', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      card_height: 360,
      show_astronomical_details: true,
      twilight_level: 'all',
    });
    const text = card.shadowRoot!.textContent ?? '';
    expect(card.shadowRoot!.querySelectorAll('.detail-tile').length).toBeGreaterThanOrEqual(2);
    expect(text).toMatch(/\d/);
  });

  it('folgt der Spracheinstellung', async () => {
    const card = await mountCard(
      { type: 'custom:sun-moon-card', language: 'en', time_format: '12', card_height: 360 },
      { hass: mockHass('berlin', { language: 'en' }) },
    );
    const text = card.shadowRoot!.textContent ?? '';
    expect(text).toMatch(/Sunrise|Sunset/);
    expect(text).toMatch(/(AM|PM)/i);
  });
});

describe('Aktualisierung', () => {
  it('rendert neu, wenn Home Assistant ein neues `hass` liefert', async () => {
    const card = await mountCard();
    const before = card.shadowRoot!.textContent ?? '';
    card.hass = mockHass('sydney');
    await card.updateComplete;
    const after = card.shadowRoot!.textContent ?? '';
    expect(after).toContain('Sydney');
    expect(after).not.toBe(before);
  });

  it('reagiert auf eine geänderte Konfiguration', async () => {
    const card = await mountCard();
    expect(card.shadowRoot!.querySelectorAll('.event-tile').length).toBeGreaterThan(0);
    card.setConfig({ type: 'custom:sun-moon-card', show_events: false });
    await card.updateComplete;
    expect(card.shadowRoot!.querySelectorAll('.event-tile')).toHaveLength(0);
  });
});

describe('Editor', () => {
  /** Erzeugt einen Editor mit Konfiguration und `hass`. */
  async function mountEditor(config: SunMoonCardConfig = { type: 'custom:sun-moon-card' }) {
    const editor = SunMoonCard.getConfigElement();
    editor.setConfig(config);
    editor.hass = mockHass();
    document.body.appendChild(editor);
    await (editor as unknown as { updateComplete: Promise<void> }).updateComplete;
    return editor;
  }

  it('rendert Bedienelemente', async () => {
    const editor = await mountEditor();
    expect(editor.shadowRoot!.querySelectorAll('input, select').length).toBeGreaterThan(5);
    expect((editor.shadowRoot!.textContent ?? '').trim().length).toBeGreaterThan(20);
  });

  it('meldet Konfigurationsänderungen', async () => {
    const editor = await mountEditor();
    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });

    const select = editor.shadowRoot!.querySelector<HTMLSelectElement>('#theme')!;
    select.value = 'dark';
    select.dispatchEvent(new Event('change'));
    expect(events.at(-1)?.theme_mode).toBe('dark');
  });

  it('schaltet Bereiche per Schalter um', async () => {
    const editor = await mountEditor();
    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });

    const checkbox = editor.shadowRoot!.querySelector<HTMLInputElement>('#show_moon')!;
    expect(checkbox).not.toBeNull();
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));
    expect(events.at(-1)?.show_moon).toBe(false);
  });

  it('begrenzt die Kartenhöhe', async () => {
    const editor = await mountEditor();
    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });

    const number = editor.shadowRoot!.querySelector<HTMLInputElement>('#height-number')!;
    expect(number).not.toBeNull();
    number.value = '5000';
    number.dispatchEvent(new Event('change'));
    expect(events.at(-1)?.card_height).toBe(800);
  });

  it('speichert Standardwerte nicht in der Konfiguration', async () => {
    const editor = await mountEditor({ type: 'custom:sun-moon-card', show_moon: false });
    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });

    const checkbox = editor.shadowRoot!.querySelector<HTMLInputElement>('#show_moon')!;
    checkbox.checked = true; // = Standardwert
    checkbox.dispatchEvent(new Event('change'));
    expect(events.at(-1)).not.toHaveProperty('show_moon');
  });
});
