/**
 * dev/main.ts
 *
 * Entwicklungs- und Testumgebung für die Sun & Moon Card.
 *
 * Die Seite simuliert das `hass`-Objekt von Home Assistant (Standort,
 * Zeitzone, Theme, `sun.sun` und `sensor.moon`) und rendert die Karte in
 * verschiedenen Konfigurationen. Damit können Layout, Höhen, Themes,
 * Sonderfälle (Polartag, Polarnacht, Zeitumstellung) und Fehlerfälle ohne
 * Home Assistant geprüft werden.
 *
 * Starten:  npm run dev
 */

import { createMockHass, LOCATIONS, type MockEntityMode } from './mock-hass.js';
import { installTimeMock, now, resetSimulatedTime, setSimulatedTime } from './time-mock.js';

import '../src/sun-moon-card.js';
import type { HomeAssistant, SunMoonCardConfig } from '../src/types.js';

interface AppState {
  locationId: string;
  theme: 'dark' | 'light';
  language: 'de' | 'en';
  timeMode: 'live' | 'fixed';
  fixedTime: string;
  entityMode: MockEntityMode;
}

/**
 * Initiale Werte: über URL-Parameter überschreibbar, damit Screenshots
 * reproduzierbar erzeugt werden können
 * (z. B. /?loc=longyearbyen&time=2026-06-21T12:00&theme=light).
 */
const urlParams = new URLSearchParams(location.search);

const state: AppState = {
  locationId: urlParams.get('loc') ?? 'berlin',
  theme: (urlParams.get('theme') as 'dark' | 'light') ?? 'dark',
  language: (urlParams.get('lang') as 'de' | 'en') ?? 'de',
  timeMode: urlParams.has('time') ? 'fixed' : 'live',
  fixedTime: urlParams.get('time') ?? '2026-10-26T18:30',
  entityMode: (urlParams.get('entities') as MockEntityMode) ?? 'complete',
};

installTimeMock();

/** Erzeugt ein simuliertes `hass`-Objekt. */
function createHass(): HomeAssistant {
  return createMockHass({
    locationId: state.locationId,
    theme: state.theme,
    language: state.language,
    entityMode: state.entityMode,
  });
}

/** Baut eine Karte und verbindet sie mit dem simulierten `hass`. */
function createCard(config: SunMoonCardConfig, hass: HomeAssistant, width?: number): HTMLElement {
  const card = document.createElement('sun-moon-card');
  (card as unknown as { setConfig: (config: SunMoonCardConfig) => void }).setConfig(config);
  (card as unknown as { hass: HomeAssistant }).hass = hass;
  if (width) {
    card.style.maxWidth = `${width}px`;
  }
  return card;
}

/** Geprüfte Kartenhöhen. */
const HEIGHT_SCENARIOS = [160, 220, 280, 360];

