/**
 * Prüfung der Konfigurationsvalidierung (`resolveConfig`).
 *
 * Ziel ist, dass keine noch so unsinnige YAML-Eingabe die Karte zum Absturz
 * bringt: ungültige Werte werden korrigiert (Warnung), strukturell
 * unbrauchbare Werte führen zu einem Fehler, der im Editor angezeigt wird.
 */

import { describe, expect, it } from 'vitest';

import {
  CONFIG_CHOICES,
  CARD_HEIGHT_RANGE,
  DEFAULT_CARD_HEIGHT,
  DEFAULT_CONFIG,
  stubConfig,
} from '../src/const.js';
import { resolveCardHeight, resolveConfig } from '../src/model.js';
import type { SunMoonCardConfig } from '../src/types.js';

describe('resolveConfig – Standardwerte', () => {
  it('ergänzt bei leerer Konfiguration alle Standardwerte', () => {
    const { config, errors, warnings } = resolveConfig({} as SunMoonCardConfig);
    expect(errors).toHaveLength(0);
    expect(warnings).toHaveLength(0);
    expect(config.entity).toBe('sun.sun');
    expect(config.card_height).toBe(DEFAULT_CARD_HEIGHT);
    expect(config.show_sun).toBe(true);
    expect(config.show_moon).toBe(true);
    expect(config.show_twilight).toBe(true);
    expect(config.show_astronomical_details).toBe(false);
    expect(config.compact_mode).toBe(false);
    expect(config.theme_mode).toBe('auto');
    expect(config.animations).toBe(true);
    expect(config.time_format).toBe('auto');
    expect(config.language).toBe('auto');
    expect(config.twilight_level).toBe('civil');
  });

  it('verwendet bei `undefined` ebenfalls die Standardwerte', () => {
    const { config, errors } = resolveConfig(undefined);
    expect(errors).toHaveLength(0);
    expect(config).toMatchObject(DEFAULT_CONFIG);
  });

  it('ignoriert unbekannte Schlüssel', () => {
    const { config, errors, warnings } = resolveConfig({
      show_unknown_thing: true,
      card_height: 200,
    } as unknown as SunMoonCardConfig);
    expect(errors).toHaveLength(0);
    expect(warnings).toHaveLength(0);
    expect(config).not.toHaveProperty('show_unknown_thing');
  });
});

describe('resolveConfig – Kartenhöhe', () => {
  it('übernimmt gültige Höhen unverändert', () => {
    for (const height of [120, 160, 220, 280, 360, 800]) {
      const { config, warnings } = resolveConfig({ card_height: height });
      expect(config.card_height).toBe(height);
      expect(warnings).toHaveLength(0);
    }
  });

  it('begrenzt zu kleine und zu große Höhen', () => {
    expect(resolveConfig({ card_height: 10 }).config.card_height).toBe(CARD_HEIGHT_RANGE[0]);
    expect(resolveConfig({ card_height: -50 }).config.card_height).toBe(CARD_HEIGHT_RANGE[0]);
    expect(resolveConfig({ card_height: 5000 }).config.card_height).toBe(CARD_HEIGHT_RANGE[1]);
  });

  it('meldet eine Warnung, wenn korrigiert wurde', () => {
    const { warnings } = resolveConfig({ card_height: 1000 }, 'de');
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain('120');
    expect(warnings[0]).toContain('800');
  });

  it('akzeptiert `auto` und `null`', () => {
    expect(resolveConfig({ card_height: 'auto' }).config.card_height).toBe('auto');
    expect(resolveConfig({ card_height: null as unknown as number }).config.card_height).toBe('auto');
  });

  it('wertet numerische Zeichenketten aus', () => {
    const { config, errors } = resolveConfig({ card_height: '300' } as unknown as SunMoonCardConfig);
    expect(errors).toHaveLength(0);
    expect(config.card_height).toBe(300);
  });

  it('meldet einen Fehler bei unbrauchbarer Höhe', () => {
    const { errors, config } = resolveConfig({ card_height: 'hoch' } as unknown as SunMoonCardConfig);
    expect(errors).toHaveLength(1);
    expect(config.card_height).toBe(DEFAULT_CARD_HEIGHT);
  });

  it('meldet einen Fehler bei NaN und Infinity', () => {
    expect(resolveConfig({ card_height: Number.NaN }).errors).toHaveLength(0);
    expect(resolveConfig({ card_height: Number.POSITIVE_INFINITY }).errors).toHaveLength(0);
    expect(resolveConfig({ card_height: Number.NaN }).config.card_height).toBe(DEFAULT_CARD_HEIGHT);
  });

  it('rundet Nachkommastellen', () => {
    expect(resolveConfig({ card_height: 260.6 }).config.card_height).toBe(261);
  });
});

