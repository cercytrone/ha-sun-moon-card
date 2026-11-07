/**
 * types.ts
 *
 * Typdefinitionen für Konfiguration und Home-Assistant-Anbindung.
 *
 * Es werden bewusst nur die Teile der Home-Assistant-Frontend-API beschrieben,
 * die die Karte tatsächlich verwendet. Damit besteht keine Abhängigkeit zu
 * Versionen von `custom-card-helpers` oder internen Frontend-Typen, die sich
 * zwischen Home-Assistant-Versionen ändern können.
 */

import type {
  DayProfile,
  GeoLocation,
  MoonDistanceRange,
  MoonEvents,
  MoonPath,
  MoonPhaseEvent,
  MoonPhaseInfo,
  MoonPosition,
  SkyPhase,
  SolarEvents,
} from './astronomy.js';

/** Konfiguration der Karte (YAML bzw. visueller Editor). */
/**
 * Klick-Aktion im Home-Assistant-Standard.
 *
 * Unterstützt werden `more-info`, `navigate`, `url`, `call-service`
 * (alias `perform-action`), `toggle`, `fire-dom-event` und `none`.
 * Dazu kommt `open-popup`, das Overlay der Minimalvariante – die
 * Voreinstellung, wenn keine Aktion angegeben ist.
 *
 * Die Felder entsprechen dem HA-Standard, damit sich Aktionen aus anderen
 * Karten unverändert übernehmen lassen.
 */
export interface ActionConfig {
  /** Name der Aktion, z. B. `more-info`. */
  action: string;
  /** Ziel bei `more-info` und `toggle`; ohne Angabe gilt `sun.sun`. */
  entity?: string;
  /** Zielpfad bei `navigate`. */
  navigation_path?: string;
  /** Adresse bei `url`. */
  url_path?: string;
  /** Dienst bei `call-service`, z. B. `light.turn_on`. */
  service?: string;
  /** Neuerer Name von `service` (HA 2024.8+). */
  perform_action?: string;
  /** Daten des Dienstaufrufs. */
  data?: Record<string, unknown>;
  /** Ziel des Dienstaufrufs (`entity_id`, `device_id`, …). */
  target?: Record<string, unknown>;
  /** Fenster beim Öffnen einer Adresse. */
  url_target?: string;
  /** Zusätzliche Felder (z. B. `confirmation`) werden weitergereicht. */
  [key: string]: unknown;
}

export interface SunMoonCardConfig {
  /**
   * Kartentyp (`custom:sun-moon-card`). Home Assistant setzt den Wert
   * immer; in Tests und im Editor darf er fehlen.
   */
  type?: string;

  /** Entität der Home-Assistant-Sun-Integration (Standard: `sun.sun`). */
  entity?: string;
  /**
   * Optionale Entität der Home-Assistant-Moon-Integration (z. B. `sensor.moon`).
   * Wird sie angegeben und existiert sie, wird der Phasenname aus dem Zustand
   * übernommen (alle anderen Werte werden weiterhin berechnet).
   */
  moon_entity?: string;

  /** Höhe der Karte in Pixeln oder `'auto'`. */
  card_height?: number | 'auto';

  /** Sonne darstellen. */
  show_sun?: boolean;
  /** Mond darstellen. */
  show_moon?: boolean;
  /** Dämmerungsphasen darstellen. */
  show_twilight?: boolean;
  /** Zusätzliche astronomische Details (nautische/astronomische Dämmerung,
   * Kulmination, Tageslänge, Azimut, Mondauf-/Untergang). */
  show_astronomical_details?: boolean;
  /** Kompakte Darstellung (ohne Kopfzeile, Himmelsansicht und Detailzeile). */
  compact_mode?: boolean;
  /**
   * Optik der Flächen:
   *  `glass` – leicht transluzente Kacheln mit weichem Schatten (Vorgabe)
   *  `flat`  – flächige Kacheln, höchster Kontrast
   */
  card_style?: 'glass' | 'flat' | 'horizon';
  /**
   * Minimalmodus: zeigt ausschließlich den Zeitstrahl – keine Kopfzeile,
   * keine Ereignisleiste, keine Details, keine Fußzeile, keine Legende.
   * Dadurch sind sehr flache Karten ab 24&nbsp;px möglich. Ein Klick auf die
   * Karte öffnet die vollständige Variante in einem Overlay.
   */
  minimal_mode?: boolean;
  /**
   * Minimalmodus: Zeit des Sonnenaufgangs (links) und des Sonnenuntergangs
   * (rechts) über dem Zeitstrahl nennen.
   */
  minimal_show_times?: boolean;
  /**
   * Minimalmodus: Zeit der Kulmination (Zenit) mittig über dem Zeitstrahl
   * nennen.
   */
  minimal_show_zenith?: boolean;
  /**
   * Radius des Sonnenmarkers im Zeitstrahl in Pixeln. Der Marker wächst mit
   * der Höhe des Verlaufs bis zu diesem Wert; auf sehr flachen Streifen
   * bleibt er kleiner, damit er den Verlauf nicht verdeckt.
   */
  sun_marker_size?: number;
  /** Breite des Overlays der Minimalvariante in Pixeln. */
  popup_width?: number;
  /** Höhe des Overlays der Minimalvariante in Pixeln. */
  popup_height?: number;

