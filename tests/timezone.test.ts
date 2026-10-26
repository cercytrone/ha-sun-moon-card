/**
 * Prüfung der Zeitzonen- und Zeitumstellungslogik.
 *
 * Sommerzeit/Winterzeit sind die häufigste Fehlerquelle bei Sonnenstands-
 * Karten: lokale Tage sind 23, 24 oder 25 Stunden lang, und manche
 * Ortszeiten existieren an einem Tag gar nicht (bzw. doppelt).
 */

import { describe, expect, it } from 'vitest';

import {
  addLocalDays,
  endOfLocalDay,
  isDaylightSavingTransitionDay,
  localDayLengthHours,
  resolveTimeZone,
  startOfLocalDay,
  timeZoneOffsetMs,
  zonedParts,
  zonedTimeToUtc,
} from '../src/timezone.js';

const BERLIN = 'Europe/Berlin';
const HOUR = 60 * 60 * 1000;

describe('zonedParts', () => {
  it('liefert die Ortszeit-Bestandteile', () => {
    const instant = new Date('2026-10-26T17:30:00.000Z'); // 18:30 Berlin (CET)
    const parts = zonedParts(instant, BERLIN);
    expect(parts).toMatchObject({ year: 2026, month: 10, day: 26, hour: 18, minute: 30 });
  });

  it('liefert Ortszeit-Bestandteile in der Sommerzeit', () => {
    const instant = new Date('2026-07-01T10:30:00.000Z'); // 12:30 Berlin (CEST)
    expect(zonedParts(instant, BERLIN)).toMatchObject({ hour: 12, minute: 30 });
  });

  it('fällt bei unbekannter Zeitzone nicht um', () => {
    const parts = zonedParts(new Date('2026-01-01T00:00:00.000Z'), 'Mars/Olympus');
    expect(typeof parts.hour).toBe('number');
  });
});

describe('timeZoneOffsetMs', () => {
  it('liefert +1 h im Winter und +2 h im Sommer (Berlin)', () => {
    expect(timeZoneOffsetMs(new Date('2026-01-15T12:00:00.000Z'), BERLIN)).toBe(1 * HOUR);
    expect(timeZoneOffsetMs(new Date('2026-07-15T12:00:00.000Z'), BERLIN)).toBe(2 * HOUR);
  });

  it('liefert negative Versätze für westliche Zonen', () => {
    const offset = timeZoneOffsetMs(new Date('2026-07-15T12:00:00.000Z'), 'America/New_York');
    expect(offset).toBe(-4 * HOUR);
  });
});

describe('zonedTimeToUtc', () => {
  it('rechnet Ortszeit in einen Zeitpunkt um', () => {
    expect(zonedTimeToUtc(2026, 10, 26, 18, 30, 0, BERLIN).toISOString()).toBe(
      '2026-10-26T17:30:00.000Z',
    );
    expect(zonedTimeToUtc(2026, 7, 1, 12, 30, 0, BERLIN).toISOString()).toBe(
      '2026-07-01T10:30:00.000Z',
    );
  });

  it('behandelt nicht existierende Ortszeiten (Umstellung vorwärts)', () => {
    // 02:30 existiert am 29.03.2026 in Berlin nicht (02:00 → 03:00)
    const result = zonedTimeToUtc(2026, 3, 29, 2, 30, 0, BERLIN);
    expect(Number.isNaN(result.getTime())).toBe(false);
    expect(zonedParts(result, BERLIN).hour).toBeGreaterThanOrEqual(3);
  });

  it('behandelt doppelte Ortszeiten (Umstellung zurück)', () => {
    // 02:30 existiert am 25.10.2026 doppelt – der erste (MESZ) Durchgang wird verwendet
    const result = zonedTimeToUtc(2026, 10, 25, 2, 30, 0, BERLIN);
    expect(result.toISOString()).toBe('2026-10-25T00:30:00.000Z');
  });
});

