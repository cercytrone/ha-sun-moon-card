/**
 * Prüfung der Suche nach dem nächsten Ereignis (`findNextElevationEvent`).
 *
 * Im Mittelpunkt steht der Fall, den das Tagesprofil nicht abdeckt: das
 * Ereignis, das erst am **folgenden** Tag stattfindet. Dazu wird die Suche
 * gegen `buildDayProfile()` des jeweiligen Tages gehalten – beide Wege
 * bestimmen ihre Nullstelle unabhängig voneinander.
 */

import { describe, expect, it } from 'vitest';

import {
  ELEVATION_CIVIL,
  ELEVATION_SUNRISE_SUNSET,
  buildDayProfile,
  findNextElevationEvent,
} from '../src/astronomy.js';
import { endOfLocalDay, startOfLocalDay, zonedTimeToUtc } from '../src/timezone.js';

const BERLIN = { latitude: 52.52, longitude: 13.405 };
const LONGYEARBYEN = { latitude: 78.2232, longitude: 15.6469 };
const TZ = 'Europe/Berlin';

/** Ereignisse des Tages, in dem `time` liegt. */
function dayEvents(time: Date) {
  return buildDayProfile(BERLIN, startOfLocalDay(time, TZ), endOfLocalDay(time, TZ)).events;
}

describe('findNextElevationEvent – nächstes Ereignis', () => {
  it('findet am Mittag den Sonnenuntergang desselben Tages', () => {
    const now = zonedTimeToUtc(2026, 10, 26, 12, 0, 0, TZ);
    const next = findNextElevationEvent(BERLIN, now, ELEVATION_SUNRISE_SUNSET);
    expect(next).not.toBeNull();
    expect(next?.rising).toBe(false);
    expect(next!.time.getTime()).toBeGreaterThan(now.getTime());
    const sunset = dayEvents(now).sunset;
    expect(sunset).not.toBeNull();
    expect(Math.abs(next!.time.getTime() - sunset!.getTime())).toBeLessThan(5000);
  });

  it('findet nach Sonnenuntergang den Sonnenaufgang des Folgetages', () => {
    const evening = zonedTimeToUtc(2026, 10, 26, 22, 0, 0, TZ);
    const next = findNextElevationEvent(BERLIN, evening, ELEVATION_SUNRISE_SUNSET);
    expect(next?.rising).toBe(true);
    // Der Aufgang gehört zum nächsten Kalendertag – das Tagesprofil von
    // heute kennt ihn nicht.
    const tomorrow = new Date(evening.getTime() + 12 * 60 * 60 * 1000);
    const sunrise = dayEvents(tomorrow).sunrise;
    expect(sunrise).not.toBeNull();
    expect(Math.abs(next!.time.getTime() - sunrise!.getTime())).toBeLessThan(5000);
    expect(next!.time.getTime()).toBeGreaterThan(evening.getTime());
  });

  it('findet die Dämmerung über dieselbe Suche', () => {
    const now = zonedTimeToUtc(2026, 10, 26, 12, 0, 0, TZ);
    const next = findNextElevationEvent(BERLIN, now, ELEVATION_CIVIL);
    expect(next?.rising).toBe(false);
    const dusk = dayEvents(now).civilDusk;
    expect(dusk).not.toBeNull();
    expect(Math.abs(next!.time.getTime() - dusk!.getTime())).toBeLessThan(5000);
  });

  it('meldet kein Ereignis, wenn im Fenster keines stattfindet', () => {
    const noon = zonedTimeToUtc(2026, 10, 26, 12, 0, 0, TZ);
    // Zwei Stunden vor dem Untergang: im Fenster liegt kein Ereignis.
    expect(findNextElevationEvent(BERLIN, noon, ELEVATION_SUNRISE_SUNSET, 2)).toBeNull();
  });

  it('erfindet in der Polarnacht keinen Sonnenaufgang', () => {
    const polarNight = zonedTimeToUtc(2026, 12, 21, 12, 0, 0, TZ);
    expect(findNextElevationEvent(LONGYEARBYEN, polarNight, ELEVATION_SUNRISE_SUNSET, 48)).toBeNull();
  });

  it('erfindet im Polartag keinen Sonnenuntergang', () => {
    const polarDay = zonedTimeToUtc(2026, 6, 21, 12, 0, 0, TZ);
    expect(findNextElevationEvent(LONGYEARBYEN, polarDay, ELEVATION_SUNRISE_SUNSET, 48)).toBeNull();
  });
});
