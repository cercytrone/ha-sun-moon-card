/**
 * components/scene-chart.ts
 *
 * Tagesverlauf im Kartenstil `scene`: ein gestalteter Himmel – links Morgen,
 * in der Mitte Tag, rechts Nacht mit Sternen und Mond –, davor die Bahnen von
 * Sonne und Mond und unten eine zurückhaltende Silhouette (Stadt, Berge,
 * Wald, Küste oder keine).
 *
 * Der Hintergrund ist bewusst Gestaltung und folgt nicht der Uhrzeit. Bahnen,
 * Zeiten und Sonnenstand dagegen sind berechnet wie im übrigen Diagramm.
 */

import { svg, type TemplateResult } from 'lit';

import type { DayProfile, MoonPath, SolarEvents } from '../astronomy.js';
import { formatDegrees, formatTime, type FormatContext } from '../format.js';
import { clamp, round } from '../utils.js';
import { renderMoonDisc } from './moon-disc.js';

/** Wählbare Szenen. */
export type SceneKind = 'city' | 'mountains' | 'forest' | 'coast' | 'none';

export interface SceneChartOptions {
  profile: DayProfile;
  events: SolarEvents;
  now: Date;
  width: number;
  height: number;
  format: FormatContext;
  scene: SceneKind;
  /** Bahn und Marker der Sonne zeigen. */
  showSun: boolean;
  /** Mondbahn und Mond am Nachthimmel zeigen. */
  showMoon: boolean;
  moonPath: MoonPath | null;
  /**
   * Aktueller Mond: Phase und Höhe. Die Scheibe sitzt auf der Mondbahn an der
   * aktuellen Uhrzeit – wie die Sonne auf ihrer.
   */
  moon: { illumination: number; brightLimbAngle: number; altitude: number } | null;
  currentAltitude: number;
  animations: boolean;
  uid: string;
}

/** Höhe des Beschriftungsstreifens unten. */
const BAND_HEIGHT = 50;
const BAND_HEIGHT_NARROW = 44;

/** Himmel von links (Morgen) über Tag nach rechts (Nacht): [Lage %, Zenit, Horizont]. */
const SKY_STOPS: Array<[number, string, string]> = [
  [0, '#8f9fd6', '#f4a97c'],
  [12, '#9aaedf', '#f7bf8e'],
  [30, '#a8c4ea', '#f6dcb4'],
  [52, '#b4cdee', '#eef0f4'],
  [66, '#8d9cd8', '#d9c3dc'],
  [78, '#3c4590', '#6b6fb4'],
  [90, '#232a68', '#3b428a'],
  [100, '#1b2159', '#323a80'],
];

/** Wolken: [x-Anteil, y-Anteil bis Horizont, Breite, Farbe, Deckkraft]. */
const CLOUDS: Array<[number, number, number, string, number]> = [
  [0.13, 0.55, 90, '#f6c2c0', 0.55],
  [0.3, 0.42, 60, '#fbd9cf', 0.45],
  [0.58, 0.3, 85, '#ffffff', 0.55],
  [0.47, 0.14, 50, '#ffffff', 0.35],
];

