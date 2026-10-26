/**
 * localize.ts
 *
 * Mehrsprachigkeit (Deutsch und Englisch).
 *
 * Die Sprache folgt standardmäßig der in Home Assistant konfigurierten Sprache
 * (`hass.locale.language`). Sie kann über die Option `language` festgelegt
 * werden. Liegt keine Übersetzung vor, wird Englisch verwendet.
 */

export type Language = 'de' | 'en';

export const LANGUAGES: Language[] = ['de', 'en'];

const strings = {
  de: {
    // Kopfzeile / allgemein
    title: 'Sonne & Mond',
    loading: 'Berechne…',
    noData: 'Keine Daten verfügbar',
    missingLocation:
      'Kein Standort verfügbar. Bitte Breiten- und Längengrad in der Karte konfigurieren.',
    missingSunEntity: 'Entität {entity} nicht gefunden – Berechnung erfolgt lokal.',
    invalidHeight: 'Ungültige Kartenhöhe {value}. Erlaubt: {min}–{max} Pixel oder "auto".',
    invalidNumber: 'Ungültiger Zahlenwert: {value}',

    // Himmelsphasen
    phaseDay: 'Tag',
    phaseCivil: 'Bürgerliche Dämmerung',
    phaseNautical: 'Nautische Dämmerung',
    phaseAstronomical: 'Astronomische Dämmerung',
    phaseNight: 'Nacht',
    phasePolarDay: 'Polartag',
    phasePolarNight: 'Polarnacht',

    // Ereignisse
    civilDawn: 'Morgendämmerung',
    civilDawnShort: 'Dämmerung',
    sunrise: 'Sonnenaufgang',
    sunriseShort: 'Aufgang',
    solarNoon: 'Kulmination',
    sunset: 'Sonnenuntergang',
    sunsetShort: 'Untergang',
    civilDusk: 'Abenddämmerung',
    civilDuskShort: 'Dämmerung',
    nauticalDawn: 'Naut. Morgendämmerung',
    nauticalDusk: 'Naut. Abenddämmerung',
    astronomicalDawn: 'Astron. Morgendämmerung',
    astronomicalDusk: 'Astron. Abenddämmerung',
    twilight: 'Dämmerung',
    daylight: 'Tageslicht',
    night: 'Nacht',
    dayLength: 'Tageslänge',
    noEvent: '—',
    noSunrise: 'kein Aufgang',
    noSunset: 'kein Untergang',

    // Sonne
    sun: 'Sonne',
    sunAltitude: 'Sonnenstand',
    elevation: 'Höhe',
    azimuth: 'Azimut',
    rising: 'steigend',
    setting: 'fallend',

    // Mond
    moon: 'Mond',
    moonPhase: 'Mondphase',
    illumination: 'beleuchtet',
    moonrise: 'Mondaufgang',
    moonriseShort: 'Aufgang',
    moonset: 'Monduntergang',
    moonsetShort: 'Untergang',
    nextMoonrise: 'nächster Aufgang',
    nextMoonset: 'nächster Untergang',
    moonDistance: 'Entfernung',
    moonAltitude: 'Mondstand',
    moonAge: 'Mondalter',
    moonDays: '{days} Tage',

    // Mondphasen
    newMoon: 'Neumond',
    waxingCrescent: 'Zunehmende Sichel',
    firstQuarter: 'Erstes Viertel',
    waxingGibbous: 'Zunehmender Mond',
    fullMoon: 'Vollmond',
    waningGibbous: 'Abnehmender Mond',
    lastQuarter: 'Letztes Viertel',
    waningCrescent: 'Abnehmende Sichel',

    // Himmelsansicht
    skyView: 'Himmelsansicht',
    belowHorizon: 'unter dem Horizont',
    zenith: 'Zenit',
    compassNorth: 'N',
    compassEast: 'O',
    compassSouth: 'S',
    compassWest: 'W',

    // Himmelsrichtungen (ausgeschrieben)
    dirN: 'Nord',
    dirNE: 'Nordost',
    dirE: 'Ost',
    dirSE: 'Südost',
    dirS: 'Süd',
    dirSW: 'Südwest',
    dirW: 'West',
    dirNW: 'Nordwest',

    // Hinweise
    hintPolarDay: 'Die Sonne geht heute nicht unter (Polartag).',
    hintPolarNight: 'Die Sonne geht heute nicht auf (Polarnacht).',
    hintNoCivilTwilight: 'Keine bürgerliche Dämmerung – die Sonne bleibt unter −6°.',
    hintNoData: 'Für diesen Standort liegen keine gültigen astronomischen Daten vor.',

    // Editor
    editorAppearance: 'Darstellung',
    editorSections: 'Bereiche',
    editorBehaviour: 'Verhalten',
    editorLocation: 'Standort',
    editorCardHeight: 'Kartenhöhe (px)',
    editorCardHeightAuto: 'Automatische Höhe',
    editorShowSun: 'Sonne anzeigen',
    editorShowMoon: 'Mond anzeigen',
    editorShowTwilight: 'Dämmerung anzeigen',
    editorShowAstronomicalDetails: 'Astronomische Details',
    editorCompactMode: 'Kompakte Darstellung',
    editorThemeMode: 'Farbschema',
    editorThemeAuto: 'Automatisch (Theme)',
    editorThemeLight: 'Hell',
    editorThemeDark: 'Dunkel',
    editorAnimations: 'Animationen',
    editorTimeFormat: 'Zeitformat',
    editorTimeFormatAuto: 'Automatisch',
    editorTimeFormat12: '12 Stunden',
    editorTimeFormat24: '24 Stunden',
    editorLanguage: 'Sprache',
    editorLanguageAuto: 'Automatisch',
    editorShowHeader: 'Kopfzeile',
    editorShowDayChart: 'Tagesverlauf',
    editorShowSkyView: 'Himmelsansicht',
    editorShowEvents: 'Zeitenleiste',
    editorShowMoonTimes: 'Mondauf-/Untergang',
    editorTwilightLevel: 'Dämmerungsgrenze',
    editorTwilightCivil: 'Bürgerlich (−6°)',
    editorTwilightNautical: 'Nautisch (−12°)',
    editorTwilightAstronomical: 'Astronomisch (−18°)',
    editorTwilightAll: 'Alle Ebenen',
    editorEntity: 'Sonnen-Entität',
    editorMoonEntity: 'Mond-Entität (optional)',
    editorLocationName: 'Anzeigename des Standorts',
    editorLatitude: 'Breitengrad',
    editorLongitude: 'Längengrad',
    editorUseHaLocation: 'Standort aus Home Assistant übernehmen',
    editorReset: 'Zurücksetzen',
  },
  en: {
    title: 'Sun & Moon',
    loading: 'Calculating…',
    noData: 'No data available',
    missingLocation:
      'No location available. Please configure latitude and longitude in the card.',
    missingSunEntity: 'Entity {entity} not found – using local calculations.',
    invalidHeight: 'Invalid card height {value}. Allowed: {min}–{max} pixels or "auto".',
    invalidNumber: 'Invalid number: {value}',

    phaseDay: 'Daylight',
    phaseCivil: 'Civil twilight',
    phaseNautical: 'Nautical twilight',
    phaseAstronomical: 'Astronomical twilight',
    phaseNight: 'Night',
    phasePolarDay: 'Polar day',
    phasePolarNight: 'Polar night',

    civilDawn: 'Morning twilight',
    civilDawnShort: 'Dawn',
    sunrise: 'Sunrise',
    sunriseShort: 'Sunrise',
    solarNoon: 'Solar noon',
    sunset: 'Sunset',
    sunsetShort: 'Sunset',
    civilDusk: 'Evening twilight',
    civilDuskShort: 'Dusk',
    nauticalDawn: 'Nautical dawn',
    nauticalDusk: 'Nautical dusk',
    astronomicalDawn: 'Astronomical dawn',
    astronomicalDusk: 'Astronomical dusk',
    twilight: 'Twilight',
    daylight: 'Daylight',
    night: 'Night',
    dayLength: 'Day length',
    noEvent: '—',
    noSunrise: 'no sunrise',
    noSunset: 'no sunset',

    sun: 'Sun',
    sunAltitude: 'Solar elevation',
    elevation: 'Elevation',
    azimuth: 'Azimuth',
    rising: 'rising',
    setting: 'setting',

    moon: 'Moon',
    moonPhase: 'Moon phase',
    illumination: 'illuminated',
    moonrise: 'Moonrise',
    moonriseShort: 'Moonrise',
    moonset: 'Moonset',
    moonsetShort: 'Moonset',
    nextMoonrise: 'next rise',
    nextMoonset: 'next set',
    moonDistance: 'Distance',
    moonAltitude: 'Lunar elevation',
    moonAge: 'Moon age',
    moonDays: '{days} days',

    newMoon: 'New moon',
    waxingCrescent: 'Waxing crescent',
    firstQuarter: 'First quarter',
    waxingGibbous: 'Waxing gibbous',
    fullMoon: 'Full moon',
    waningGibbous: 'Waning gibbous',
    lastQuarter: 'Last quarter',
    waningCrescent: 'Waning crescent',

    skyView: 'Sky view',
    belowHorizon: 'below the horizon',
    zenith: 'Zenith',
    compassNorth: 'N',
    compassEast: 'E',
    compassSouth: 'S',
    compassWest: 'W',

    dirN: 'north',
    dirNE: 'north-east',
    dirE: 'east',
    dirSE: 'south-east',
    dirS: 'south',
    dirSW: 'south-west',
    dirW: 'west',
    dirNW: 'north-west',

    hintPolarDay: 'The sun does not set today (polar day).',
    hintPolarNight: 'The sun does not rise today (polar night).',
    hintNoCivilTwilight: 'No civil twilight – the sun stays below −6°.',
    hintNoData: 'No valid astronomical data available for this location.',

    editorAppearance: 'Appearance',
    editorSections: 'Sections',
    editorBehaviour: 'Behaviour',
    editorLocation: 'Location',
    editorCardHeight: 'Card height (px)',
    editorCardHeightAuto: 'Automatic height',
    editorShowSun: 'Show sun',
    editorShowMoon: 'Show moon',
    editorShowTwilight: 'Show twilight',
    editorShowAstronomicalDetails: 'Astronomical details',
    editorCompactMode: 'Compact layout',
    editorThemeMode: 'Colour scheme',
    editorThemeAuto: 'Automatic (theme)',
    editorThemeLight: 'Light',
    editorThemeDark: 'Dark',
    editorAnimations: 'Animations',
    editorTimeFormat: 'Time format',
    editorTimeFormatAuto: 'Automatic',
    editorTimeFormat12: '12 hours',
    editorTimeFormat24: '24 hours',
    editorLanguage: 'Language',
    editorLanguageAuto: 'Automatic',
    editorShowHeader: 'Header',
    editorShowDayChart: 'Day chart',
    editorShowSkyView: 'Sky view',
    editorShowEvents: 'Event bar',
    editorShowMoonTimes: 'Moonrise / moonset',
    editorTwilightLevel: 'Twilight limit',
    editorTwilightCivil: 'Civil (−6°)',
    editorTwilightNautical: 'Nautical (−12°)',
    editorTwilightAstronomical: 'Astronomical (−18°)',
    editorTwilightAll: 'All levels',
    editorEntity: 'Sun entity',
    editorMoonEntity: 'Moon entity (optional)',
    editorLocationName: 'Location display name',
    editorLatitude: 'Latitude',
    editorLongitude: 'Longitude',
    editorUseHaLocation: 'Use location from Home Assistant',
    editorReset: 'Reset',
  },
} as const;

export type StringKey = keyof (typeof strings)['en'];

/**
 * Gibt die Übersetzung für einen Schlüssel zurück.
 * Platzhalter werden im Format `{name}` ersetzt.
 */
export function localize(
  language: Language,
  key: StringKey,
  replacements?: Record<string, string | number>,
): string {
  const table: Record<string, string> = strings[language] ?? strings.en;
  let value: string = table[key] ?? strings.en[key] ?? String(key);
  if (replacements) {
    for (const [name, replacement] of Object.entries(replacements)) {
      value = value.split(`{${name}}`).join(String(replacement));
    }
  }
  return value;
}

/** Ermittelt die zu verwendende Sprache. */
export function resolveLanguage(
  configured: string | undefined,
  hassLanguage: string | undefined,
): Language {
  const candidate = (configured && configured !== 'auto' ? configured : hassLanguage) ?? '';
  const normalized = candidate.toLowerCase();
  if (normalized.startsWith('de')) return 'de';
  return 'en';
}
