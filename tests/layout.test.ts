/**
 * Prüfung der Layout-Berechnung (`computeLayout`).
 *
 * Die Kartenhöhe ist frei konfigurierbar; das Layout muss deshalb in jedem
 * zulässigen Wertebereich funktionieren: ohne abgeschnittene Bereiche, ohne
 * tote Flächen und mit einem Tagesverlauf, der immer den größten Anteil
 * erhält.
 */

import { describe, expect, it } from 'vitest';

import {
  CARD_HEIGHT_RANGE,
  CHART_SPACE_BEFORE_DETAILS,
  CHART_SPACE_BEFORE_EVENTS,
  MAX_CARD_HEIGHT,
  MIN_CARD_HEIGHT,
  PADDING_COMPACT,
  PADDING_REGULAR,
  SKY_VIEW_MIN_CARD_WIDTH,
  computeLayout,
  resolveAutoHeight,
} from '../src/const.js';
import { resolveConfig } from '../src/model.js';
import type { SunMoonCardConfig } from '../src/types.js';

const HEIGHTS = [120, 140, 160, 180, 200, 220, 260, 280, 300, 340, 360, 420, 500, 600, 800];
const WIDTHS = [300, 340, 380, 460, 520, 620, 900];

function layoutFor(overrides: SunMoonCardConfig = {}, height = 280, width = 620) {
  const { config } = resolveConfig(overrides);
  return computeLayout(height, width, config);
}

describe('computeLayout – Höhen', () => {
  it('passt in jede zulässige Höhe hinein', () => {
    for (const height of HEIGHTS) {
      for (const width of WIDTHS) {
        const layout = layoutFor({}, height, width);
        const used =
          layout.headerHeight +
          layout.eventsHeight +
          layout.detailsHeight +
          layout.chartHeight +
          2 * layout.padding;
        expect(
          used,
          `Höhe ${height}px, Breite ${width}px: ${used}px > ${height}px`,
        ).toBeLessThanOrEqual(height);
      }
    }
  });

  it('reserviert für den Tagesverlauf mindestens 56 px', () => {
    for (const height of HEIGHTS) {
      expect(layoutFor({}, height).chartHeight).toBeGreaterThanOrEqual(56);
    }
  });

  it('vergrößert den Tagesverlauf monoton, solange dieselben Bereiche sichtbar sind', () => {
    // Beim Zuschalten eines Bereichs (Ereignisleiste, Detailzeile) gibt der
    // Tagesverlauf bewusst Platz ab. Innerhalb einer Bereichskombination
    // wächst er jedoch streng monoton mit der Kartenhöhe.
    const lastByRegime = new Map<string, number>();
    for (let height = MIN_CARD_HEIGHT; height <= MAX_CARD_HEIGHT; height += 4) {
      const layout = layoutFor({}, height);
      const regime = [
        layout.showHeader,
        layout.showEvents,
        layout.eventsHeight,
        layout.showDetails,
        layout.skyViewSide,
      ].join('|');
      const previous = lastByRegime.get(regime);
      if (previous !== undefined) {
        expect(layout.chartHeight, `Höhe ${height}px`).toBeGreaterThanOrEqual(previous);
      }
      lastByRegime.set(regime, layout.chartHeight);
    }
    expect(lastByRegime.size).toBeGreaterThan(1);
  });

  it('lässt dem Tagesverlauf beim Zuschalten von Bereichen genügend Platz', () => {
    for (let height = MIN_CARD_HEIGHT; height <= MAX_CARD_HEIGHT; height += 4) {
      const layout = layoutFor({}, height);
      if (layout.showEvents) {
        expect(layout.chartHeight, `Ereignisleiste bei ${height}px`).toBeGreaterThanOrEqual(
          CHART_SPACE_BEFORE_EVENTS,
        );
      }
      if (layout.showDetails) {
        expect(layout.chartHeight, `Detailzeile bei ${height}px`).toBeGreaterThanOrEqual(
          CHART_SPACE_BEFORE_DETAILS,
        );
      }
    }
  });

  it('lässt bei großen Höhen keine tote Fläche (Chart nutzt den Rest)', () => {
    for (const height of [400, 500, 600, 800]) {
      const layout = layoutFor({}, height);
      const used =
        layout.headerHeight +
        layout.eventsHeight +
        layout.detailsHeight +
        layout.chartHeight +
        2 * layout.padding;
      expect(height - used).toBe(0);
    }
  });

  it('blendet die Kopfzeile bei wenig Platz aus', () => {
    expect(layoutFor({}, 120).showHeader).toBe(false);
    expect(layoutFor({}, 300).showHeader).toBe(true);
  });

  it('schaltet Bereiche beim Wachsen der Karte nur ein, nie wieder aus', () => {
    // Ein Bereich, der bei einer Höhe sichtbar ist, bleibt bei jeder
    // größeren Höhe sichtbar (kein Flackern beim Anpassen der Höhe).
    const seen = { header: false, events: false, details: false };
    for (let height = MIN_CARD_HEIGHT; height <= MAX_CARD_HEIGHT; height += 1) {
      const layout = layoutFor({}, height);
      for (const key of ['header', 'events', 'details'] as const) {
        const visible =
          key === 'header'
            ? layout.showHeader
            : key === 'events'
              ? layout.showEvents
              : layout.showDetails;
        if (seen[key] && !visible) {
          throw new Error(`Bereich ${key} verschwindet bei ${height}px wieder`);
        }
        if (visible) seen[key] = true;
      }
    }
    expect(seen).toEqual({ header: true, events: true, details: true });
  });

  it('blendet die Ereignisleiste nur bei sehr geringer Höhe aus', () => {
    expect(layoutFor({}, 120).showEvents).toBe(false);
    expect(layoutFor({}, 160).showEvents).toBe(true);
    expect(layoutFor({}, 280).showEvents).toBe(true);
  });

  it('zeigt die Detailzeile erst ab komfortabler Höhe', () => {
    expect(layoutFor({}, 160).showDetails).toBe(false);
    expect(layoutFor({}, 220).showDetails).toBe(false);
    expect(layoutFor({}, 280).showDetails).toBe(false);
    expect(layoutFor({}, 360).showDetails).toBe(true);
  });

  it('nutzt bei 120 px die gesamte Höhe für den Tagesverlauf', () => {
    const layout = layoutFor({}, 120);
    expect(layout.showHeader).toBe(false);
    expect(layout.showEvents).toBe(false);
    expect(layout.chartHeight).toBe(120 - 2 * layout.padding);
  });
});

