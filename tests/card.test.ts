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
import { getModel, resolveConfig } from '../src/model.js';
import { DEFAULT_CARD_HEIGHT, DOUBLE_TAP_DELAY, HOLD_DELAY } from '../src/const.js';
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

  it('protokolliert dieselbe Korrektur nur einmal – auch im Editor', () => {
    const card = document.createElement('sun-moon-card') as SunMoonCard;
    consoleWarn.mockClear();
    card.setConfig({ type: 'custom:sun-moon-card', card_height: 10 });
    card.setConfig({ type: 'custom:sun-moon-card', card_height: 10 });
    card.setConfig({ type: 'custom:sun-moon-card', card_height: 10 });
    expect(consoleWarn).toHaveBeenCalledTimes(1);
    // Eine andere Korrektur wird wieder gemeldet.
    card.setConfig({ type: 'custom:sun-moon-card', card_height: 20 });
    expect(consoleWarn).toHaveBeenCalledTimes(2);
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
    // Azimut. Beim Mond entscheidet die verfügbare Breite über die Zeile –
    // `_fitLabel()` kürzt die Himmelsrichtung heraus, wenn die Kachel schmal
    // ist; sie bleibt dann im Tooltip erhalten („Höhe … · Azimut …“).
    const height = /-?\d{1,3}(?:[.,]\d)?\s?°/;
    const direction = /\d{1,3}°\s[NSEWO]{1,3}/;
    const sunText = sun!.textContent ?? '';
    expect(sunText).toMatch(height);
    expect(sunText).toMatch(direction);
    const moonText = moon!.textContent ?? '';
    expect(moonText).toMatch(height);
    const moonTitles = [...moon!.querySelectorAll('[title]')]
      .map((node) => node.getAttribute('title') ?? '')
      .join(' · ');
    expect(`${moonText} · ${moonTitles}`).toMatch(direction);
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
    // Stehen Sonne und Mond dicht beieinander, weicht der Mond um genau
    // einen Schritt zur Seite (Markerradius + Mondradius + 2 px). Anderenfalls
    // sitzt er auf der Linie. Beides ist zulässig – nur darüber hinaus darf
    // er nicht wandern.
    const offset = Math.abs(translate[0] + size / 2 - nowX);
    expect(offset < 0.5 || offset <= size + 4).toBe(true);

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

  it('füllt im Horizontstil nur den Raum zwischen Kurve und Horizont', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      card_style: 'horizon',
      card_height: 340,
    });
    const svg = card.shadowRoot!.querySelector('svg.day-chart')!;

    // Die Horizontlinie trägt die Beschriftung „Horizont".
    const texts = [...svg.querySelectorAll('g > text')];
    const horizonText = texts.find((node) => (node.textContent ?? '').includes('Horizont'));
    expect(horizonText).toBeDefined();
    const horizonY = Number(
      horizonText!.parentElement!.querySelector('line')!.getAttribute('y1'),
    );

    // Die Fläche endet auf dieser Linie – nicht am unteren Rand des Plots.
    const area = [...svg.querySelectorAll('path')].find((path) =>
      (path.getAttribute('fill') ?? '').includes('-area'),
    )!;
    const numbers = (area.getAttribute('d') ?? '').match(/-?\d+(?:\.\d+)?/g)!.map(Number);
    expect(numbers.at(-1)).toBeCloseTo(horizonY, 1);

    // Der Himmelsverlauf über der Kurve entfällt, die Mondkurve tritt zurück.
    expect(
      [...svg.querySelectorAll('path')].some((path) =>
        (path.getAttribute('fill') ?? '').includes('-sky'),
      ),
    ).toBe(false);
    expect(svg.querySelector('path.moon-curve')!.getAttribute('opacity')).toBe('0.5');
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
    // Die ersten beiden Zeilen nennen Höhe und Richtung von Sonne und Mond;
    // danach folgen die Restzeiten.
    expect(rows.length).toBeGreaterThanOrEqual(2);
    for (const row of rows.slice(0, 2)) {
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

  it('führt ein geöffnetes Overlay mit dem neuen `hass` mit', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    card
      .shadowRoot!.querySelector('ha-card')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    const full = document.querySelector('.smc-popup sun-moon-card') as SunMoonCard;
    await full.updateComplete;
    expect(full.hass).toBe(card.hass);

    card.hass = mockHass('sydney');
    await card.updateComplete;
    await full.updateComplete;
    // Sonst bliebe das Overlay auf dem Stand beim Öffnen stehen.
    expect(full.hass).toBe(card.hass);
    expect(full.shadowRoot!.textContent).toContain('Sydney');
    card.remove();
  });

  it('bemerkt einen Sprachwechsel, den nur `hass.language` trägt', async () => {
    // Ältere Oberflächen füllen `hass.locale` nicht; die Sprache steckt dann
    // unmittelbar an `hass`.
    const base = mockHass();
    const german = { ...base, locale: undefined, language: 'de' } as HomeAssistant;
    const english = { ...base, locale: undefined, language: 'en' } as HomeAssistant;
    const card = await mountCard({ type: 'custom:sun-moon-card' }, { hass: german });
    // Erst ein zweites, inhaltsgleiches `hass` – danach steht die Signatur,
    // mit der die Karte weitere Änderungen vergleicht.
    card.hass = { ...german };
    await card.updateComplete;
    const before = card.shadowRoot!.querySelector('.footer')?.textContent ?? '';
    card.hass = english;
    await card.updateComplete;
    const after = card.shadowRoot!.querySelector('.footer')?.textContent ?? '';
    expect(after).not.toBe(before);
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

  it('bietet einen Schalter für die Restzeit', async () => {
    const editor = await mountEditor();
    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });

    const checkbox = editor.shadowRoot!.querySelector<HTMLInputElement>('#show_remaining_time')!;
    expect(checkbox).not.toBeNull();
    expect(checkbox.checked).toBe(true); // = Standardwert
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));
    expect(events.at(-1)?.show_remaining_time).toBe(false);
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

  it('senkt im Minimalmodus die Untergrenze der Kartenhöhe', async () => {
    const editor = await mountEditor({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    const slider = editor.shadowRoot!.querySelector<HTMLInputElement>('#height')!;
    const number = editor.shadowRoot!.querySelector<HTMLInputElement>('#height-number')!;
    expect(slider.min).toBe('24');
    expect(number.min).toBe('24');
    // In 10er-Schritten wäre der Bereich unter 100 px nicht einstellbar.
    expect(slider.step).toBe('2');
    expect(number.value).toBe('48');
  });

  it('schaltet die Zeitangaben der Minimalvariante getrennt', async () => {
    const editor = await mountEditor({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });
    const times = editor.shadowRoot!.querySelector<HTMLInputElement>('#minimal-times')!;
    const zenith = editor.shadowRoot!.querySelector<HTMLInputElement>('#minimal-zenith')!;
    expect(times.checked).toBe(true);
    expect(zenith.checked).toBe(true);

    times.checked = false;
    times.dispatchEvent(new Event('change'));
    expect(events.at(-1)?.minimal_show_times).toBe(false);
    expect(events.at(-1)?.minimal_show_zenith).toBeUndefined();

    zenith.checked = false;
    zenith.dispatchEvent(new Event('change'));
    expect(events.at(-1)?.minimal_show_zenith).toBe(false);
  });

  it('stellt die Größe der Sonne ein', async () => {
    const editor = await mountEditor({ type: 'custom:sun-moon-card' });
    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });
    const sun = editor.shadowRoot!.querySelector<HTMLInputElement>('#sun-marker')!;
    expect(sun.min).toBe('2');
    expect(sun.max).toBe('12');
    expect(sun.value).toBe('6');
    sun.value = '9';
    sun.dispatchEvent(new Event('input'));
    expect(events.at(-1)?.sun_marker_size).toBe(9);
  });

  it('zeigt die Maße des Overlays nur im Minimalmodus', async () => {
    const plain = await mountEditor({ type: 'custom:sun-moon-card' });
    expect(plain.shadowRoot!.querySelector('#popup-width')).toBeNull();

    const editor = await mountEditor({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });
    const width = editor.shadowRoot!.querySelector<HTMLInputElement>('#popup-width')!;
    const height = editor.shadowRoot!.querySelector<HTMLInputElement>('#popup-height')!;
    expect(width.value).toBe('720');
    expect(height.value).toBe('460');
    expect(width.min).toBe('320');
    expect(height.max).toBe('800');

    width.value = '900';
    width.dispatchEvent(new Event('input'));
    expect(events.at(-1)?.popup_width).toBe(900);
    height.value = '520';
    height.dispatchEvent(new Event('input'));
    expect(events.at(-1)?.popup_height).toBe(520);
  });

  it('schaltet die Minimalvariante', async () => {
    const editor = await mountEditor({ type: 'custom:sun-moon-card', card_height: 200 });
    const events: SunMoonCardConfig[] = [];
    editor.addEventListener('config-changed', (event) => {
      events.push((event as CustomEvent<{ config: SunMoonCardConfig }>).detail.config);
    });
    const minimal = editor.shadowRoot!.querySelector<HTMLInputElement>('#minimal')!;
    expect(minimal.checked).toBe(false);
    minimal.checked = true;
    minimal.dispatchEvent(new Event('change'));
    expect(events.at(-1)?.minimal_mode).toBe(true);
  });
});

