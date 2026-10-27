/**
 * timezone.ts
 *
 * Hilfsfunktionen für die Arbeit mit der in Home Assistant konfigurierten
 * Zeitzone. Sommer- und Winterzeit sowie alle historischen und politischen
 * Zeitzonenregeln werden von der Internationalization-API (Intl) des Browsers
 * bzw. der JavaScript-Laufzeitumgebung bereitgestellt – es werden keine
 * festen Offsettabellen verwendet und keine externen Dienste abgefragt.
 */

export interface ZonedParts {
  year: number;
  month: number; // 1..12
  day: number; // 1..31
  hour: number; // 0..23
  minute: number;
  second: number;
}

const formatterCache = new Map<string, Intl.DateTimeFormat>();

function partsFormatter(timeZone: string): Intl.DateTimeFormat {
  let formatter = formatterCache.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    formatterCache.set(timeZone, formatter);
  }
  return formatter;
}

/** Baut einen Formatter – bei unbekannter Zeitzone wird UTC verwendet. */
function safePartsFormatter(timeZone: string): Intl.DateTimeFormat {
  try {
    return partsFormatter(timeZone);
  } catch {
    return partsFormatter('UTC');
  }
}

/** Zerlegt einen Zeitpunkt in die Bestandteile der Zeitzone. */
export function zonedParts(instant: Date, timeZone: string): ZonedParts {
  const parts = safePartsFormatter(timeZone).formatToParts(instant);
  const values: Record<string, number> = {};
  for (const part of parts) {
    if (part.type !== 'literal') {
      values[part.type] = Number.parseInt(part.value, 10);
    }
  }
  return {
    year: values.year ?? 1970,
    month: values.month ?? 1,
    day: values.day ?? 1,
    hour: (values.hour ?? 0) % 24, // "24" bei manchen Implementierungen
    minute: values.minute ?? 0,
    second: values.second ?? 0,
  };
}

/**
 * Offset der Zeitzone zum angegebenen Zeitpunkt in Millisekunden
 * (lokal minus UTC).
 */
export function timeZoneOffsetMs(instant: Date, timeZone: string): number {
  const parts = zonedParts(instant, timeZone);
  const asUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second,
  );
  return asUtc - Math.floor(instant.getTime() / 1000) * 1000;
}

/**
 * Rechnet eine lokale Zeitangabe in einen UTC-Zeitpunkt um.
 *
 * Die Umsetzung erfolgt zweistufig, damit Zeitumstellungen (Sommerzeit)
 * korrekt berücksichtigt werden. Existiert die angegebene lokale Zeit nicht
 * (Zeitumstellung vorwärts), wird der nächstmögliche Zeitpunkt geliefert.
 */
export function zonedTimeToUtc(
  year: number,
  month: number,
  day: number,
  hour = 0,
  minute = 0,
  second = 0,
  timeZone = 'UTC',
): Date {
  const asIfUtc = Date.UTC(year, month - 1, day, hour, minute, second);
  const dayMs = 24 * 60 * 60 * 1000;

  // Beim Übergang Sommerzeit ↔ Winterzeit sind für dieselbe Ortszeit zwei
  // Versätze möglich. Beide werden geprüft (wie bei Temporal/date-fns-tz).
  const offsets = [
    timeZoneOffsetMs(new Date(asIfUtc - dayMs), timeZone),
    timeZoneOffsetMs(new Date(asIfUtc + dayMs), timeZone),
  ];
  const candidates = [...new Set(offsets)]
    .map((offset) => asIfUtc - offset)
    .filter((instant) => {
      const parts = zonedParts(new Date(instant), timeZone);
      return (
        parts.year === year &&
        parts.month === month &&
        parts.day === day &&
        parts.hour === hour &&
        parts.minute === minute &&
        parts.second === second
      );
    })
    .sort((a, b) => a - b);

  if (candidates.length > 0) {
    // Mehrdeutige Zeit (z. B. 02:30 am Umstellungstag): erster Durchgang.
    return new Date(candidates[0]);
  }

  // Nicht existierende Zeit (z. B. 02:30 beim Umstellen auf Sommerzeit):
  // um die Länge der Lücke nach vorn verschieben.
  const smallestOffset = Math.min(...offsets);
  return new Date(asIfUtc - smallestOffset);
}

/** Beginn des lokalen Tages (00:00:00 Ortszeit) zu dem Zeitpunkt. */
export function startOfLocalDay(instant: Date, timeZone: string): Date {
  const parts = zonedParts(instant, timeZone);
  return zonedTimeToUtc(parts.year, parts.month, parts.day, 0, 0, 0, timeZone);
}

/** Ende des lokalen Tages – identisch mit dem Beginn des Folgetages. */
export function endOfLocalDay(instant: Date, timeZone: string): Date {
  const dayStart = startOfLocalDay(instant, timeZone);
  // +36 h liegt sicher im Folgetag (lokale Tage sind 23, 24 oder 25 h lang)
  return startOfLocalDay(new Date(dayStart.getTime() + 36 * 60 * 60 * 1000), timeZone);
}

/**
 * Index des lokalen Kalendertags eines Zeitpunkts.
 *
 * Der Index ist nur zum Vergleich innerhalb einer Zeitzone gedacht: Die
 * Differenz zweier Indizes ergibt die Anzahl der Kalendertage zwischen den
 * Zeitpunkten, Sommerzeitumstellungen eingeschlossen.
 */
export function localDayIndex(instant: Date, timeZone: string): number {
  return Math.round(startOfLocalDay(instant, timeZone).getTime() / (24 * 60 * 60 * 1000));
}

/** Addiert Tage auf Basis des lokalen Kalenders (DST-sicher). */
export function addLocalDays(instant: Date, timeZone: string, days: number): Date {
  const parts = zonedParts(instant, timeZone);
  return zonedTimeToUtc(
    parts.year,
    parts.month,
    parts.day + days,
    parts.hour,
    parts.minute,
    parts.second,
    timeZone,
  );
}

/** Erkennt, ob an einem Tag in der Zeitzone eine Zeitumstellung stattfindet. */
export function isDaylightSavingTransitionDay(
  dayStart: Date,
  timeZone: string,
): boolean {
  const before = timeZoneOffsetMs(new Date(dayStart.getTime() - 1000), timeZone);
  const after = timeZoneOffsetMs(
    new Date(dayStart.getTime() + 24 * 60 * 60 * 1000),
    timeZone,
  );
  return before !== after;
}

/** Länge des lokalen Tages in Stunden (23, 24 oder 25 bei Zeitumstellung). */
export function localDayLengthHours(dayStart: Date, timeZone: string): number {
  const next = startOfLocalDay(
    new Date(dayStart.getTime() + 36 * 60 * 60 * 1000),
    timeZone,
  );
  return (next.getTime() - dayStart.getTime()) / (60 * 60 * 1000);
}

/** Gibt die Zeitzone zurück, die tatsächlich verwendet werden kann. */
export function resolveTimeZone(candidate?: string | null): string {
  if (candidate) {
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: candidate });
      return candidate;
    } catch {
      /* ungültige Zeitzone – Rückfall auf die des Systems */
    }
  }
  return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
}