describe('computeLayout – Breiten und Himmelsansicht', () => {
  it('stellt die Himmelsansicht erst ab der Mindestbreite als Spalte dar', () => {
    expect(layoutFor({}, 300, SKY_VIEW_MIN_CARD_WIDTH - 20).skyViewSide).toBe(false);
    expect(layoutFor({}, 300, SKY_VIEW_MIN_CARD_WIDTH).skyViewSide).toBe(true);
  });

  it('nutzt die Detailzeile als Ersatz für die Spalte', () => {
    const narrow = layoutFor({}, 360, 340);
    expect(narrow.skyViewSide).toBe(false);
    expect(narrow.skyViewInline).toBe(true);
  });

  it('begrenzt die Breite der Spalte', () => {
    const wide = layoutFor({}, 300, 1200);
    expect(wide.skyViewWidth).toBeGreaterThanOrEqual(150);
    expect(wide.skyViewWidth).toBeLessThanOrEqual(210);
  });

  it('lässt bei `show_sky_view: false` die Himmelsansicht ganz weg', () => {
    const layout = layoutFor({ show_sky_view: false }, 300, 700);
    expect(layout.skyViewSide).toBe(false);
    expect(layout.skyViewInline).toBe(false);
  });
});

describe('computeLayout – Konfiguration', () => {
  it('hält sich an abgeschaltete Bereiche', () => {
    const layout = layoutFor(
      { show_header: false, show_events: false, show_day_chart: false },
      300,
      700,
    );
    expect(layout.showHeader).toBe(false);
    expect(layout.showEvents).toBe(false);
  });

  it('verzichtet im Kompaktmodus auf Kopfzeile und Detailzeile', () => {
    const layout = layoutFor({ compact_mode: true }, 300, 700);
    expect(layout.compact).toBe(true);
    expect(layout.showHeader).toBe(false);
    expect(layout.showDetails).toBe(false);
    expect(layout.skyViewSide).toBe(false);
    expect(layout.skyViewInline).toBe(false);
  });

  it('verwendet einen konstanten Innenabstand (monotones Wachstum)', () => {
    expect(layoutFor({}, 140).padding).toBe(layoutFor({}, 280).padding);
    expect(layoutFor({}, 800).padding).toBe(PADDING_REGULAR);
  });

  it('verkleinert den Innenabstand im Kompaktmodus', () => {
    expect(layoutFor({ compact_mode: true }, 280).padding).toBe(PADDING_COMPACT);
  });
});

describe('resolveAutoHeight', () => {
  it('liefert Höhen im zulässigen Bereich', () => {
    for (const width of WIDTHS) {
      const height = resolveAutoHeight(width);
      expect(height).toBeGreaterThanOrEqual(CARD_HEIGHT_RANGE[0]);
      expect(height).toBeLessThanOrEqual(CARD_HEIGHT_RANGE[1]);
    }
  });

  it('unterscheidet schmale und breite Karten', () => {
    expect(resolveAutoHeight(320)).not.toBe(resolveAutoHeight(800));
  });
});
