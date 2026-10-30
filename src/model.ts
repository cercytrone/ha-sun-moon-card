/**
 * model.ts
 *
 * Aufbereitung der Rohdaten zu einem Anzeigemodell:
 *
 *  - Konfiguration validieren und mit Standardwerten vervollständigen
 *  - Standort und Zeitzone aus Home Assistant übernehmen (oder überschreiben)
 *  - astronomische Berechnungen ausführen und zwischenspeichern
 *  - Daten der Home-Assistant-Sun-Integration (`sun.sun`) einbeziehen
 *  - fehlende Daten und Sonderfälle (Polartag, Polarnacht) erkennen
 *
 * Alle Berechnungen sind gegen `null`/`undefined` abgesichert: Fehlen
 * Entitäten, Attribute oder der Standort, bleibt die Karte funktionsfähig
 * und zeigt einen Hinweis an, statt abzustürzen.
 */

import {
  azimuthAt,
  buildDayProfile,
  buildMoonPath,
  findFullMoons,
  findMoonEvents,
  findNextFullMoon,
  moonDistanceRange,
  moonPhase,
  moonPosition,
  skyPhase,
  sunAltitude,
  sunPosition,
  type DayProfile,
  type GeoLocation,
  type MoonEvents,
  type MoonPhaseInfo,
  type MoonPosition,
  type SolarEvents,
} from './astronomy.js';
import {
  CONFIG_CHOICES,
  DEFAULT_CONFIG,
  HA_EVENT_TOLERANCE_MS,
  POPUP_HEIGHT_RANGE,
  POPUP_WIDTH_RANGE,
  SUN_MARKER_SIZE_RANGE,
  cardHeightRange,
  resolveAutoHeight,
  MOON_FOLK_KEYS,
} from './const.js';
import { timeZoneLongName } from './format.js';
import { type Language, type StringKey, localize, resolveLanguage } from './localize.js';
import {
  endOfLocalDay,
  localDayIndex,
  resolveTimeZone,
  startOfLocalDay,
} from './timezone.js';
import type {
  AltAzPoint,
  CardExtras,
  CardModel,
  HomeAssistant,
  ModelIssue,
  MoonEventDetail,
  ResolvedConfig,
  SunMoonCardConfig,
} from './types.js';
import { clamp, isFiniteNumber, round, toNumber } from './utils.js';

/** Ergebnis der Konfigurationsvalidierung. */
export interface ConfigResult {
  config: ResolvedConfig;
  /** Fehler, die zum Abbruch führen (werden im Editor angezeigt). */
  errors: string[];
  /** Hinweise zu korrigierten Werten. */
  warnings: string[];
}

function asBoolean(value: unknown, fallback: boolean): boolean {
  if (typeof value === 'boolean') return value;
  if (value === 'true' || value === 1) return true;
  if (value === 'false' || value === 0) return false;
  return fallback;
}

function asChoice<T extends string>(
  value: unknown,
  choices: readonly T[],
  fallback: T,
): T {
  return typeof value === 'string' && (choices as readonly string[]).includes(value)
    ? (value as T)
    : fallback;
}

/**
 * Validiert die Konfiguration und ergänzt Standardwerte.
 *
 * Ungültige Werte führen nicht zu einem Abbruch, sondern werden – soweit
 * sinnvoll – auf gültige Werte korrigiert. Nur strukturelle Fehler
 * (z. B. eine völlig unbrauchbare Kartenhöhe) werden als Fehler gemeldet.
 */
/**
 * Liest eine Zahl und begrenzt sie auf den zulässigen Bereich. Liegt der Wert
 * außerhalb, wird er angepasst und eine Warnung vermerkt – die Karte
 * erscheint in jedem Fall.
 */
