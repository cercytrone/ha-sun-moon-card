/**
 * components/moon-disc.ts
 *
 * Darstellung der Mondscheibe mit korrekter Phasenlage.
 *
 * Grundlage ist der Positionswinkel der beleuchteten Seite (Meeus 48.5,
 * `brightLimbAngle`), der in `astronomy.ts` aus den äquatorialen Koordinaten
 * von Sonne und Mond bestimmt wird. Der Winkel wird ab Nord über Ost gezählt;
 * die Himmelskarte verwendet Norden oben und Osten links, woraus sich die
 * Drehung des Terminators ergibt.
 *
 * Der Terminator selbst ist eine halbe Ellipse: Bei zunehmendem oder
 * abnehmendem Mond ist die kleine Halbachse R·|1 − 2k| (k = Beleuchtungsgrad).
 */

import { svg, type TemplateResult } from 'lit';

import { clamp, moonPhasePath, round, skyPoint } from '../utils.js';

export interface MoonDiscOptions {
  /** Durchmesser der Mondscheibe in Pixeln. */
  size: number;
  /** Beleuchteter Anteil 0..1. */
  illumination: number;
  /** Positionswinkel der beleuchteten Seite in Grad (ab Nord über Ost). */
  brightLimbAngle: number;
  /** Farbe der beleuchteten Seite. */
  litColor?: string;
  /** Farbe der unbeleuchteten Seite. */
  darkColor?: string;
  /** Dezente Struktur (Krater) zeichnen. */
  texture?: boolean;
  /** Klassenzusatz für Animationen. */
  className?: string;
  /** Stabile ID für SVG-Definitionen (mehrere Karten auf einer Seite). */
  uid: string;
}

/** Positionen der Kraterstruktur (relativ zum Radius, im lokalen System). */
const CRATERS: Array<{ x: number; y: number; r: number }> = [
  { x: -0.28, y: -0.32, r: 0.17 },
  { x: 0.3, y: -0.1, r: 0.13 },
  { x: -0.1, y: 0.3, r: 0.2 },
  { x: 0.26, y: 0.34, r: 0.1 },
];

/** Zeichnet die Mondscheibe. */
export function renderMoonDisc(options: MoonDiscOptions): TemplateResult {
  const {
    size,
    illumination,
    brightLimbAngle,
    litColor = 'var(--smc-moon-lit, #f4f6fb)',
    darkColor = 'var(--smc-moon-dark, rgba(120,132,168,0.35))',
    texture = true,
    className = '',
    uid,
  } = options;

  const center = { x: size / 2, y: size / 2 };
  const radius = Math.max(1, size / 2 - 0.5);
  const litPath = moonPhasePath(center, radius, illumination);
  const showTexture = texture && size >= 26;
  const rotation = round(-brightLimbAngle, 2);

  return svg`
    <svg
      class="moon-disc ${className}"
      width="${round(size, 1)}"
      height="${round(size, 1)}"
      viewBox="0 0 ${round(size, 1)} ${round(size, 1)}"
      role="img"
      aria-hidden="true"
    >
      <circle
        cx="${round(center.x, 2)}" cy="${round(center.y, 2)}" r="${round(radius, 2)}"
        fill="${darkColor}"
      />
      ${
        litPath
          ? svg`<g transform="rotate(${rotation} ${round(center.x, 2)} ${round(center.y, 2)})">
              <path d="${litPath}" fill="${litColor}" />
              ${
                showTexture
                  ? svg`<g clip-path="url(#${uid}-clip)" opacity="0.16">
                      <clipPath id="${uid}-clip">
                        <path d="${litPath}" />
                      </clipPath>
                      ${CRATERS.map((crater) => {
                        const point = {
                          x: center.x + crater.x * radius,
                          y: center.y + crater.y * radius,
                        };
                        return svg`<circle
                          cx="${round(point.x, 2)}" cy="${round(point.y, 2)}"
                          r="${round(crater.r * radius, 2)}"
                          fill="#5a6488" />`;
                      })}
                    </g>`
                  : svg``
              }
            </g>`
          : svg``
      }
      <circle
        cx="${round(center.x, 2)}" cy="${round(center.y, 2)}" r="${round(radius, 2)}"
        fill="none"
        stroke="var(--smc-moon-outline, rgba(255,255,255,0.18))"
        stroke-width="0.6"
      />
    </svg>
  `;
}

/**
 * Zeichnet einen kleinen Hinweismarker für Objekte unter dem Horizont.
 * Der Marker sitzt auf dem Horizontkreis und zeigt in Richtung des Azimuts.
 */
export function renderBelowHorizonMarker(
  center: { x: number; y: number },
  radius: number,
  azimuth: number,
  color: string,
): TemplateResult {
  const point = skyPoint(center, radius, azimuth);
  const rad = (azimuth * Math.PI) / 180;
  const dx = -Math.sin(rad);
  const dy = -Math.cos(rad);
  const length = clamp(radius * 0.12, 4, 9);
  const halfWidth = clamp(radius * 0.07, 2.5, 5);
  // Pfeilspitze nach außen
  const tip = { x: point.x + dx * length, y: point.y + dy * length };
  const base1 = {
    x: point.x - dy * halfWidth,
    y: point.y + dx * halfWidth,
  };
  const base2 = {
    x: point.x + dy * halfWidth,
    y: point.y - dx * halfWidth,
  };

  return svg`
    <polygon
      points="${round(tip.x, 2)},${round(tip.y, 2)} ${round(base1.x, 2)},${round(base1.y, 2)} ${round(base2.x, 2)},${round(base2.y, 2)}"
      fill="${color}"
      opacity="0.55"
    />
  `;
}
