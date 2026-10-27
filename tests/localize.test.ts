/**
 * Prüfung von Übersetzungen und Formatierung.
 *
 * Die Karte folgt Sprache und Zeitformat aus Home Assistant; alle Texte
 * müssen in Deutsch und Englisch vollständig vorhanden sein.
 */

import { describe, expect, it } from 'vitest';

import {
  compassDirection,
  createFormatContext,
  formatDegrees,
  formatDuration,
  formatKilometers,
  formatNumber,
  formatPercent,
  formatTime,
  resolveHour12,
} from '../src/format.js';
import { LANGUAGES, localize, resolveLanguage, type StringKey } from '../src/localize.js';

const de = createFormatContext('de', 'de-DE', 'Europe/Berlin', false);
const en24 = createFormatContext('en', 'en-US', 'America/New_York', false);
const en12 = createFormatContext('en', 'en-US', 'America/New_York', true);

describe('localize', () => {
  it('liefert für jede Sprache einen Text', () => {
    for (const language of LANGUAGES) {
      expect(localize(language, 'sunrise')).toBeTruthy();
      expect(localize(language, 'sunset')).toBeTruthy();
      expect(localize(language, 'civilDawn')).toBeTruthy();
    }
  });

  it('unterscheidet Deutsch und Englisch', () => {
    expect(localize('de', 'sunrise')).toBe('Sonnenaufgang');
    expect(localize('en', 'sunrise')).toBe('Sunrise');
  });

  it('ersetzt Platzhalter', () => {
    const text = localize('de', 'invalidHeight', { value: '999', min: 120, max: 800 });
    expect(text).toContain('999');
    expect(text).toContain('120');
    expect(text).toContain('800');
    expect(text).not.toContain('{');
  });

  it('fällt bei unbekanntem Schlüssel auf den Schlüsselnamen zurück', () => {
    expect(localize('de', 'gibtEsNicht' as StringKey)).toBe('gibtEsNicht');
  });

  it('enthält in beiden Sprachen dieselben Schlüssel', () => {
    const deText = localize('de', 'moonrise');
    const enText = localize('en', 'moonrise');
    expect(deText).not.toBe('moonrise');
    expect(enText).not.toBe('moonrise');
  });
});

describe('resolveLanguage', () => {
  it('erkennt deutsche Varianten', () => {
    expect(resolveLanguage('de', undefined)).toBe('de');
    expect(resolveLanguage('de-DE', undefined)).toBe('de');
    expect(resolveLanguage('DE_at', undefined)).toBe('de');
  });

  it('fällt sonst auf Englisch zurück', () => {
    expect(resolveLanguage('en', undefined)).toBe('en');
    expect(resolveLanguage('fr', undefined)).toBe('en');
    expect(resolveLanguage(undefined, undefined)).toBe('en');
  });

  it('nutzt bei `auto` die Sprache aus Home Assistant', () => {
    expect(resolveLanguage('auto', 'de')).toBe('de');
    expect(resolveLanguage('auto', 'en-GB')).toBe('en');
    expect(resolveLanguage(undefined, 'de')).toBe('de');
  });

  it('bevorzugt eine explizite Konfiguration', () => {
    expect(resolveLanguage('en', 'de')).toBe('en');
  });
});

describe('resolveHour12', () => {
  it('folgt der Konfiguration', () => {
    expect(resolveHour12('12', undefined, 'de-DE')).toBe(true);
    expect(resolveHour12('24', undefined, 'en-US')).toBe(false);
  });

  it('folgt bei `auto` der Home-Assistant-Einstellung', () => {
    expect(resolveHour12('auto', '12', 'de-DE')).toBe(true);
    expect(resolveHour12('auto', 'am_pm', 'de-DE')).toBe(true);
    expect(resolveHour12('auto', '24', 'en-US')).toBe(false);
    expect(resolveHour12('auto', 'language', 'en-US')).toBe(true);
  });

  it('entscheidet ohne Vorgabe über das Gebietsschema', () => {
    expect(resolveHour12('auto', undefined, 'de-DE')).toBe(false);
    expect(resolveHour12('auto', undefined, 'en-US')).toBe(true);
  });
});

describe('formatTime', () => {
  const date = new Date('2026-10-26T17:30:00.000Z'); // 18:30 Berlin

  it('formatiert 24-Stunden-Zeiten', () => {
    expect(formatTime(date, de)).toBe('18:30');
  });

  it('formatiert 12-Stunden-Zeiten mit AM/PM', () => {
    const text = formatTime(date, en12);
    expect(text).toMatch(/(AM|PM)/i);
    expect(text).toContain('1:30');
  });

  it('verwendet die Zeitzone des Standorts', () => {
    // 17:30 UTC = 13:30 New York (Sommerzeit Ende Oktober: UTC−4)
    expect(formatTime(date, en24)).toBe('13:30');
  });
});

describe('Zahlenformatierung', () => {
  it('verwendet deutsche und englische Dezimaltrennzeichen', () => {
    expect(formatNumber(12.34, 1, 'de-DE')).toBe('12,3');
    expect(formatNumber(12.34, 1, 'en-US')).toBe('12.3');
  });

  it('formatiert Grad, Prozent und Kilometer', () => {
    expect(formatDegrees(-6.25, 1, 'de-DE')).toBe('-6,3°');
    expect(formatPercent(0.734, 'de-DE')).toBe('73 %');
    expect(formatKilometers(384_400, 'de-DE')).toBe('384.400 km');
  });

  it('formatiert Dauern', () => {
    expect(formatDuration(754, 'de')).toBe('12 h 34 min');
    expect(formatDuration(1439, 'en')).toBe('23 h 59 min');
    expect(formatDuration(0, 'de')).toBe('0 h 0 min');
  });
});

describe('compassDirection', () => {
  it('liefert die Himmelsrichtungen', () => {
    expect(compassDirection(0, 'de')).toBeTruthy();
    expect(compassDirection(90, 'de')).toBeTruthy();
    expect(compassDirection(180, 'en')).toBeTruthy();
    expect(compassDirection(270, 'en')).toBeTruthy();
  });

  it('normalisiert Winkel außerhalb 0…360°', () => {
    expect(compassDirection(360, 'de')).toBe(compassDirection(0, 'de'));
    expect(compassDirection(-90, 'de')).toBe(compassDirection(270, 'de'));
    expect(compassDirection(450, 'en')).toBe(compassDirection(90, 'en'));
  });

  it('liefert für Nord und Süd in beiden Sprachen unterschiedliche Texte', () => {
    expect(compassDirection(0, 'de')).not.toBe(compassDirection(180, 'de'));
  });

  it('nutzt die 16-teilige Windrose', () => {
    expect(compassDirection(0, 'de')).toBe('N');
    expect(compassDirection(30, 'de')).toBe('NNO');
    expect(compassDirection(90, 'de')).toBe('O');
    expect(compassDirection(180, 'en')).toBe('S');
    expect(compassDirection(250, 'de')).toBe('WSW');
    expect(compassDirection(250, 'en')).toBe('WSW');
    expect(compassDirection(270, 'de')).toBe('W');
    expect(compassDirection(340, 'de')).toBe('NNW');
    // Jede der 16 Richtungen ist in beiden Sprachen belegt.
    for (let deg = 0; deg < 360; deg += 22.5) {
      expect(compassDirection(deg, 'de')).toMatch(/^[NSOW]{1,3}$/);
      expect(compassDirection(deg, 'en')).toMatch(/^[NSEW]{1,3}$/);
    }
  });
});
