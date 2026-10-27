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
import { DEFAULT_CARD_HEIGHT } from '../src/const.js';
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

  it('zeichnet Himmelsverlauf, Horizontglühen und weiche Phasenstopps', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card', card_height: 340 });
    const svg = card.shadowRoot!.querySelector('svg.day-chart')!;

    // Waagerechter Himmelsverlauf über der Kurve.
    const sky = svg.querySelector('linearGradient[id$="-sky"]');
    expect(sky).not.toBeNull();
    expect(sky!.querySelectorAll('stop').length).toBeGreaterThanOrEqual(5);
    const skyPath = [...svg.querySelectorAll('path')].find((path) =>
      (path.getAttribute('fill') ?? '').includes('-sky'),
    );
    expect(skyPath).toBeDefined();
    expect(Number(skyPath!.getAttribute('opacity'))).toBeCloseTo(0.15, 2);

    // Horizontglühen an Sonnenauf- und -untergang.
    const glows = [...svg.querySelectorAll('ellipse')].map((ellipse) =>
      ellipse.getAttribute('fill'),
    );
    expect(glows.some((fill) => (fill ?? '').includes('glow-rise'))).toBe(true);
    expect(glows.some((fill) => (fill ?? '').includes('glow-set'))).toBe(true);

    // Weicher Phasenverlauf: abgetastet statt aus einzelnen Kanten gesetzt.
    const area = svg.querySelector('linearGradient[id$="-area"]')!;
    const colors = [...area.querySelectorAll('stop')].map((stop) =>
      stop.getAttribute('stop-color'),
    );
    expect(colors.length).toBeGreaterThanOrEqual(20);
    expect(new Set(colors).size).toBeGreaterThanOrEqual(4);
  });

  it('lässt die Flächen weich auslaufen statt an einer Kante zu enden', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card', card_height: 340 });
    const svg = card.shadowRoot!.querySelector('svg.day-chart')!;

    // Die Flächen liegen in maskierten Gruppen, die Beschriftungen nicht.
    expect(svg.querySelector('g[mask*="-side"]')).not.toBeNull();
    expect(svg.querySelector('g[mask*="-soft"]')).not.toBeNull();

    // Jede Maske hat einen Verlauf von Schwarz (transparent) nach Weiß
    // (deckend) – sonst wäre sie wirkungslos.
    for (const id of ['-soft-fade', '-foot-fade', '-side-fade']) {
      const gradient = svg.querySelector(`linearGradient[id$="${id}"]`);
      expect(gradient, id).not.toBeNull();
      const colors = [...gradient!.querySelectorAll('stop')].map((stop) =>
        stop.getAttribute('stop-color'),
      );
      expect(colors, id).toContain('#000000');
      expect(colors, id).toContain('#ffffff');
    }

    // Der Plot ist leicht abgerundet, damit die Fläche nicht als Block endet.
    const clipRect = svg.querySelector('clipPath rect');
    expect(clipRect).not.toBeNull();
    expect(Number(clipRect!.getAttribute('rx'))).toBeGreaterThan(0);
  });

  it('dämpft die Verläufe im flachen Stil', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      card_height: 340,
      card_style: 'flat',
    });
    const svg = card.shadowRoot!.querySelector('svg.day-chart')!;
    const skyPath = [...svg.querySelectorAll('path')].find((path) =>
      (path.getAttribute('fill') ?? '').includes('-sky'),
    );
    expect(skyPath).toBeDefined();
    expect(Number(skyPath!.getAttribute('opacity'))).toBeLessThan(0.15);
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

  it('nennt die aktuelle Stellung von Sonne und Mond', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card', card_height: 360 });
    const root = card.shadowRoot!;
    const sun = root.querySelector('.detail-tile.sun');
    const moon = root.querySelector('.detail-tile.moon');
    expect(sun).not.toBeNull();
    expect(moon).not.toBeNull();

    // Höhe in Grad und Himmelsrichtung: bei der Sonne als Hauptwert und
    // Azimut, beim Mond in der Stellungszeile unter der Beleuchtung.
    const height = /-?\d{1,3}(?:[.,]\d)?\s?°/;
    const direction = /\d{1,3}°\s[NSEWO]{1,3}/;
    const sunText = sun!.textContent ?? '';
    expect(sunText).toMatch(height);
    expect(sunText).toMatch(direction);
    const moonText = moon!.textContent ?? '';
    expect(moonText).toMatch(height);
    expect(moonText).toMatch(direction);
  });

  it('zeichnet den Höhenverlauf des Mondes als zweite Kurve', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card', card_height: 340 });
    const svg = card.shadowRoot!.querySelector('svg.day-chart')!;
    const moon = svg.querySelector('path.moon-curve');
    const sun = svg.querySelector('path[stroke^="url"]');
    expect(moon).not.toBeNull();
    expect(sun).not.toBeNull();

    // Beide Kurven laufen über die ganze Breite des Plots.
    const viewBox = Number(svg.getAttribute('viewBox')!.split(' ')[2]);
    const numbers = (path: Element) =>
      (path.getAttribute('d') ?? '').match(/-?\d+(?:\.\d+)?/g)!.map(Number);
    for (const path of [moon!, sun!]) {
      const values = numbers(path);
      expect(values.length).toBeGreaterThan(40); // kein Strich, sondern ein Verlauf
      expect(values[0]).toBeLessThan(20); // beginnt am linken Rand
      expect(Math.max(...values)).toBeGreaterThan(viewBox * 0.8);
    }
    expect(moon!.getAttribute('d')).not.toBe(sun!.getAttribute('d'));
    expect(moon!.querySelector('title')?.textContent).toBeTruthy();
  });

  it('markiert die Stellung von Sonne und Mond im Tagesverlauf', async () => {
    const card = await mountCard({ type: 'custom:sun-moon-card', card_height: 340 });
    const svg = card.shadowRoot!.querySelector('svg.day-chart')!;
    const sun = svg.querySelector('.now-sun circle');
    const moon = svg.querySelector('.now-moon svg.moon-disc');
    expect(sun).not.toBeNull();
    expect(moon).not.toBeNull();

    // Beide Marker sitzen auf der „Jetzt"-Linie. Der Mond weicht nur so weit
    // zur Seite, wie er braucht, um den Sonnenmarker nicht zu verdecken.
    const nowX = Number(svg.querySelector('.now-marker line')!.getAttribute('x1'));
    expect(Math.abs(Number(sun!.getAttribute('cx')) - nowX)).toBeLessThan(0.5);
    const translate = svg
      .querySelector('.now-moon g[transform]')!
      .getAttribute('transform')!
      .match(/-?\d+(?:\.\d+)?/g)!
      .map(Number);
    const size = Number(moon!.getAttribute('width'));
    expect(Math.abs(translate[0] + size / 2 - nowX)).toBeLessThan(size);

    // Beide Marker nennen im Tooltip Körper und Höhe.
    expect(svg.querySelector('.now-sun title')!.textContent).toMatch(/-?\d/);
    expect(svg.querySelector('.now-moon title')!.textContent).toMatch(/-?\d/);
  });

  it('zeigt den Mondmarker nur, wenn der Mond eingeschaltet ist', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      show_moon: false,
      card_height: 340,
    });
    const svg = card.shadowRoot!.querySelector('svg.day-chart')!;
    expect(svg.querySelector('.now-moon')).toBeNull();
    expect(svg.querySelector('.now-sun')).not.toBeNull();
    expect(svg.querySelector('path.moon-curve')).toBeNull();
  });

  it('nennt unter der Himmelsansicht Höhe und Richtung', async () => {
    // Die Ablesung erscheint nur, wenn die Himmelsansicht als Spalte daneben
    // steht – dafür braucht die Karte Breite.
    const card = await mountCard(
      { type: 'custom:sun-moon-card', card_height: 340 },
      { width: 900 },
    );
    const rows = [...card.shadowRoot!.querySelectorAll('.sky-readout span')].map((node) =>
      (node.textContent ?? '').trim(),
    );
    expect(rows).toHaveLength(2);
    for (const row of rows) {
      expect(row).toMatch(/-?\d{1,3}(?:[.,]\d)?\s?°/);
      expect(row).toMatch(/\d{1,3}°\s[NSEWO]{1,3}/);
    }
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

  it('lässt die Kartenhöhe ohne eingetragenen Wert bedienen', async () => {
    const editor = await mountEditor(); // card_height fehlt – der Standardfall
    const slider = editor.shadowRoot!.querySelector<HTMLInputElement>('#height')!;
    const number = editor.shadowRoot!.querySelector<HTMLInputElement>('#height-number')!;
    const auto = editor.shadowRoot!.querySelector<HTMLInputElement>('#auto')!;

    expect(slider.disabled).toBe(false);
    expect(number.disabled).toBe(false);
    expect(number.value).toBe(String(DEFAULT_CARD_HEIGHT));
    expect(auto.checked).toBe(false);
  });

  it('sperrt die Kartenhöhe nur bei ausdrücklichem „auto“', async () => {
    const editor = await mountEditor({ type: 'custom:sun-moon-card', card_height: 'auto' });
    const auto = editor.shadowRoot!.querySelector<HTMLInputElement>('#auto')!;
    expect(editor.shadowRoot!.querySelector<HTMLInputElement>('#height')!.disabled).toBe(true);
    expect(
      editor.shadowRoot!.querySelector<HTMLInputElement>('#height-number')!.disabled,
    ).toBe(true);
    expect(auto.checked).toBe(true);

    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });
    auto.checked = false;
    auto.dispatchEvent(new Event('change'));
    await (editor as unknown as { updateComplete: Promise<void> }).updateComplete;

    expect(events.at(-1)?.card_height).not.toBe('auto');
    expect(
      editor.shadowRoot!.querySelector<HTMLInputElement>('#height-number')!.disabled,
    ).toBe(false);
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
