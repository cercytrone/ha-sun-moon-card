/**
 * format.ts
 *
 * Formatierung von Zeiten, Zahlen und Winkeln.
 *
 * Alle Zeitangaben werden über die Internationalization-API in der Zeitzone
 * ausgegeben, die in Home Assistant konfiguriert ist. Dadurch werden
 * Sommerzeit, Winterzeit und alle regionalen Besonderheiten korrekt
 * berücksichtigt, ohne dass eigene Offset-Tabellen gepflegt werden müssen.
 */

import { COMPASS_POINTS } from './const.js';
import type { Language, StringKey } from './localize.js';
import { localize } from './localize.js';

export type TimeFormatSetting = 'auto' | '12' | '24';

export interface FormatContext {
  language: Language;
  /** BCP-47-Sprachkennung, z. B. `de-DE`. */
  locale: string;
  timeZone: string;
  hour12: boolean;
  /** Übersetzungsfunktion. */
  t: (key: StringKey, replacements?: Record<string, string | number>) => string;
}

/**
 * Ermittelt, ob das 12-Stunden-Format verwendet werden soll.
 *
 * `hass.locale.time_format` kann `language`, `system`, `12`, `24` oder
 * `am_pm` sein. Bei `language`/`system` entscheidet die Sprach- bzw.
 * Systemeinstellung (über `Intl`).
 */
export function resolveHour12(
  setting: TimeFormatSetting,
  haTimeFormat: string | undefined,
  locale: string,
): boolean {
  let effective = setting;
  if (effective === 'auto' && haTimeFormat) {
    if (haTimeFormat === '12' || haTimeFormat === 'am_pm') effective = '12';
    else if (haTimeFormat === '24') effective = '24';
  }
  if (effective === '12') return true;
  if (effective === '24') return false;

  // 'auto'/'language'/'system': Gebietsschema entscheiden lassen
  try {
    const options = new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
    }).resolvedOptions();
    return options.hour12 ?? options.hourCycle === 'h12';
  } catch {
    return false;
  }
}

const timeFormatterCache = new Map<string, Intl.DateTimeFormat>();

function timeFormatter(locale: string, timeZone: string, hour12: boolean) {
  const key = `${locale}|${timeZone}|${hour12}`;
  let formatter = timeFormatterCache.get(key);
  if (!formatter) {
    try {
      formatter = new Intl.DateTimeFormat(locale, {
        // Im 12-Stunden-Format ohne führende Null („6:30 PM“),
        // im 24-Stunden-Format zweistellig („06:30“) – das hält die
        // Zeitangaben in der Ereignisleiste bündig.
        hour: hour12 ? 'numeric' : '2-digit',
        minute: '2-digit',
        hour12,
        timeZone,
      });
    } catch {
      formatter = new Intl.DateTimeFormat('en-GB', {
        hour: hour12 ? 'numeric' : '2-digit',
        minute: '2-digit',
        hour12,
        timeZone,
      });
    }
    timeFormatterCache.set(key, formatter);
  }
  return formatter;
}

/** Formatiert eine Uhrzeit in der konfigurierten Zeitzone. */
export function formatTime(date: Date, context: FormatContext): string {
  return timeFormatter(context.locale, context.timeZone, context.hour12).format(date);
}

/** Formatiert ein Datum, z. B. „Mo., 26. Okt.“ */
export function formatDate(date: Date, context: FormatContext): string {
  try {
    return new Intl.DateTimeFormat(context.locale, {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      timeZone: context.timeZone,
    }).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}

/** Formatiert eine Zahl mit der angegebenen Anzahl Nachkommastellen. */
export function formatNumber(value: number, digits = 0, locale = 'de-DE'): string {
  try {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(value);
  } catch {
    return value.toFixed(digits);
  }
}

/** Formatiert eine Gradzahl, z. B. `12,4°`. */
export function formatDegrees(value: number, digits = 1, locale = 'de-DE'): string {
  return `${formatNumber(value, digits, locale)}°`;
}

/** Formatiert eine Entfernung in Kilometern. */
export function formatKilometers(value: number, locale = 'de-DE'): string {
  return `${formatNumber(Math.round(value), 0, locale)} km`;
}

/** Formatiert eine Dauer in Stunden und Minuten, z. B. `8 h 12 min`. */
export function formatDuration(minutes: number, language: Language): string {
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return language === 'de'
    ? `${hours} h ${mins} min`
    : `${hours} h ${mins} min`;
}

/** Formatiert einen Prozentwert. */
export function formatPercent(fraction: number, locale = 'de-DE'): string {
  return `${formatNumber(fraction * 100, 0, locale)} %`;
}

/** Liefert die Himmelsrichtung zu einem Azimut. */
export function compassDirection(azimuth: number, language: Language): string {
  const normalized = ((azimuth % 360) + 360) % 360;
  let best = COMPASS_POINTS[0];
  let bestDelta = Infinity;
  for (const point of COMPASS_POINTS) {
    const delta = Math.abs(((normalized - point.deg + 540) % 360) - 180);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = point;
    }
  }
  const key = `dir${best.key}` as StringKey;
  return localize(language, key);
}

/** Erzeugt einen Formatierungskontext. */
export function createFormatContext(
  language: Language,
  locale: string,
  timeZone: string,
  hour12: boolean,
): FormatContext {
  return {
    language,
    locale,
    timeZone,
    hour12,
    t: (key, replacements) => localize(language, key, replacements),
  };
}
