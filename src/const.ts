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
/** Standardhöhe. */
export const DEFAULT_CARD_HEIGHT = 260;
/** Höhe bei `card_height: auto` (schmale Karten / breite Karten). */
export const AUTO_HEIGHT_NARROW = 280;
export const AUTO_HEIGHT_WIDE = 300;

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
  theme_mode: 'auto',
  animations: true,
  time_format: 'auto',
  language: 'auto',
  show_header: true,
  show_day_chart: true,
  show_sky_view: true,
  show_events: true,
  show_moon_times: true,
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
};

/** Kompassrichtungen für Azimutangaben (de/en). */
export const COMPASS_POINTS: { key: string; deg: number }[] = [
  { key: 'N', deg: 0 },
  { key: 'NE', deg: 45 },
  { key: 'E', deg: 90 },
  { key: 'SE', deg: 135 },
  { key: 'S', deg: 180 },
  { key: 'SW', deg: 225 },
  { key: 'W', deg: 270 },
  { key: 'NW', deg: 315 },
];

/** Gültige Wertebereiche und Optionen für die Konfigurationsvalidierung. */
export const CONFIG_CHOICES = {
  themeMode: ['auto', 'light', 'dark'],
  timeFormat: ['auto', '12', '24'],
  language: ['auto', 'de', 'en'],
  twilightLevel: ['civil', 'nautical', 'astronomical', 'all'],
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
  /** Himmelsansicht in einer eigenen Spalte neben dem Chart. */
  skyViewSide: boolean;
  /** Himmelsansicht als kleines Element in der Detailzeile. */
  skyViewInline: boolean;
  /** Breite der Spalte für die Himmelsansicht. */
  skyViewWidth: number;
  /** Höhe der Kopfzeile. */
  headerHeight: number;
  /** Höhe der Ereignisleiste. */
  eventsHeight: number;
  /** Höhe der Detailzeile. */
  detailsHeight: number;
  /** Höhe des Charts. */
  chartHeight: number;
  /** Kompakte Schriftgrößen. */
  compact: boolean;
}

/** Mindestbreite für die Himmelsansicht neben dem Chart. */
export const SKY_VIEW_MIN_CARD_WIDTH = 520;

/** Das Chart wird nie kleiner als dieser Wert (hartes Minimum). */
export const MIN_CHART_HEIGHT = 56;
/**
 * Platz, der dem Tagesverlauf mindestens verbleiben muss, bevor ein
 * weiterer Bereich (Ereignisleiste, Detailzeile) eingeblendet wird.
 * Dadurch wird der Tagesverlauf beim Hinzuschalten nicht unverhältnismäßig
 * klein.
 */
export const CHART_SPACE_BEFORE_EVENTS = 84;
export const CHART_SPACE_BEFORE_DETAILS = 150;
/** Innenabstand der Karte in Pixeln. */
export const PADDING_REGULAR = 12;
export const PADDING_COMPACT = 10;
/** Reservierte Höhen der Bereiche. */
export const HEADER_HEIGHT = 26;
export const EVENTS_HEIGHT = 48;
export const EVENTS_HEIGHT_SMALL = 36;
export const DETAILS_HEIGHT = 66;

/**
 * Berechnet das Layout aus Kartenhöhe, -breite und Konfiguration.
 *
 * Die Reihenfolge der Entscheidungen ist bewusst so gewählt, dass der
 * Tagesverlauf – das zentrale Element – immer den größten Anteil erhält und
 * niemals abgeschnitten wird.
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

  // Kopfzeile: Ort, Datum und Himmelsphase – entfällt bei sehr geringer Höhe
  // und im Kompaktmodus.
  const showHeader = config.show_header && !compact && available >= 150;
  const headerHeight = showHeader ? HEADER_HEIGHT : 0;
  available -= headerHeight;

  // Ereignisleiste: Dämmerungs- und Sonnenzeiten. Sie erscheint, sobald dem
  // Tagesverlauf danach noch genügend Platz bleibt.
  const wantLargeEvents = !compact && available - EVENTS_HEIGHT >= CHART_SPACE_BEFORE_EVENTS;
  const wantedEventsHeight = wantLargeEvents ? EVENTS_HEIGHT : EVENTS_HEIGHT_SMALL;
  const showEvents =
    config.show_events && available - wantedEventsHeight >= CHART_SPACE_BEFORE_EVENTS;
  const eventsHeight = showEvents ? wantedEventsHeight : 0;
  available -= eventsHeight;

  // Detailzeile: Sonnenstand und Monddaten. Erst ab komfortabler Höhe, damit
  // der Tagesverlauf nicht unter 150 px fällt.
  const showDetails =
    !compact &&
    (config.show_sun || config.show_moon) &&
    available - DETAILS_HEIGHT >= CHART_SPACE_BEFORE_DETAILS;
  const detailsHeight = showDetails ? DETAILS_HEIGHT : 0;
  available -= detailsHeight;

  const chartAvailable = Math.max(MIN_CHART_HEIGHT, available);

  // Himmelsansicht: eigene Spalte, wenn genug Breite und Höhe vorhanden ist,
  // sonst – sofern eine Detailzeile existiert – als kleines Element darin.
  const skyWanted = config.show_sky_view && !compact && (config.show_sun || config.show_moon);
  const skyViewSide = skyWanted && width >= SKY_VIEW_MIN_CARD_WIDTH && chartAvailable >= 140;
  const skyViewWidth = skyViewSide
    ? Math.round(Math.min(210, Math.max(150, width * 0.3)))
    : 0;
  const skyViewInline = !skyViewSide && skyWanted && showDetails;

  return {
    padding,
    showHeader,
    showEvents,
    showDetails,
    skyViewSide,
    skyViewInline,
    skyViewWidth,
    headerHeight,
    eventsHeight,
    detailsHeight,
    chartHeight: chartAvailable,
    compact,
  };
}

/** Löst `card_height: 'auto'` in eine konkrete Höhe auf. */
export function resolveAutoHeight(width: number): number {
  return width >= SKY_VIEW_MIN_CARD_WIDTH ? AUTO_HEIGHT_WIDE : AUTO_HEIGHT_NARROW;
}

/** Erzeugt die Standardkonfiguration für eine neu hinzugefügte Karte. */
export function stubConfig(): SunMoonCardConfig {
  return {
    type: `custom:${CARD_TYPE}`,
    card_height: DEFAULT_CARD_HEIGHT,
  };
}