function asNumberInRange(
  value: unknown,
  fallback: number,
  range: [number, number],
  language: Language,
  warnings: string[],
  digits = 0,
): number {
  const parsed = toNumber(value);
  if (parsed === null) return fallback;
  const limited = clamp(parsed, range[0], range[1]);
  if (Math.abs(limited - parsed) > 1e-9) {
    warnings.push(
      localize(language, 'invalidRange', {
        value: String(value),
        min: String(range[0]),
        max: String(range[1]),
      }),
    );
  }
  return digits === 0 ? Math.round(limited) : round(limited, digits);
}

export function resolveConfig(
  raw: SunMoonCardConfig | undefined,
  language: Language = 'en',
): ConfigResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const input = (raw ?? {}) as SunMoonCardConfig;

  // Minimalmodus: Er senkt die Untergrenze der Kartenhöhe und muss daher
  // vor dem Prüfen der Höhe bekannt sein.
  const minimalMode = asBoolean(input.minimal_mode, DEFAULT_CONFIG.minimal_mode);
  const heightRange = cardHeightRange(minimalMode);

  // Kartenhöhe
  let cardHeight: number | 'auto' = DEFAULT_CONFIG.card_height;
  if (typeof input.card_height === 'number' && Number.isFinite(input.card_height)) {
    cardHeight = Math.round(clamp(input.card_height, heightRange[0], heightRange[1]));
    if (cardHeight !== input.card_height) {
      warnings.push(
        localize(language, 'invalidHeight', {
          value: String(input.card_height),
          min: heightRange[0],
          max: heightRange[1],
        }),
      );
    }
  } else if (input.card_height === 'auto' || input.card_height === null) {
    cardHeight = 'auto';
  } else if (typeof input.card_height === 'number') {
    // NaN/Infinity: korrigieren statt die Karte zu verwerfen.
    warnings.push(
      localize(language, 'invalidHeight', {
        value: String(input.card_height),
        min: heightRange[0],
        max: heightRange[1],
      }),
    );
  } else if (input.card_height !== undefined) {
    const parsed = toNumber(input.card_height);
    if (parsed === null) {
      errors.push(
        localize(language, 'invalidHeight', {
          value: String(input.card_height),
          min: heightRange[0],
          max: heightRange[1],
        }),
      );
    } else {
      cardHeight = Math.round(clamp(parsed, heightRange[0], heightRange[1]));
    }
  }

  // Koordinaten (optionaler Überschreibungsweg)
  let latitude: number | null = null;
  let longitude: number | null = null;
  const parsedLatitude = toNumber(input.latitude);
  const parsedLongitude = toNumber(input.longitude);
  if (parsedLatitude !== null) {
    if (parsedLatitude >= -90 && parsedLatitude <= 90) latitude = parsedLatitude;
    else warnings.push(localize(language, 'invalidNumber', { value: String(input.latitude) }));
  }
  if (parsedLongitude !== null) {
    if (parsedLongitude >= -180 && parsedLongitude <= 180) longitude = parsedLongitude;
    else warnings.push(localize(language, 'invalidNumber', { value: String(input.longitude) }));
  }

  const config: ResolvedConfig = {
    type: typeof input.type === 'string' ? input.type : `custom:sun-moon-card`,
    entity: typeof input.entity === 'string' && input.entity.trim() !== ''
      ? input.entity.trim()
      : DEFAULT_CONFIG.entity,
    moon_entity:
      typeof input.moon_entity === 'string' && input.moon_entity.trim() !== ''
        ? input.moon_entity.trim()
        : DEFAULT_CONFIG.moon_entity,
    card_height: cardHeight,
    show_sun: asBoolean(input.show_sun, DEFAULT_CONFIG.show_sun),
    show_moon: asBoolean(input.show_moon, DEFAULT_CONFIG.show_moon),
    show_twilight: asBoolean(input.show_twilight, DEFAULT_CONFIG.show_twilight),
    show_astronomical_details: asBoolean(
      input.show_astronomical_details,
      DEFAULT_CONFIG.show_astronomical_details,
    ),
    compact_mode: asBoolean(input.compact_mode, DEFAULT_CONFIG.compact_mode),
    minimal_mode: minimalMode,
    minimal_show_times: asBoolean(
      input.minimal_show_times,
      DEFAULT_CONFIG.minimal_show_times,
    ),
    minimal_show_zenith: asBoolean(
      input.minimal_show_zenith,
      DEFAULT_CONFIG.minimal_show_zenith,
    ),
    sun_marker_size: asNumberInRange(
      input.sun_marker_size,
      DEFAULT_CONFIG.sun_marker_size,
      SUN_MARKER_SIZE_RANGE,
      language,
      warnings,
      1,
    ),
    popup_width: asNumberInRange(
      input.popup_width,
      DEFAULT_CONFIG.popup_width,
      POPUP_WIDTH_RANGE,
      language,
      warnings,
    ),
    popup_height: asNumberInRange(
      input.popup_height,
      DEFAULT_CONFIG.popup_height,
      POPUP_HEIGHT_RANGE,
      language,
      warnings,
    ),
    card_style: asChoice(input.card_style, CONFIG_CHOICES.cardStyle, DEFAULT_CONFIG.card_style),
    theme_mode: asChoice(input.theme_mode, CONFIG_CHOICES.themeMode, DEFAULT_CONFIG.theme_mode),
    animations: asBoolean(input.animations, DEFAULT_CONFIG.animations),
    time_format: asChoice(input.time_format, CONFIG_CHOICES.timeFormat, DEFAULT_CONFIG.time_format),
    language: asChoice(input.language, CONFIG_CHOICES.language, DEFAULT_CONFIG.language),
    show_header: asBoolean(input.show_header, DEFAULT_CONFIG.show_header),
    show_day_chart: asBoolean(input.show_day_chart, DEFAULT_CONFIG.show_day_chart),
    show_sky_view: asBoolean(input.show_sky_view, DEFAULT_CONFIG.show_sky_view),
    show_events: asBoolean(input.show_events, DEFAULT_CONFIG.show_events),
    show_moon_times: asBoolean(input.show_moon_times, DEFAULT_CONFIG.show_moon_times),
    show_footer: asBoolean(input.show_footer, DEFAULT_CONFIG.show_footer),
    twilight_level: asChoice(
      input.twilight_level,
      CONFIG_CHOICES.twilightLevel,
      DEFAULT_CONFIG.twilight_level,
    ),
    location_name: typeof input.location_name === 'string' ? input.location_name : '',
    latitude,
    longitude,
  };

  return { config, errors, warnings };
}