  /** `'auto'` folgt dem Home-Assistant-Theme. */
  theme_mode?: 'auto' | 'light' | 'dark';
  /** Animationen (Pulsieren des Sonnen-/Mondmarkers, Übergänge). */
  animations?: boolean;
  /** `'auto'` übernimmt die Einstellung aus Home Assistant. */
  time_format?: 'auto' | '12' | '24';
  /** `'auto'` folgt der in Home Assistant konfigurierten Sprache. */
  language?: 'auto' | 'de' | 'en';

  /** Kopfzeile mit Ort, Datum und Himmelsphase. */
  show_header?: boolean;
  /** Tagesverlaufs-Chart. */
  show_day_chart?: boolean;
  /** Himmelsansicht (Fischaugenprojektion). */
  show_sky_view?: boolean;
  /** Leiste mit Dämmerungs- und Sonnenzeiten. */
  show_events?: boolean;
  /** Mondauf- und -untergang anzeigen. */
  show_moon_times?: boolean;
  /** Fußzeile mit Zeitzone, Dämmerungsart und Berechnungsverfahren. */
  show_footer?: boolean;

  /**
   * Welche Dämmerungsgrenzen angezeigt werden:
   *  `civil`        – bürgerliche Dämmerung (−6°), Standard
   *  `nautical`     – nautische Dämmerung (−12°)
   *  `astronomical` – astronomische Dämmerung (−18°)
   *  `all`          – alle drei Ebenen
   */
  twilight_level?: 'civil' | 'nautical' | 'astronomical' | 'all';

  /** Optionaler Anzeigename des Standorts (ersetzt den Namen aus HA). */
  location_name?: string;
  /** Breitengrad; Standard: aus Home Assistant (`hass.config`). */
  latitude?: number;
  /** Längengrad; Standard: aus Home Assistant (`hass.config`). */
  longitude?: number;

  /** Aktion beim Antippen des Minimalstreifens; Standard: Overlay öffnen. */
  tap_action?: ActionConfig;
  /** Aktion bei langem Drücken des Minimalstreifens; Standard: keine. */
  hold_action?: ActionConfig;
  /** Aktion bei doppeltem Antippen des Minimalstreifens; Standard: keine. */
  double_tap_action?: ActionConfig;

  /**
   * Restzeit bis zum nächsten Auf- oder Untergang von Sonne und Mond sowie
   * bis zum nächsten Beginn oder Ende der Dämmerung. Die einzelnen Zeiten
   * folgen `show_sun`, `show_twilight` und `show_moon`.
   */
  show_remaining_time?: boolean;

  /**
   * Welche Restzeit Vorrang hat: `sun` (Standard) zeigt im Kopfzeilen-Chip
   * und im Minimalstreifen stets Sonnenauf- bzw. -untergang und stellt ihn
   * auch unter der Himmelsansicht an die erste Stelle. `next` zeigt das
   * zeitlich nächste Ereignis – Sonne, Dämmerung oder Mond.
   */
  remaining_time_focus?: 'sun' | 'next' | 'golden_hour';

  /**
   * Goldene (−4° … +6°) und Blaue Stunde (−6° … −4°) als Flächen im
   * Tagesverlauf; dazu die Restzeit bis zur nächsten Goldenen Stunde.
   */
  show_golden_hour?: boolean;

  /**
   * Große Restzeit-Kachel am Anfang der Ereignisleiste – gut lesbar auf
   * Wand-Tablets.
   */
  show_countdown_tile?: boolean;
}

/** Vollständig aufgelöste Konfiguration mit allen Standardwerten. */
export type ResolvedConfig = Required<
  Omit<
    SunMoonCardConfig,
    | 'entity'
    | 'moon_entity'
    | 'location_name'
    | 'latitude'
    | 'longitude'
    | 'tap_action'
    | 'hold_action'
    | 'double_tap_action'
  >
