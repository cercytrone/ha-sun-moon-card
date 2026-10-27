/**
 * const.ts
 *
 * Standardwerte, Grenzwerte, Farbpaletten und Layout-Konstanten.
 */

import type { ResolvedConfig, SunMoonCardConfig } from './types.js';

/** Name der Custom Card, wie sie im YAML verwendet wird. */
export const CARD_TYPE = 'sun-moon-card';
/** Name des Custom Elements der Karte. */
export const CARD_ELEMENT_NAME = 'sun-moon-card';
/** Name des Custom Elements des Editors. */
export const EDITOR_ELEMENT_NAME = 'sun-moon-card-editor';

/** Kleinste sinnvolle Kartenhöhe in Pixeln. */
export const MIN_CARD_HEIGHT = 120;
/** Größte sinnvolle Kartenhöhe in Pixeln. */
export const MAX_CARD_HEIGHT = 800;
/**
 * Standardhöhe. 340 px zeigen Tagesverlauf, Himmelsansicht, Ereignisleiste
 * und Detailzeile ohne Gedränge.
 */
export const DEFAULT_CARD_HEIGHT = 340;
/** Höhe bei `card_height: auto` (schmale Karten / breite Karten). */
export const AUTO_HEIGHT_NARROW = 320;
export const AUTO_HEIGHT_WIDE = 360;

/** Dokumentierter und geprüfter Wertebereich der Kartenhöhe. */
export const CARD_HEIGHT_RANGE: [number, number] = [MIN_CARD_HEIGHT, MAX_CARD_HEIGHT];
/** Im Editor und in der Dokumentation genannte Empfehlung. */
export const CARD_HEIGHT_RECOMMENDED: [number, number] = [180, 420];

/** Standardkonfiguration – die Karte sieht damit ohne weitere Einstellungen gut aus. */
export const DEFAULT_CONFIG: Omit<ResolvedConfig, 'type'> = {
  entity: 'sun.sun',
  moon_entity: 'sensor.moon',
  card_height: DEFAULT_CARD_HEIGHT,
  show_sun: true,
  show_moon: true,
  show_twilight: true,
  show_astronomical_details: false,
  compact_mode: false,
  card_style: 'glass',
  theme_mode: 'auto',
  animations: true,
  time_format: 'auto',
  language: 'auto',
  show_header: true,
  show_day_chart: true,
  show_sky_view: true,
  show_events: true,
  show_moon_times: true,
  show_footer: true,
  twilight_level: 'civil',
  location_name: '',
  latitude: null,
  longitude: null,
};

/**
 * Maximale Abweichung, mit der ein Ereignis aus der
 * Home-Assistant-Sun-Integration (`next_*`) übernommen wird.
 * Liegt die HA-Zeit weiter von der eigenen Berechnung entfernt, wird die
 * berechnete Zeit verwendet (schützt vor veralteten oder abweichenden Werten).
 */
export const HA_EVENT_TOLERANCE_MS = 20 * 60 * 1000;

/** Farben der Himmelsphasen je Theme-Modus. */
export interface PhasePalette {
  day: string;
  civil: string;
  nautical: string;
  astronomical: string;
  night: string;
  /** Farbe der Verlaufslinie oberhalb des Horizonts. */
  lineDay: string;
  /** Farbe der Verlaufslinie unterhalb des Horizonts. */
  lineNight: string;
  /** Farbe des Himmels in der Himmelsansicht. */
  skyTop: string;
  skyBottom: string;
  /**
   * Warme Farbe des Horizontglühens an Sonnenauf- und -untergang. Sie liegt
   * zwischen der Tages- und der Dämmerungsfarbe und erzeugt den weichen
   * Übergang, den ein reiner Phasenverlauf nicht zeigt.
   */
  glow: string;
}

