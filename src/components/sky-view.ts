/**
 * components/sky-view.ts
 *
 * Himmelsansicht als Fischaugenprojektion (Alt-Azimut-Darstellung).
 *
 *   Mittelpunkt = Zenit, Rand = Horizont
 *   Radius      = (90° − Höhe) / 90°
 *   Winkel      = Azimut (Norden oben, Osten links – wie auf einer
 *                 gedrehten Himmelskarte, Blick von innen auf die Himmelskugel)
 *
 * Damit ist die Darstellung eine echte 2D-Position am Himmel (Höhe und
 * Azimut), keine Näherung entlang des Tagesverlaufs. Sonne und Mond werden an
 * ihren berechneten Positionen eingezeichnet; Objekte unter dem Horizont
 * werden durch einen Pfeil am Horizont in ihrer Himmelsrichtung markiert
 * (ihre tatsächliche Position liegt außerhalb der Darstellung).
 */

import { svg, type TemplateResult } from 'lit';

import type { MoonPhaseInfo } from '../astronomy.js';
import type { PhasePalette } from '../const.js';
import type { FormatContext } from '../format.js';
import { clamp, round, skyPoint } from '../utils.js';

import { renderBelowHorizonMarker, renderMoonDisc } from './moon-disc.js';

export interface SkyViewBody {
  /** Höhe über dem Horizont in Grad. */
  altitude: number;
  /** Azimut in Grad (ab Nord über Ost). */
  azimuth: number;
}

export interface SkyViewOptions {
  /** Verfügbare Breite. */
  width: number;
  /** Verfügbare Höhe. */
  height: number;
  /** Aktuelle Sonnenposition. */
  sun: SkyViewBody | null;
  /** Aktuelle Mondposition. */
  moon: (SkyViewBody & { illumination: number; brightLimbAngle: number }) | null;
  /** Tagesbahn der Sonne als Höhen-/Azimut-Punkte. */
  sunTrack: SkyViewBody[];
  /** Mondphasendaten (für die Scheibendarstellung). */
  moonPhase: MoonPhaseInfo | null;
  showSun: boolean;
  showMoon: boolean;
  palette: PhasePalette;
  format: FormatContext;
  animations: boolean;
  uid: string;
  /** Himmelsrichtungen beschriften. */
  showCardinals?: boolean;
  /**
   * Keim für das Sternenfeld (üblich: Index des aktuellen Kalendertags).
   * Gleicher Keim ⇒ gleiche Sterne; so bleibt die Darstellung über alle
   * Bildwiederholungen hinweg ruhig.
   */
  seed?: number;
}

/**
 * Streut Werte deterministisch im Bereich 0…1.
 *
 * Es wird bewusst ein einfacher Hash und kein Zufallszahlengenerator
 * verwendet: Das Sternenfeld muss über alle Bildwiederholungen hinweg
 * unverändert bleiben, darf sich aber von Tag zu Tag unterscheiden.
 */
function hash01(seed: number): number {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
}

/**
 * Erzeugt ein unveränderliches Sternenfeld für einen Tag.
 *
 * @param seed Tagesindex (ändert sich einmal pro Tag)
 * @param count Anzahl der Sterne
 * @param maxRadius Radius der Himmelsansicht
 */
function starField(
  seed: number,
  count: number,
  maxRadius: number,
): Array<{ x: number; y: number; r: number; opacity: number }> {
  const stars: Array<{ x: number; y: number; r: number; opacity: number }> = [];
  for (let i = 0; i < count; i++) {
    // Wurzelverteilung: Sterne gleichmäßig über die Kreisfläche
    const distance = Math.sqrt(hash01(seed * 7.13 + i * 1.37)) * maxRadius * 0.96;
    const angle = hash01(seed * 3.71 + i * 2.11) * 360;
    const point = skyPoint({ x: 0, y: 0 }, distance, angle);
    const brightness = hash01(seed * 5.19 + i * 4.53);
    stars.push({
      x: point.x,
      y: point.y,
      r: 0.35 + brightness * 0.75,
      opacity: 0.16 + brightness * 0.34,
    });
  }
  return stars;
}

/** Radius für eine Höhe (0° = Horizont, 90° = Zenit). */
function radiusFor(altitude: number, maxRadius: number): number {
  return clamp(((90 - altitude) / 90) * maxRadius, 0, maxRadius);
}

