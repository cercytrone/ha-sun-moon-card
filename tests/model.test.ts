/**
 * Prüfung des Anzeigemodells (`buildModel`).
 *
 * Im Mittelpunkt stehen die Sonderfälle: fehlende Entitäten, fehlende
 * Attribute, fehlender Standort, Polartag und Polarnacht. Die Karte darf in
 * keinem dieser Fälle abstürzen und darf keine erfundenen Zeiten anzeigen.
 */

import { describe, expect, it } from 'vitest';

import { HA_MOON_PHASES, buildModel, emptyExtras, resolveConfig } from '../src/model.js';
import { zonedTimeToUtc } from '../src/timezone.js';
import type { HomeAssistant } from '../src/types.js';

function hassWith(
  options: {
    latitude?: number | null;
    longitude?: number | null;
    timeZone?: string;
    sunState?: Record<string, unknown> | null;
    moonState?: string | null;
    locationName?: string;
  } = {},
): HomeAssistant {
  const {
    latitude = 52.52,
    longitude = 13.405,
    timeZone = 'Europe/Berlin',
    sunState = {},
    moonState = 'waning_gibbous',
    locationName = 'Zuhause',
  } = options;

  return {
    config: {
      latitude: latitude ?? undefined,
      longitude: longitude ?? undefined,
      time_zone: timeZone,
      location_name: locationName,
    },
    states: {
      ...(sunState === null
        ? {}
        : { 'sun.sun': { entity_id: 'sun.sun', state: 'below_horizon', attributes: sunState } }),
      ...(moonState === null ? {} : { 'sensor.moon': { entity_id: 'sensor.moon', state: moonState, attributes: { friendly_name: 'Mond' } } }),
    },
    locale: { language: 'de', time_format: '24' },
    themes: { darkMode: true },
  } as unknown as HomeAssistant;
}

const NOON = zonedTimeToUtc(2026, 6, 21, 12, 0, 0, 'Europe/Berlin');

describe('buildModel – Normalfall', () => {
  it('berechnet Standort, Zeitzone und Sonnenstand', () => {
    const { config } = resolveConfig({});
    const model = buildModel(config, hassWith(), NOON);
    expect(model.fatal).toBe(false);
    expect(model.timeZone).toBe('Europe/Berlin');
    expect(model.location.latitude).toBeCloseTo(52.52, 6);
    expect(model.sun.altitude).toBeGreaterThan(50); // Berlin, 21. Juni, Mittag
    expect(model.sun.phase).toBe('day');
    expect(model.daylightMinutes).toBeGreaterThan(16 * 60);
  });

  it('erzeugt eine Sonnenbahn über den ganzen Tag', () => {
    const { config } = resolveConfig({});
    const model = buildModel(config, hassWith(), NOON);
    expect(model.sunTrack.length).toBeGreaterThanOrEqual(96);
    expect(model.sunTrack.every((point) => Number.isFinite(point.altitude))).toBe(true);
  });

  it('berechnet Sonnenauf- und -untergang', () => {
    const { config } = resolveConfig({});
    const model = buildModel(config, hassWith(), NOON);
    expect(model.events.sunrise).toBeInstanceOf(Date);
    expect(model.events.sunset).toBeInstanceOf(Date);
    expect(model.events.sunrise!.getTime()).toBeLessThan(model.events.sunset!.getTime());
  });

  it('übernimmt den Namen des Standorts aus Home Assistant', () => {
    const { config } = resolveConfig({});
    expect(buildModel(config, hassWith(), NOON).locationName).toBe('Zuhause');
  });

  it('bevorzugt einen konfigurierten Namen', () => {
    const { config } = resolveConfig({ location_name: 'Garten' });
    expect(buildModel(config, hassWith(), NOON).locationName).toBe('Garten');
  });

  it('nutzt konfigurierte Koordinaten statt der aus Home Assistant', () => {
    const { config } = resolveConfig({ latitude: 78.2232, longitude: 15.6469 });
    const model = buildModel(config, hassWith(), NOON);
    expect(model.location.latitude).toBeCloseTo(78.2232, 6);
  });
});

