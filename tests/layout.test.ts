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
  COLUMN_GAP,
  DETAILS_HEIGHT_DETAILED,
  EVENTS_HEIGHT,
  EVENTS_HEIGHT_COMPACT,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  LEGEND_GAP,
  LEGEND_HEIGHT,
  MAX_CARD_HEIGHT,
  MIN_CARD_HEIGHT,
  MIN_CHART_HEIGHT_WITH_FOOTER,
  MINIMAL_MIN_CARD_HEIGHT,
  MINIMAL_MIN_CHART_HEIGHT,
  MINIMAL_PADDING,
  MINIMAL_TIMES_HEIGHT,
  MINIMAL_TIMES_MIN_HEIGHT,
  PADDING_COMPACT,
  PADDING_REGULAR,
  ROOT_GAP,
  SKY_VIEW_MAX_WIDTH,
  TWO_COLUMN_MIN_CARD_WIDTH,
  computeLayout,
  resolveAutoHeight,
} from '../src/const.js';
import { resolveConfig } from '../src/model.js';
import type { SunMoonCardConfig } from '../src/types.js';

const HEIGHTS = [120, 140, 160, 180, 200, 220, 260, 280, 300, 340, 360, 380, 420, 500, 600, 800];
const WIDTHS = [300, 340, 380, 460, 520, 620, 700, 780, 900, 1200];

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
          layout.footerHeight +
          layout.legendHeight +
          layout.chartHeight +
          layout.gaps +
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
        layout.showFooter,
        layout.showLegend,
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
      // Die Legende gehört zum Tagesverlauf und wird mitgerechnet: Sie
      // ersetzt keine Zeitangabe, sondern erklärt die Flächen.
      const chartArea =
        layout.chartHeight + layout.legendHeight + (layout.showLegend ? LEGEND_GAP : 0);
      if (layout.showEvents) {
        // Mit Fußzeile gibt der Verlauf deren Platz ab; dann gilt die
        // niedrigere, aber immer noch lesbare Untergrenze.
        const guaranteed = layout.showFooter
          ? MIN_CHART_HEIGHT_WITH_FOOTER
          : CHART_SPACE_BEFORE_EVENTS;
        expect(chartArea, `Ereignisleiste bei ${height}px`).toBeGreaterThanOrEqual(guaranteed);
      }
      if (layout.showDetails) {
        // Die Fußzeile wird nach der Detailzeile reserviert und ist der
        // am leichtesten verzichtbare Bereich; der Verlauf behält darüber
        // hinaus den zugesicherten Platz.
        expect(chartArea, `Detailzeile bei ${height}px`).toBeGreaterThanOrEqual(
          CHART_SPACE_BEFORE_DETAILS - FOOTER_HEIGHT,
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
        layout.footerHeight +
        layout.legendHeight +
        layout.chartHeight +
        layout.gaps +
        2 * layout.padding;
      expect(height - used).toBe(0);
    }
  });

  it('blendet die Kopfzeile bei wenig Platz aus', () => {
    expect(layoutFor({}, 120).showHeader).toBe(false);
    expect(layoutFor({}, 220).showHeader).toBe(false);
    expect(layoutFor({}, 240).showHeader).toBe(true);
    expect(layoutFor({}, 300).showHeader).toBe(true);
  });

  it('schaltet Bereiche beim Wachsen der Karte nur ein, nie wieder aus', () => {
    // Ein Bereich, der bei einer Höhe sichtbar ist, bleibt bei jeder
    // größeren Höhe sichtbar (kein Flackern beim Anpassen der Höhe).
    const seen = { header: false, events: false, details: false, footer: false };
    for (let height = MIN_CARD_HEIGHT; height <= MAX_CARD_HEIGHT; height += 1) {
      const layout = layoutFor({}, height);
      for (const key of ['header', 'events', 'details', 'footer'] as const) {
        const visible =
          key === 'header'
            ? layout.showHeader
            : key === 'events'
              ? layout.showEvents
              : key === 'details'
                ? layout.showDetails
                : layout.showFooter;
        if (seen[key] && !visible) {
          throw new Error(`Bereich ${key} verschwindet bei ${height}px wieder`);
        }
        if (visible) seen[key] = true;
      }
    }
    expect(seen).toEqual({ header: true, events: true, details: true, footer: true });
  });

  it('blendet die Ereignisleiste nur bei sehr geringer Höhe aus', () => {
    expect(layoutFor({}, 120).showEvents).toBe(false);
    expect(layoutFor({}, 170).showEvents).toBe(false);
    expect(layoutFor({}, 180).showEvents).toBe(true);
    expect(layoutFor({}, 280).showEvents).toBe(true);
  });

  it('zeigt die Detailzeile erst ab komfortabler Höhe', () => {
    expect(layoutFor({}, 160).showDetails).toBe(false);
    expect(layoutFor({}, 220).showDetails).toBe(false);
    expect(layoutFor({}, 280).showDetails).toBe(false);
    expect(layoutFor({}, 300).showDetails).toBe(false);
    expect(layoutFor({}, 320).showDetails).toBe(true);
    expect(layoutFor({}, 360).showDetails).toBe(true);
  });

  it('nennt die Höhe jedes sichtbaren Bereichs', () => {
    const layout = layoutFor({ show_astronomical_details: true }, 360);
    expect(layout.showHeader).toBe(true);
    expect(layout.headerHeight).toBe(HEADER_HEIGHT);
    expect(layout.eventsHeight).toBe(EVENTS_HEIGHT);
    expect(layout.detailsHeight).toBe(DETAILS_HEIGHT_DETAILED);
    expect(layout.footerHeight).toBe(FOOTER_HEIGHT);
    expect(layout.legendHeight).toBe(LEGEND_HEIGHT);
    // Ein ROOT_GAP je sichtbarem Bereich plus LEGEND_GAP für die Legende.
    const visibleSections = [
      layout.showHeader,
      layout.showEvents,
      layout.showDetails,
      layout.showFooter,
    ].filter(Boolean).length;
    expect(layout.gaps).toBe(visibleSections * ROOT_GAP + (layout.showLegend ? LEGEND_GAP : 0));
  });

  it('nutzt im Kompaktmodus die schmalere Ereignisleiste', () => {
    const layout = layoutFor({ compact_mode: true }, 260);
    expect(layout.showEvents).toBe(true);
    expect(layout.eventsHeight).toBe(EVENTS_HEIGHT_COMPACT);
  });

  it('behält mit der Detailzeile einen lesbaren Verlauf', () => {
    // Beim Zuschalten der Detailzeile darf der Verlauf nicht unter die
    // zugesicherte Mindesthöhe fallen.
    for (const height of [302, 320, 360, 420]) {
      const layout = layoutFor({}, height);
      expect(layout.showDetails, `Höhe ${height}px`).toBe(true);
      const chartArea =
        layout.chartHeight + layout.legendHeight + (layout.showLegend ? LEGEND_GAP : 0);
      expect(chartArea, `Höhe ${height}px`).toBeGreaterThanOrEqual(CHART_SPACE_BEFORE_DETAILS);
    }
  });

  it('nutzt bei 120 px die gesamte Höhe für den Tagesverlauf', () => {
    const layout = layoutFor({}, 120);
    expect(layout.showHeader).toBe(false);
    expect(layout.showEvents).toBe(false);
    expect(layout.showFooter).toBe(false);
    expect(layout.showLegend).toBe(false);
    expect(layout.chartHeight).toBe(120 - 2 * layout.padding);
  });
});

