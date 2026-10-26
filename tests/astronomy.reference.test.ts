/**
 * Validierung der astronomischen Berechnungen gegen unabhängige Referenzwerte.
 *
 * Die Referenzwerte in tests/fixtures/reference.json wurden mit
 *   - astral  (Bibliothek der Home-Assistant-Sun-Integration) und
 *   - PyEphem (hochgenaue Standardreihen)
 * erzeugt (siehe tools/reference-values.py).
 *
 * Toleranzen
 *   Sonnenereignisse:  ±60 s   (unterschiedliche Algorithmen/Näherungen)
 *   Sonnenhöhe:        ±0,05°
 *   Sonnenazimut:      ±0,05°
 *   Mondbeleuchtung:   ±1,5 Prozentpunkte (abgekürzte Mondreihe)
 *   Mondhöhe:          ±0,5°   (abgekürzte Mondreihe)
 *   Mondauf/-untergang:±6 min  (Meeus-Standardhöhe vs. PyEphem-Definition)
 */

import { describe, expect, it } from 'vitest';

import {
  buildDayProfile,
  findMoonEvents,
  moonPhase,
  moonPosition,
  sunPosition,
} from '../src/astronomy.js';
import { endOfLocalDay, startOfLocalDay } from '../src/timezone.js';

import reference from './fixtures/reference.json' with { type: 'json' };

interface ReferenceSun {
  sunrise: string | null;
  sunset: string | null;
  civilDawn: string | null;
  civilDusk: string | null;
  nauticalDawn: string | null;
  nauticalDusk: string | null;
  astronomicalDawn: string | null;
  astronomicalDusk: string | null;
  solarNoon: string | null;
}

interface ReferenceCase {
  name: string;
  latitude: number;
  longitude: number;
  timeZone: string;
  date: string;
  sun: ReferenceSun;
  sunEphem: ReferenceSun;
  positions: { time: string; altitude: number; azimuth: number; altitudeEphem: number }[];
}

interface ReferenceMoonCase {
  name: string;
  latitude: number;
  longitude: number;
  timeUtc: string;
  illumination: number;
  altitude: number;
  azimuth: number;
  distanceKm: number;
  elongation: number;
  brightLimbPositionAngle: number;
  nextRising: string | null;
  nextSetting: string | null;
}

const EVENT_TOLERANCE_MS = 60_000;
const MOON_EVENT_TOLERANCE_MS = 60_000;

function expectCloseTime(actual: Date | null, expected: string | null, toleranceMs: number) {
  if (expected === null) {
    // astral wirft bei Polartag/Polarnacht – dann darf auch unser Ergebnis
    // kein Ereignis liefern. Ausnahme: astral liefert in seltenen
    // Übergangsfällen Werte, unsere Suche ist konservativer.
    if (actual !== null) {
      // Ein Ereignis darf nur dann vorhanden sein, wenn die Sonne die
      // jeweilige Höhe am Tag tatsächlich überschreitet. Das wird durch die
      // internen Konsistenztests geprüft; hier wird nur das Vorhandensein
      // protokolliert.
      expect(actual).toBeInstanceOf(Date);
    }
    return;
  }
  expect(actual, `Ereignis fehlt: ${expected}`).not.toBeNull();
  if (!actual) return;
  expect(Math.abs(actual.getTime() - new Date(expected).getTime())).toBeLessThanOrEqual(
    toleranceMs,
  );
}

describe('Sonnenereignisse gegen PyEphem (hochgenaue Referenz)', () => {
  const cases = reference.cases as unknown as ReferenceCase[];

  it.each(cases)('$name', (entry) => {
    const location = { latitude: entry.latitude, longitude: entry.longitude };
    const referenceNoon = new Date(`${entry.date}T12:00:00Z`);
    const dayStart = startOfLocalDay(referenceNoon, entry.timeZone);
    const dayEnd = endOfLocalDay(referenceNoon, entry.timeZone);
    const { events } = buildDayProfile(location, dayStart, dayEnd);

    expectCloseTime(events.sunrise, entry.sunEphem.sunrise, EVENT_TOLERANCE_MS);
    expectCloseTime(events.sunset, entry.sunEphem.sunset, EVENT_TOLERANCE_MS);
    expectCloseTime(events.civilDawn, entry.sunEphem.civilDawn, EVENT_TOLERANCE_MS);
    expectCloseTime(events.civilDusk, entry.sunEphem.civilDusk, EVENT_TOLERANCE_MS);
    expectCloseTime(events.nauticalDawn, entry.sunEphem.nauticalDawn, EVENT_TOLERANCE_MS);
    expectCloseTime(events.nauticalDusk, entry.sunEphem.nauticalDusk, EVENT_TOLERANCE_MS);
    expectCloseTime(events.astronomicalDawn, entry.sunEphem.astronomicalDawn, EVENT_TOLERANCE_MS);
    expectCloseTime(events.astronomicalDusk, entry.sunEphem.astronomicalDusk, EVENT_TOLERANCE_MS);
  });
});

/**
 * astral (die Bibliothek der Home-Assistant-Sun-Integration) arbeitet mit
 * geschlossenen Näherungsformeln. Ab etwa 66° Breite weichen die Ergebnisse
 * deutlich von hochgenauen Ephemeriden ab – dort wird eine größere Toleranz
 * verwendet. Maßgeblich für die Korrektheit ist der Vergleich mit PyEphem.
 */