describe('buildModel – fehlende Daten', () => {
  it('meldet einen fatalen Fehler ohne Standort, ohne abzustürzen', () => {
    const { config } = resolveConfig({});
    const model = buildModel(config, hassWith({ latitude: null, longitude: null }), NOON);
    expect(model.fatal).toBe(true);
    expect(model.issues).toContain('missing-location');
    expect(model.locationName).toBe('');
    expect(model.events.sunrise).toBeNull();
  });

  it('bleibt ohne `hass` funktionsfähig, wenn Koordinaten konfiguriert sind', () => {
    const { config } = resolveConfig({ latitude: 52.52, longitude: 13.405 });
    const model = buildModel(config, undefined, NOON);
    expect(model.fatal).toBe(false);
    expect(model.issues).toContain('missing-sun-entity');
  });

  it('meldet eine fehlende Sun-Entität', () => {
    const { config } = resolveConfig({});
    const model = buildModel(config, hassWith({ sunState: null }), NOON);
    expect(model.issues).toContain('missing-sun-entity');
    expect(model.events.sunrise).toBeInstanceOf(Date); // eigene Berechnung
  });

  it('funktioniert mit einer Sun-Entität ohne Attribute', () => {
    const { config } = resolveConfig({});
    const model = buildModel(config, hassWith({ sunState: {} }), NOON);
    expect(model.fatal).toBe(false);
    expect(model.sun.haElevation).toBeNull();
    expect(model.events.sunrise).toBeInstanceOf(Date);
  });

  it('meldet keine Mondphase, wenn die Mond-Entität fehlt', () => {
    const { config } = resolveConfig({});
    const model = buildModel(config, hassWith({ moonState: null }), NOON);
    expect(model.moon.haPhaseName).toBeNull();
    expect(model.moon.phase.illumination).toBeGreaterThanOrEqual(0);
    expect(model.moon.phase.illumination).toBeLessThanOrEqual(1);
  });

  it('übernimmt die Mondphase aus Home Assistant', () => {
    const { config } = resolveConfig({});
    const model = buildModel(config, hassWith({ moonState: 'first_quarter' }), NOON);
    expect(model.moon.haPhaseName).toBe('firstQuarter');
  });

  it('ignoriert unbekannte Mondphasen aus Home Assistant', () => {
    const { config } = resolveConfig({});
    const model = buildModel(config, hassWith({ moonState: 'blue_moon' }), NOON);
    expect(model.moon.haPhaseName).toBeNull();
  });
});

describe('buildModel – Home-Assistant-Zeiten', () => {
  it('übernommen plausibler HA-Zeiten', () => {
    const { config } = resolveConfig({});
    const reference = buildModel(config, hassWith(), NOON);
    const sunrise = reference.events.sunrise!;
    const sunset = reference.events.sunset!;
    const model = buildModel(
      config,
      hassWith({
        sunState: {
          next_rising: sunrise.toISOString(),
          next_setting: sunset.toISOString(),
          elevation: 12.3,
          azimuth: 180.5,
          rising: true,
        },
      }),
      NOON,
    );
    expect(model.eventSources.sunrise).toBe('ha');
    expect(model.eventSources.sunset).toBe('ha');
    expect(model.sun.haElevation).toBeCloseTo(12.3, 6);
  });

  it('verwirft unplausible HA-Zeiten (Toleranz 20 min)', () => {
    const { config } = resolveConfig({});
    const sunrise = buildModel(config, hassWith(), NOON).events.sunrise!;
    const model = buildModel(
      config,
      hassWith({ sunState: { next_rising: new Date(sunrise.getTime() + 3 * 60 * 60 * 1000).toISOString() } }),
      NOON,
    );
    expect(model.eventSources.sunrise).toBe('computed');
    expect(model.events.sunrise).toEqual(sunrise);
  });

  it('ignoriert HA-Zeiten, die nicht im aktuellen Tag liegen', () => {
    const { config } = resolveConfig({});
    const tomorrow = new Date(NOON.getTime() + 30 * 60 * 60 * 1000).toISOString();
    const model = buildModel(config, hassWith({ sunState: { next_rising: tomorrow } }), NOON);
    expect(model.eventSources.sunrise).toBe('computed');
  });

  it('verarbeitet ungültige Zeitstempel', () => {
    const { config } = resolveConfig({});
    const model = buildModel(
      config,
      hassWith({ sunState: { next_rising: 'keine Zeit', next_setting: '' } }),
      NOON,
    );
    expect(model.eventSources.sunrise).toBe('computed');
    expect(model.events.sunset).toBeInstanceOf(Date);
  });
});