describe('computeLayout – Breiten und Himmelsansicht', () => {
  it('stellt die Himmelsansicht erst ab der Mindestbreite als Spalte dar', () => {
    expect(layoutFor({}, 300, TWO_COLUMN_MIN_CARD_WIDTH - 20).skyViewSide).toBe(false);
    expect(layoutFor({}, 300, TWO_COLUMN_MIN_CARD_WIDTH).skyViewSide).toBe(true);
  });

  it('nutzt unterhalb der Mindestbreite die gesamte Breite für den Verlauf', () => {
    for (const width of [300, 340, 380, 460, 520, 620]) {
      const layout = layoutFor({}, 340, width);
      expect(layout.skyViewSide, `Breite ${width}px`).toBe(false);
      expect(layout.chartWidth, `Breite ${width}px`).toBe(width - 2 * layout.padding);
    }
  });

  it('teilt die Breite im Verhältnis 8:4 auf und bleibt in der Karte', () => {
    for (const width of [700, 780, 900, 1200]) {
      const layout = layoutFor({}, 340, width);
      expect(layout.skyViewSide, `Breite ${width}px`).toBe(true);
      const used =
        2 * layout.padding + layout.chartWidth + layout.skyViewWidth + COLUMN_GAP;
      expect(used, `Breite ${width}px`).toBe(width);
      // 8:4-Verhältnis (Tagesverlauf : Himmelsansicht), solange die
      // Höchstbreite der Spalte nicht greift.
      if (layout.skyViewWidth < SKY_VIEW_MAX_WIDTH) {
        expect(layout.chartWidth / layout.skyViewWidth).toBeCloseTo(2, 1);
      }
    }
  });

  it('nutzt die Fußzeile erst zusammen mit der Ereignisleiste', () => {
    expect(layoutFor({}, 140).showFooter).toBe(false);
    expect(layoutFor({}, 170).showFooter).toBe(false);
    expect(layoutFor({}, 180).showFooter).toBe(true);
    expect(layoutFor({}, 340).showFooter).toBe(true);
  });

  it('zeigt die Legende erst, wenn der Verlauf groß genug bleibt', () => {
    expect(layoutFor({}, 120).showLegend).toBe(false);
    expect(layoutFor({}, 340).showLegend).toBe(true);
  });

  it('nutzt die Detailzeile als Ersatz für die Spalte', () => {
    const narrow = layoutFor({}, 360, 340);
    expect(narrow.skyViewSide).toBe(false);
    expect(narrow.skyViewInline).toBe(true);
  });

  it('begrenzt die Breite der Spalte', () => {
    const wide = layoutFor({}, 300, 1200);
    expect(wide.skyViewWidth).toBeGreaterThanOrEqual(150);
    expect(wide.skyViewWidth).toBeLessThanOrEqual(SKY_VIEW_MAX_WIDTH);
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

describe('computeLayout – Minimalmodus', () => {
  const heights = [24, 32, 48, 64, 96, 120, 200, 340, 800];

  it('schaltet jeden Bereich außer dem Zeitstrahl ab', () => {
    for (const height of heights) {
      for (const width of WIDTHS) {
        const layout = layoutFor({ minimal_mode: true }, height, width);
        expect(layout.minimal).toBe(true);
        expect(layout.showHeader).toBe(false);
        expect(layout.showEvents).toBe(false);
        expect(layout.showDetails).toBe(false);
        expect(layout.showFooter).toBe(false);
        expect(layout.showLegend).toBe(false);
        expect(layout.skyViewSide).toBe(false);
        expect(layout.skyViewInline).toBe(false);
        expect(layout.skyViewWidth).toBe(0);
        expect(layout.headerHeight).toBe(0);
        expect(layout.eventsHeight).toBe(0);
        expect(layout.detailsHeight).toBe(0);
        expect(layout.footerHeight).toBe(0);
        expect(layout.legendHeight).toBe(0);
        expect(layout.compact).toBe(false);
      }
    }
  });

  it('gibt die gesamte Höhe abzüglich Rand und Zeitzeile an den Zeitstrahl', () => {
    for (const height of heights) {
      const layout = layoutFor({ minimal_mode: true }, height);
      expect(layout.gaps).toBe(0);
      expect(layout.padding).toBe(MINIMAL_PADDING);
      expect(
        layout.chartHeight + 2 * layout.padding + layout.minimalTimesHeight,
      ).toBe(height);
    }
  });

  it('funktioniert unter 100 px Kartenhöhe', () => {
    for (const height of [24, 40, 64, 96]) {
      const { config } = resolveConfig({ minimal_mode: true, card_height: height });
      expect(config.card_height).toBe(height);
      const layout = computeLayout(height, 620, config);
      expect(layout.minimal).toBe(true);
      expect(layout.chartHeight).toBeGreaterThanOrEqual(MINIMAL_MIN_CHART_HEIGHT);
      expect(
        layout.chartHeight + 2 * layout.padding + layout.minimalTimesHeight,
      ).toBe(height);
    }
  });

  it('nutzt die volle Breite für den Zeitstrahl', () => {
    for (const width of WIDTHS) {
      const layout = layoutFor({ minimal_mode: true }, 48, width);
      expect(layout.chartWidth).toBe(Math.max(40, width - 2 * MINIMAL_PADDING));
    }
  });

  it('unterschreitet die kleinste Verlaufshöhe nicht', () => {
    const { config } = resolveConfig({ minimal_mode: true, card_height: MINIMAL_MIN_CARD_HEIGHT });
    const layout = computeLayout(10, 620, config);
    expect(layout.chartHeight).toBe(MINIMAL_MIN_CHART_HEIGHT);
  });

  it('zieht die Zeitzeile vom Zeitstrahl ab', () => {
    for (const height of [MINIMAL_TIMES_MIN_HEIGHT, 48, 96, 340, 800]) {
      const layout = layoutFor({ minimal_mode: true }, height);
      expect(layout.minimalTimesHeight).toBe(MINIMAL_TIMES_HEIGHT);
      expect(layout.chartHeight).toBe(height - 2 * MINIMAL_PADDING - MINIMAL_TIMES_HEIGHT);
      expect(layout.chartHeight).toBeGreaterThanOrEqual(MINIMAL_MIN_CHART_HEIGHT);
    }
  });

  it('lässt die Zeitzeile unter 36 px weg', () => {
    for (const height of [24, 28, 32, 35]) {
      const layout = layoutFor({ minimal_mode: true }, height);
      expect(layout.minimalTimesHeight).toBe(0);
      expect(layout.chartHeight).toBe(height - 2 * MINIMAL_PADDING);
    }
  });

  it('folgt den beiden Schaltern für die Zeitangaben', () => {
    expect(
      layoutFor(
        { minimal_mode: true, minimal_show_times: false, minimal_show_zenith: false },
        48,
      ).minimalTimesHeight,
    ).toBe(0);
    expect(
      layoutFor({ minimal_mode: true, minimal_show_times: false }, 48).minimalTimesHeight,
    ).toBe(MINIMAL_TIMES_HEIGHT);
    expect(
      layoutFor({ minimal_mode: true, minimal_show_zenith: false }, 48).minimalTimesHeight,
    ).toBe(MINIMAL_TIMES_HEIGHT);
  });

  it('bleibt ohne Minimalmodus unverändert', () => {
    for (const height of HEIGHTS) {
      const layout = layoutFor({}, height);
      expect(layout.minimal).toBe(false);
      expect(layout.minimalTimesHeight).toBe(0);
      expect(layout.chartHeight).toBeGreaterThanOrEqual(56);
    }
  });
});