/** Farbpalette für den Dark Mode (und als Basis für HA-Themes). */
export const DARK_PALETTE: PhasePalette = {
  day: '#ffc44d',
  civil: '#4f6fb3',
  nautical: '#33417a',
  astronomical: '#222a52',
  night: '#12172f',
  lineDay: '#ffe9a8',
  lineNight: '#8fa3d8',
  skyTop: '#0d1230',
  skyBottom: '#1b2347',
  glow: '#ff9f5a',
};

/** Farbpalette für den Light Mode (etwas heller, aber kontrastreich). */
export const LIGHT_PALETTE: PhasePalette = {
  day: '#ffc247',
  civil: '#7d97d4',
  nautical: '#57699f',
  astronomical: '#3d4a75',
  night: '#293355',
  lineDay: '#fff3c4',
  lineNight: '#cdd8f0',
  skyTop: '#eef2fb',
  skyBottom: '#cfd9ef',
  glow: '#ffb26b',
};

/** Kompassrichtungen für Azimutangaben (de/en). */
/**
 * Volksnamen des Vollmonds, geordnet nach Kalendermonat (Januar … Dezember).
 * Die Texte selbst stehen in `localize.ts`; hier stehen nur die Schlüssel.
 */
export const MOON_FOLK_KEYS = [
  'folkJan',
  'folkFeb',
  'folkMar',
  'folkApr',
  'folkMay',
  'folkJun',
  'folkJul',
  'folkAug',
  'folkSep',
  'folkOct',
  'folkNov',
  'folkDec',
] as const;

/**
 * 16-teilige Windrose für die Azimut-Ablesung (`Sonne: 250° WSW`).
 * Die Schlüssel sind international gebräuchliche Kürzel; die ausgeschriebenen
 * Bezeichnungen stehen in `localize.ts`.
 */
export const COMPASS_POINTS: { key: string; deg: number }[] = [
  { key: 'N', deg: 0 },
  { key: 'NNE', deg: 22.5 },
  { key: 'NE', deg: 45 },
  { key: 'ENE', deg: 67.5 },
  { key: 'E', deg: 90 },
  { key: 'ESE', deg: 112.5 },
  { key: 'SE', deg: 135 },
  { key: 'SSE', deg: 157.5 },
  { key: 'S', deg: 180 },
  { key: 'SSW', deg: 202.5 },
  { key: 'SW', deg: 225 },
  { key: 'WSW', deg: 247.5 },
  { key: 'W', deg: 270 },
  { key: 'WNW', deg: 292.5 },
  { key: 'NW', deg: 315 },
  { key: 'NNW', deg: 337.5 },
];

/** Gültige Wertebereiche und Optionen für die Konfigurationsvalidierung. */
export const CONFIG_CHOICES = {
  themeMode: ['auto', 'light', 'dark'],
  timeFormat: ['auto', '12', '24'],
  language: ['auto', 'de', 'en'],
  twilightLevel: ['civil', 'nautical', 'astronomical', 'all'],
  cardStyle: ['glass', 'flat', 'horizon'],
} as const;

/** Einstellungen des Layouts – abhängig von Höhe, Breite und Konfiguration. */
export interface LayoutMetrics {
  /** Außenabstand der Karte. */
  padding: number;
  /** Kopfzeile sichtbar. */
  showHeader: boolean;
  /** Ereignisleiste sichtbar. */
  showEvents: boolean;
  /** Detailzeile sichtbar. */
  showDetails: boolean;
  /** Fußzeile sichtbar. */
  showFooter: boolean;
  /** Legende unter dem Tagesverlauf sichtbar. */
  showLegend: boolean;
  /**
   * Himmelsansicht in einer eigenen Spalte neben dem Chart (8:4-Raster).
   * Unterhalb von `TWO_COLUMN_MIN_CARD_WIDTH` wird gestapelt.
   */
  skyViewSide: boolean;
  /** Himmelsansicht als kleines Element in der Detailzeile. */
  skyViewInline: boolean;
  /** Breite der Spalte für die Himmelsansicht. */
  skyViewWidth: number;
  /** Breite des Charts. */
  chartWidth: number;
  /**
   * Summe der reservierten Abstände (zwischen den Bereichen und zwischen
   * Verlauf und Legende). Sie ist Teil des Höhenhaushalts:
   * `2·padding + Bereiche + gaps + chartHeight = Kartenhöhe`.
   */
  gaps: number;
  /** Höhe der Kopfzeile. */
  headerHeight: number;
  /** Höhe der Ereignisleiste. */
  eventsHeight: number;
  /** Höhe der Detailzeile. */
  detailsHeight: number;
  /** Höhe der Fußzeile. */
  footerHeight: number;
  /** Höhe der Legende. */
  legendHeight: number;
  /** Höhe des Charts. */
  chartHeight: number;
  /** Kompakte Schriftgrößen. */
  compact: boolean;
}

