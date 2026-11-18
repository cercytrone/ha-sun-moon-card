/**
 * components/clean-chart.ts
 *
 * Tagesverlauf im Kartenstil `clean`: zwei Linien auf ruhigem Grund – die
 * Bahn der Sonne in Orange, die des Mondes in Violett –, dazu der gestrichelte
 * Horizont, Auf- und Untergang als Punkte, die „Jetzt“-Linie und eine
 * Zeitachse. Keine Flächen, kein Raster.
 *
 * Unter dem Horizont laufen beide Bahnen weich in eine Grundlinie aus: Die
 * Tiefe der Nacht ist für die Aussage unerheblich, sie würde nur Höhe kosten.
 */

import { svg, type TemplateResult } from 'lit';

import type { DayProfile, MoonPath, SolarEvents } from '../astronomy.js';
import { formatDegrees, type FormatContext } from '../format.js';
import { round } from '../utils.js';

export interface CleanChartOptions {
  profile: DayProfile;
  events: SolarEvents;
  now: Date;
  width: number;
  height: number;
  format: FormatContext;
  showSun: boolean;
  showMoon: boolean;
  moonPath: MoonPath | null;
  /** Aktuelle Höhen (Punkte auf der „Jetzt“-Linie). */
  sunAltitude: number;
  moonAltitude: number;
}

const f = (value: number): string => String(round(value, 1));

/** Zeichnet den Tagesverlauf im Stil `clean`. */
export function renderCleanChart(options: CleanChartOptions): TemplateResult {
  const { profile, events, now, format, showSun, showMoon, moonPath, sunAltitude, moonAltitude } =
    options;
  const t = format.t;
  const width = Math.max(160, options.width);
  const height = Math.max(100, options.height);
  const narrow = width < 480;

  const left = narrow ? 64 : 92;
  const right = 6;
  const top = 34;
  const axisHeight = 30;
  const floor = height - axisHeight - 8;
  const plotWidth = Math.max(40, width - left - right);

  const t0 = profile.dayStart.getTime();
  const t1 = profile.dayEnd.getTime();
  const span = Math.max(1, t1 - t0);
  const xOf = (time: number): number => left + ((time - t0) / span) * plotWidth;

  const moonSamples = showMoon ? (moonPath?.profile.samples ?? []) : [];
  const moonMax = moonSamples.reduce((max, s) => Math.max(max, s.altitude), -90);
  const domainTop = Math.max(8, showSun ? profile.maxAltitude : -90, moonMax) + 4;
  const domainBottom = -Math.max(14, domainTop * 0.85);
  // Weiche Untergrenze (Softplus): Die Kurve läuft in die Grundlinie aus.
  const soft = 4;
  const softFloor = (altitude: number): number =>
    domainBottom + soft * Math.log1p(Math.exp((altitude - domainBottom) / soft));
  const yOf = (altitude: number): number =>
    top +
    ((domainTop - Math.min(domainTop, softFloor(altitude))) / (domainTop - domainBottom)) *
      (floor - top);
  const y0 = yOf(0);
  const nowX = xOf(now.getTime());

  const pathOf = (points: { time: number; altitude: number }[]): string =>
    points.map((p, i) => `${i ? 'L' : 'M'}${f(xOf(p.time))},${f(yOf(p.altitude))}`).join('');

  const ticks = [0, 6, 12, 18, 24].map((hour) => {
    const x = left + (hour / 24) * plotWidth;
    const anchor = hour === 0 ? 'start' : hour === 24 ? 'end' : 'middle';
    const dx = hour === 0 ? -4 : hour === 24 ? 4 : 0;
    return svg`<text x="${f(x + dx)}" y="${f(height - 8)}" text-anchor="${anchor}"
      class="clean-axis">${String(hour).padStart(2, '0')}:00</text>`;
  });

  const sunMarks = [events.sunrise, events.sunset].filter(
    (time): time is Date => time instanceof Date,
  );

  return svg`
    <svg
      class="clean-chart"
      width="${f(width)}"
      height="${f(height)}"
      viewBox="0 0 ${f(width)} ${f(height)}"
      role="img"
      aria-label="${t('title')}"
    >
      <text x="0" y="${f(y0 + 4)}" class="clean-horizon-label">${t('horizon')}</text>
      <line class="clean-horizon" x1="${left}" x2="${f(width - right)}" y1="${f(y0)}"
        y2="${f(y0)}" stroke-dasharray="6 6" />
      <line class="clean-now" x1="${f(nowX)}" x2="${f(nowX)}" y1="${f(top - 8)}" y2="${f(floor)}" />
      <text x="${f(nowX)}" y="${f(top - 14)}" text-anchor="middle" class="clean-now-label">${t(
        'cleanNow',
      )}</text>
      ${
        moonSamples.length
          ? svg`<path class="clean-moon-path" d="${pathOf(moonSamples)}" />`
          : svg``
      }
      ${
        showSun && profile.samples.length
          ? svg`<path class="clean-sun-path" d="${pathOf(profile.samples)}" />
            ${sunMarks.map(
              (time) => svg`<circle class="clean-sun-mark" cx="${f(xOf(time.getTime()))}"
                cy="${f(y0)}" r="6" />`,
            )}`
          : svg``
      }
      ${
        moonSamples.length
          ? svg`<circle class="clean-moon-now" cx="${f(nowX)}" cy="${f(yOf(moonAltitude))}" r="6">
              <title>${t('chartMoonNow', {
                altitude: formatDegrees(moonAltitude, 1, format.locale),
              })}</title>
            </circle>`
          : svg``
      }
      ${
        showSun
          ? svg`<circle class="clean-sun-now" cx="${f(nowX)}" cy="${f(yOf(sunAltitude))}" r="7">
              <title>${t('chartSunNow', {
                altitude: formatDegrees(sunAltitude, 1, format.locale),
              })}</title>
            </circle>`
          : svg``
      }
      ${ticks}
    </svg>
  `;
}
