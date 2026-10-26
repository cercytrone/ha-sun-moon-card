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
        <circle
          cx="${round(center.x, 1)}" cy="${round(center.y, 1)}" r="${round(maxRadius * 0.667, 1)}"
          fill="none"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.28))"
          stroke-width="0.7" stroke-dasharray="2 4" />
        <circle
          cx="${round(center.x, 1)}" cy="${round(center.y, 1)}" r="${round(maxRadius * 0.333, 1)}"
          fill="none"
          stroke="var(--smc-sky-ring, rgba(128,140,180,0.2))"
          stroke-width="0.7" stroke-dasharray="2 4" />
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