> & {
  entity: string;
  moon_entity: string;
  location_name: string;
  latitude: number | null;
  longitude: number | null;
  type: string;
  /** Aufgelöste Aktionen; `null` bedeutet „nicht konfiguriert“. */
  tap_action: ActionConfig | null;
  hold_action: ActionConfig | null;
  double_tap_action: ActionConfig | null;
};


/**
 * Nächstes Ereignis mit Restzeit – Sonne, Dämmerung oder Mond.
 *
 * Der Zeitpunkt liegt immer in der Zukunft; `dayOffset` erlaubt die
 * Ergänzung „morgen“, wenn das Ereignis zum Folgetag gehört.
 */
export interface NextEventDetail {
  /** Zeitpunkt des Ereignisses. */
  time: Date;
  /** `true`, wenn der Körper aufsteigt (Aufgang, Beginn der Dämmerung). */
  rising: boolean;
  /** Verschiebung gegenüber dem heutigen Kalendertag: 0 = heute, 1 = morgen. */
  dayOffset: number;
}

/**
 * Zusätzliche, abgeleitete Werte, die über die reinen Positionsdaten
 * hinausgehen (Vollmond, Entfernungen, Azimute, Zeitzonenname).
 *
 * Sie werden bewusst im Modell – nicht in der Darstellung – berechnet, damit
 * sie in Tests geprüft und von der Oberfläche nur noch formatiert werden.
 */
export interface CardExtras {
  /** Langname der Zeitzone, z. B. „Mitteleuropäische Sommerzeit“. */
  timeZoneLongName: string;
  /** Tageslänge des Vortags in Minuten (null bei Polartag/Polarnacht). */
  previousDaylightMinutes: number | null;
  /**
   * Differenz der Tageslänge zum Vortag in Minuten
   * (negativ = die Tage werden kürzer).
   */
  daylightDeltaMinutes: number | null;
  /** Höhenwinkel der Sonne unter dem Horizont (Betrag, null bei Tag). */
  sunBelowHorizon: number | null;
  /** Azimut des Sonnenaufgangs in Grad (null, wenn kein Aufgang). */
  sunriseAzimuth: number | null;
  /** Azimut des Sonnenuntergangs in Grad (null, wenn kein Untergang). */
  sunsetAzimuth: number | null;
  /** Nächster Vollmond (null, wenn im Suchzeitraum keiner auftritt). */
  nextFullMoon: MoonPhaseEvent | null;
  /** Ganze Tage bis zum nächsten Vollmond. */
  nextFullMoonDays: number | null;
  /**
   * Überlieferter Name des Vollmonds im Monat des nächsten Vollmonds
   * (z. B. „Jägermond“). `null`, wenn kein Vollmond ermittelt wurde.
   */
  moonFolkName: string | null;
  /**
   * `true`, wenn der nächste Vollmond der zweite Vollmond seines Kalendermonats
   * ist („Blue Moon“).
   */
  blueMoon: boolean;
  /** Mondentfernung mit Erdnähe/Erdferne des umgebenden Zeitfensters. */
  moonDistance: MoonDistanceRange | null;
  /** Nächster Mondaufgang mit Azimut und Tagesbezug. */
  moonRise: MoonEventDetail | null;
  /** Nächster Monduntergang mit Azimut und Tagesbezug. */
  moonSet: MoonEventDetail | null;
  /**
   * Nächster Sonnenauf- oder -untergang. `null` bei Polartag und Polarnacht
   * – die Karte erfindet dann keine Zeit.
   */
  nextSunEvent: NextEventDetail | null;
  /** Nächster Beginn oder Ende der eingestellten Dämmerung. */
  nextTwilightEvent: NextEventDetail | null;
  /** Nächster Mondauf- oder -untergang. */
  nextMoonEvent: NextEventDetail | null;
  /**
   * Nächste oder laufende Goldene Stunde; nur mit `show_golden_hour`.
   */
  goldenHour: { start: Date; end: Date | null; active: boolean } | null;
}

/** Ein Mondauf- oder -untergang mit Zusatzinformationen. */
export interface MoonEventDetail {
  /** Zeitpunkt des Ereignisses. */
  time: Date;
  /** Azimut zum Zeitpunkt des Ereignisses in Grad. */
  azimuth: number;
  /**
   * Verschiebung des Ereignisses gegenüber dem heutigen Kalendertag:
   * 0 = heute, 1 = morgen, −1 = gestern.
   */
  dayOffset: number;
}

/** Minimale Beschreibung eines Home-Assistant-Zustands. */
export interface HaEntityState {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed?: string;
  last_updated?: string;
}