describe('Minimalvariante', () => {
  it('zeigt ausschließlich den Zeitstrahl', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    const root = card.shadowRoot!;
    expect(root.querySelectorAll('.header')).toHaveLength(0);
    expect(root.querySelectorAll('.event-tile')).toHaveLength(0);
    expect(root.querySelectorAll('.detail-tile')).toHaveLength(0);
    expect(root.querySelectorAll('.footer')).toHaveLength(0);
    expect(root.querySelectorAll('.legend-chip')).toHaveLength(0);
    expect(root.querySelectorAll('svg.sky-view')).toHaveLength(0);

    const svg = root.querySelector('svg.day-chart')!;
    // Abgespeckt: kein Raster, keine Beschriftung, kein Zenit, kein Mondgang.
    expect(svg.querySelectorAll('.event-labels')).toHaveLength(0);
    expect(svg.querySelectorAll('.zenith-chip')).toHaveLength(0);
    expect(svg.querySelectorAll('.moon-curve')).toHaveLength(0);
    // Erhalten: die Kurve, die Marken für Auf- und Untergang, der Sonnenstand.
    expect(svg.querySelectorAll('.now-sun circle')).toHaveLength(1);
    expect(svg.querySelectorAll('.event-markers > g').length).toBeGreaterThanOrEqual(2);
    expect(svg.querySelector('.now-marker line')).not.toBeNull();
  });

  it('lässt die Zeitachse auch bei 24 px erkennen, wo die Sonne steht', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 24,
    });
    const svg = card.shadowRoot!.querySelector('svg.day-chart')!;
    const viewBox = svg.getAttribute('viewBox')!.split(' ').map(Number);
    expect(viewBox[3]).toBe(16);
    // Der Höhenbereich richtet sich allein nach der Sonne.
    expect(svg.querySelector('.now-moon')).toBeNull();
    const sun = svg.querySelector('.now-sun circle')!;
    const cy = Number(sun.getAttribute('cy'));
    expect(cy).toBeGreaterThan(0);
    expect(cy).toBeLessThan(viewBox[3]);
  });

  it('ist bedienbar und für Screenreader beschrieben', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    const haCard = card.shadowRoot!.querySelector('ha-card')!;
    expect(haCard.getAttribute('role')).toBe('button');
    expect(haCard.getAttribute('tabindex')).toBe('0');
    const label = haCard.getAttribute('aria-label') ?? '';
    expect(label).toContain('Sonnenaufgang');
    expect(label).toContain('Sonnenuntergang');
  });

  it('öffnet die vollständige Karte im Overlay und schließt sie mit Escape', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    card
      .shadowRoot!.querySelector('ha-card')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));

    const overlay = document.querySelector('.smc-popup');
    expect(overlay).not.toBeNull();
    expect(overlay!.getAttribute('role')).toBe('dialog');
    expect(overlay!.getAttribute('aria-modal')).toBe('true');

    const full = overlay!.querySelector('sun-moon-card') as SunMoonCard;
    await full.updateComplete;
    expect(full.shadowRoot!.querySelector('.header')).not.toBeNull();
    expect(full.shadowRoot!.querySelectorAll('.event-tile').length).toBeGreaterThan(0);
    // Der Streifen selbst ist zu flach – das Overlay bekommt seine eigenen
    // Maße (Vorgabe 720 × 460 px).
    expect(full.shadowRoot!.querySelector('ha-card')!.getAttribute('style')).toContain(
      '460px',
    );
    const panel = document.querySelector<HTMLElement>('.smc-popup > div')!;
    expect(panel.style.maxWidth).toBe('720px');
    expect(full.shadowRoot!.querySelector('ha-card.smc-minimal')).toBeNull();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(document.querySelector('.smc-popup')).toBeNull();
  });

  it('schließt das Overlay, wenn die Karte aus dem Dokument entfernt wird', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    card
      .shadowRoot!.querySelector('ha-card')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(document.querySelector('.smc-popup')).not.toBeNull();
    card.remove();
    expect(document.querySelector('.smc-popup')).toBeNull();
  });

  it('nennt Aufgang, Zenit und Untergang über dem Zeitstrahl', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    const row = card.shadowRoot!.querySelector('.minimal-times')!;
    const rise = row.querySelector('.minimal-time.rise')!;
    const zenith = row.querySelector('.minimal-time.zenith')!;
    const set = row.querySelector('.minimal-time.set')!;
    const time = /\d{1,2}[:.]\d{2}/;

    expect(rise.textContent ?? '').toMatch(time);
    expect(set.textContent ?? '').toMatch(time);
    expect(zenith.textContent ?? '').toMatch(time);
    expect(zenith.textContent).toContain('Zenit');

    // Links der Aufgang, mittig der Zenit, rechts der Untergang.
    const order = [...row.children];
    expect(order.indexOf(rise)).toBeLessThan(order.indexOf(zenith));
    expect(order.indexOf(zenith)).toBeLessThan(order.indexOf(set));

    // Die vollständigen Bezeichnungen stehen im Tooltip.
    expect(rise.getAttribute('title')).toContain('Sonnenaufgang');
    expect(set.getAttribute('title')).toContain('Sonnenuntergang');
    expect(zenith.getAttribute('title')).toContain('Zenit');

    // 12 px Zeile, der Rest gehört dem Verlauf: 48 − 2 × 4 − 12 = 28 px.
    expect((row as HTMLElement).style.height).toBe('12px');
    expect(card.shadowRoot!.querySelector('.chart-wrap')!.getAttribute('style')).toContain(
      '28px',
    );
  });

  it('lässt Auf-/Untergang und Zenit getrennt abschalten', async () => {
    const onlyZenith = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
      minimal_show_times: false,
    });
    expect(onlyZenith.shadowRoot!.querySelector('.minimal-time.rise')).toBeNull();
    expect(onlyZenith.shadowRoot!.querySelector('.minimal-time.set')).toBeNull();
    expect(onlyZenith.shadowRoot!.querySelector('.minimal-time.zenith')).not.toBeNull();

    const onlyTimes = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
      minimal_show_zenith: false,
    });
    expect(onlyTimes.shadowRoot!.querySelector('.minimal-time.zenith')).toBeNull();
    expect(onlyTimes.shadowRoot!.querySelector('.minimal-time.rise')).not.toBeNull();
    expect(onlyTimes.shadowRoot!.querySelector('.minimal-time.set')).not.toBeNull();

    const none = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
      minimal_show_times: false,
      minimal_show_zenith: false,
    });
    expect(none.shadowRoot!.querySelector('.minimal-times')).toBeNull();
    // Ohne Zeile gehört die frei gewordene Höhe dem Verlauf: 48 − 8 = 40 px.
    expect(none.shadowRoot!.querySelector('.chart-wrap')!.getAttribute('style')).toContain(
      '40px',
    );
  });

  it('zeigt die Zeitzzeile erst ab 36 px Kartenhöhe', async () => {
    const small = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 24,
    });
    expect(small.shadowRoot!.querySelector('.minimal-times')).toBeNull();
    const large = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 36,
    });
    expect(large.shadowRoot!.querySelector('.minimal-times')).not.toBeNull();
    // Rand (2 × 4 px) + Zeile (12 px) + kleinster Verlauf (16 px) = 36 px.
    expect(large.shadowRoot!.querySelector('.chart-wrap')!.getAttribute('style')).toContain(
      '16px',
    );
  });

  it('zeichnet die Sonne in Minimal-, Kompakt- und Volldarstellung gleich groß', async () => {
    const radius = (card: SunMoonCard) =>
      Number(card.shadowRoot!.querySelector('.now-sun circle')!.getAttribute('r'));
    const minimal = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 96,
    });
    const compact = await mountCard({
      type: 'custom:sun-moon-card',
      compact_mode: true,
      card_height: 160,
    });
    const full = await mountCard({ type: 'custom:sun-moon-card', card_height: 340 });
    // Dieselbe Regel überall: bis zur eingestellten Größe (Vorgabe 6 px).
    expect(radius(minimal)).toBe(6);
    expect(radius(compact)).toBe(6);
    expect(radius(full)).toBe(6);
  });

  it('richtet die Sonnengröße nach der Einstellung', async () => {
    const radius = (card: SunMoonCard) =>
      Number(card.shadowRoot!.querySelector('.now-sun circle')!.getAttribute('r'));
    const big = await mountCard({
      type: 'custom:sun-moon-card',
      card_height: 340,
      sun_marker_size: 12,
    });
    expect(radius(big)).toBe(12);
    const small = await mountCard({
      type: 'custom:sun-moon-card',
      card_height: 340,
      sun_marker_size: 3,
    });
    expect(radius(small)).toBe(3);
    // Auf dem schmalsten Streifen bleibt die Sonne unter dem eingestellten
    // Maß, damit sie den Verlauf nicht zudeckt.
    const tiny = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 24,
      sun_marker_size: 12,
    });
    expect(radius(tiny)).toBeLessThan(12);
    expect(radius(tiny)).toBeGreaterThanOrEqual(2.8);
  });

  it('richtet das Overlay nach den eingestellten Maßen', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
      popup_width: 900,
      popup_height: 600,
    });
    card
      .shadowRoot!.querySelector('ha-card')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));

    const panel = document.querySelector<HTMLElement>('.smc-popup > div')!;
    expect(panel.style.maxWidth).toBe('900px');
    expect(panel.style.width).toContain('900px');
    const full = document.querySelector('.smc-popup sun-moon-card') as SunMoonCard;
    await full.updateComplete;
    expect(full.shadowRoot!.querySelector('ha-card')!.getAttribute('style')).toContain(
      '600px',
    );
    card.remove();
    expect(document.querySelector('.smc-popup')).toBeNull();
  });

  it('meldet dem Dashboard eine Zeile als Mindesthöhe', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    expect(card.getCardSize()).toBe(1);
    expect(card.getGridOptions().min_rows).toBe(1);
  });
});

