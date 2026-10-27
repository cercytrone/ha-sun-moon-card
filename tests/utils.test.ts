/**
 * Prüfung der Farb-Hilfsfunktionen.
 *
 * Sie erzeugen die Zwischentöne der Chart-Verläufe. Da Farben über
 * `mixHex()` gemischt werden, entscheidet diese Funktion über die
 * Gleichmäßigkeit der Übergänge.
 */

import { describe, expect, it } from 'vitest';

import { mixHex, parseHexColor } from '../src/utils.js';

describe('parseHexColor', () => {
  it('liest kurze und lange Schreibweise', () => {
    expect(parseHexColor('#f00')).toEqual([255, 0, 0]);
    expect(parseHexColor('#ff0000')).toEqual([255, 0, 0]);
    expect(parseHexColor('1b2347')).toEqual([27, 35, 71]);
  });

  it('lehnt unlesbare Werte ab', () => {
    expect(parseHexColor('rgb(1, 2, 3)')).toBeNull();
    expect(parseHexColor('var(--smc-day)')).toBeNull();
    expect(parseHexColor('#12')).toBeNull();
  });
});

describe('mixHex', () => {
  it('gibt die Endfarben unverändert zurück', () => {
    expect(mixHex('#000000', '#ffffff', 0)).toBe('#000000');
    expect(mixHex('#000000', '#ffffff', 1)).toBe('#ffffff');
  });

  it('mischt in der Mitte', () => {
    expect(mixHex('#000000', '#ffffff', 0.5)).toBe('#808080');
    expect(mixHex('#ffc44d', '#12172f', 0.5)).toBe('#896e3e');
  });

  it('begrenzt den Mischfaktor', () => {
    expect(mixHex('#000000', '#ffffff', -1)).toBe('#000000');
    expect(mixHex('#000000', '#ffffff', 4)).toBe('#ffffff');
  });

  it('fällt auf die Zielfarbe zurück, wenn eine Farbe unlesbar ist', () => {
    expect(mixHex('var(--day)', '#12172f', 0.5)).toBe('#12172f');
  });
});