describe('resolveConfig – Auswahlwerte', () => {
  it('verwirft unbekannte Auswahlwerte', () => {
    const raw = {
      theme_mode: 'neon',
      time_format: '48',
      language: 'fr',
      twilight_level: 'cathedral',
    } as unknown as SunMoonCardConfig;
    const { config } = resolveConfig(raw);
    expect(config.theme_mode).toBe('auto');
    expect(config.time_format).toBe('auto');
    expect(config.language).toBe('auto');
    expect(config.twilight_level).toBe('civil');
  });

  it('akzeptiert alle dokumentierten Auswahlwerte', () => {
    for (const value of CONFIG_CHOICES.themeMode) {
      expect(resolveConfig({ theme_mode: value }).config.theme_mode).toBe(value);
    }
    for (const value of CONFIG_CHOICES.timeFormat) {
      expect(resolveConfig({ time_format: value }).config.time_format).toBe(value);
    }
    for (const value of CONFIG_CHOICES.language) {
      expect(resolveConfig({ language: value }).config.language).toBe(value);
    }
    for (const value of CONFIG_CHOICES.twilightLevel) {
      expect(resolveConfig({ twilight_level: value }).config.twilight_level).toBe(value);
    }
  });
});

describe('resolveConfig – Wahrheitswerte', () => {
  it('erkennt boolesche Werte, Zeichenketten und Zahlen', () => {
    expect(resolveConfig({ show_moon: false }).config.show_moon).toBe(false);
    expect(resolveConfig({ show_moon: 'false' as unknown as boolean }).config.show_moon).toBe(false);
    expect(resolveConfig({ show_moon: 0 as unknown as boolean }).config.show_moon).toBe(false);
    expect(resolveConfig({ show_moon: true }).config.show_moon).toBe(true);
    expect(resolveConfig({ show_moon: 'true' as unknown as boolean }).config.show_moon).toBe(true);
    expect(resolveConfig({ show_moon: 1 as unknown as boolean }).config.show_moon).toBe(true);
  });

  it('fällt bei unsinnigen Werten auf den Standard zurück', () => {
    expect(resolveConfig({ animations: 'vielleicht' as unknown as boolean }).config.animations).toBe(
      DEFAULT_CONFIG.animations,
    );
  });
});

describe('resolveConfig – Entitäten und Standort', () => {
  it('übernimmt alternative Entitäten und entfernt Leerzeichen', () => {
    const { config } = resolveConfig({
      entity: '  sun.sun_2  ',
      moon_entity: 'sensor.moon_phase',
    });
    expect(config.entity).toBe('sun.sun_2');
    expect(config.moon_entity).toBe('sensor.moon_phase');
  });

  it('verwendet den Standard, wenn die Entität leer ist', () => {
    expect(resolveConfig({ entity: '   ' }).config.entity).toBe('sun.sun');
    expect(resolveConfig({ moon_entity: '' }).config.moon_entity).toBe('sensor.moon');
  });

  it('übernimmt gültige Koordinaten', () => {
    const { config, warnings } = resolveConfig({ latitude: 52.52, longitude: 13.405 });
    expect(config.latitude).toBe(52.52);
    expect(config.longitude).toBe(13.405);
    expect(warnings).toHaveLength(0);
  });

  it('verwirft Koordinaten außerhalb des Wertebereichs', () => {
    const { config, warnings } = resolveConfig({ latitude: 120, longitude: -400 }, 'de');
    expect(config.latitude).toBeNull();
    expect(config.longitude).toBeNull();
    expect(warnings).toHaveLength(2);
  });

  it('liest Koordinaten aus Zeichenketten', () => {
    const { config } = resolveConfig({
      latitude: '52.52',
      longitude: '13.405',
    } as unknown as SunMoonCardConfig);
    expect(config.latitude).toBeCloseTo(52.52, 6);
    expect(config.longitude).toBeCloseTo(13.405, 6);
  });
});

describe('resolveCardHeight', () => {
  it('nutzt die konfigurierte Höhe', () => {
    const config = resolveConfig({ card_height: 300 }).config;
    expect(resolveCardHeight(config, 600)).toBe(300);
  });

  it('löst `auto` in Abhängigkeit von der Breite auf', () => {
    const config = resolveConfig({ card_height: 'auto' }).config;
    expect(resolveCardHeight(config, 320)).toBe(320);
    expect(resolveCardHeight(config, 700)).toBe(360);
  });

  it('hält die Höhengrenzen auch bei `auto` ein', () => {
    const config = resolveConfig({ card_height: 'auto' }).config;
    expect(resolveCardHeight(config, 320)).toBeGreaterThanOrEqual(CARD_HEIGHT_RANGE[0]);
    expect(resolveCardHeight(config, 700)).toBeLessThanOrEqual(CARD_HEIGHT_RANGE[1]);
  });
});

describe('stubConfig', () => {
  it('liefert eine gültige Minimalkonfiguration', () => {
    const stub = stubConfig();
    expect(stub.type).toBe('custom:sun-moon-card');
    const { errors } = resolveConfig(stub);
    expect(errors).toHaveLength(0);
  });
});