describe('startOfLocalDay / endOfLocalDay', () => {
  it('liefert Mitternacht Ortszeit', () => {
    const start = startOfLocalDay(new Date('2026-10-26T17:30:00.000Z'), BERLIN);
    expect(zonedParts(start, BERLIN)).toMatchObject({ day: 26, hour: 0, minute: 0, second: 0 });
  });

  it('liefert einen normalen Tag mit 24 Stunden', () => {
    const start = startOfLocalDay(new Date('2026-10-26T12:00:00.000Z'), BERLIN);
    const end = endOfLocalDay(new Date('2026-10-26T12:00:00.000Z'), BERLIN);
    expect((end.getTime() - start.getTime()) / HOUR).toBe(24);
  });

  it('liefert am Umstellungstag (vorwärts) 23 Stunden', () => {
    const reference = new Date('2026-03-29T12:00:00.000Z');
    const start = startOfLocalDay(reference, BERLIN);
    const end = endOfLocalDay(reference, BERLIN);
    expect((end.getTime() - start.getTime()) / HOUR).toBe(23);
  });

  it('liefert am Umstellungstag (zurück) 25 Stunden', () => {
    const reference = new Date('2026-10-25T12:00:00.000Z');
    const start = startOfLocalDay(reference, BERLIN);
    const end = endOfLocalDay(reference, BERLIN);
    expect((end.getTime() - start.getTime()) / HOUR).toBe(25);
  });
});

describe('addLocalDays', () => {
  it('addiert Tage kalendergetreu über eine Zeitumstellung hinweg', () => {
    const start = startOfLocalDay(new Date('2026-03-28T12:00:00.000Z'), BERLIN);
    const next = addLocalDays(start, BERLIN, 1);
    expect(zonedParts(next, BERLIN)).toMatchObject({ month: 3, day: 29, hour: 0 });
  });
});

describe('isDaylightSavingTransitionDay', () => {
  it('erkennt beide Umstellungstage in Berlin', () => {
    expect(
      isDaylightSavingTransitionDay(
        startOfLocalDay(new Date('2026-03-29T12:00:00.000Z'), BERLIN),
        BERLIN,
      ),
    ).toBe(true);
    expect(
      isDaylightSavingTransitionDay(
        startOfLocalDay(new Date('2026-10-25T12:00:00.000Z'), BERLIN),
        BERLIN,
      ),
    ).toBe(true);
  });

  it('meldet für normale Tage false', () => {
    expect(
      isDaylightSavingTransitionDay(
        startOfLocalDay(new Date('2026-06-15T12:00:00.000Z'), BERLIN),
        BERLIN,
      ),
    ).toBe(false);
  });

  it('meldet false für Zonen ohne Sommerzeit', () => {
    const zone = 'America/Guayaquil'; // Quito, ganzjährig UTC−5
    expect(
      isDaylightSavingTransitionDay(
        startOfLocalDay(new Date('2026-03-29T12:00:00.000Z'), zone),
        zone,
      ),
    ).toBe(false);
  });
});

describe('localDayLengthHours', () => {
  it('liefert 24, 23 oder 25 Stunden', () => {
    expect(
      localDayLengthHours(startOfLocalDay(new Date('2026-06-15T12:00:00Z'), BERLIN), BERLIN),
    ).toBe(24);
    expect(
      localDayLengthHours(startOfLocalDay(new Date('2026-03-29T12:00:00Z'), BERLIN), BERLIN),
    ).toBe(23);
    expect(
      localDayLengthHours(startOfLocalDay(new Date('2026-10-25T12:00:00Z'), BERLIN), BERLIN),
    ).toBe(25);
  });
});

describe('resolveTimeZone', () => {
  it('übernimmt gültige Zeitzonen', () => {
    expect(resolveTimeZone(BERLIN)).toBe(BERLIN);
    expect(resolveTimeZone('UTC')).toBe('UTC');
  });

  it('fällt bei ungültigen oder fehlenden Werten auf eine nutzbare Zone zurück', () => {
    expect(resolveTimeZone('Nirgendwo/Nix')).toMatch(/^[A-Za-z]+\/[A-Za-z_]+$|^UTC$/);
    expect(resolveTimeZone(undefined)).toMatch(/.+/);
    expect(resolveTimeZone(null)).toMatch(/.+/);
    expect(resolveTimeZone('')).toMatch(/.+/);
  });
});