/** Löst die Kartenhöhe auf (`'auto'` → abhängig von der Breite). */
export function resolveCardHeight(config: ResolvedConfig, width: number): number {
  const range = cardHeightRange(config.minimal_mode);
  if (config.card_height === 'auto') {
    return clamp(resolveAutoHeight(width), range[0], range[1]);
  }
  return clamp(config.card_height, range[0], range[1]);
}

/** Erzeugt ein leeres Modell (wird bei fehlendem Standort verwendet). */
/**
 * Leeres Modell für den Fall fehlender Daten.
 *
 * Die Sprache wird nur für den Zeitzonennamen benötigt; ist keine gesetzt,
 * wird Deutsch verwendet (Sprache der Standarddokumentation).
 */
function emptyModel(
  now: Date,
  timeZone: string,
  issues: ModelIssue[],
  language: Language = 'de',
): CardModel {
  const location: GeoLocation = { latitude: 0, longitude: 0 };
  const emptyProfile: DayProfile = {
    dayStart: now,
    dayEnd: new Date(now.getTime() + 24 * 60 * 60 * 1000),
    samples: [],
    maxAltitude: 0,
    minAltitude: 0,
    events: {
      civilDawn: null,
      sunrise: null,
      solarNoon: null,
      sunset: null,
      civilDusk: null,
      nauticalDawn: null,
      nauticalDusk: null,
      astronomicalDawn: null,
      astronomicalDusk: null,
    },
    polar: 'none',
  };
  const moon: MoonPosition = {
    altitude: 0,
    azimuth: 0,
    distanceKm: 0,
    parallax: 0,
    apparentAltitude: 0,
    equatorial: { ra: 0, dec: 0 },
    geocentric: { longitude: 0, latitude: 0, distanceKm: 0 },
  };
  const phase: MoonPhaseInfo = {
    illumination: 0,
    phaseAngle: 0,
    elongation: 0,
    phaseIndex: 0,
    phaseKey: 'newMoon',
    brightLimbAngle: 0,
    moonAgeDays: 0,
    waxing: true,
    distanceKm: 0,
  };
  const moonEvents: MoonEvents = {
    previousRise: null,
    previousSet: null,
    nextRise: null,
    nextSet: null,
  };

  return {
    now,
    timeZone,
    location,
    locationName: '',
    extras: emptyExtras(timeZone, languageLocale(language)),
    day: emptyProfile,
    sun: {
      altitude: 0,
      azimuth: 0,
      phase: 'night',
      rising: false,
      haElevation: null,
      haAzimuth: null,
    },
    moon: { position: moon, phase, events: moonEvents, haPhaseName: null },
    sunTrack: [],
    moonPath: null,
    events: emptyProfile.events,
    eventSources: {},
    daylightMinutes: null,
    issues,
    fatal: true,
  };
}

