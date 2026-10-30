/**
 * dev/shots.ts
 *
 * Screenshot-Vorlage: rendert genau eine Karte mit den per URL übergebenen
 * Parametern. Dadurch sind Screenshots reproduzierbar (Standort, Zeit, Theme,
 * Sprache, Breite, Höhe, Konfiguration).
 *
 * Parameter (alle optional):
 *   loc     Standort-ID aus LOCATIONS (Standard: berlin)
 *   time    lokaler Zeitpunkt, z. B. 2026-10-26T18:30 (Standard: live)
 *   theme   dark | light
 *   lang    de | en
 *   w       Breite der Karte in px
 *   h       Kartenhöhe in px (card_height)
 *   preset  Konfigurationsvoreinstellung (siehe PRESETS)
 *
 * Werkzeug: tools/screenshot.mjs
 */

import '../src/sun-moon-card.js';
import { createMockHass, LOCATIONS } from './mock-hass.js';
import { installTimeMock, setSimulatedTime } from './time-mock.js';
import type { SunMoonCardConfig } from '../src/types.js';

const params = new URLSearchParams(location.search);

const PRESETS: Record<string, Omit<SunMoonCardConfig, 'type'>> = {
  default: {},
  compact: { compact_mode: true },
  details: { show_astronomical_details: true },
  all: { twilight_level: 'all', show_astronomical_details: true },
  sunonly: { show_moon: false, show_sky_view: false },
  moononly: { show_sun: false },
  notwilight: { show_twilight: false },
  english: { language: 'en', time_format: '12' },
  minimal: { show_header: false, show_sky_view: false, show_events: false },
  tiny: { card_height: 120, compact_mode: true },
  // Neue Gestaltungsvarianten
  flat: { card_style: 'flat' },
  horizon: { card_style: 'horizon' },
  // Minimalvariante: ausschließlich der Zeitstrahl, Höhen ab 24 px
  minimalmode: { minimal_mode: true },
  minimalmode_horizon: { minimal_mode: true, card_style: 'horizon' },
  wide: { show_astronomical_details: true },
  nofooter: { show_footer: false },
};

installTimeMock();
const time = params.get('time');
const mockLocation = LOCATIONS.find((entry) => entry.id === (params.get('loc') ?? 'berlin')) ?? LOCATIONS[0];
// Die Zeitangabe gilt als Ortszeit des gewählten Standorts.
if (time) setSimulatedTime(time, mockLocation.timeZone);

const presetName = params.get('preset') ?? 'default';
const config = {
  type: 'custom:sun-moon-card',
  ...(PRESETS[presetName] ?? PRESETS.default),
} as SunMoonCardConfig;
if (params.has('h')) config.card_height = Number(params.get('h'));

const hass = createMockHass({
  locationId: params.get('loc') ?? 'berlin',
  theme: (params.get('theme') as 'dark' | 'light') ?? 'dark',
  language: (params.get('lang') as 'de' | 'en') ?? 'de',
  entityMode: (params.get('entities') as 'complete' | 'missing-sun' | 'no-attributes' | 'no-location') ?? 'complete',
});

document.body.classList.add(params.get('theme') ?? 'dark');

const stage = document.getElementById('stage')!;
const width = params.get('w') ? Number(params.get('w')) : 620;
stage.style.width = `${width + 32}px`;

const card = document.createElement('sun-moon-card');
card.style.width = `${width}px`;
(card as unknown as { setConfig: (c: SunMoonCardConfig) => void }).setConfig(config);
(card as unknown as { hass: unknown }).hass = hass;
stage.appendChild(card);

document.body.dataset.ready = 'true';