/** Kleiner, deterministischer Zufallsgenerator (mulberry32). */
function random(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = (value: number): string => String(round(value, 1));

/** Ein Lichtpunkt (Fenster, Leuchtturm). */
interface Light {
  x: number;
  y: number;
  w: number;
  h: number;
  opacity: number;
}

/** Eine Silhouette: hintere und vordere Ebene, dazu Lichter in der Nacht. */
interface Silhouette {
  back: string;
  front: string;
  lights: Light[];
  /** Wasserfläche (Küste): Oberkante in Pixeln, sonst `null`. */
  waterTop: number | null;
}

/** Häuserzeile mit Flachdächern, Giebeln, Kuppeln, Spitzen und Antennen. */
function cityRow(
  rand: () => number,
  width: number,
  baseY: number,
  bottom: number,
  minH: number,
  maxH: number,
  windows: number,
  lights: Light[],
): string {
  let x = -6;
  let path = `M${f(x)},${f(bottom)}`;
  while (x < width + 6) {
    const w = 10 + rand() * 28;
    const h = minH + rand() * (maxH - minH);
    const top = baseY - h;
    const kind = rand();
    path += `L${f(x)},${f(top)}`;
    if (kind < 0.12) {
      path += `L${f(x + w / 2)},${f(top - w * 0.45)}L${f(x + w)},${f(top)}`;
    } else if (kind < 0.2) {
      path += `A${f(w / 2)},${f(w * 0.42)} 0 0 1 ${f(x + w)},${f(top)}`;
    } else if (kind < 0.28) {
      path +=
        `L${f(x + w * 0.42)},${f(top)}L${f(x + w / 2)},${f(top - h * 0.55)}` +
        `L${f(x + w * 0.58)},${f(top)}L${f(x + w)},${f(top)}`;
    } else if (kind < 0.38) {
      path +=
        `L${f(x + w * 0.6)},${f(top)}L${f(x + w * 0.6)},${f(top - 12)}` +
        `L${f(x + w * 0.64)},${f(top - 12)}L${f(x + w * 0.64)},${f(top)}L${f(x + w)},${f(top)}`;
    } else if (kind < 0.48) {
      path +=
        `L${f(x + w * 0.25)},${f(top)}L${f(x + w * 0.25)},${f(top - 7)}` +
        `L${f(x + w * 0.75)},${f(top - 7)}L${f(x + w * 0.75)},${f(top)}L${f(x + w)},${f(top)}`;
    } else {
      path += `L${f(x + w)},${f(top)}`;
    }
    // Erleuchtete Fenster nur im Nachtteil.
    if (windows > 0 && x > width * 0.7) {
      for (let wy = top + 5; wy < baseY - 4; wy += 6) {
        for (let wx = x + 3; wx < x + w - 3; wx += 5) {
          if (rand() < windows) {
            lights.push({ x: wx, y: wy, w: 1.8, h: 2.4, opacity: 0.55 + rand() * 0.4 });
          }
        }
      }
    }
    x += w;
    if (rand() < 0.18) {
      const gap = 4 + rand() * 10;
      const low = baseY - minH * 0.4;
      path += `L${f(x)},${f(low)}L${f(x + gap)},${f(low)}`;
      x += gap;
    }
  }
  return `${path}L${f(x)},${f(bottom)}Z`;
}

/**
 * Bergkamm aus einzelnen Gipfeln: Jeder Gipfel ist ein Dreieck mit eigener
 * Breite und Höhe, die Kontur folgt dem jeweils höchsten. Ein leichtes
 * Rauschen bricht die Flanken auf.
 */
function ridge(
  rand: () => number,
  width: number,
  baseY: number,
  bottom: number,
  height: number,
  peaks: number,
): string {
  const list = Array.from({ length: peaks }, (_, i) => ({
    x: ((i + 0.2 + rand() * 0.6) / peaks) * width,
    h: height * (0.45 + rand() * 0.55),
    w: (width / peaks) * (0.9 + rand() * 0.9),
  }));
  const count = Math.max(40, Math.round(width / 6));
  let path = `M-4,${f(bottom)}`;
  for (let i = 0; i <= count; i++) {
    const x = -4 + ((width + 8) * i) / count;
    let y = height * 0.12;
    for (const peak of list) {
      y = Math.max(y, peak.h * (1 - Math.abs(x - peak.x) / peak.w));
    }
    y += (rand() - 0.5) * height * 0.06;
    path += `L${f(x)},${f(baseY - clamp(y, 2, height))}`;
  }
  return `${path}L${f(width + 4)},${f(bottom)}Z`;
}

/** Waldsaum: sanfter Hügel mit Nadel- und Laubbäumen. */
function treeline(
  rand: () => number,
  width: number,
  baseY: number,
  bottom: number,
  minH: number,
  maxH: number,
): string {
  const hill = (x: number): number => Math.sin((x / width) * Math.PI * 1.6 + 0.6) * minH * 0.35;
  let path = `M-4,${f(bottom)}L-4,${f(baseY - hill(-4))}`;
  let x = -4;
  while (x < width + 4) {
    const h = minH + rand() * (maxH - minH);
    const ground = baseY - hill(x);
    if (rand() < 0.72) {
      // Nadelbaum: drei gestaffelte Dreiecke
      const w = h * (0.42 + rand() * 0.12);
      path +=
        `L${f(x)},${f(ground)}` +
        `L${f(x + w * 0.5)},${f(ground - h)}` +
        `L${f(x + w)},${f(ground)}`;
      x += w * (0.55 + rand() * 0.25);
    } else {
      // Laubbaum: runde Krone
      const r = h * 0.32;
      path +=
        `L${f(x)},${f(ground)}L${f(x)},${f(ground - h * 0.35)}` +
        `A${f(r)},${f(r)} 0 1 1 ${f(x + r * 1.6)},${f(ground - h * 0.35)}` +
        `L${f(x + r * 1.6)},${f(ground)}`;
      x += r * 1.6 + rand() * 4;
    }
  }
  return `${path}L${f(width + 4)},${f(bottom)}Z`;
}

/** Erzeugt die Silhouette einer Szene. */
function buildSilhouette(
  scene: SceneKind,
  width: number,
  baseY: number,
  bottom: number,
  scale: number,
): Silhouette | null {
  const lights: Light[] = [];
  switch (scene) {
    case 'city': {
      const back = cityRow(random(11), width, baseY, bottom, 18 * scale, 44 * scale, 0, lights);
      // Funkturm als allgemeines Wahrzeichen
      const cx = width * 0.8;
      const towerH = 84 * scale;
      const tower =
        `M${f(cx - 1.6)},${f(baseY)}L${f(cx - 1.6)},${f(baseY - towerH)}` +
        `L${f(cx - 0.6)},${f(baseY - towerH)}L${f(cx - 0.6)},${f(baseY - towerH - 16)}` +
        `L${f(cx + 0.6)},${f(baseY - towerH - 16)}L${f(cx + 0.6)},${f(baseY - towerH)}` +
        `L${f(cx + 1.6)},${f(baseY - towerH)}L${f(cx + 1.6)},${f(baseY)}Z` +
        `M${f(cx + 5.5)},${f(baseY - towerH * 0.72)}` +
        `A5.5,5.5 0 1 0 ${f(cx - 5.5)},${f(baseY - towerH * 0.72)}` +
        `A5.5,5.5 0 1 0 ${f(cx + 5.5)},${f(baseY - towerH * 0.72)}Z`;
      const front = cityRow(random(23), width, baseY, bottom, 8 * scale, 28 * scale, 0.07, lights);
      return { back: `${back}${tower}`, front, lights, waterTop: null };
    }
    case 'mountains':
      return {
        back: ridge(random(5), width, baseY, bottom, 78 * scale, 6),
        front: ridge(random(9), width, baseY + 2, bottom, 40 * scale, 9),
        lights,
        waterTop: null,
      };
    case 'forest':
      return {
        back: treeline(random(17), width, baseY - 6 * scale, bottom, 22 * scale, 46 * scale),
        front: treeline(random(29), width, baseY + 4 * scale, bottom, 12 * scale, 28 * scale),
        lights,
        waterTop: null,
      };
    case 'coast': {
      const waterTop = baseY - 10 * scale;
      // Ferne Hügel links, Landzunge mit Leuchtturm rechts
      const rand = random(31);
      let back = `M-4,${f(waterTop)}`;
      for (let i = 0; i <= 24; i++) {
        const x = -4 + (width * 0.55 * i) / 24;
        const h = Math.sin((i / 24) * Math.PI) * 30 * scale + rand() * 4 * scale;
        back += `L${f(x)},${f(waterTop - h)}`;
      }
      back += `L${f(width * 0.55)},${f(waterTop)}Z`;
      const capeStart = width * 0.72;
      const lx = width * 0.84;
      const capeTop = waterTop - 14 * scale;
      const lh = 46 * scale;
      const front =
        `M${f(capeStart)},${f(waterTop)}` +
        `Q${f(capeStart + width * 0.06)},${f(capeTop)} ${f(lx - 10)},${f(capeTop)}` +
        `L${f(width + 4)},${f(capeTop + 2)}L${f(width + 4)},${f(waterTop)}Z` +
        `M${f(lx - 4.5)},${f(capeTop)}L${f(lx - 2.8)},${f(capeTop - lh)}` +
        `L${f(lx + 2.8)},${f(capeTop - lh)}L${f(lx + 4.5)},${f(capeTop)}Z` +
        `M${f(lx - 3.6)},${f(capeTop - lh)}L${f(lx)},${f(capeTop - lh - 8)}` +
        `L${f(lx + 3.6)},${f(capeTop - lh)}Z`;
      lights.push({ x: lx - 1.6, y: capeTop - lh - 4.5, w: 3.2, h: 3, opacity: 0.95 });
      return { back, front, lights, waterTop };
    }
    default:
      return null;
  }
}

/** Zwischenspeicher: Die Silhouette hängt nur von Szene und Größe ab. */
const silhouetteCache = new Map<string, Silhouette | null>();

function silhouette(
  scene: SceneKind,
  width: number,
  baseY: number,
  bottom: number,
  scale: number,
): Silhouette | null {
  const key = [scene, round(width, 0), round(baseY, 0), round(bottom, 0), scale].join('|');
  if (!silhouetteCache.has(key)) {
    if (silhouetteCache.size > 24) silhouetteCache.clear();
    silhouetteCache.set(key, buildSilhouette(scene, width, baseY, bottom, scale));
  }
  return silhouetteCache.get(key) ?? null;
}

/** Zeichnet den Tagesverlauf im Szenen-Stil. */
export function renderSceneChart(options: SceneChartOptions): TemplateResult {
  const {
    profile,
    events,
    now,
    format,
    scene,
    showSun,
    showMoon,
    moonPath,
    moon,
    currentAltitude,
    animations,
    uid,
  } = options;
  const t = format.t;
  const width = Math.max(160, options.width);
  const height = Math.max(140, options.height);
  const narrow = width < 480;
  const bandH = narrow ? BAND_HEIGHT_NARROW : BAND_HEIGHT;
  const plotTop = 14;
  const plotBottom = height - bandH - 4;

  const samples = profile.samples;
  const t0 = profile.dayStart.getTime();
  const t1 = profile.dayEnd.getTime();
  const span = Math.max(1, t1 - t0);
  const xOf = (time: number): number => ((time - t0) / span) * width;

  // Höhenbereich: Er richtet sich nach der Sonne, damit ihr Bogen die volle
  // Höhe nutzt; −16° liegen am unteren Rand des Plots. Die Mondbahn darf oben
  // und unten hinauslaufen – steht der Mond außerhalb, zeigt eine Randmarke
  // seine Höhe (siehe unten).
  const domainTop = Math.max(12, profile.maxAltitude + 8);
  const domainBottom = -16;
  const yOf = (altitude: number): number =>
    plotTop + ((domainTop - altitude) / (domainTop - domainBottom)) * (plotBottom - plotTop);
  const y0 = yOf(0);
  const nowX = clamp(xOf(now.getTime()), 0, width);

  const pathOf = (points: { time: number; altitude: number }[]): string =>
    points.map((p, i) => `${i ? 'L' : 'M'}${f(xOf(p.time))},${f(yOf(p.altitude))}`).join('');

  const ids = {
    skyTop: `${uid}-sky-top`,
    skyHor: `${uid}-sky-hor`,
    horFade: `${uid}-hor-fade`,
    horMask: `${uid}-hor-mask`,
    soft: `${uid}-soft`,
    softer: `${uid}-softer`,
    sunGlow: `${uid}-sun-glow`,
    sunCore: `${uid}-sun-core`,
    moonGlow: `${uid}-moon-glow`,
    dayFill: `${uid}-day-fill`,
    dayFade: `${uid}-day-fade`,
    nightFill: `${uid}-night-fill`,
    curve: `${uid}-curve`,
    band: `${uid}-band`,
    horizonLine: `${uid}-horizon-line`,
    back: `${uid}-scene-back`,
    front: `${uid}-scene-front`,
    water: `${uid}-water`,
    above: `${uid}-above`,
    below: `${uid}-below`,
    past: `${uid}-past`,
    future: `${uid}-future`,
  };

  // ---- Sterne und Wolken (fest, nur Gestaltung) ---------------------------
  const rand = random(7);
  const stars: TemplateResult[] = [];
  for (let i = 0; i < (narrow ? 45 : 90); i++) {
    const x = rand() * width;
    const y = plotTop + rand() * (y0 - plotTop - 6);
    const opacity = clamp((x / width - 0.68) / 0.12, 0, 1) * (0.4 + rand() * 0.6);
    const r = 0.5 + rand() * 0.9;
    if (opacity > 0.04) {
      stars.push(svg`<circle cx="${f(x)}" cy="${f(y)}" r="${round(r, 2)}" fill="#fff"
        opacity="${round(opacity, 2)}" />`);
    }
  }
  const cloudScale = Math.min(1, width / 740);
  const clouds = CLOUDS.map(([fx, fy, w0, tint, opacity]) => {
    const w = w0 * cloudScale;
    const x = fx * width;
    const y = plotTop + fy * (y0 - plotTop);
    return svg`<g opacity="${opacity}" fill="${tint}" filter="url(#${ids.soft})">
      <ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(w)}" ry="${f(w * 0.22)}" />
      <ellipse cx="${f(x - w * 0.35)}" cy="${f(y + 3)}" rx="${f(w * 0.5)}" ry="${f(w * 0.18)}" />
      <ellipse cx="${f(x + w * 0.3)}" cy="${f(y - 4)}" rx="${f(w * 0.45)}" ry="${f(w * 0.2)}" />
    </g>`;
  });

  // ---- Silhouette ----------------------------------------------------------
  const sceneBase = height - bandH + 8;
  const sceneScale = narrow ? 0.8 : 1;
  const shape = silhouette(scene, width, sceneBase, height, sceneScale);

  // ---- Bahnen und Flächen --------------------------------------------------
  const sunPath = samples.length ? pathOf(samples) : '';
  const first = samples[0];
  const last = samples[samples.length - 1];
  const dayArea = samples.length
    ? `${sunPath}L${f(xOf(last.time))},${f(y0)}L${f(xOf(first.time))},${f(y0)}Z`
    : '';
  // Unter dem Horizont: nur zwischen den absteigenden Ästen der Bahn
  const groundArea = samples.length
    ? `${sunPath}L${f(xOf(last.time))},${f(height)}L${f(xOf(first.time))},${f(height)}Z`
    : '';
  const moonCurve = showMoon && moonPath?.profile.samples.length ? pathOf(moonPath.profile.samples) : '';

  // ---- Markierungen --------------------------------------------------------
  const marks = [
    { time: events.sunrise, label: t('sunrise'), short: t('sunriseShort'), dashed: true },
    { time: events.solarNoon, label: t('sceneNoon'), short: t('sceneNoonShort'), dashed: false },
    { time: events.sunset, label: t('sunset'), short: t('sunsetShort'), dashed: true },
  ].filter((mark): mark is { time: Date; label: string; short: string; dashed: boolean } =>
    mark.time instanceof Date,
  );
  const labelInset = narrow ? 34 : 48;

  // ---- Höhenachse ----------------------------------------------------------
  const ticks = [20, 10, -10].filter((a) => a < domainTop - 2 && a > domainBottom + 2);
  const horizonLabelEnd = narrow ? 78 : 92;

  // ---- Sonne und Mond ------------------------------------------------------
  const sunY = clamp(yOf(currentAltitude), plotTop + 12, height - bandH - 6);
  const sunUp = currentAltitude > -2;
  const sunGlowR = narrow ? 30 : 40;
  const sunR = narrow ? 11 : 15;
  const moonR = narrow ? 9 : 12;
  // Der Mond steht auf seiner Bahn an der aktuellen Uhrzeit. Unter dem
  // Horizont bleibt er sichtbar, aber gedämpft. Liegt er dicht an der Sonne,
  // weicht er seitlich aus, damit sich die Scheiben nicht verdecken.
  const moonAltitude = moon?.altitude ?? 0;
  const moonMinY = plotTop + moonR + 2;
  const moonMaxY = height - bandH - moonR - 4;
  const moonRawY = yOf(moonAltitude);
  // Außerhalb des Bildes gäbe es keinen Punkt der Bahn, auf dem die Scheibe
  // sitzen könnte: Dann steht statt ihrer eine Randmarke mit Pfeil und Höhe.
  const moonEdge: 'top' | 'bottom' | null =
    moonRawY > moonMaxY ? 'bottom' : moonRawY < moonMinY ? 'top' : null;
  const moonCy = clamp(moonRawY, moonMinY, moonMaxY);
  const moonUp = moonAltitude > 0;
  const moonStep = sunR + moonR + 6;
  const moonCx =
    showSun && Math.abs(moonCy - sunY) < sunR + moonR + 4
      ? nowX + moonStep + moonR <= width
        ? nowX + moonStep
        : nowX - moonStep
      : nowX;

  // Randmarke: „▼ −31°“ am unteren bzw. „▲ 64°“ am oberen Rand, auf der
  // „Jetzt“-Linie. Läge sie auf der Sonne, rückt sie zur Seite.
  const edgeText = moonEdge
    ? `${moonEdge === 'bottom' ? '▼' : '▲'} ${formatDegrees(moonAltitude, 0, format.locale)}`
    : '';
  const edgeFont = narrow ? 10.5 : 11.5;
  const edgeH = edgeFont + 8;
  const edgeW = edgeText.length * edgeFont * 0.62 + 14;
  const edgeY = moonEdge === 'bottom' ? height - bandH - edgeH - 8 : plotTop + 2;
  const edgeOnSun =
    showSun &&
    Math.abs(sunY - (edgeY + edgeH / 2)) < sunR + edgeH / 2 + 2;
  const edgeShift = sunR + edgeW / 2 + 6;
  const edgeX = clamp(
    edgeOnSun ? (nowX + edgeShift + edgeW / 2 <= width - 4 ? nowX + edgeShift : nowX - edgeShift) : nowX,
    edgeW / 2 + 4,
    width - edgeW / 2 - 4,
  );

  const fadeAt = clamp(y0 / height, 0, 1);

  return svg`
    <svg
      class="scene-chart"
      width="${f(width)}"
      height="${f(height)}"
      viewBox="0 0 ${f(width)} ${f(height)}"
      role="img"
      aria-label="${t('title')}"
    >
      <defs>
        <linearGradient id="${ids.skyTop}" x1="0" x2="1" y1="0" y2="0">
          ${SKY_STOPS.map(([o, zen]) => svg`<stop offset="${o}%" stop-color="${zen}" />`)}
        </linearGradient>
        <linearGradient id="${ids.skyHor}" x1="0" x2="1" y1="0" y2="0">
          ${SKY_STOPS.map(([o, , hor]) => svg`<stop offset="${o}%" stop-color="${hor}" />`)}
        </linearGradient>
        <linearGradient id="${ids.horFade}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#000" />
          <stop offset="${round(fadeAt, 3)}" stop-color="#fff" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
        <mask id="${ids.horMask}">
          <rect width="${f(width)}" height="${f(height)}" fill="url(#${ids.horFade})" />
        </mask>
        <filter id="${ids.soft}" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="${ids.softer}" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id="${ids.sunGlow}">
          <stop offset="0" stop-color="#ffe9a3" stop-opacity="0.95" />
          <stop offset="0.45" stop-color="#ffd36b" stop-opacity="0.45" />
          <stop offset="1" stop-color="#ffc24a" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="${ids.sunCore}" cx="0.4" cy="0.38">
          <stop offset="0" stop-color="#fffbe8" />
          <stop offset="0.6" stop-color="#ffe17a" />
          <stop offset="1" stop-color="#f7b733" />
        </radialGradient>
        <radialGradient id="${ids.moonGlow}">
          <stop offset="0" stop-color="#dfe4ff" stop-opacity="0.35" />
          <stop offset="1" stop-color="#dfe4ff" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="${ids.dayFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${f(yOf(profile.maxAltitude))}" y2="${f(y0)}">
          <stop offset="0" stop-color="#ffcf5c" stop-opacity="0.95" />
          <stop offset="0.7" stop-color="#ffd27a" stop-opacity="0.8" />
          <stop offset="1" stop-color="#ffe7b8" stop-opacity="0.55" />
        </linearGradient>
        <linearGradient id="${ids.dayFade}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${f(y0 - 4)}" y2="${f(y0 + 36)}">
          <stop offset="0" stop-color="#ffe2a6" stop-opacity="0.75" />
          <stop offset="1" stop-color="#ffe2a6" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${ids.nightFill}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${f(y0)}" y2="${f(height)}">
          <stop offset="0" stop-color="#a9b4ee" stop-opacity="0" />
          <stop offset="0.22" stop-color="#7f8fe0" stop-opacity="0.45" />
          <stop offset="0.55" stop-color="#4a5ab8" stop-opacity="0.8" />
          <stop offset="1" stop-color="#25307a" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="${ids.curve}" gradientUnits="userSpaceOnUse"
          x1="0" x2="0" y1="${f(plotTop)}" y2="${f(height)}">
          <stop offset="0" stop-color="#f59e0b" />
          <stop offset="${round(fadeAt, 3)}" stop-color="#f59e0b" />
          <stop offset="${round(Math.min(1, fadeAt + 0.001), 3)}" stop-color="#b9c3ff" />
          <stop offset="1" stop-color="#b9c3ff" />
        </linearGradient>
        <linearGradient id="${ids.band}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" stop-opacity="0" />
          <stop offset="0.45" stop-color="var(--smc-scene-band, rgba(244,246,252,0.94))" />
        </linearGradient>
        <linearGradient id="${ids.horizonLine}" gradientUnits="userSpaceOnUse"
          x1="0" x2="${f(width)}" y1="0" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0.9" />
          <stop offset="0.85" stop-color="#fff" stop-opacity="0.75" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="${ids.back}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#8a6f9e" />
          <stop offset="0.5" stop-color="#5f6aa8" />
          <stop offset="1" stop-color="#2a3170" />
        </linearGradient>
        <linearGradient id="${ids.front}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#6f5a88" />
          <stop offset="0.5" stop-color="#3f4888" />
          <stop offset="1" stop-color="#1c2257" />
        </linearGradient>
        <linearGradient id="${ids.water}" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#e9a88f" />
          <stop offset="0.45" stop-color="#9fb6e3" />
          <stop offset="0.75" stop-color="#5865a8" />
          <stop offset="1" stop-color="#262d6c" />
        </linearGradient>
        <clipPath id="${ids.above}"><rect width="${f(width)}" height="${f(y0)}" /></clipPath>
        <clipPath id="${ids.below}">
          <rect y="${f(y0)}" width="${f(width)}" height="${f(height - y0)}" />
        </clipPath>
        <clipPath id="${ids.past}"><rect width="${f(nowX)}" height="${f(height)}" /></clipPath>
        <clipPath id="${ids.future}">
          <rect x="${f(nowX)}" width="${f(width - nowX)}" height="${f(height)}" />
        </clipPath>
      </defs>

      <g class="sky">
        <rect width="${f(width)}" height="${f(height)}" fill="url(#${ids.skyTop})" />
        <rect width="${f(width)}" height="${f(height)}" fill="url(#${ids.skyHor})"
          mask="url(#${ids.horMask})" />
        ${stars}
        ${clouds}
      </g>

      ${
        showSun && dayArea
          ? svg`<g class="day-area">
              <path d="${dayArea}" fill="url(#${ids.dayFill})" clip-path="url(#${ids.above})"
                opacity="0.92" />
              <path d="${groundArea}" fill="url(#${ids.nightFill})" clip-path="url(#${ids.below})" />
              <g clip-path="url(#${ids.below})">
                <path d="${groundArea}" fill="url(#${ids.dayFade})" filter="url(#${ids.softer})" />
              </g>
            </g>`
          : svg``
      }

      ${
        shape
          ? svg`<g class="silhouette" data-scene="${scene}">
              ${
                shape.waterTop !== null
                  ? svg`<rect class="water" x="0" y="${f(shape.waterTop)}" width="${f(width)}"
                      height="${f(height - shape.waterTop)}" fill="url(#${ids.water})" opacity="0.55" />
                    ${[0, 1, 2, 3].map(
                      (i) => svg`<line x1="${f(width * (0.08 + i * 0.21))}"
                        x2="${f(width * (0.16 + i * 0.21))}"
                        y1="${f(shape.waterTop! + 5 + i * 3)}" y2="${f(shape.waterTop! + 5 + i * 3)}"
                        stroke="#fff" stroke-width="1" opacity="0.35" />`,
                    )}`
                  : svg``
              }
              <path d="${shape.back}" fill="url(#${ids.back})" opacity="0.35" />
              <path d="${shape.front}" fill="url(#${ids.front})" opacity="0.6" />
              ${shape.lights.map(
                (light) => svg`<rect x="${f(light.x)}" y="${f(light.y)}" width="${light.w}"
                  height="${light.h}" fill="#ffd98a" opacity="${round(light.opacity, 2)}" />`,
              )}
            </g>`
          : svg``
      }

      <line class="horizon" x1="${horizonLabelEnd}" x2="${f(width)}" y1="${f(y0)}" y2="${f(y0)}"
        stroke="url(#${ids.horizonLine})" stroke-width="1.3" stroke-dasharray="6 6" />

      <g class="event-lines">
        ${marks.map((mark) => {
          const x = f(xOf(mark.time.getTime()));
          return mark.dashed
            ? svg`<line x1="${x}" x2="${x}" y1="0" y2="${f(height - bandH + 6)}"
                stroke="#f5a524" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.85" />`
            : svg`<line x1="${x}" x2="${x}" y1="0" y2="${f(height - bandH + 6)}"
                stroke="#fff" stroke-width="1" opacity="0.55" />`;
        })}
      </g>

      ${
        moonCurve
          ? svg`<path class="moon-curve" d="${moonCurve}" fill="none" stroke="#c7cdfa"
              stroke-width="1.6" opacity="0.75" />`
          : svg``
      }

      ${
        showSun && sunPath
          ? svg`<g class="sun-path">
              <g clip-path="url(#${ids.past})">
                <path d="${sunPath}" fill="none" stroke="#fff" stroke-width="2.2"
                  stroke-dasharray="5 5" stroke-linecap="round" opacity="0.92" />
              </g>
              <g clip-path="url(#${ids.future})">
                <path d="${sunPath}" fill="none" stroke="url(#${ids.curve})" stroke-width="2.8"
                  stroke-linecap="round" />
              </g>
              ${[events.sunrise, events.sunset]
                .filter((time): time is Date => time instanceof Date)
                .map(
                  (time) => svg`<circle cx="${f(xOf(time.getTime()))}" cy="${f(y0)}" r="6.5"
                    fill="#fff" stroke="#f5a524"
                    stroke-width="${time.getTime() < now.getTime() ? 2 : 3.2}" />`,
                )}
            </g>`
          : svg``
      }

      ${
        showMoon && moon && moonEdge
          ? svg`<g class="moon-edge" data-edge="${moonEdge}">
              <title>${t('chartMoonNow', {
                altitude: formatDegrees(moonAltitude, 1, format.locale),
              })} ${t('chartOutside')}</title>
              <rect x="${f(edgeX - edgeW / 2)}" y="${f(edgeY)}" width="${f(edgeW)}"
                height="${f(edgeH)}" rx="${f(edgeH / 2)}" fill="rgba(22, 26, 64, 0.62)"
                stroke="rgba(255,255,255,0.55)" stroke-width="0.8" />
              <text x="${f(edgeX)}" y="${f(edgeY + edgeH / 2 + edgeFont * 0.36)}"
                text-anchor="middle" font-size="${edgeFont}" fill="#f2f4ff">${edgeText}</text>
            </g>`
          : svg``
      }

      ${
        showMoon && moon && !moonEdge
          ? svg`<g class="now-moon" opacity="${moonUp ? 1 : 0.7}">
              <title>${t('chartMoonNow', {
                altitude: formatDegrees(moonAltitude, 1, format.locale),
              })}</title>
              ${
                moonUp
                  ? svg`<circle cx="${f(moonCx)}" cy="${f(moonCy)}" r="${moonR * 2.1}"
                      fill="url(#${ids.moonGlow})" />`
                  : svg``
              }
              ${
                moonCx !== nowX
                  ? svg`<line x1="${f(nowX)}" y1="${f(moonCy)}" x2="${f(moonCx)}" y2="${f(moonCy)}"
                      stroke="rgba(255,255,255,0.7)" stroke-width="0.8" />`
                  : svg``
              }
              <circle cx="${f(moonCx)}" cy="${f(moonCy)}" r="${moonR + 1.2}" fill="none"
                stroke="rgba(255,255,255,0.75)" stroke-width="1.2" />
              <g transform="translate(${f(moonCx - moonR)} ${f(moonCy - moonR)})">
                ${renderMoonDisc({
                  size: moonR * 2,
                  illumination: moon.illumination,
                  brightLimbAngle: moon.brightLimbAngle,
                  litColor: '#f7f8ff',
                  darkColor: '#2b3270',
                  texture: false,
                  uid: `${uid}-now-moon`,
                })}
              </g>
            </g>`
          : svg``
      }

      ${
        showSun
          ? svg`<g class="now-sun ${animations ? 'smc-pulse' : ''}">
              <title>${t('chartSunNow', {
                altitude: formatDegrees(currentAltitude, 1, format.locale),
              })}</title>
              <circle cx="${f(nowX)}" cy="${f(sunY)}" r="${sunGlowR}"
                fill="url(#${ids.sunGlow})" opacity="${sunUp ? 1 : 0.35}" />
              <circle cx="${f(nowX)}" cy="${f(sunY)}" r="${sunR}" fill="url(#${ids.sunCore})"
                stroke="rgba(255,255,255,0.85)" stroke-width="1.5" opacity="${sunUp ? 1 : 0.55}" />
            </g>`
          : svg``
      }

      <g class="axis">
        <text x="10" y="${f(plotTop + 4)}" class="scene-axis">${t('elevation')}</text>
        ${ticks.map(
          (a) => svg`<text x="10" y="${f(yOf(a) + 4)}" class="scene-axis">${
            a > 0 ? a : `−${-a}`
          }°</text>
            <line x1="${narrow ? 34 : 40}" x2="${narrow ? 40 : 48}" y1="${f(yOf(a))}"
              y2="${f(yOf(a))}" stroke="#fff" opacity="0.8" />`,
        )}
        <text x="10" y="${f(y0 - 5)}" class="scene-axis strong">${t('horizon')}</text>
      </g>

      <rect class="band" x="0" y="${f(height - bandH - 18)}" width="${f(width)}"
        height="${f(bandH + 18)}" fill="url(#${ids.band})" />
      <g class="event-labels">
        ${marks.map((mark) => {
          const x = f(clamp(xOf(mark.time.getTime()), labelInset, width - labelInset));
          return svg`<text x="${x}" y="${f(height - bandH + 22)}" text-anchor="middle"
              class="scene-time">${formatTime(mark.time, format)}</text>
            <text x="${x}" y="${f(height - bandH + 38)}" text-anchor="middle"
              class="scene-label">${narrow ? mark.short : mark.label}</text>`;
        })}
      </g>
    </svg>
  `;
}