/** Der für die Karte relevante Ausschnitt des `hass`-Objekts. */
export interface HomeAssistant {
  states: Record<string, HaEntityState>;
  config: {
    latitude?: number;
    longitude?: number;
    elevation?: number;
    time_zone?: string;
    location_name?: string;
    language?: string;
    country?: string;
  };
  locale?: {
    language?: string;
    time_format?: 'language' | 'system' | '12' | '24' | 'am_pm';
    number_format?: string;
    date_format?: string;
  };
  themes?: {
    darkMode?: boolean;
    default_theme?: string;
    theme?: string;
  };
  selectedTheme?: {
    dark?: boolean;
    theme?: string;
  } | null;
  language?: string;
  /** Dienst aufrufen – von Home Assistant bereitgestellt. */
  callService?: (
    domain: string,
    service: string,
    data?: Record<string, unknown>,
    target?: Record<string, unknown>,
  ) => Promise<unknown> | void;
}

/** Ergebnis von `getConfigElement()` – der visuelle Editor. */
export interface LovelaceCardEditor extends HTMLElement {
  hass?: HomeAssistant;
  lovelace?: unknown;
  setConfig(config: SunMoonCardConfig): void;
}

/** Von Home Assistant erwartete Karten-Schnittstelle. */
export interface LovelaceCard extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: SunMoonCardConfig): void;
  getCardSize?(): number;
  getGridOptions?(): {
    rows?: number;
    min_rows?: number;
    columns?: number;
    min_columns?: number;
  };
}

/** Vom Karten-Editor gesendetes Konfigurationsereignis. */
export interface ConfigChangedEvent<T> extends CustomEvent {
  detail: { config: T };
}

/**
 * Aufbereitetes Datenmodell für die Darstellung.
 * Wird einmal pro Minute (bzw. bei Konfigurations- oder Standortänderung)
 * neu berechnet und zwischengespeichert.
 */
export interface CardModel {
  /** Referenzzeitpunkt der Berechnung. */
  now: Date;
  /** Verwendete Zeitzone (IANA-Name). */
  timeZone: string;
  /** Verwendeter Standort. */
  location: GeoLocation;
  /** Anzeigename des Standorts. */
  locationName: string;
  /** Tagesverlauf mit Ereignissen. */
  day: DayProfile;
  /** Aktuelle Sonnenposition. */
  sun: {
    altitude: number;
    azimuth: number;
    /** Aktuelle Himmelsphase. */
    phase: SkyPhase;
    /** Sonne steigt (true) oder fällt (false). */
    rising: boolean;
    /** Wert aus der Home-Assistant-Entität, sofern vorhanden. */
    haElevation: number | null;
    haAzimuth: number | null;
  };
  /** Aktuelle Monddaten. */
  moon: {
    position: MoonPosition;
    phase: MoonPhaseInfo;
    events: MoonEvents;
    /** Phasenname aus Home Assistant (`moon_entity`), falls verfügbar. */
    haPhaseName: string | null;
  };
  /** Für die Anzeige aufbereitete Ereignisse. */
  events: SolarEvents;
  /**
   * Welche Ereigniszeiten aus der Home-Assistant-Sun-Integration übernommen
   * wurden (`next_rising`, `next_setting`, `next_dawn`, `next_dusk`).
   */
  eventSources: Record<string, 'ha' | 'computed' | 'none'>;
  /** Tagesbahn der Sonne (Höhe/Azimut) für die Himmelsansicht. */
  sunTrack: AltAzPoint[];
  /**
   * Tagesgang des Mondes für die Kurve im Chart. `null`, wenn der Mond
   * abgeschaltet ist – die Berechnung wird dann nicht gebraucht.
   */
  moonPath: MoonPath | null;
  /** Abgeleitete Zusatzwerte (Vollmond, Entfernungen, Azimute, Zeitzone). */
  extras: CardExtras;
  /** Tageslänge in Minuten (Tag = Sonne über Horizont), null bei Polartag/Nacht. */
  daylightMinutes: number | null;
  /** Aufgetretene Hinweise (fehlende Daten, Sonderfälle). */
  issues: ModelIssue[];
  /** `true`, wenn ohne Standort nichts berechnet werden kann. */
  fatal: boolean;
}

/** Position am Himmel (Höhe und Azimut). */
export interface AltAzPoint {
  altitude: number;
  azimuth: number;
}

export type ModelIssue =
  | 'missing-location'
  | 'missing-sun-entity'
  | 'no-sunrise-today'
  | 'no-sunset-today'
  | 'polar-day'
  | 'polar-night'
  | 'no-civil-twilight'
  | 'invalid-latitude'
  | 'invalid-longitude'
  | 'invalid-height';