describe('buildModel – Sonderfälle', () => {
  const polarDay = zonedTimeToUtc(2026, 6, 21, 12, 0, 0, 'Europe/Oslo');
  const polarNight = zonedTimeToUtc(2026, 12, 21, 12, 0, 0, 'Europe/Oslo');

  it('erkennt den Polartag', () => {
    const { config } = resolveConfig({ latitude: 78.2232, longitude: 15.6469 });
    const model = buildModel(
      config,
      hassWith({ timeZone: 'Europe/Oslo', sunState: null }),
      polarDay,
    );
    expect(model.issues).toContain('polar-day');
    expect(model.issues).toContain('no-sunset-today');
    expect(model.daylightMinutes).toBeNull();
  });

  it('erkennt die Polarnacht', () => {
    const { config } = resolveConfig({ latitude: 78.2232, longitude: 15.6469 });
    const model = buildModel(
      config,
      hassWith({ timeZone: 'Europe/Oslo', sunState: null }),
      polarNight,
    );
    expect(model.issues).toContain('polar-night');
    expect(model.issues).toContain('no-sunrise-today');
    expect(model.sun.altitude).toBeLessThan(0);
  });

  it('erfindet bei Polartag keine Sonnenuntergangszeit', () => {
    const { config } = resolveConfig({ latitude: 78.2232, longitude: 15.6469 });
    const model = buildModel(
      config,
      hassWith({ timeZone: 'Europe/Oslo', sunState: null }),
      polarDay,
    );
    expect(model.events.sunset).toBeNull();
    expect(model.events.civilDusk).toBeNull();
  });

  it('liefert am Äquator ganzjährig Auf- und Untergang', () => {
    const { config } = resolveConfig({ latitude: -0.1807, longitude: -78.4678 });
    const model = buildModel(
      config,
      hassWith({ timeZone: 'America/Guayaquil', sunState: null }),
      zonedTimeToUtc(2026, 3, 20, 12, 0, 0, 'America/Guayaquil'),
    );
    expect(model.events.sunrise).toBeInstanceOf(Date);
    expect(model.events.sunset).toBeInstanceOf(Date);
  });

  it('meldet fehlende bürgerliche Dämmerung (hohe Breiten im Sommer)', () => {
    const { config } = resolveConfig({ latitude: 69.6492, longitude: 18.9553 });
    const model = buildModel(
      config,
      hassWith({ timeZone: 'Europe/Oslo', sunState: null }),
      zonedTimeToUtc(2026, 6, 21, 12, 0, 0, 'Europe/Oslo'),
    );
    expect(model.issues).toContain('no-civil-twilight');
  });

  it('funktioniert auf der Südhalbkugel', () => {
    const { config } = resolveConfig({ latitude: -33.8688, longitude: 151.2093 });
    const model = buildModel(
      config,
      hassWith({ timeZone: 'Australia/Sydney', sunState: null }),
      zonedTimeToUtc(2026, 1, 15, 12, 0, 0, 'Australia/Sydney'),
    );
    expect(model.sun.altitude).toBeGreaterThan(60); // Januar = Sommer in Sydney
    expect(model.sun.phase).toBe('day');
  });
});

describe('Vollmond-Extras', () => {
  it('nennt den überlieferten Namen des nächsten Vollmonds', () => {
    // 29. Oktober 2026 fällt der Vollmond in den Oktober → „Jägermond“.
    const { config } = resolveConfig({});
    const model = buildModel(
      config,
      hassWith(),
      zonedTimeToUtc(2026, 10, 20, 12, 0, 0, 'Europe/Berlin'),
    );
    expect(model.extras.nextFullMoon).not.toBeNull();
    expect(model.extras.moonFolkName).toBe('Jägermond (Volksname)');
  });

  it('kennzeichnet den Volksnamen in beiden Sprachen', () => {
    const { config } = resolveConfig({ language: 'en' });
    const model = buildModel(
      config,
      hassWith(),
      zonedTimeToUtc(2026, 10, 20, 12, 0, 0, 'Europe/Berlin'),
    );
    expect(model.extras.moonFolkName).toBe("Hunter's Moon (folk name)");
  });

  it('liefert den Namen des Januar-Vollmonds im Januar', () => {
    const { config } = resolveConfig({});
    const model = buildModel(
      config,
      hassWith(),
      zonedTimeToUtc(2026, 1, 1, 12, 0, 0, 'Europe/Berlin'),
    );
    expect(model.extras.moonFolkName).toBe('Wolfsmond (Volksname)');
  });

  it('meldet keinen Volksnamen ohne Vollmonddaten', () => {
    expect(emptyExtras('Europe/Berlin', 'de-DE').moonFolkName).toBeNull();
  });
});

describe('Mondphasen-Zuordnung', () => {
  it('deckt alle acht Phasen der Moon-Integration ab', () => {
    for (const [haName, key] of Object.entries(HA_MOON_PHASES)) {
      const { config } = resolveConfig({});
      const model = buildModel(config, hassWith({ moonState: haName }), NOON);
      expect(model.moon.haPhaseName).toBe(key);
    }
    expect(Object.keys(HA_MOON_PHASES)).toHaveLength(8);
  });
});