/**
 * Mindestbreite der Karte, ab der Tagesverlauf und Himmelsansicht nebeneinander
 * stehen (8:4-Raster). Unterhalb davon wird gestapelt.
 */
export const TWO_COLUMN_MIN_CARD_WIDTH = 700;
/** Maximale Breite der Spalte für die Himmelsansicht. */
export const SKY_VIEW_MAX_WIDTH = 260;
/** Abstand zwischen den Spalten. */
export const COLUMN_GAP = 10;

/** Das Chart wird nie kleiner als dieser Wert (hartes Minimum). */
export const MIN_CHART_HEIGHT = 56;
/**
 * Platz, der dem Tagesverlauf mindestens verbleiben muss, bevor ein
 * weiterer Bereich (Ereignisleiste, Detailzeile) eingeblendet wird.
 * Dadurch wird der Tagesverlauf beim Hinzuschalten nicht unverhältnismäßig
 * klein. 120 px genügen für Achse, Höhenlinien und Beschriftungen.
 */
export const CHART_SPACE_BEFORE_EVENTS = 84;
/**
 * Mindestplatz des Tagesverlaufs (einschließlich Legende), bevor die
 * Detailzeile eingeblendet wird. Der Wert entspricht dem kleinsten
 * lesbaren Verlauf mit Höhenlinien und Beschriftung.
 */
export const CHART_SPACE_BEFORE_DETAILS = 96;
/** Der Tagesverlauf bleibt mit Legende mindestens so hoch. */
export const MIN_CHART_HEIGHT_WITH_LEGEND = 74;
/** Der Tagesverlauf bleibt mit Fußzeile mindestens so hoch. */
export const MIN_CHART_HEIGHT_WITH_FOOTER = MIN_CHART_HEIGHT + 8;
/** Innenabstand der Karte in Pixeln. */
export const PADDING_REGULAR = 12;
export const PADDING_COMPACT = 10;
/**
 * Vertikaler Abstand zwischen den Bereichen der Karte. Er wird im Layout
 * mit eingeplant, damit die Bereiche die Kartenhöhe nicht überschreiten.
 */
export const ROOT_GAP = 4;
/** Abstand zwischen Tagesverlauf und Legende (innerhalb der Spalte). */
export const LEGEND_GAP = 4;

/**
 * Höhen der Bereiche.
 *
 * Die Werte sind so bemessen, dass der Inhalt der Bereiche vollständig
 * hineinpasst (Zeilenhöhen, Innenabstände und Rahmen eingerechnet). Sie
 * werden von der Karte als feste Höhe gesetzt – dadurch entspricht die Summe
 * aller Bereiche exakt der Kartenhöhe, und kein Bereich kann einen anderen
 * verdrängen.
 */
export const HEADER_HEIGHT = 30;
export const EVENTS_HEIGHT = 44;
/** Höhe der Ereignisleiste im Kompaktmodus (eine Zeile). */
export const EVENTS_HEIGHT_COMPACT = 26;
export const DETAILS_HEIGHT = 72;
/** Höhe der Detailzeile mit den zusätzlichen astronomischen Werten. */
export const DETAILS_HEIGHT_DETAILED = 96;
export const FOOTER_HEIGHT = 20;
export const LEGEND_HEIGHT = 18;