function render(): void {
  const app = document.getElementById('app');
  if (!app) return;
  const hass = createHass();
  app.innerHTML = '';

  document.body.classList.toggle('dark', state.theme === 'dark');
  document.body.classList.toggle('light', state.theme === 'light');

  app.appendChild(
    section('Kartenhöhen (160, 220, 280, 360 px) – breite Karte', () => {
      const grid = gridElement('grid');
      for (const height of HEIGHT_SCENARIOS) {
        grid.appendChild(
          cell(`${height} px`, createCard({ type: 'custom:sun-moon-card', card_height: height }, hass)),
        );
      }
      return grid;
    }),
  );

  app.appendChild(
    section('Schmale Karten (Smartphone, 340 px)', () => {
      const grid = gridElement('grid narrow');
      for (const height of HEIGHT_SCENARIOS) {
        grid.appendChild(
          cell(
            `${height} px`,
            createCard({ type: 'custom:sun-moon-card', card_height: height }, hass, 340),
          ),
        );
      }
      return grid;
    }),
  );

  app.appendChild(
    section('Konfigurationsvarianten', () => {
      const grid = gridElement('grid');
      const variants: Array<[string, SunMoonCardConfig]> = [
        ['Standard (260 px)', { type: 'custom:sun-moon-card' }],
        ['Kompakt (200 px)', { type: 'custom:sun-moon-card', card_height: 200, compact_mode: true }],
        [
          'Astronomische Details',
          { type: 'custom:sun-moon-card', card_height: 340, show_astronomical_details: true },
        ],
        ['Alle Dämmerungsebenen', { type: 'custom:sun-moon-card', card_height: 320, twilight_level: 'all' }],
        [
          'Nur Sonne',
          { type: 'custom:sun-moon-card', card_height: 300, show_moon: false, show_sky_view: false },
        ],
        ['Nur Mond', { type: 'custom:sun-moon-card', card_height: 300, show_sun: false }],
        ['Ohne Dämmerung', { type: 'custom:sun-moon-card', card_height: 260, show_twilight: false }],
        [
          '12-Stunden-Format, Englisch',
          { type: 'custom:sun-moon-card', card_height: 300, time_format: '12', language: 'en' },
        ],
      ];
      for (const [label, config] of variants) {
        grid.appendChild(cell(label, createCard(config, hass)));
      }
      return grid;
    }),
  );

  app.appendChild(
    section('Sonderfälle: fehlende Daten', () => {
      const grid = gridElement('grid');

      const missingHass = createHass();
      delete missingHass.states['sun.sun'];
      delete missingHass.states['sensor.moon'];

      const noAttributesHass = createHass();
      if (noAttributesHass.states['sun.sun']) {
        noAttributesHass.states['sun.sun'].attributes = {};
      }

      const noLocationHass = createHass();
      noLocationHass.config.latitude = undefined;
      noLocationHass.config.longitude = undefined;
      noLocationHass.config.time_zone = undefined;

      const cases: Array<[string, SunMoonCardConfig, HomeAssistant]> = [
        ['Ohne sun.sun-Entität', { type: 'custom:sun-moon-card', card_height: 280 }, missingHass],
        ['sun.sun ohne Attribute', { type: 'custom:sun-moon-card', card_height: 280 }, noAttributesHass],
        ['Ohne Standort', { type: 'custom:sun-moon-card', card_height: 200 }, noLocationHass],
        [
          'Ungültige Werte (Höhe 5000)',
          { type: 'custom:sun-moon-card', card_height: 5000, theme_mode: 'unbekannt' as never },
          createHass(),
        ],
      ];
      for (const [label, config, caseHass] of cases) {
        grid.appendChild(cell(label, createCard(config, caseHass)));
      }
      return grid;
    }),
  );
}

function section(title: string, builder: () => HTMLElement): HTMLElement {
  const wrapper = document.createElement('section');
  const heading = document.createElement('h2');
  heading.textContent = title;
  wrapper.appendChild(heading);
  wrapper.appendChild(builder());
  return wrapper;
}

function gridElement(className: string): HTMLElement {
  const grid = document.createElement('div');
  grid.className = className;
  return grid;
}

function cell(label: string, card: HTMLElement): HTMLElement {
  const wrapper = document.createElement('div');
  const labelElement = document.createElement('div');
  labelElement.className = 'cell-label';
  labelElement.textContent = label;
  wrapper.appendChild(labelElement);
  wrapper.appendChild(card);
  return wrapper;
}

function selectControl(
  label: string,
  options: Array<[string, string]>,
  value: string,
  onChange: (value: string) => void,
): HTMLElement {
  const wrapper = document.createElement('label');
  wrapper.className = 'control';
  wrapper.appendChild(document.createTextNode(label));
  const select = document.createElement('select');
  for (const [optionValue, optionLabel] of options) {
    const option = document.createElement('option');
    option.value = optionValue;
    option.textContent = optionLabel;
    select.appendChild(option);
  }
  select.value = value;
  select.addEventListener('change', () => onChange(select.value));
  wrapper.appendChild(select);
  return wrapper;
}