describe('Gestaltung', () => {
  it('setzt die Gestaltungsklassen vor dem ersten Rendern', async () => {
    const card = document.createElement('sun-moon-card') as SunMoonCard;
    const original = card.render.bind(card);
    const seen: string[] = [];
    // Die Klassen steuern die CSS-Variablen. Stünden sie erst nach dem
    // Rendern, blitzte die Karte im hellen Theme dunkel auf.
    (card as unknown as { render: () => unknown }).render = () => {
      seen.push(card.className);
      return original();
    };
    card.setConfig({ type: 'custom:sun-moon-card' });
    card.hass = mockHass();
    document.body.append(card);
    await card.updateComplete;
    expect(seen.length).toBeGreaterThan(0);
    expect(seen[0]).toContain('smc-dark');
    expect(seen[0]).toContain('smc-glass');
  });
});

describe('Klick-Aktionen', () => {
  /** Erzeugt einen Minimalstreifen; `config` ergänzt die Konfiguration. */
  async function mountStrip(
    config: SunMoonCardConfig = {},
    hass: HomeAssistant | undefined = undefined,
  ): Promise<{ card: SunMoonCard; strip: HTMLElement }> {
    const card = await mountCard(
      { type: 'custom:sun-moon-card', minimal_mode: true, card_height: 48, ...config },
      hass ? { hass } : {},
    );
    return { card, strip: card.shadowRoot!.querySelector('ha-card')! };
  }

  /** Sammelt Ereignisse eines Namens, die beim Dokument ankommen. */
  function collect(target: EventTarget, type: string): CustomEvent[] {
    const events: CustomEvent[] = [];
    target.addEventListener(type, (event) => events.push(event as CustomEvent));
    return events;
  }

  it('öffnet ohne konfigurierte Aktion weiter das Overlay', async () => {
    const { card, strip } = await mountStrip();
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(document.querySelector('.smc-popup')).not.toBeNull();
    card.remove();
  });

  it('öffnet das Overlay auf Wunsch ausdrücklich', async () => {
    const { card, strip } = await mountStrip({ tap_action: { action: 'open-popup' } });
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(document.querySelector('.smc-popup')).not.toBeNull();
    card.remove();
  });

  it('tut bei `none` nichts', async () => {
    const { card, strip } = await mountStrip({ tap_action: { action: 'none' } });
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(document.querySelector('.smc-popup')).toBeNull();
    card.remove();
  });

  it('meldet `more-info` für die Sonnen-Entität', async () => {
    const { card, strip } = await mountStrip({ tap_action: { action: 'more-info' } });
    const events = collect(document, 'hass-more-info');
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(events).toHaveLength(1);
    expect(events[0]!.detail).toEqual({ entityId: 'sun.sun' });
    expect(document.querySelector('.smc-popup')).toBeNull();
    card.remove();
  });

  it('meldet `more-info` für eine benannte Entität', async () => {
    const { card, strip } = await mountStrip({
      tap_action: { action: 'more-info', entity: 'weather.home' },
    });
    const events = collect(document, 'hass-more-info');
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(events[0]!.detail).toEqual({ entityId: 'weather.home' });
    card.remove();
  });

  it('wechselt bei `navigate` die Seite', async () => {
    const before = window.location.pathname;
    const { card, strip } = await mountStrip({
      tap_action: { action: 'navigate', navigation_path: '/lovelace/wetter' },
    });
    const events = collect(window, 'location-changed');
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(events).toHaveLength(1);
    expect(events[0]!.detail).toEqual({ replace: false });
    expect(window.location.pathname).toBe('/lovelace/wetter');
    history.pushState(null, '', before);
    card.remove();
  });

  it('öffnet bei `url` eine Adresse', async () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    const { card, strip } = await mountStrip({
      tap_action: { action: 'url', url_path: 'https://example.org/wetter' },
    });
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(open).toHaveBeenCalledWith('https://example.org/wetter', '_blank');
    open.mockRestore();
    card.remove();
  });

  it('ruft bei `call-service` einen Dienst', async () => {
    const hass = mockHass();
    const callService = vi.fn();
    hass.callService = callService;
    const { card, strip } = await mountStrip(
      {
        tap_action: {
          action: 'call-service',
          service: 'light.turn_on',
          data: { brightness: 120 },
          target: { entity_id: 'light.wohnzimmer' },
        },
      },
      hass,
    );
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(callService).toHaveBeenCalledWith(
      'light',
      'turn_on',
      { brightness: 120 },
      { entity_id: 'light.wohnzimmer' },
    );
    card.remove();
  });

  it('versteht `perform-action` als neueren Namen', async () => {
    const hass = mockHass();
    const callService = vi.fn();
    hass.callService = callService;
    const { card, strip } = await mountStrip(
      { tap_action: { action: 'perform-action', perform_action: 'light.turn_off' } },
      hass,
    );
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(callService).toHaveBeenCalledWith('light', 'turn_off', undefined, undefined);
    card.remove();
  });

  it('schaltet bei `toggle` die Entität', async () => {
    const hass = mockHass();
    const callService = vi.fn();
    hass.callService = callService;
    const { card, strip } = await mountStrip(
      { tap_action: { action: 'toggle', entity: 'light.flur' } },
      hass,
    );
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(callService).toHaveBeenCalledWith(
      'homeassistant',
      'toggle',
      { entity_id: 'light.flur' },
      undefined,
    );
    card.remove();
  });

  it('reicht `fire-dom-event` an Erweiterungen weiter', async () => {
    const { card, strip } = await mountStrip({
      tap_action: { action: 'fire-dom-event', browser_mod: { service: 'browser_mod.popup' } },
    });
    const events = collect(window, 'll-custom');
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(events).toHaveLength(1);
    expect(events[0]!.detail.action).toBe('fire-dom-event');
    card.remove();
  });

  it('führt die Halte-Aktion nach der Haltezeit aus', async () => {
    vi.useFakeTimers();
    const { card, strip } = await mountStrip({
      hold_action: { action: 'more-info', entity: 'weather.home' },
    });
    const events = collect(document, 'hass-more-info');
    strip.dispatchEvent(new Event('pointerdown', { bubbles: true }));
    expect(events).toHaveLength(0);
    vi.advanceTimersByTime(HOLD_DELAY + 20);
    expect(events).toHaveLength(1);
    strip.dispatchEvent(new Event('pointerup', { bubbles: true }));
    // Der Klick, der dem Halten folgt, gehört nicht zur Antipp-Aktion.
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(document.querySelector('.smc-popup')).toBeNull();
    expect(events).toHaveLength(1);
    vi.useRealTimers();
    card.remove();
  });

  it('bricht die Halte-Aktion ab, wenn die Berührung vorher endet', async () => {
    vi.useFakeTimers();
    const { card, strip } = await mountStrip({ hold_action: { action: 'more-info' } });
    const events = collect(document, 'hass-more-info');
    strip.dispatchEvent(new Event('pointerdown', { bubbles: true }));
    vi.advanceTimersByTime(HOLD_DELAY - 200);
    strip.dispatchEvent(new Event('pointerup', { bubbles: true }));
    vi.advanceTimersByTime(HOLD_DELAY + 100);
    expect(events).toHaveLength(0);
    vi.useRealTimers();
    card.remove();
  });

  it('führt die Doppeltipp-Aktion aus und wartet dafür ab', async () => {
    vi.useFakeTimers();
    const { card, strip } = await mountStrip({
      tap_action: { action: 'more-info', entity: 'sun.sun' },
      double_tap_action: { action: 'more-info', entity: 'weather.home' },
    });
    const events = collect(document, 'hass-more-info');
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(events).toHaveLength(0);
    vi.advanceTimersByTime(50);
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(events).toHaveLength(1);
    expect(events[0]!.detail).toEqual({ entityId: 'weather.home' });
    vi.useRealTimers();
    card.remove();
  });

  it('führt beim einfachen Antippen die Antipp-Aktion aus', async () => {
    vi.useFakeTimers();
    const { card, strip } = await mountStrip({
      tap_action: { action: 'more-info', entity: 'sun.sun' },
      double_tap_action: { action: 'none' },
    });
    const events = collect(document, 'hass-more-info');
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(events).toHaveLength(0);
    vi.advanceTimersByTime(DOUBLE_TAP_DELAY + 20);
    expect(events).toHaveLength(1);
    expect(events[0]!.detail).toEqual({ entityId: 'sun.sun' });
    vi.useRealTimers();
    card.remove();
  });

  it('meldet eine unbekannte Aktion statt sie still zu verwerfen', async () => {
    consoleWarn.mockClear();
    const { card, strip } = await mountStrip({ tap_action: { action: 'tanzen' } });
    expect(consoleWarn.mock.calls.flat().join(' ')).toContain('tanzen');
    // Die Aktion ist verworfen – der Streifen bleibt beim Overlay.
    strip.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(document.querySelector('.smc-popup')).not.toBeNull();
    card.remove();
  });

  it('löst die Antipp-Aktion auch per Tastatur aus', async () => {
    const { card, strip } = await mountStrip({
      tap_action: { action: 'more-info', entity: 'weather.home' },
    });
    const events = collect(document, 'hass-more-info');
    strip.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(events).toHaveLength(1);
    expect(document.querySelector('.smc-popup')).toBeNull();
    card.remove();
  });
});