/** Gebietsschema aus der konfigurierten Sprache (für Zeitzonennamen). */
function languageLocale(language: Language): string {
  return language === 'de' ? 'de-DE' : 'en-GB';
}

/** Zusatzwerte für den Fall fehlender Daten (keine erfundenen Werte). */
export function emptyExtras(timeZone: string, locale: string): CardExtras {
  return {
    timeZoneLongName: timeZoneLongName(timeZone, locale, new Date()),
    previousDaylightMinutes: null,
    daylightDeltaMinutes: null,
    sunBelowHorizon: null,
    sunriseAzimuth: null,
    sunsetAzimuth: null,
    nextFullMoon: null,
    nextFullMoonDays: null,
    blueMoon: false,
    moonFolkName: null,
    moonDistance: null,
    moonRise: null,
    moonSet: null,
  };
}

/**
 * Ist der gegebene Vollmond der zweite Vollmond seines Kalendermonats?
 *
 * Das ist die gängige Definition eines „Blue Moon“. Sie wird hier aus den
 * berechneten Vollmondzeitpunkten abgeleitet (vorheriger Vollmond im selben
 * Monat) und nicht aus überlieferten Monatsnamen.
 */
function isBlueMoon(fullMoon: Date, timeZone: string): boolean {
  const previous = findFullMoons(
    fullMoon.getTime() - 32 * 24 * 60 * 60 * 1000,
    fullMoon.getTime() - 60_000,
  );
  if (previous.length === 0) return false;
  const last = previous[previous.length - 1];
  const key = (value: Date): string => {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
    }).format(value);
    return parts;
  };
  return key(last) === key(fullMoon);
}

/**
 * Überlieferter Name des Vollmonds im Monat des gegebenen Vollmonds.
 *
 * Die Monatsnamen sind Volkstradition und keine Astronomie; sie werden in der
 * Anzeige ausdrücklich als Volksname gekennzeichnet. Maßgeblich ist der
 * Kalendermonat des Vollmonds in der Zeitzone der Karte.
 */
function moonFolkName(
  fullMoon: Date | null,
  timeZone: string,
  language: Language,
): string | null {
  if (!fullMoon) return null;
  const month = Number(
    new Intl.DateTimeFormat('en-CA', { timeZone, month: '2-digit' }).format(fullMoon),
  );
  if (!Number.isFinite(month) || month < 1 || month > 12) return null;
  const key = MOON_FOLK_KEYS[month - 1] as StringKey;
  return localize(language, 'folkName', { name: localize(language, key) });
}

