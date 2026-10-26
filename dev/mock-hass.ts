/**
 * dev/mock-hass.ts
 *
 * Simuliert das `hass`-Objekt von Home Assistant für die Entwicklungs- und
 * Testumgebung.
 *
 * Die Attribute von `sun.sun` werden mit denselben Funktionen berechnet, die
 * auch die Karte verwendet – sie entsprechen damit den Werten, die die
 * Home-Assistant-Sun-Integration liefert (siehe
 * homeassistant/components/sun/entity.py):
 *
 *   elevation, azimuth, rising,
 *   next_dawn, next_dusk         (bürgerliche Dämmerung, −6°)
 *   next_rising, next_setting    (−0,833°)
 *   next_noon, next_midnight
 */

import { buildDayProfile, moonPhase, sunPosition } from '../src/astronomy.js';
import { endOfLocalDay, startOfLocalDay } from '../src/timezone.js';
import type { HomeAssistant } from '../src/types.js';
import { now } from './time-mock.js';

export interface MockLocation {
  id: string;
  label: string;
  latitude: number;
  longitude: number;
  timeZone: string;
  name: string;
}

/** Verfügbare Teststandorte. */
export const LOCATIONS: MockLocation[] = [
  { id: 'berlin', label: 'Berlin (52,52° N)', latitude: 52.52, longitude: 13.405, timeZone: 'Europe/Berlin', name: 'Berlin' },
  { id: 'newyork', label: 'New York (40,71° N)', latitude: 40.7128, longitude: -74.006, timeZone: 'America/New_York', name: 'New York' },
  { id: 'sydney', label: 'Sydney (33,87° S)', latitude: -33.8688, longitude: 151.2093, timeZone: 'Australia/Sydney', name: 'Sydney' },
  { id: 'quito', label: 'Quito (0,18° S, Äquator)', latitude: -0.1807, longitude: -78.4678, timeZone: 'America/Guayaquil', name: 'Quito' },
  { id: 'longyearbyen', label: 'Longyearbyen (78,22° N)', latitude: 78.2232, longitude: 15.6469, timeZone: 'Europe/Oslo', name: 'Longyearbyen' },
  { id: 'tromso', label: 'Tromsø (69,65° N)', latitude: 69.6492, longitude: 18.9553, timeZone: 'Europe/Oslo', name: 'Tromsø' },
  { id: 'kapstadt', label: 'Kapstadt (33,92° S)', latitude: -33.9249, longitude: 18.4241, timeZone: 'Africa/Johannesburg', name: 'Kapstadt' },
];

/** Phasenbezeichnungen der Home-Assistant-Moon-Integration. */
const HA_PHASES = [
  'new_moon',
  'waxing_crescent',
  'first_quarter',
  'waxing_gibbous',
  'full_moon',
  'waning_gibbous',
  'last_quarter',
  'waning_crescent',
];

export type MockEntityMode = 'complete' | 'missing-sun' | 'no-attributes' | 'no-location';

export interface MockHassOptions {
  locationId: string;
  theme: 'dark' | 'light';
  language: 'de' | 'en';
  entityMode: MockEntityMode;
}

/** Erzeugt ein simuliertes `hass`-Objekt. */
export function createMockHass(options: MockHassOptions): HomeAssistant {
  const location = LOCATIONS.find((entry) => entry.id === options.locationId) ?? LOCATIONS[0];
  const current = now();
  const noLocation = options.entityMode === 'no-location';
  const states: HomeAssistant['states'] = {};

  if (options.entityMode === 'complete' || options.entityMode === 'no-attributes') {
    const coordinates = { latitude: location.latitude, longitude: location.longitude };
    const dayStart = startOfLocalDay(current, location.timeZone);
    const dayEnd = endOfLocalDay(current, location.timeZone);
    const profile = buildDayProfile(coordinates, dayStart, dayEnd);
    const position = sunPosition(current, coordinates);
    const phase = moonPhase(current);
    const solarNoon = profile.events.solarNoon;

    const attributes: Record<string, unknown> =
      options.entityMode === 'no-attributes'
        ? {}
        : {
            next_dawn: profile.events.civilDawn?.toISOString() ?? null,
            next_dusk: profile.events.civilDusk?.toISOString() ?? null,
            next_rising: profile.events.sunrise?.toISOString() ?? null,
            next_setting: profile.events.sunset?.toISOString() ?? null,
            next_noon: solarNoon?.toISOString() ?? null,
            next_midnight: null,
            elevation: Number(position.altitude.toFixed(2)),
            azimuth: Number(position.azimuth.toFixed(2)),
            rising: solarNoon ? solarNoon.getTime() > current.getTime() : false,
            friendly_name: 'Sonne',
          };

    states['sun.sun'] = {
      entity_id: 'sun.sun',
      state: position.altitude > -0.833 ? 'above_horizon' : 'below_horizon',
      attributes,
      last_updated: current.toISOString(),
    };
    states['sensor.moon'] = {
      entity_id: 'sensor.moon',
      state: HA_PHASES[phase.phaseIndex],
      attributes: { friendly_name: 'Mondphase' },
      last_updated: current.toISOString(),
    };
  }

  return {
    states,
    config: {
      latitude: noLocation ? undefined : location.latitude,
      longitude: noLocation ? undefined : location.longitude,
      elevation: noLocation ? undefined : 40,
      time_zone: noLocation ? undefined : location.timeZone,
      location_name: noLocation ? '' : location.name,
      language: options.language,
    },
    locale: {
      language: options.language,
      time_format: '24',
    },
    themes: { darkMode: options.theme === 'dark' },
    selectedTheme: {
      dark: options.theme === 'dark',
      theme: options.theme === 'dark' ? 'default' : 'light',
    },
    language: options.language,
  };
}