/** Baut die Steuerleiste. */
function buildControls(): void {
  const controls = document.getElementById('controls');
  if (!controls) return;
  controls.innerHTML = '';

  controls.appendChild(
    selectControl(
      'Standort',
      LOCATIONS.map((entry) => [entry.id, entry.label]),
      state.locationId,
      (value) => {
        state.locationId = value;
        render();
      },
    ),
  );

  controls.appendChild(
    selectControl(
      'Theme',
      [
        ['dark', 'Dark'],
        ['light', 'Light'],
      ],
      state.theme,
      (value) => {
        state.theme = value as 'dark' | 'light';
        render();
      },
    ),
  );

  controls.appendChild(
    selectControl(
      'Sprache',
      [
        ['de', 'Deutsch'],
        ['en', 'English'],
      ],
      state.language,
      (value) => {
        state.language = value as 'de' | 'en';
        render();
      },
    ),
  );

  controls.appendChild(
    selectControl(
      'Zeit',
      [
        ['live', 'Live'],
        ['fixed', 'Simuliert'],
      ],
      state.timeMode,
      (value) => {
        state.timeMode = value as 'live' | 'fixed';
        applyTimeOffset();
        render();
      },
    ),
  );

  const timeInput = document.createElement('input');
  timeInput.type = 'datetime-local';
  timeInput.value = state.fixedTime;
  timeInput.addEventListener('change', () => {
    state.fixedTime = timeInput.value;
    applyTimeOffset();
    render();
  });
  const timeWrapper = document.createElement('label');
  timeWrapper.className = 'control';
  timeWrapper.appendChild(document.createTextNode('Simulierte Zeit'));
  timeWrapper.appendChild(timeInput);
  controls.appendChild(timeWrapper);

  controls.appendChild(
    selectControl(
      'Entitäten',
      [
        ['complete', 'Vollständig'],
        ['missing-sun', 'sun.sun fehlt'],
        ['no-attributes', 'sun.sun ohne Attribute'],
        ['no-location', 'Standort fehlt'],
      ],
      state.entityMode,
      (value) => {
        state.entityMode = value as MockEntityMode;
        render();
      },
    ),
  );

  const refresh = document.createElement('button');
  refresh.textContent = 'Neu rendern';
  refresh.addEventListener('click', () => render());
  controls.appendChild(refresh);
}

/** Wendet die eingestellte Zeit an. */
function applyTimeOffset(): void {
  if (state.timeMode === 'live') {
    resetSimulatedTime();
    return;
  }
  setSimulatedTime(
    state.fixedTime,
    LOCATIONS.find((entry) => entry.id === state.locationId)?.timeZone,
  );
}

buildControls();
applyTimeOffset();
render();

// Karten regelmäßig mit aktuellem `hass` versorgen (wie Home Assistant)
setInterval(() => {
  const hass = createHass();
  for (const card of document.querySelectorAll('sun-moon-card')) {
    (card as unknown as { hass: HomeAssistant }).hass = hass;
  }
}, 15_000);

/** Zugriff für automatisierte Prüfungen und Screenshots. */
declare global {
  interface Window {
    smcDev?: {
      state: AppState;
      render: () => void;
      createHass: () => HomeAssistant;
      now: () => Date;
      setFixedTime: (iso: string) => void;
      setLocation: (id: string) => void;
      setTheme: (theme: 'dark' | 'light') => void;
      setLanguage: (language: 'de' | 'en') => void;
    };
  }
}

window.smcDev = {
  state,
  render,
  createHass,
  now,
  setFixedTime: (iso: string) => {
    state.timeMode = 'fixed';
    state.fixedTime = iso;
    applyTimeOffset();
    render();
  },
  setLocation: (id: string) => {
    state.locationId = id;
    render();
  },
  setTheme: (theme: 'dark' | 'light') => {
    state.theme = theme;
    render();
  },
  setLanguage: (language: 'de' | 'en') => {
    state.language = language;
    render();
  },
};
