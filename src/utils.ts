/**
 * utils.ts
 *
 * Kleine Hilfsfunktionen ohne Abhängigkeiten: Wertebereiche, SVG-Pfadbau,
 * Geometrie und Vergleiche.
 */

/** Begrenzt einen Wert auf ein Intervall. */
export function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

/** Linear interpoliert zwischen zwei Werten. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Rundet auf die angegebene Anzahl Nachkommastellen. */
export function round(value: number, digits = 0): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

/** Prüft, ob ein Wert eine endliche Zahl ist. */
export function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

/**
 * Wandelt einen Wert sicher in eine Zahl um.
 * Gibt `null` zurück, wenn keine gültige Zahl vorliegt.
 */
export function toNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value.replace(',', '.'));
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

/** Eindeutige, aber stabile IDs für SVG-Definitionen (mehrere Karten möglich). */
let idCounter = 0;
export function uniqueId(prefix: string): string {
  idCounter += 1;
  return `${prefix}-${idCounter.toString(36)}`;
}

/** Erzeugt einen Polylinien-Pfad aus Punkten. */
export function polylinePath(points: Array<{ x: number; y: number }>): string {
  if (points.length === 0) return '';
  return points
    .map((point, index) => `${index === 0 ? 'M' : 'L'}${round(point.x, 2)} ${round(point.y, 2)}`)
    .join(' ');
}

/**
 * Erzeugt einen geglätteten Pfad (Catmull-Rom → kubische Bézierkurven).
 *
 * Mit hinreichend dichten Abtastwerten ist das Ergebnis optisch identisch mit
 * einer Polylinie, aber bei gröberen Abtastungen (schmale Karten) deutlich
 * ruhiger.
 */
export function smoothPath(points: Array<{ x: number; y: number }>, tension = 0.5): string {
  if (points.length < 3) return polylinePath(points);

  const path: string[] = [`M${round(points[0].x, 2)} ${round(points[0].y, 2)}`];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;

    const c1x = p1.x + ((p2.x - p0.x) / 6) * tension * 2;
    const c1y = p1.y + ((p2.y - p0.y) / 6) * tension * 2;
    const c2x = p2.x - ((p3.x - p1.x) / 6) * tension * 2;
    const c2y = p2.y - ((p3.y - p1.y) / 6) * tension * 2;

    path.push(
      `C${round(c1x, 2)} ${round(c1y, 2)} ${round(c2x, 2)} ${round(c2y, 2)} ${round(p2.x, 2)} ${round(p2.y, 2)}`,
    );
  }
  return path.join(' ');
}

/** Erzeugt einen geschlossenen Flächenpfad bis zur Grundlinie. */
export function areaPath(
  points: Array<{ x: number; y: number }>,
  baseline: number,
  smooth = false,
): string {
  if (points.length === 0) return '';
  const top = smooth ? smoothPath(points) : polylinePath(points);
  const first = points[0];
  const last = points[points.length - 1];
  return `${top} L${round(last.x, 2)} ${round(baseline, 2)} L${round(first.x, 2)} ${round(baseline, 2)} Z`;
}

export interface Point {
  x: number;
  y: number;
}

/**
 * Rechnet Polarkoordinaten in Bildschirmkoordinaten um.
 *
 * Konvention der Himmelskarte: Norden oben, Osten links
 * (Blick von der Erde auf die Himmelskugel).
 *
 * @param center Mittelpunkt
 * @param radius Radius (0 = Zenit, R = Horizont)
 * @param azimuthGrad Azimut, ab Nord über Ost
 */
export function skyPoint(center: Point, radius: number, azimuthGrad: number): Point {
  const rad = (azimuthGrad * Math.PI) / 180;
  return {
    x: center.x - radius * Math.sin(rad),
    y: center.y - radius * Math.cos(rad),
  };
}

/** Erzeugt den Pfad eines Kreisbogens. */
export function arcPath(
  center: Point,
  radius: number,
  startAngleDeg: number,
  endAngleDeg: number,
): string {
  const start = skyPoint(center, radius, startAngleDeg);
  const end = skyPoint(center, radius, endAngleDeg);
  const largeArc = Math.abs(endAngleDeg - startAngleDeg) > 180 ? 1 : 0;
  const sweep = endAngleDeg < startAngleDeg ? 0 : 1;
  return `M${round(start.x, 2)} ${round(start.y, 2)} A${round(radius, 2)} ${round(radius, 2)} 0 ${largeArc} ${sweep} ${round(end.x, 2)} ${round(end.y, 2)}`;
}

/**
 * Erzeugt den Pfad der Mondphase (beleuchteter Bereich).
 *
 * Der Terminator wird als halbe Ellipse mit der kleinen Halbachse
 * R·|1 − 2k| dargestellt; die Ausrichtung folgt dem Positionswinkel der
 * beleuchteten Seite (Meeus 48.5).
 *
 * @param center Mittelpunkt der Mondscheibe
 * @param radius Radius der Mondscheibe
 * @param illumination Beleuchteter Anteil 0..1
 *
 * Die Ausrichtung des Terminators erfolgt durch Rotation des umgebenden
 * <g>-Elements (siehe components/moon-disc.ts).
 */
export function moonPhasePath(center: Point, radius: number, illumination: number): string {
  const k = clamp(illumination, 0, 1);
  if (k <= 0.0005) return '';
  if (k >= 0.9995) {
    return `M${round(center.x - radius, 2)} ${round(center.y, 2)} ` +
      `a${round(radius, 2)} ${round(radius, 2)} 0 1 1 ${round(radius * 2, 2)} 0 ` +
      `a${round(radius, 2)} ${round(radius, 2)} 0 1 1 ${round(-radius * 2, 2)} 0 Z`;
  }

  // Lokales Koordinatensystem: „oben“ (−y) zeigt zur beleuchteten Seite.
  // Die Rotation erfolgt später über ein <g transform="rotate(...)">, damit der
  // Pfad selbst achsparallel bleibt.
  const semiMinor = radius * (1 - 2 * k); // > 0: Sichel, < 0: zunehmender Mond
  const sweepOuter = 1; // halber Kreis über die beleuchtete Seite
  const sweepInner = semiMinor > 0 ? 0 : 1;

  const left = { x: center.x - radius, y: center.y };
  const right = { x: center.x + radius, y: center.y };

  return (
    `M${round(left.x, 2)} ${round(left.y, 2)} ` +
    `A${round(radius, 2)} ${round(radius, 2)} 0 0 ${sweepOuter} ${round(right.x, 2)} ${round(right.y, 2)} ` +
    `A${round(radius, 2)} ${round(Math.abs(semiMinor), 4)} 0 0 ${sweepInner} ${round(left.x, 2)} ${round(left.y, 2)} Z`
  );
}

/** Vergleicht zwei Objekte flach (eine Ebene). */
export function shallowEqual<T extends Record<string, unknown>>(a: T, b: T): boolean {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (a[key] !== b[key]) return false;
  }
  return true;
}

/** Gibt den Zeitstempel der nächsten vollen Minute zurück. */
export function nextMinute(from: Date = new Date()): number {
  const time = from.getTime();
  return time + (60_000 - (time % 60_000)) + 250;
}

/** Kürzt einen Text auf die angegebene Länge. */
export function truncate(text: string, maxLength: number): string {
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}