describe('Overlay', () => {
  /** Öffnet das Overlay eines Minimalstreifens. */
  async function openPopup(): Promise<SunMoonCard> {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
    });
    card
      .shadowRoot!.querySelector('ha-card')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    return card;
  }

  it('sperrt das Scrollen im Hintergrund und gibt es wieder frei', async () => {
    document.body.style.overflow = 'auto';
    const card = await openPopup();
    expect(document.body.style.overflow).toBe('hidden');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(document.body.style.overflow).toBe('auto');
    document.body.style.overflow = '';
    card.remove();
  });

  it('hält den Fokus im Dialog', async () => {
    // `document.activeElement` meldet bei Fokus in einer Schattenwurzel den
    // Host – für die Prüfung lösen wir eine Ebene auf.
    const active = (): Element | null => {
      const element = document.activeElement as HTMLElement | null;
      return element?.shadowRoot?.activeElement ?? element;
    };
    const card = await openPopup();
    const overlay = document.querySelector('.smc-popup')!;
    const close = overlay.querySelector('button')!;
    const full = overlay.querySelector('sun-moon-card') as SunMoonCard;
    const inner = full.shadowRoot!.querySelector<HTMLElement>('ha-card[tabindex]')!;

    // Nach dem Öffnen liegt der Fokus auf dem Schließen-Knopf.
    expect(active()).toBe(close);

    // Vom Schließen-Knopf – dem letzten Element – geht es an den Anfang.
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
    expect(active()).toBe(inner);

    // Mit Rückwärts-Tab vom Anfang wieder ans Ende.
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true }),
    );
    expect(active()).toBe(close);

    // Ist der Fokus abgewandert, holt ihn die Falle zurück.
    (document.body as HTMLElement).focus();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
    expect(active()).toBe(inner);
    card.remove();
  });

  it('trägt im Overlay keine eigenen Aktionen ein', async () => {
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
      tap_action: { action: 'open-popup' },
      hold_action: { action: 'more-info' },
    });
    card
      .shadowRoot!.querySelector('ha-card')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    const overlay = document.querySelector('.smc-popup');
    // Ohne Overlay gäbe es gar nichts zu prüfen.
    expect(overlay).not.toBeNull();
    const full = overlay!.querySelector('sun-moon-card') as SunMoonCard;
    await full.updateComplete;
    const inner = full.shadowRoot!.querySelector('ha-card')!;
    const events: CustomEvent[] = [];
    document.addEventListener('hass-more-info', (event) => events.push(event as CustomEvent));
    inner.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    // Die vollständige Karte im Overlay kennt keine Klick-Aktionen – sonst
    // öffnete ein Klick hinein ein zweites Overlay.
    expect(events).toHaveLength(0);
    expect(document.querySelectorAll('.smc-popup')).toHaveLength(1);
    card.remove();
  });
});