/** Aufbereitung eines Mondauf- oder -untergangs. */
function moonEventDetail(
  time: Date | null,
  location: GeoLocation,
  now: Date,
  timeZone: string,
): MoonEventDetail | null {
  if (!time) return null;
  return {
    time,
    azimuth: azimuthAt(time, location, 'moon'),
    dayOffset: localDayIndex(time, timeZone) - localDayIndex(now, timeZone),
  };
}

/** Parst einen ISO-Zeitstempel sicher. */
function parseDate(value: unknown): Date | null {
  if (typeof value !== 'string' || value.trim() === '') return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

/** Zuordnung der HA-Attribute zu den Modellfeldern. */
const HA_EVENT_ATTRIBUTES: Array<[keyof SolarEvents, string]> = [
  ['sunrise', 'next_rising'],
  ['sunset', 'next_setting'],
  ['civilDawn', 'next_dawn'],
  ['civilDusk', 'next_dusk'],
];

/**
 * Phasenbezeichnungen der Home-Assistant-Moon-Integration
 * (homeassistant/components/moon/const.py) → interne Schlüssel.
 * Die Integration liefert ausschließlich diese acht Zustände.
 */
export const HA_MOON_PHASES: Record<string, MoonPhaseInfo['phaseKey']> = {
  new_moon: 'newMoon',
  waxing_crescent: 'waxingCrescent',
  first_quarter: 'firstQuarter',
  waxing_gibbous: 'waxingGibbous',
  full_moon: 'fullMoon',
  waning_gibbous: 'waningGibbous',
  last_quarter: 'lastQuarter',
  waning_crescent: 'waningCrescent',
};

/**
 * Baut das Anzeigemodell.
 *
 * @param config aufgelöste Konfiguration
 * @param hass Home-Assistant-Objekt (kann `undefined` sein)
 * @param now Referenzzeitpunkt
 * @param hassLastChanged Zeitstempel der letzten Änderung der Sun-Entität
 */
export function buildModel(
  config: ResolvedConfig,
  hass: HomeAssistant | undefined,
  now: Date,
): CardModel {
  const timeZone = resolveTimeZone(hass?.config?.time_zone);
  const issues: ModelIssue[] = [];

  const hassLatitude = isFiniteNumber(hass?.config?.latitude) ? hass.config.latitude : null;
  const hassLongitude = isFiniteNumber(hass?.config?.longitude) ? hass.config.longitude : null;

  const latitude = config.latitude ?? hassLatitude;
  const longitude = config.longitude ?? hassLongitude;

  // „auto“ folgt der Sprache der Home-Assistant-Oberfläche (`hass.locale`),
  // sonst der Sprache der Installation.
  const language = resolveLanguage(
    config.language,
    hass?.locale?.language ?? hass?.language,
  );

  if (latitude === null || longitude === null) {
    return emptyModel(now, timeZone, ['missing-location', ...issues], language);
  }

  const location: GeoLocation = { latitude, longitude };
  const locationName =
    config.location_name.trim() !== ''
      ? config.location_name.trim()
      : (hass?.config?.location_name ?? '');

  const dayStart = startOfLocalDay(now, timeZone);
  const dayEnd = endOfLocalDay(now, timeZone);

  const day = buildDayProfile(location, dayStart, dayEnd);
  const sun = sunPosition(now, location);
  const sunAltNow = sun.altitude;
  const sunAltNext = sunAltitude(now.getTime() + 60_000, location);

  const moon = moonPosition(now, location);
  const phase = moonPhase(now);
  const moonEvents = findMoonEvents(now, location);

  // ---- Home-Assistant-Daten einbeziehen ----------------------------------
  const sunEntity = hass?.states?.[config.entity];
  if (!sunEntity) {
    issues.push('missing-sun-entity');
  }

  const events: SolarEvents = { ...day.events };
  const eventSources: Record<string, 'ha' | 'computed' | 'none'> = {};

  if (sunEntity?.attributes) {
    for (const [key, attribute] of HA_EVENT_ATTRIBUTES) {
      const haValue = parseDate(sunEntity.attributes[attribute]);
      const computed = day.events[key];
      if (haValue && haValue >= dayStart && haValue < dayEnd) {
        if (
          !computed ||
          Math.abs(haValue.getTime() - computed.getTime()) <= HA_EVENT_TOLERANCE_MS
        ) {
          events[key] = haValue;
          eventSources[key] = 'ha';
          continue;
        }
      }
      eventSources[key] = computed ? 'computed' : 'none';
    }
  } else {
    for (const [key] of HA_EVENT_ATTRIBUTES) {
      eventSources[key] = day.events[key] ? 'computed' : 'none';
    }
  }
  for (const key of [
    'nauticalDawn',
    'nauticalDusk',
    'astronomicalDawn',
    'astronomicalDusk',
    'solarNoon',
  ] as const) {
    eventSources[key] = day.events[key] ? 'computed' : 'none';
  }

  const haElevation = sunEntity?.attributes
    ? toNumber((sunEntity.attributes as Record<string, unknown>).elevation)
    : null;
  const haAzimuth = sunEntity?.attributes
    ? toNumber((sunEntity.attributes as Record<string, unknown>).azimuth)
    : null;

  const moonEntity = config.moon_entity ? hass?.states?.[config.moon_entity] : undefined;
  const haPhaseName =
    moonEntity && typeof moonEntity.state === 'string'
      ? (HA_MOON_PHASES[moonEntity.state] ?? null)
      : null;

  // ---- Tagesgang des Mondes für die Kurve im Chart --------------------------
  // Nur bei eingeschaltetem Mond: Das Profil kostet rund 150 Mondpositionen
  // und wird sonst nicht gebraucht.
  const moonPath = config.show_moon
    ? buildMoonPath(location, dayStart, dayEnd, moonEvents)
    : null;

  // ---- Tagesbahn für die Himmelsansicht (alle 15 Minuten) -----------------
  const sunTrack: AltAzPoint[] = [];
  const trackStep = 15 * 60 * 1000;
  for (let time = dayStart.getTime(); time <= dayEnd.getTime(); time += trackStep) {
    const position = sunPosition(time, location);
    sunTrack.push({ altitude: position.altitude, azimuth: position.azimuth });
  }

  // ---- Sonderfälle --------------------------------------------------------
  let daylightMinutes: number | null = null;
  if (events.sunrise && events.sunset) {
    daylightMinutes = (events.sunset.getTime() - events.sunrise.getTime()) / 60_000;
  }
  // ---- Abgeleitete Zusatzwerte ---------------------------------------------
  // Der Vortag wird nur für die Differenz der Tageslänge benötigt; er wird
  // hier mitberechnet, weil das Ergebnis im Minuten-Cache liegt und damit
  // pro Minute höchstens einmal anfällt.
  const previousDayStart = startOfLocalDay(new Date(dayStart.getTime() - 12 * 60 * 60 * 1000), timeZone);
  const previousDay = buildDayProfile(location, previousDayStart, dayStart);
  const previousDaylightMinutes =
    previousDay.events.sunrise && previousDay.events.sunset
      ? (previousDay.events.sunset.getTime() - previousDay.events.sunrise.getTime()) / 60_000
      : null;
  const daylightDeltaMinutes =
    daylightMinutes !== null && previousDaylightMinutes !== null
      ? daylightMinutes - previousDaylightMinutes
      : null;

  const nextFullMoon = findNextFullMoon(now);
  const extras: CardExtras = {
    timeZoneLongName: timeZoneLongName(timeZone, languageLocale(language), now),
    previousDaylightMinutes,
    daylightDeltaMinutes,
    sunBelowHorizon: sunAltNow < 0 ? Math.abs(sunAltNow) : null,
    sunriseAzimuth: events.sunrise ? azimuthAt(events.sunrise, location, 'sun') : null,
    sunsetAzimuth: events.sunset ? azimuthAt(events.sunset, location, 'sun') : null,
    nextFullMoon,
    nextFullMoonDays: nextFullMoon
      ? Math.round((nextFullMoon.time.getTime() - now.getTime()) / (24 * 60 * 60 * 1000))
      : null,
    blueMoon: nextFullMoon ? isBlueMoon(nextFullMoon.time, timeZone) : false,
    moonFolkName: moonFolkName(nextFullMoon?.time ?? null, timeZone, language),
    moonDistance: moonDistanceRange(now, location, 14),
    moonRise: moonEventDetail(moonEvents.nextRise ?? moonEvents.previousRise, location, now, timeZone),
    moonSet: moonEventDetail(moonEvents.nextSet ?? moonEvents.previousSet, location, now, timeZone),
  };

  if (day.polar === 'polar-day') issues.push('polar-day');
  if (day.polar === 'polar-night') issues.push('polar-night');
  if (!events.sunrise) issues.push('no-sunrise-today');
  if (!events.sunset) issues.push('no-sunset-today');
  if (!events.civilDawn && !events.civilDusk) issues.push('no-civil-twilight');

  return {
    now,
    timeZone,
    location,
    locationName,
    day,
    sun: {
      altitude: sunAltNow,
      azimuth: sun.azimuth,
      phase: skyPhase(sunAltNow),
      rising: sunAltNext > sunAltNow,
      haElevation,
      haAzimuth,
    },
    moon: { position: moon, phase, events: moonEvents, haPhaseName },
    sunTrack,
    moonPath,
    events,
    eventSources,
    extras,
    daylightMinutes,
    issues,
    fatal: false,
  };
}

/** Aufbewahrung der berechneten Modelle (Schlüssel → Modell). */
const modelCache = new Map<string, CardModel>();

/** Signatur der für das Modell relevanten Konfiguration. */
function configSignature(config: ResolvedConfig): string {
  return [
    config.entity,
    config.moon_entity,
    config.latitude,
    config.longitude,
    config.twilight_level,
  ].join('|');
}

/** Signatur des relevanten Zustands der Home-Assistant-Entitäten. */
function hassSignature(config: ResolvedConfig, hass: HomeAssistant | undefined): string {
  if (!hass) return '-';
  const sun = hass.states?.[config.entity];
  const moon = config.moon_entity ? hass.states?.[config.moon_entity] : undefined;
  return [
    hass.config?.time_zone ?? '',
    hass.config?.latitude ?? '',
    hass.config?.longitude ?? '',
    sun?.attributes?.next_rising ?? sun?.last_updated ?? '',
    sun?.attributes?.next_setting ?? '',
    sun?.attributes?.next_dawn ?? '',
    sun?.attributes?.next_dusk ?? '',
    sun?.attributes?.elevation ?? '',
    moon?.state ?? '',
  ].join('|');
}

/**
 * Liefert das Modell – mit Zwischenspeicherung auf Minutenbasis.
 *
 * Die Karte erhält von Home Assistant sehr häufig ein neues `hass`-Objekt.
 * Ohne Cache würde jeder Zustandswechsel (z. B. ein schaltendes Licht)
 * die astronomischen Berechnungen erneut auslösen.
 */
export function getModel(
  config: ResolvedConfig,
  hass: HomeAssistant | undefined,
  now: Date,
): CardModel {
  const minute = Math.floor(now.getTime() / 60_000);
  const key = [
    configSignature(config),
    hassSignature(config, hass),
    minute,
    now.getTimezoneOffset(),
  ].join('#');

  const cached = modelCache.get(key);
  if (cached) return cached;

  const model = buildModel(config, hass, now);

  // Cache klein halten: ältere Einträge entfernen.
  if (modelCache.size > 24) {
    const oldest = modelCache.keys().next().value;
    if (oldest !== undefined) modelCache.delete(oldest);
  }
  modelCache.set(key, model);
  return model;
}

/** Leert den Modell-Cache (für Tests). */
export function clearModelCache(): void {
  modelCache.clear();
}