/**
 * Berechnet das Layout aus Kartenhöhe, -breite und Konfiguration.
 *
 * Ablauf
 * ------
 *  1. Vom Innenmaß (`height` abzüglich Rand) werden die Bereiche in der
 *     Reihenfolge ihrer Wichtigkeit abgezogen: Kopfzeile, Ereignisleiste,
 *     Detailzeile, Fußzeile, Legende. Jeder Bereich bringt zusätzlich
 *     seinen Abstand mit, sodass die Summe exakt der Kartenhöhe entspricht.
 *  2. Der Tagesverlauf erhält den gesamten verbleibenden Platz, mindestens
 *     jedoch `MIN_CHART_HEIGHT`.
 *  3. Ein Bereich wird nur eingeblendet, wenn dem Tagesverlauf danach noch
 *     der zugesicherte Platz bleibt. Die Schwellen sind so gewählt, dass
 *     kein Bereich beim Zuschalten eines wichtigeren wieder verschwindet.
 */
export function computeLayout(
  height: number,
  width: number,
  config: ResolvedConfig,
): LayoutMetrics {
  const compact = config.compact_mode;
  // Konstanter Innenabstand: dadurch wächst der verfügbare Platz – und damit
  // der Tagesverlauf – streng monoton mit der Kartenhöhe. Ein höhenabhängiger
  // Abstand würde den Verlauf beim Überschreiten einer Schwelle wieder
  // schrumpfen lassen.
  const padding = compact ? PADDING_COMPACT : PADDING_REGULAR;
  let available = Math.max(40, height - 2 * padding);
  let gaps = 0;

  // Die Fußzeile wird beim Bemessen von Kopfzeile und Ereignisleiste
  // mitberücksichtigt, damit sie nicht durch nachrangige Entscheidungen
  // wieder verdrängt wird.
  const footerReserve = config.show_footer && !compact ? FOOTER_HEIGHT + ROOT_GAP : 0;

  // Kopfzeile: Ort, Datum, Zeitzone, Tageslänge und Himmelsphase. Sie
  // erscheint erst, wenn danach auch Ereignisleiste, Fußzeile und Legende
  // sowie ein ausreichend hoher Tagesverlauf Platz finden.
  const headerReserve =
    HEADER_HEIGHT +
    ROOT_GAP +
    EVENTS_HEIGHT +
    ROOT_GAP +
    footerReserve +
    (LEGEND_HEIGHT + LEGEND_GAP) +
    MIN_CHART_HEIGHT_WITH_LEGEND;
  const showHeader = config.show_header && !compact && available >= headerReserve;
  const headerHeight = showHeader ? HEADER_HEIGHT : 0;
  available -= headerHeight;
  if (showHeader) {
    available -= ROOT_GAP;
    gaps += ROOT_GAP;
  }

  // Ereignisleiste: Dämmerungs- und Sonnenzeiten.
  const eventsWanted = compact ? EVENTS_HEIGHT_COMPACT : EVENTS_HEIGHT;
  const showEvents =
    config.show_events && available - (eventsWanted + ROOT_GAP) - footerReserve >=
      CHART_SPACE_BEFORE_EVENTS;
  const eventsHeight = showEvents ? eventsWanted : 0;
  available -= eventsHeight;
  if (showEvents) {
    available -= ROOT_GAP;
    gaps += ROOT_GAP;
  }

  // Detailzeile: Sonnen- und Monddaten. Mit den astronomischen Zusatzwerten
  // (Kulmination, nächster Vollmond) braucht sie mehr Platz.
  const wantedDetailsHeight = config.show_astronomical_details
    ? DETAILS_HEIGHT_DETAILED
    : DETAILS_HEIGHT;
  const showDetails =
    !compact &&
    (config.show_sun || config.show_moon) &&
    available - (wantedDetailsHeight + ROOT_GAP) - footerReserve >=
      CHART_SPACE_BEFORE_DETAILS;
  const detailsHeight = showDetails ? wantedDetailsHeight : 0;
  available -= detailsHeight;
  if (showDetails) {
    available -= ROOT_GAP;
    gaps += ROOT_GAP;
  }

  // Fußzeile: Zeitzone, Dämmerungsart und Verfahren. Sie ist der am
  // leichtesten verzichtbare Bereich und erscheint erst, wenn die
  // Ereignisleiste bereits sichtbar ist und der Verlauf klar lesbar bleibt.
  const showFooter =
    config.show_footer &&
    !compact &&
    showEvents &&
    available - (FOOTER_HEIGHT + ROOT_GAP) >= MIN_CHART_HEIGHT_WITH_FOOTER;
  const footerHeight = showFooter ? FOOTER_HEIGHT : 0;
  available -= footerHeight;
  if (showFooter) {
    available -= ROOT_GAP;
    gaps += ROOT_GAP;
  }

  // Legende der Phasenflächen – unmittelbar unter dem Verlauf. Sie wird nur
  // zusammen mit der Ereignisleiste eingeblendet, damit sie beim Zuschalten
  // eines Bereichs nicht wieder verschwindet.
  const rawChartHeight = Math.max(MIN_CHART_HEIGHT, available);
  const showLegend =
    config.show_day_chart &&
    !compact &&
    showEvents &&
    rawChartHeight - LEGEND_HEIGHT - LEGEND_GAP >= MIN_CHART_HEIGHT_WITH_LEGEND;
  const legendHeight = showLegend ? LEGEND_HEIGHT : 0;
  if (showLegend) gaps += LEGEND_GAP;
  const chartHeight = Math.max(
    MIN_CHART_HEIGHT,
    rawChartHeight - legendHeight - (showLegend ? LEGEND_GAP : 0),
  );

  // Himmelsansicht: eigene Spalte, wenn genug Breite und Höhe vorhanden ist,
  // sonst – sofern eine Detailzeile existiert – als kleines Element darin.
  const skyWanted = config.show_sky_view && !compact && (config.show_sun || config.show_moon);
  const skyViewSide =
    skyWanted && width >= TWO_COLUMN_MIN_CARD_WIDTH && chartHeight >= MIN_CHART_HEIGHT_WITH_LEGEND;
  const innerWidth = Math.max(80, width - 2 * padding);
  const skyViewWidth = skyViewSide
    ? Math.round(Math.min(SKY_VIEW_MAX_WIDTH, (innerWidth - COLUMN_GAP) / 3))
    : 0;
  const chartWidth = Math.max(
    120,
    skyViewSide ? innerWidth - COLUMN_GAP - skyViewWidth : innerWidth,
  );
  const skyViewInline = !skyViewSide && skyWanted && showDetails;

  return {
    padding,
    showHeader,
    showEvents,
    showDetails,
    showFooter,
    showLegend,
    skyViewSide,
    skyViewInline,
    skyViewWidth,
    chartWidth,
    gaps,
    headerHeight,
    eventsHeight,
    detailsHeight,
    footerHeight,
    legendHeight,
    chartHeight,
    compact,
  };
}

/** Löst `card_height: 'auto'` in eine konkrete Höhe auf. */
export function resolveAutoHeight(width: number): number {
  return width >= TWO_COLUMN_MIN_CARD_WIDTH ? AUTO_HEIGHT_WIDE : AUTO_HEIGHT_NARROW;
}

/** Erzeugt die Standardkonfiguration für eine neu hinzugefügte Karte. */
export function stubConfig(): SunMoonCardConfig {
  return {
    type: `custom:${CARD_TYPE}`,
    card_height: DEFAULT_CARD_HEIGHT,
  };
}