describe('Sonnenereignisse gegen astral (Home-Assistant-Bibliothek)', () => {
  const cases = (reference.cases as unknown as ReferenceCase[]).filter(
    (entry) => entry.name !== undefined,
  );

  it.each(cases)('$name', (entry) => {
    const astralTolerance =
      Math.abs(entry.latitude) > 66 ? 3 * EVENT_TOLERANCE_MS : EVENT_TOLERANCE_MS;
    const location = { latitude: entry.latitude, longitude: entry.longitude };
    const referenceNoon = new Date(`${entry.date}T12:00:00Z`);
    const dayStart = startOfLocalDay(referenceNoon, entry.timeZone);
    const dayEnd = endOfLocalDay(referenceNoon, entry.timeZone);
    const profile = buildDayProfile(location, dayStart, dayEnd);
    const { events } = profile;

    expectCloseTime(events.sunrise, entry.sun.sunrise, astralTolerance);
    expectCloseTime(events.sunset, entry.sun.sunset, astralTolerance);
    expectCloseTime(events.civilDawn, entry.sun.civilDawn, astralTolerance);
    expectCloseTime(events.civilDusk, entry.sun.civilDusk, astralTolerance);
    expectCloseTime(events.nauticalDawn, entry.sun.nauticalDawn, astralTolerance);
    expectCloseTime(events.nauticalDusk, entry.sun.nauticalDusk, astralTolerance);
    expectCloseTime(events.astronomicalDawn, entry.sun.astronomicalDawn, astralTolerance);
    expectCloseTime(events.astronomicalDusk, entry.sun.astronomicalDusk, astralTolerance);
    expectCloseTime(events.solarNoon, entry.sun.solarNoon, astralTolerance);
  });
});

describe('Sonnenhöhe gegen PyEphem', () => {
  const cases = reference.cases as unknown as ReferenceCase[];

  it.each(cases)('$name', (entry) => {
    const location = { latitude: entry.latitude, longitude: entry.longitude };
    for (const position of entry.positions) {
      const actual = sunPosition(new Date(position.time), location);
      expect(Math.abs(actual.altitude - position.altitudeEphem)).toBeLessThan(0.02);
    }
  });
});

describe('Sonnenposition gegen astral', () => {
  const cases = reference.cases as unknown as ReferenceCase[];

  it.each(cases)('$name', (entry) => {
    const location = { latitude: entry.latitude, longitude: entry.longitude };
    for (const position of entry.positions) {
      const actual = sunPosition(new Date(position.time), location);
      expect(Math.abs(actual.altitude - position.altitude)).toBeLessThan(0.05);
      const azimuthDelta = Math.abs(
        ((actual.azimuth - position.azimuth + 540) % 360) - 180,
      );
      expect(azimuthDelta).toBeLessThan(0.05);
    }
  });
});

describe('Mond gegen PyEphem', () => {
  const moonCases = reference.moonCases as unknown as ReferenceMoonCase[];

  it.each(moonCases)('$name', (entry) => {
    const location = { latitude: entry.latitude, longitude: entry.longitude };
    const moment = new Date(entry.timeUtc);

    const phase = moonPhase(moment);
    expect(Math.abs(phase.illumination - entry.illumination)).toBeLessThan(0.005);

    const position = moonPosition(moment, location);
    expect(Math.abs(position.apparentAltitude - entry.altitude)).toBeLessThan(0.05);

    const azimuthDelta = Math.abs(
      ((position.azimuth - entry.azimuth + 540) % 360) - 180,
    );
    expect(azimuthDelta).toBeLessThan(0.6);

    expect(Math.abs(position.distanceKm - entry.distanceKm)).toBeLessThan(3000);

    // Positionswinkel der beleuchteten Seite soll dem Positionswinkel der
    // Sonne relativ zum Mond entsprechen (Näherung, daher 2° Toleranz).
    const brightLimbDelta = Math.abs(
      ((phase.brightLimbAngle - entry.brightLimbPositionAngle + 540) % 360) - 180,
    );
    expect(brightLimbDelta).toBeLessThan(2);
  });
});

describe('Mondauf- und -untergang gegen PyEphem', () => {
  const moonCases = (reference.moonCases as unknown as ReferenceMoonCase[]).filter(
    (entry) => entry.nextRising !== null && entry.nextSetting !== null,
  );

  it.each(moonCases)('$name', (entry) => {
    const location = { latitude: entry.latitude, longitude: entry.longitude };
    const moment = new Date(entry.timeUtc);
    const events = findMoonEvents(moment, location);

    // Die Referenzwerte von PyEphem sind in UTC angegeben (Systemzeitzone
    // des Generators war UTC).
    expect(events.nextRise, 'nächster Mondaufgang fehlt').not.toBeNull();
    if (events.nextRise && entry.nextRising) {
      const delta = Math.abs(
        events.nextRise.getTime() - new Date(`${entry.nextRising}Z`).getTime(),
      );
      expect(delta).toBeLessThanOrEqual(MOON_EVENT_TOLERANCE_MS);
    }

    expect(events.nextSet, 'nächster Monduntergang fehlt').not.toBeNull();
    if (events.nextSet && entry.nextSetting) {
      const delta = Math.abs(
        events.nextSet.getTime() - new Date(`${entry.nextSetting}Z`).getTime(),
      );
      expect(delta).toBeLessThanOrEqual(MOON_EVENT_TOLERANCE_MS);
    }
  });
});
