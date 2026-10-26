/**
 * dev/time-mock.ts
 *
 * Zeit-Simulation für die Entwicklungs- und Screenshot-Umgebung.
 *
 * Damit Polartag, Polarnacht oder ein bestimmter Sonnenstand reproduzierbar
 * geprüft werden können, kann die Systemzeit der Seite um einen festen Versatz
 * verschoben werden. Die Zeit läuft weiter, es wird lediglich ein konstanter
 * Offset addiert – Timer und Animationen funktionieren weiterhin.
 *
 * Hinweis: ausschließlich für Entwicklung und Screenshots gedacht. Die Karte
 * selbst verwendet immer `new Date()`.
 */

import { timeZoneOffsetMs } from '../src/timezone.js';

const RealDate = Date;

let offsetMs = 0;

/**
 * Setzt den Zeitversatz so, dass `new Date()` den Zielzeitpunkt liefert.
 *
 * Wird eine Zeitzone übergeben, gilt die Angabe als **Ortszeit** in dieser
 * Zone („2026-10-26T18:30“ = 18:30 in Berlin, nicht in der Zone des
 * Browsers). Ohne Zeitzone wird die Angabe wie von `new Date(...)` üblich
 * interpretiert.
 */
export function setSimulatedTime(isoLocal: string, timeZone?: string): void {
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?/.exec(isoLocal);
  if (!match) {
    offsetMs = 0;
    return;
  }
  const [, year, month, day, hour = '0', minute = '0', second = '0'] = match;
  const utcMillis = Date.UTC(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second),
  );
  let target = utcMillis;
  if (timeZone) {
    const firstOffset = timeZoneOffsetMs(new RealDate(utcMillis), timeZone);
    target = utcMillis - firstOffset;
    const secondOffset = timeZoneOffsetMs(new RealDate(target), timeZone);
    if (secondOffset !== firstOffset) target = utcMillis - secondOffset;
  }
  if (Number.isNaN(target)) {
    offsetMs = 0;
    return;
  }
  offsetMs = target - RealDate.now();
}

/** Setzt den Versatz zurück (echte Zeit). */
export function resetSimulatedTime(): void {
  offsetMs = 0;
}

/** Aktueller (gegebenenfalls simulierter) Zeitpunkt. */
export function now(): Date {
  return new RealDate(RealDate.now() + offsetMs);
}

/** Aktiver Versatz in Millisekunden. */
export function currentOffset(): number {
  return offsetMs;
}

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Ersetzt das globale `Date`-Objekt durch eine Variante mit Zeitversatz.
 *
 * Es werden Konstruktoraufrufe (`new Date()`) sowie `Date.now()`
 * berücksichtigt. Alle übrigen statischen Methoden (`Date.parse`,
 * `Date.UTC`, …) werden unverändert durchgereicht.
 */
export function installTimeMock(): void {
  const MockDate = new Proxy(RealDate, {
    construct(target, args: any[]) {
      return args.length === 0
        ? new target(RealDate.now() + offsetMs)
        : new target(...(args as []));
    },
    apply(_target, _thisArg, args: any[]) {
      return args.length === 0
        ? new RealDate(RealDate.now() + offsetMs).toString()
        : new RealDate(...(args as [])).toString();
    },
    get(target, property, receiver) {
      if (property === 'now') {
        return () => RealDate.now() + offsetMs;
      }
      return Reflect.get(target, property, receiver);
    },
  });

  (globalThis as any).Date = MockDate;
}