/** Zeichnet die Himmelsansicht. */
export function renderSkyView(options: SkyViewOptions): TemplateResult {
  const {
    width,
    height,
    sun,
    moon,
    sunTrack,
    moonPhase,
    showSun,
    showMoon,
    palette,
    format,
    animations,
    uid,
    showCardinals = true,
    seed = 0,
  } = options;

  const safeWidth = Math.max(80, width);
  const safeHeight = Math.max(80, height);

  const pad = 6;
  const center = { x: safeWidth / 2, y: safeHeight / 2 };
  const maxRadius = Math.max(10, Math.min(safeWidth, safeHeight) / 2 - pad);

  const domeId = `${uid}-dome`;
  const clipId = `${uid}-dome-clip`;

  const cardinals = [
    { key: format.t('compassNorth'), azimuth: 0 },
    { key: format.t('compassEast'), azimuth: 90 },
    { key: format.t('compassSouth'), azimuth: 180 },
    { key: format.t('compassWest'), azimuth: 270 },
  ];

  const fontSize = clamp(round(maxRadius * 0.17, 1), 7, 11);

  // --- Sonne ---------------------------------------------------------------
  const sunAbove = sun ? sun.altitude > 0 : false;
  const sunRadius = clamp(round(maxRadius * 0.11, 1), 4, 11);
  const sunPoint = sun
    ? skyPoint(center, radiusFor(sun.altitude, maxRadius), sun.azimuth)
    : null;
  const sunVisible = showSun && sun && sunPoint;

  // --- Mond ----------------------------------------------------------------
  const moonAbove = moon ? moon.altitude > 0 : false;
  const moonSize = clamp(round(maxRadius * 0.24, 1), 10, 22);
  const moonPoint = moon
    ? skyPoint(center, radiusFor(moon.altitude, maxRadius), moon.azimuth)
    : null;
  const moonVisible = showMoon && moon && moonPoint && moonPhase;

  // --- Höhenringe mit Beschriftung -----------------------------------------
  // Die Ringe liegen bei 30° und 60° Höhe (Radius = (90° − Höhe)/90°).
  const showRingLabels = showCardinals && maxRadius >= 42;
  const ringLabelFontSize = clamp(round(maxRadius * 0.14, 1), 6.5, 9);
  const rings = [
    { altitude: 30, radius: maxRadius * (60 / 90) },
    { altitude: 60, radius: maxRadius * (30 / 90) },
  ];

  // --- Sterne (nur bei dunklem Himmel) -------------------------------------
  // Unter −6° Sonnenhöhe ist der Himmel dunkel genug, dass Sterne sichtbar
  // wären; tagsüber würden sie nur stören.
  const isDarkSky = (sun?.altitude ?? -90) < -6;
  const stars = isDarkSky ? starField(Math.max(1, Math.round(seed)), 46, maxRadius) : [];

  // --- Sonnenbahn ----------------------------------------------------------
  const trackPoints = sunTrack
    .filter((point) => point.altitude >= -8)
    .map((point) => skyPoint(center, radiusFor(point.altitude, maxRadius), point.azimuth));

  return svg`
    <svg
      class="sky-view"
      width="100%"
      height="100%"
      viewBox="0 0 ${round(safeWidth, 1)} ${round(safeHeight, 1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${format.t('skyView')}"
    >
      <defs>
        <radialGradient id="${domeId}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${palette.skyTop}" />
          <stop offset="100%" stop-color="${palette.skyBottom}" />
        </radialGradient>
        <clipPath id="${clipId}">
          <circle cx="${round(center.x, 1)}" cy="${round(center.y, 1)}" r="${round(maxRadius, 1)}" />
        </clipPath>
      </defs>

      <circle
        cx="${round(center.x, 1)}" cy="${round(center.y, 1)}" r="${round(maxRadius, 1)}"
        fill="url(#${domeId})" opacity="0.55" />

      <g clip-path="url(#${clipId})">
        ${
          stars.length
            ? svg`<g class="stars">
                ${stars.map(
                  (star) =>
                    svg`<circle
                      cx="${round(center.x + star.x, 1)}"
                      cy="${round(center.y + star.y, 1)}"
                      r="${round(star.r, 2)}"
                      fill="var(--smc-moon-lit, #eef2fa)"
                      opacity="${round(star.opacity, 2)}" />`,
                )}
              </g>`
            : svg``
        }
        ${rings.map(
          (ring) =>
            svg`<circle
              cx="${round(center.x, 1)}" cy="${round(center.y, 1)}" r="${round(ring.radius, 1)}"
              fill="none"
              stroke="var(--smc-sky-ring, rgba(128,140,180,0.24))"
              stroke-width="0.7" stroke-dasharray="2 4" />`,
        )}
        <line
          x1="${round(center.x - maxRadius, 1)}" y1="${round(center.y, 1)}"
          x2="${round(center.x + maxRadius, 1)}" y2="${round(center.y, 1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />
        <line
          x1="${round(center.x, 1)}" y1="${round(center.y - maxRadius, 1)}"
          x2="${round(center.x, 1)}" y2="${round(center.y + maxRadius, 1)}"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.18))" stroke-width="0.6" />

        ${
          trackPoints.length > 1
            ? svg`<path
                d="M${trackPoints
                  .map((point) => `${round(point.x, 1)} ${round(point.y, 1)}`)
                  .join(' L')}"
                fill="none"
                stroke="${palette.lineDay}"
                stroke-width="1"
                stroke-dasharray="2 3"
                opacity="0.5" />`
            : svg``
        }
      </g>

      <circle
        cx="${round(center.x, 1)}" cy="${round(center.y, 1)}" r="${round(maxRadius, 1)}"
        fill="none"
        stroke="var(--smc-sky-horizon, rgba(140,152,190,0.5))"
        stroke-width="1.1" />

      ${
        showRingLabels
          ? svg`<g
              font-size="${ringLabelFontSize}"
              fill="var(--smc-muted-color)"
              opacity="0.55"
              text-anchor="middle"
            >
              ${rings.map((ring) => {
                // Beschriftung auf dem Nordost-Strahl, damit sie weder die
                // Himmelsrichtungen noch Sonne und Mond überdeckt.
                const point = skyPoint(center, ring.radius, 45);
                return svg`<text
                  x="${round(point.x, 1)}"
                  y="${round(point.y + ringLabelFontSize * 0.35, 1)}"
                >${ring.altitude}°</text>`;
              })}
            </g>`
          : svg``
      }

      ${
        showCardinals
          ? svg`<g font-size="${fontSize}" fill="var(--smc-muted-color)" opacity="0.7">
              ${cardinals.map((cardinal) => {
                const point = skyPoint(center, maxRadius * 0.87, cardinal.azimuth);
                return svg`<text
                  x="${round(point.x, 1)}"
                  y="${round(point.y + fontSize * 0.35, 1)}"
                  text-anchor="middle"
                >${cardinal.key}</text>`;
              })}
            </g>`
          : svg``
      }

      ${
        sunVisible && sunAbove && sunPoint
          ? svg`<g class="${animations ? 'smc-pulse' : ''}">
              <circle
                cx="${round(sunPoint.x, 1)}" cy="${round(sunPoint.y, 1)}" r="${sunRadius}"
                fill="${palette.lineDay}" opacity="0.28" />
              <circle
                cx="${round(sunPoint.x, 1)}" cy="${round(sunPoint.y, 1)}" r="${round(sunRadius * 0.55, 1)}"
                fill="${palette.lineDay}" />
            </g>`
          : svg``
      }
      ${
        showSun && sun && !sunAbove
          ? renderBelowHorizonMarker(center, maxRadius, sun.azimuth, palette.lineNight)
          : svg``
      }

      ${
        moonVisible && moonAbove && moonPoint && moonPhase
          ? svg`<g transform="translate(${round(moonPoint.x - moonSize / 2, 1)} ${round(moonPoint.y - moonSize / 2, 1)})">
              ${renderMoonDisc({
                size: moonSize,
                illumination: moonPhase.illumination,
                brightLimbAngle: moonPhase.brightLimbAngle,
                litColor: 'var(--smc-moon-lit, #f2f5fc)',
                darkColor: 'var(--smc-moon-dark, rgba(110,124,164,0.45))',
                texture: moonSize >= 16,
                uid: `${uid}-moon`,
              })}
            </g>`
          : svg``
      }
      ${
        showMoon && moon && !moonAbove
          ? renderBelowHorizonMarker(center, maxRadius, moon.azimuth, 'var(--smc-moon-lit, #e6ebf7)')
          : svg``
      }
    </svg>
  `;
}