describe('Uhr', () => {
  /** Zeitmesser der Karte (privat, deshalb über das Objekt beobachtet). */
  function clockSpies(card: SunMoonCard): {
    start: ReturnType<typeof vi.spyOn>;
    stop: ReturnType<typeof vi.spyOn>;
  } {
    const internals = card as unknown as { _startClock: () => void; _stopClock: () => void };
    const start = vi.spyOn(internals, '_startClock');
    const stop = vi.spyOn(internals, '_stopClock');
    start.mockClear();
    stop.mockClear();
    return { start, stop };
  }

  it('hält die Uhr an, wenn das Dokument in den Hintergrund wechselt', async () => {
    const card = await mountCard();
    const hidden = vi.spyOn(document, 'hidden', 'get');
    const { start, stop } = clockSpies(card);

    hidden.mockReturnValue(true);
    document.dispatchEvent(new Event('visibilitychange'));
    expect(stop).toHaveBeenCalled();
    expect(start).not.toHaveBeenCalled();

    hidden.mockReturnValue(false);
    document.dispatchEvent(new Event('visibilitychange'));
    expect(start).toHaveBeenCalled();

    hidden.mockRestore();
    card.remove();
  });

  it('hält die Uhr an, wenn die Karte aus dem Sichtfeld wandert', async () => {
    const callbacks: IntersectionObserverCallback[] = [];
    class FakeObserver implements IntersectionObserver {
      public readonly root = null;
      public readonly rootMargin = '';
      public readonly thresholds: readonly number[] = [];
      public constructor(callback: IntersectionObserverCallback) {
        callbacks.push(callback);
      }
      public observe(): void {}
      public unobserve(): void {}
      public disconnect(): void {}
      public takeRecords(): IntersectionObserverEntry[] {
        return [];
      }
    }
    const globals = globalThis as { IntersectionObserver?: unknown };
    globals.IntersectionObserver = FakeObserver;

    const card = await mountCard();
    const { start, stop } = clockSpies(card);
    expect(callbacks).toHaveLength(1);

    callbacks[0]!(
      [{ isIntersecting: false } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );
    expect(stop).toHaveBeenCalled();
    expect(start).not.toHaveBeenCalled();

    callbacks[0]!(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );
    expect(start).toHaveBeenCalled();

    delete globals.IntersectionObserver;
    card.remove();
  });
});

describe('Modell-Cache', () => {
  it('überlebt die Konfiguration einer zweiten Karte', async () => {
    const card = await mountCard();
    const hass = mockHass();
    const { config } = resolveConfig({ type: 'custom:sun-moon-card' }, 'de');
    const now = new Date();
    const first = getModel(config, hass, now);
    expect(getModel(config, hass, now)).toBe(first);

    // Früher leerte `setConfig()` den gemeinsamen Cache aller Karten.
    const other = document.createElement('sun-moon-card') as SunMoonCard;
    other.setConfig({ type: 'custom:sun-moon-card', card_height: 260 });
    document.body.append(other);
    expect(getModel(config, hass, now)).toBe(first);
    other.remove();
    card.remove();
  });
});

describe('Restzeiten', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  /** Friert die Uhr ein, damit die Restzeit bestimmbar bleibt. */
  function freeze(iso: string): void {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(iso));
  }

  /** Alle Chips der Kopfzeile als Text. */
  function chips(card: SunMoonCard): string[] {
    return [...card.shadowRoot!.querySelectorAll('.header .meta-chip')].map((node) =>
      (node.textContent ?? '').trim(),
    );
  }

  /** Alle Zeilen der Ablesung unter der Himmelsansicht. */
  function readout(card: SunMoonCard): string[] {
    return [...card.shadowRoot!.querySelectorAll('.sky-readout span')].map((node) =>
      (node.textContent ?? '').trim(),
    );
  }

  it('nennt die Restzeit bis zum Sonnenuntergang', async () => {
    freeze('2026-10-26T15:00:00+01:00');
    const card = await mountCard(
      { type: 'custom:sun-moon-card', card_height: 340, show_moon: false, show_twilight: false },
      { width: 900 },
    );
    const chip = card.shadowRoot!.querySelector('.header .meta-chip');
    expect((chip?.textContent ?? '').trim()).toMatch(/^Untergang in \d{1,2}:\d{2}$/);
    expect(chip?.getAttribute('title')).toMatch(/^Sonnenuntergang \d{1,2}:\d{2}$/);
    expect(readout(card).some((row) => /^Sonnenuntergang in \d+ h \d+ min$/.test(row))).toBe(true);
  });

  it('nennt nach Sonnenuntergang den Aufgang des Folgetages', async () => {
    freeze('2026-10-26T22:00:00+01:00');
    const card = await mountCard(
      { type: 'custom:sun-moon-card', card_height: 340, show_moon: false, show_twilight: false },
      { width: 900 },
    );
    const chip = card.shadowRoot!.querySelector('.header .meta-chip');
    expect((chip?.textContent ?? '').trim()).toMatch(/^Aufgang in \d{1,2}:\d{2}$/);
    expect(chip?.getAttribute('title')).toMatch(/^Sonnenaufgang \d{1,2}:\d{2} \(morgen\)$/);
  });

  it('nennt die Restzeit bis zum nächsten Mondereignis', async () => {
    freeze('2026-10-26T15:00:00+01:00');
    const card = await mountCard(
      { type: 'custom:sun-moon-card', card_height: 340, show_sun: false, show_twilight: false },
      { width: 900 },
    );
    const chip = card.shadowRoot!.querySelector('.header .meta-chip');
    expect(chip?.getAttribute('title')).toMatch(/^Mond(auf|unter)gang \d{1,2}:\d{2}/);
  });

  it('zeigt keine Restzeit, wenn sie abgeschaltet ist', async () => {
    freeze('2026-10-26T15:00:00+01:00');
    const card = await mountCard(
      { type: 'custom:sun-moon-card', card_height: 340, show_remaining_time: false },
      { width: 900 },
    );
    expect(chips(card).some((text) => text.includes(' in '))).toBe(false);
    expect(readout(card).filter((row) => row.includes(' in '))).toHaveLength(0);
  });

  it('zeigt im Kompaktmodus keine Restzeit', async () => {
    // Der Kompaktmodus lässt Kopfzeile, Himmelsansicht und Fußzeile weg –
    // und damit auch die Restzeit. Erfinden darf die Karte hier nichts.
    freeze('2026-10-26T15:00:00+01:00');
    const card = await mountCard(
      { type: 'custom:sun-moon-card', card_height: 340, compact_mode: true },
      { width: 900 },
    );
    expect(card.shadowRoot!.querySelector('.header')).toBeNull();
    expect(card.shadowRoot!.querySelector('.footer')).toBeNull();
    expect(card.shadowRoot!.textContent ?? '').not.toMatch(/\bin \d+ h \d+ min\b/);
  });

  it('nennt die Restzeit im Tooltip des Minimalstreifens', async () => {
    freeze('2026-10-26T15:00:00+01:00');
    const card = await mountCard({
      type: 'custom:sun-moon-card',
      minimal_mode: true,
      card_height: 48,
      show_moon: false,
      show_twilight: false,
    });
    const title = card.shadowRoot!.querySelector('ha-card')?.getAttribute('title') ?? '';
    const label = card.shadowRoot!.querySelector('ha-card')?.getAttribute('aria-label') ?? '';
    expect(title).toMatch(/Sonnenuntergang in \d+ h \d+ min/);
    expect(label).toMatch(/Sonnenuntergang in \d+ h \d+ min/);
  });

  it('beschränkt die Restzeiten auf den Platz der Himmelsansicht', async () => {
    // Jede Zeile verkleinert die Himmelskuppel. Bei viel Höhe stehen alle
    // drei Restzeiten, bei wenig Höhe bleibt nur die nächste.
    freeze('2026-10-26T15:00:00+01:00');
    const countdownRows = (card: SunMoonCard): string[] =>
      readout(card).filter((row) => / in \d/.test(row));

    const tall = await mountCard(
      { type: 'custom:sun-moon-card', card_height: 420 },
      { width: 720 },
    );
    expect(countdownRows(tall)).toHaveLength(3);

    const short = await mountCard(
      { type: 'custom:sun-moon-card', card_height: 340 },
      { width: 900 },
    );
    expect(countdownRows(short)).toHaveLength(1);
    // Übrig bleibt die nächste Restzeit – dieselbe wie in der hohen Karte.
    expect(countdownRows(short)[0]).toBe(countdownRows(tall)[0]);
  });

  it('nennt die Restzeit auf Englisch', async () => {
    freeze('2026-10-26T15:00:00+01:00');
    const card = await mountCard(
      {
        type: 'custom:sun-moon-card',
        card_height: 340,
        language: 'en',
        show_moon: false,
        show_twilight: false,
      },
      { width: 900, hass: mockHass('berlin', { language: 'en' }) },
    );
    const chip = card.shadowRoot!.querySelector('.header .meta-chip');
    expect(chip?.getAttribute('title')).toMatch(/^Sunset \d{1,2}:\d{2}/);
    expect(readout(card).some((row) => /^Sunset in \d+ h \d+ min$/.test(row))).toBe(true);
  });

  it('erfindet in der Polarnacht keine Restzeit', async () => {
    freeze('2026-12-21T12:00:00+01:00');
    const card = await mountCard(
      { type: 'custom:sun-moon-card', card_height: 340, show_moon: false, show_twilight: false },
      { width: 900, hass: mockHass('longyearbyen') },
    );
    expect(chips(card).some((text) => text.includes(' in '))).toBe(false);
    expect(readout(card).filter((row) => row.includes(' in '))).toHaveLength(0);
  });
});
