/**
 * components/day-chart.ts
 *
 * Tagesverlauf der Sonne als SVG-Chart.
 *
 * Dargestellt wird der Höhenverlauf der Sonne über den gesamten lokalen Tag.
 * Die Fläche unter der Kurve ist vertikal nach Sonnenhöhe eingefärbt:
 *
 *   > 0°     Tageslicht
 *   0…−6°    bürgerliche Dämmerung
 *   −6…−12°  nautische Dämmerung
 *   −12…−18° astronomische Dämmerung
 *   < −18°   Nacht
 *
 * Die Einfärbung erfolgt über einen einzigen linearen Farbverlauf, der an den
 * Schwellen weich ineinander übergeht. Dadurch bleiben alle Sonderfälle
 * (Polartag, Polarnacht, fehlende Dämmerung) korrekt darstellbar, ohne dass
 * einzelne Flächen berechnet werden müssen.
 *
 * Über der Kurve liegt ein zweiter, waagerechter Verlauf: Er färbt den
 * Himmel nach Tageszeit (Nacht an den Rändern, warmes Licht an Auf- und
 * Untergang), während die Fläche unter der Kurve die Sonnenhöhe zeigt. Das
 * Horizontglühen an Auf- und Untergang rundet den Eindruck ab.
 *
 * Die Funktion ist zustandslos: Aus einem Datenmodell wird ein SVG-Fragment
 * erzeugt. Es werden keine zusätzlichen Custom Elements benötigt, und die
 * Anzahl der DOM-Knoten bleibt gering.
 */

import { svg, type TemplateResult } from 'lit';

import {
  ELEVATION_ASTRONOMICAL,
  ELEVATION_CIVIL,
  ELEVATION_NAUTICAL,
  type DayProfile,
  type SolarEvents,
} from '../astronomy.js';
import type { PhasePalette } from '../const.js';
import { renderMoonDisc } from './moon-disc.js';
import { formatDegrees, formatTime, type FormatContext } from '../format.js';
import type { StringKey } from '../localize.js';
import { clamp, mixHex, round, smoothPath, areaPath } from '../utils.js';

/** Ein darzustellendes Ereignis auf der Zeitachse. */
interface EventMarker {
  key: string;
  time: Date;
  label: string;
  shortLabel: string;
  kind: 'sunrise' | 'sunset' | 'dawn' | 'dusk';
  /** Höhe, auf der die Markierung sitzt. */
  altitude: number;
  /** Dünnere Ausführung für zusätzliche Dämmerungsebenen. */
  secondary: boolean;
}

export interface DayChartOptions {
  /** Tagesverlauf (Höhenprofil). */
  profile: DayProfile;
  /** Anzuzeigende Ereigniszeiten (berechnet oder aus Home Assistant). */
  events: SolarEvents;
  /** Aktueller Zeitpunkt. */
  now: Date;
  /** Breite des Charts in Pixeln. */
  width: number;
  /** Höhe des Charts in Pixeln. */
  height: number;
  /** Farbpalette. */
  palette: PhasePalette;
  /** Formatierungskontext (Zeitzone, Sprache). */
  format: FormatContext;
  /** Aktuellen Sonnen- bzw. Mondmarker anzeigen. */
  showSun: boolean;
  showMoon: boolean;
  /**
   * Aktuelle Stellung des Mondes. Der Mond bekommt einen eigenen Marker auf
   * der „Jetzt"-Linie, damit seine Höhe im Tagesverlauf ablesbar ist.
   */
  moon: { altitude: number; illumination: number; brightLimbAngle: number } | null;
  /** Dämmerungsmarkierungen anzeigen. */
  showTwilight: boolean;
  /** Welche Dämmerungsebenen dargestellt werden. */
  twilightLevel: 'civil' | 'nautical' | 'astronomical' | 'all';
  /** Animationen (Glow des Sonnenmarkers). */
  animations: boolean;
  /** Kompakte Darstellung. */
  compact: boolean;
  /** Stabile IDs für SVG-Definitionen. */
  uid: string;
  /** Kartenstil: `flat` dämpft die Verläufe, `glass` zeigt sie voll. */
  cardStyle: 'glass' | 'flat';
  /** Zusätzliche astronomische Ebenen (−6°/−12°/−18°-Linien). */
  showAstronomicalLayers: boolean;
  /** Aktuelle Sonnenhöhe (Position des „jetzt“-Markers). */
  currentAltitude: number;
}

/** Skaliert die Abtastwerte des Profils auf die vorhandene Breite. */
function pickSamples(
  samples: { time: number; altitude: number }[],
  maxPoints: number,
): { time: number; altitude: number }[] {
  if (samples.length <= maxPoints) return samples;
  const step = samples.length / maxPoints;
  const result: { time: number; altitude: number }[] = [];
  for (let i = 0; i < maxPoints; i++) {
    result.push(samples[Math.floor(i * step)]);
  }
  const last = samples[samples.length - 1];
  if (result[result.length - 1] !== last) result.push(last);
  return result;
}

/**
 * Geometrie der Sonnenkuppel.
 *
 * Die Kuppel füllt die Fläche zwischen Sonnenauf- und -untergang mit einem
 * warmen, radialen Lichtverlauf, der vom Horizont ausgeht. Bei Polartag
 * (kein Auf- oder Untergang) wird die gesamte Breite verwendet; bei
 * Polarnacht entfällt die Kuppel, weil die Sonne den Horizont nicht
 * überschreitet.
 */
function domeGeometry(
  points: { x: number; y: number }[],
  events: SolarEvents,
  polar: 'none' | 'polar-day' | 'polar-night' | undefined,
  xOf: (time: number) => number,
  horizonY: number,
): { path: string; cx: number; cy: number; r: number } | null {
  if (points.length < 2) return null;

  const riseTime = events.sunrise?.getTime();
  const setTime = events.sunset?.getTime();
  let startX: number;
  let endX: number;

  if (riseTime !== undefined && setTime !== undefined && setTime > riseTime) {
    startX = xOf(riseTime);
    endX = xOf(setTime);
  } else if (polar === 'polar-day') {
    startX = points[0].x;
    endX = points[points.length - 1].x;
  } else {
    // Kein Auf- oder Untergang und kein Polartag → keine Kuppel zeichnen.
    return null;
  }

  const segment = points.filter((point) => point.x >= startX - 0.5 && point.x <= endX + 0.5);
  if (segment.length < 2) return null;

  return {
    path: areaPath(segment, horizonY, true),
    cx: (startX + endX) / 2,
    cy: horizonY,
    r: Math.max(6, (endX - startX) / 2),
  };
}

/**
 * Bestimmt den darstellbaren Höhenbereich.
 *
 * Sehr tiefe Nachtwerte werden abgeschnitten – die Kurve läuft dann unten aus
 * dem Chart heraus –, damit die Bereiche um den Horizont genügend Platz
 * erhalten. Bei Polartag und Polarnacht wird der Bereich automatisch an den
 * tatsächlichen Verlauf angepasst.
 */
function elevationDomain(profile: DayProfile): [number, number] {
  const max = profile.maxAltitude;
  const min = profile.minAltitude;
  const reference = Math.min(min, -18);
  const padTop = Math.max(3, (max - reference) * 0.1);
  const top = clamp(max + padTop, -18, 90.5);
  const bottom = clamp(Math.max(-28, min - 2), -90, top - 6);
  return [bottom, top];
}

/**
 * Farbe einer Sonnenhöhe.
 *
 * Zwischen den Phasen wird über `soft` Grad weich gemischt, damit die
 * Bereiche nicht als harte Streifen stehen, sondern ineinander übergehen.
 * Oberhalb von 0° bleibt es bei der Tagesfarbe, unterhalb von −18° bei der
 * Nachtfarbe – auch bei Polartag und Polarnacht.
 */
function phaseColor(altitude: number, palette: PhasePalette, soft = 2.2): string {
  const edges = [0, ELEVATION_CIVIL, ELEVATION_NAUTICAL, ELEVATION_ASTRONOMICAL];
  const colors = [
    palette.day,
    palette.civil,
    palette.nautical,
    palette.astronomical,
    palette.night,
  ];

  // Tageslicht wird zum Horizont hin wärmer – wie am wirklichen Himmel.
  // Das gilt nur oberhalb der Übergangszone um 0°, damit die Phasengrenze
  // erhalten bleibt.
  if (altitude > soft / 2) {
    const warm = clamp(1 - altitude / 12, 0, 1) * 0.5;
    return mixHex(palette.day, palette.glow, warm);
  }

  for (let i = 0; i < edges.length; i++) {
    const upper = edges[i] + soft / 2;
    const lower = edges[i] - soft / 2;
    if (altitude >= upper) return colors[i];
    if (altitude > lower) {
      // Smoothstep: an den Rändern sanft, in der Mitte zügig.
      const t = (upper - altitude) / soft;
      return mixHex(colors[i], colors[i + 1], t * t * (3 - 2 * t));
    }
  }
  return colors[colors.length - 1];
}

/**
 * Erzeugt die Farbstopps des vertikalen Phasenverlaufs unter der Kurve.
 *
 * Der Verlauf wird abgetastet statt aus einzelnen Kanten zusammengesetzt.
 * Dadurch bleiben alle Sonderfälle (fehlende Dämmerung, Polartag,
 * Polarnacht) ohne Sonderbehandlung korrekt.
 */
function bandGradientStops(
  palette: PhasePalette,
  domainBottom: number,
  domainSpan: number,
  steps = 24,
): Array<{ offset: number; color: string }> {
  const stops: Array<{ offset: number; color: string }> = [];
  for (let i = 0; i <= steps; i++) {
    const offset = i / steps;
    // offset 0 liegt am oberen Rand des Plots (höchste dargestellte Höhe).
    const altitude = domainBottom + domainSpan * (1 - offset);
    stops.push({ offset, color: phaseColor(altitude, palette) });
  }
  return stops;
}

/**
 * Erzeugt die Farbstopps des waagerechten Himmelsverlaufs über der Kurve.
 *
 * Stützstellen sind die Ereigniszeiten des Tages; die Ränder übernehmen die
 * Phase des ersten und letzten Abtastwerts. Damit stimmt die Färbung auch
 * bei Polartag (ganztägig Tag), Polarnacht (ganztägig Nacht) und bei
 * Dämmerung ohne echte Nacht.
 */
function skyGradientStops(
  profile: DayProfile,
  events: SolarEvents,
  palette: PhasePalette,
  xOf: (time: number) => number,
  plotLeft: number,
  plotWidth: number,
): Array<{ offset: number; color: string }> {
  const samples = profile.samples;
  if (samples.length < 2) return [];

  const anchors: Array<{ time: number; color: string }> = [];
  const add = (time: Date | null | undefined, color: string): void => {
    if (time && !Number.isNaN(time.getTime())) anchors.push({ time: time.getTime(), color });
  };

  add(events.astronomicalDawn, palette.astronomical);
  add(events.nauticalDawn, palette.nautical);
  add(events.civilDawn, palette.civil);
  add(events.sunrise, palette.glow);
  add(events.solarNoon, palette.day);
  add(events.sunset, palette.glow);
  add(events.civilDusk, palette.civil);
  add(events.nauticalDusk, palette.nautical);
  add(events.astronomicalDusk, palette.astronomical);

  const stops: Array<{ offset: number; color: string }> = [
    { offset: 0, color: phaseColor(samples[0].altitude, palette) },
    ...anchors.map((anchor) => ({
      offset: clamp((xOf(anchor.time) - plotLeft) / plotWidth, 0, 1),
      color: anchor.color,
    })),
    { offset: 1, color: phaseColor(samples[samples.length - 1].altitude, palette) },
  ];

  // SVG verlangt monoton steigende Offsets; gleiche Offsets sind zulässig.
  stops.sort((a, b) => a.offset - b.offset);
  return stops;
}

/** Zeichnet das Tagesverlaufs-Chart. */
export function renderDayChart(options: DayChartOptions): TemplateResult {
  const {
    profile,
    events,
    now,
    width,
    height,
    palette,
    format,
    showSun,
    showMoon,
    moon,
    showTwilight,
    twilightLevel,
    animations,
    cardStyle,
    uid,
    showAstronomicalLayers,
    currentAltitude,
  } = options;

  const safeWidth = Math.max(120, width);
  const safeHeight = Math.max(56, height);

  const padLeft = 4;
  const padRight = 4;
  const padTop = 6;
  const showLabelStrip = safeHeight >= 112;
  const stripHeight = showLabelStrip ? clamp(round(safeHeight * 0.13, 1), 13, 20) : 0;
  const plotLeft = padLeft;
  const plotWidth = Math.max(10, safeWidth - padLeft - padRight);
  const plotTop = padTop;
  const plotHeight = Math.max(10, safeHeight - padTop - stripHeight);
  const plotBottom = plotTop + plotHeight;

  const [domainBottom, domainTop] = elevationDomain(profile);
  const domainSpan = Math.max(1, domainTop - domainBottom);

  const t0 = profile.dayStart.getTime();
  const t1 = profile.dayEnd.getTime();
  const timeSpan = Math.max(1, t1 - t0);

  const xOf = (time: number): number => plotLeft + ((time - t0) / timeSpan) * plotWidth;
  const yOf = (altitude: number): number =>
    plotBottom - ((clamp(altitude, -95, 95) - domainBottom) / domainSpan) * plotHeight;

  const horizonY = yOf(0);

  // --- Kurve ---------------------------------------------------------------
  const maxPoints = clamp(Math.round(plotWidth / 1.6), 60, 361);
  const points = pickSamples(profile.samples, maxPoints).map((sample) => ({
    x: xOf(sample.time),
    y: yOf(sample.altitude),
  }));

  const gradientStops = bandGradientStops(palette, domainBottom, domainSpan);
  const skyStops = skyGradientStops(profile, events, palette, xOf, plotLeft, plotWidth);
  const areaId = `${uid}-area`;
  const lineId = `${uid}-line`;
  const clipId = `${uid}-clip`;
  const glowId = `${uid}-glow`;
  const skyId = `${uid}-sky`;
  const softMaskId = `${uid}-soft`;
  const softFadeId = `${uid}-soft-fade`;
  const footMaskId = `${uid}-foot`;
  const footFadeId = `${uid}-foot-fade`;
  const sideMaskId = `${uid}-side`;
  const sideFadeId = `${uid}-side-fade`;

  const area = areaPath(points, plotBottom + 1, true);
  const curve = smoothPath(points);
  // Himmelsfläche: alles oberhalb der Sonnenkurve.
  const sky = areaPath(points, plotTop - 1, true);

  // Der flache Stil trägt die Verläufe dünner auf.
  const strength = cardStyle === 'flat' ? 0.6 : 1;
  const skyOpacity = round(0.15 * strength, 3);

  /**
   * Weiche Ränder der Flächen.
   *
   * Die Flächen enden sonst an einer geraden Kante (oben unmittelbar unter
   * der Kopfzeile, unten am Übergang zur Zeitleiste) und wirken dadurch
   * abgeschnitten. Eine Maske lässt sie über die ersten bzw. letzten
   * Pixel auslaufen. Kurve, Marken und Beschriftungen bleiben unberührt –
   * sie tragen die Information und sollen scharf bleiben.
   */
  const fadeTop = plotTop - 1;
  const fadeBottom = plotBottom + 1;
  const fadeSpan = Math.max(1, fadeBottom - fadeTop);
  const topFade = clamp(plotHeight * 0.14, 6, 18);
  const footFade = clamp(plotHeight * 0.08, 4, 12);
  const sideFade = clamp(plotWidth * 0.02, 6, 14);
  const cornerRadius = clamp(round(plotHeight * 0.06, 1), 4, 10);
  // Anteilige Offsets der Masken-Verläufe.
  const topFadeOffset = round(clamp(topFade / fadeSpan, 0, 0.45), 4);
  const footFadeOffset = round(1 - clamp(footFade / fadeSpan, 0, 0.45), 4);
  const fadeLeft = plotLeft - 1;
  const fadeRight = plotLeft + plotWidth + 1;
  const sideFadeOffset = round(clamp(sideFade / Math.max(1, fadeRight - fadeLeft), 0, 0.4), 4);

  // Horizontglühen: weiches, warmes Licht an Auf- und Untergang. Es liegt
  // auf der Horizontlinie und wird auf den Plot begrenzt.
  const glowRadiusX = Math.max(16, plotWidth * 0.16);
  const glowRadiusY = clamp(plotHeight * 0.45, 9, 46);
  const glows: Array<{ id: string; time: Date; color: string }> = [];
  if (plotHeight >= 34) {
    if (events.sunrise) {
      glows.push({ id: `${uid}-glow-rise`, time: events.sunrise, color: palette.glow });
    }
    if (events.sunset) {
      glows.push({ id: `${uid}-glow-set`, time: events.sunset, color: palette.glow });
    }
  }

  // --- Sonnenkuppel -------------------------------------------------------
  const dome = domeGeometry(points, events, profile.polar, xOf, horizonY);
  const domeId = `${uid}-dome`;

  // --- Ereignismarken ------------------------------------------------------
  const t = format.t;
  const markers: EventMarker[] = [];
  const push = (marker: Omit<EventMarker, 'secondary'> & { secondary?: boolean }) => {
    if (marker.time && !Number.isNaN(marker.time.getTime())) {
      markers.push({ secondary: false, ...marker });
    }
  };

  if (events.sunrise) {
    push({
      key: 'sunrise',
      time: events.sunrise,
      label: t('sunrise'),
      shortLabel: t('sunriseShort'),
      kind: 'sunrise',
      altitude: 0,
    });
  }
  if (events.sunset) {
    push({
      key: 'sunset',
      time: events.sunset,
      label: t('sunset'),
      shortLabel: t('sunsetShort'),
      kind: 'sunset',
      altitude: 0,
    });
  }
  if (showTwilight) {
    if (events.civilDawn) {
      push({
        key: 'civilDawn',
        time: events.civilDawn,
        label: t('civilDawn'),
        shortLabel: t('civilDawnShort'),
        kind: 'dawn',
        altitude: ELEVATION_CIVIL,
      });
    }
    if (events.civilDusk) {
      push({
        key: 'civilDusk',
        time: events.civilDusk,
        label: t('civilDusk'),
        shortLabel: t('civilDuskShort'),
        kind: 'dusk',
        altitude: ELEVATION_CIVIL,
      });
    }
    if (twilightLevel === 'all' || showAstronomicalLayers) {
      const extras: Array<[keyof SolarEvents, 'dawn' | 'dusk', StringKey, number]> = [
        ['nauticalDawn', 'dawn', 'nauticalDawn', ELEVATION_NAUTICAL],
        ['nauticalDusk', 'dusk', 'nauticalDusk', ELEVATION_NAUTICAL],
        ['astronomicalDawn', 'dawn', 'astronomicalDawn', ELEVATION_ASTRONOMICAL],
        ['astronomicalDusk', 'dusk', 'astronomicalDusk', ELEVATION_ASTRONOMICAL],
      ];
      for (const [key, kind, labelKey, altitude] of extras) {
        const value = events[key];
        if (value) {
          push({
            key,
            time: value,
            label: t(labelKey),
            shortLabel: t(labelKey),
            kind,
            altitude,
            secondary: true,
          });
        }
      }
    }
  }
  markers.sort((a, b) => a.time.getTime() - b.time.getTime());

  // --- Beschriftungen ------------------------------------------------------
  const labelFontSize = clamp(round(safeHeight * 0.062, 1), 7.5, 10.5);
  const labelHeight = clamp(round(labelFontSize + 5, 1), 11, stripHeight || 15);

  interface PlacedLabel {
    x: number;
    width: number;
    text: string;
    secondary: boolean;
  }

  const primaries = markers.filter((marker) => !marker.secondary);
  const secondaries = markers.filter((marker) => marker.secondary);
  const maxLabels = plotWidth < 240 ? 3 : plotWidth < 340 ? 4 : 6;
  const ordered = [...primaries, ...secondaries]
    .slice(0, Math.max(2, maxLabels))
    .sort((a, b) => a.time.getTime() - b.time.getTime());
  const useShort = ordered.length > 3 || plotWidth < 300;

  const labels: PlacedLabel[] = [];
  let lastRight = -Infinity;
  for (const marker of ordered) {
    const text = useShort ? marker.shortLabel : marker.label;
    const estimatedWidth = text.length * labelFontSize * 0.56 + 8;
    let x = xOf(marker.time.getTime());
    x = clamp(x, plotLeft + estimatedWidth / 2, plotLeft + plotWidth - estimatedWidth / 2);
    if (x - estimatedWidth / 2 < lastRight + 3) {
      x = lastRight + 3 + estimatedWidth / 2;
    }
    if (x + estimatedWidth / 2 > plotLeft + plotWidth + 0.5) continue;
    lastRight = x + estimatedWidth / 2;
    labels.push({ x, width: estimatedWidth, text, secondary: marker.secondary });
  }

  // --- „Jetzt“-Marker ------------------------------------------------------
  const nowX = clamp(xOf(now.getTime()), plotLeft, plotLeft + plotWidth);
  // Der Sonnenmarker trägt die gesättigte Tagesfarbe, nicht die blasse Farbe
  // der Kurve – sonst verschwindet er auf der Linie, auf der er sitzt.
  const markerColor = palette.day;
  const markerRadius = clamp(round(safeHeight * 0.045, 1), 3.5, 6);
  const markerRing = clamp(round(markerRadius * 0.22, 2), 0.8, 1.4);
  const moonRadius = clamp(round(markerRadius * 1.1, 1), 3.5, 7);

  /**
   * Hält einen runden Marker ganz im Plot. Ohne das ragt er am Rand zur
   * Hälfte heraus – genau dann, wenn Sonne oder Mond außerhalb des
   * dargestellten Höhenbereichs liegen.
   */
  const markerY = (altitude: number, radius: number): number =>
    plotHeight <= radius * 2
      ? plotTop + plotHeight / 2
      : clamp(yOf(altitude), plotTop + radius, plotBottom - radius);

  const nowY = markerY(currentAltitude, markerRadius);

  // Mondmarker: eigene Höhe auf der „Jetzt"-Linie. Liegt er dicht am
  // Sonnenmarker, weicht er seitlich aus, damit sich beide nicht verdecken.
  const moonNow =
    showMoon && moon
      ? {
          altitude: moon.altitude,
          y: markerY(moon.altitude, moonRadius),
          // Außerhalb des dargestellten Höhenbereichs: gedämpft am Rand.
          clamped: moon.altitude < domainBottom || moon.altitude > domainTop,
        }
      : null;
  const moonGap = moonNow ? Math.abs(moonNow.y - nowY) : Number.POSITIVE_INFINITY;
  const moonSideStep = markerRadius + moonRadius + 2;
  const moonX = moonNow
    ? moonGap >= markerRadius + moonRadius + 1
      ? nowX
      : nowX + moonSideStep + moonRadius <= plotLeft + plotWidth
        ? nowX + moonSideStep
        : Math.max(plotLeft + moonRadius, nowX - moonSideStep)
    : null;
  const markerClass = animations ? 'smc-pulse' : '';
  const markerFilter = animations ? `url(#${glowId})` : '';

  // --- Höhen-Referenzlinien ------------------------------------------------
  // Beschriftet werden nur die Linien, die für die eingestellte
  // Dämmerungsgrenze Bedeutung haben; der Horizont immer.
  const referenceCandidates: Array<{ altitude: number; label: string; key: string }> = [
    { altitude: 0, label: t('horizon'), key: 'horizon' },
  ];
  if (showAstronomicalLayers || twilightLevel === 'all') {
    referenceCandidates.push(
      { altitude: ELEVATION_CIVIL, label: `${t('refCivil')} (−6°)`, key: 'civil' },
      { altitude: ELEVATION_NAUTICAL, label: `${t('refNautical')} (−12°)`, key: 'nautical' },
      {
        altitude: ELEVATION_ASTRONOMICAL,
        label: `${t('refAstronomical')} (−18°)`,
        key: 'astronomical',
      },
    );
  } else if (showTwilight) {
    referenceCandidates.push({
      altitude: ELEVATION_CIVIL,
      label: `${t('refCivil')} (−6°)`,
      key: 'civil',
    });
  }
  const showRefLabels = plotHeight >= 86 && plotWidth >= 250;
  const refLines = referenceCandidates.filter(
    (line) => line.altitude > domainBottom + 0.5 && line.altitude < domainTop - 0.5,
  );
  const refLabelFontSize = clamp(round(safeHeight * 0.055, 1), 7.5, 9.5);

  // --- Hilfslinien im 3-Stunden-Raster -------------------------------------
  // --- Zenit (Kulmination) -------------------------------------------------
  // Kleine Beschriftung am höchsten Punkt der Kurve: Zeit und Höhe.
  const zenithTime = events.solarNoon;
  const showZenith =
    Boolean(zenithTime) &&
    profile.maxAltitude > 0 &&
    plotHeight >= 104 &&
    plotWidth >= 220 &&
    showAstronomicalLayers;
  const zenithLabel = showZenith
    ? `${t('zenith')} ${formatTime(zenithTime!, format)} · ${formatDegrees(
        profile.maxAltitude,
        1,
        format.locale,
      )}`
    : '';
  const zenithFontSize = clamp(round(safeHeight * 0.055, 1), 7.5, 9.5);
  const zenithWidth = zenithLabel.length * zenithFontSize * 0.56 + 10;
  const zenithX = zenithTime
    ? clamp(
        xOf(zenithTime.getTime()),
        plotLeft + zenithWidth / 2,
        plotLeft + plotWidth - zenithWidth / 2,
      )
    : 0;
  const zenithYRaw = zenithTime ? yOf(profile.maxAltitude) : 0;
  const zenithChipHeight = zenithFontSize + 5;
  const zenithY = clamp(
    zenithYRaw - zenithChipHeight - 4,
    plotTop,
    Math.max(plotTop, zenithYRaw + 10),
  );

  const gridCount = plotWidth < 220 ? 4 : plotWidth < 420 ? 6 : 8;
  const gridLines: number[] = [];
  for (let i = 1; i < gridCount; i++) {
    gridLines.push(plotLeft + (plotWidth * i) / gridCount);
  }

  return svg`
    <svg
      class="day-chart"
      width="100%"
      height="100%"
      viewBox="0 0 ${round(safeWidth, 1)} ${round(safeHeight, 1)}"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="${t('title')}"
    >
      <defs>
        <linearGradient id="${areaId}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${round(plotTop, 1)}" x2="0" y2="${round(plotBottom, 1)}">
          ${gradientStops.map(
            (stop) =>
              svg`<stop offset="${round(stop.offset * 100, 3)}%" stop-color="${stop.color}" />`,
          )}
        </linearGradient>
        <linearGradient id="${lineId}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${round(plotTop, 1)}" x2="0" y2="${round(plotBottom, 1)}">
          ${gradientStops.map(
            (stop) =>
              svg`<stop offset="${round(stop.offset * 100, 3)}%" stop-color="${
                stop.color === palette.day ? palette.lineDay : palette.lineNight
              }" />`,
          )}
        </linearGradient>
        ${
          skyStops.length >= 2
            ? svg`<linearGradient id="${skyId}" gradientUnits="userSpaceOnUse"
                x1="${round(plotLeft, 1)}" y1="0" x2="${round(plotLeft + plotWidth, 1)}" y2="0">
                ${skyStops.map(
                  (stop) =>
                    svg`<stop offset="${round(stop.offset * 100, 3)}%" stop-color="${stop.color}" />`,
                )}
              </linearGradient>`
            : svg``
        }
        ${glows.map(
          // Der Verlauf nutzt die Bounding-Box der Ellipse und wird dadurch
          // automatisch elliptisch (objectBoundingBox ist die Voreinstellung).
          (glow) => svg`<radialGradient id="${glow.id}">
              <stop offset="0%" stop-color="${glow.color}" stop-opacity="${round(0.5 * strength, 3)}" />
              <stop offset="45%" stop-color="${glow.color}" stop-opacity="${round(0.2 * strength, 3)}" />
              <stop offset="100%" stop-color="${glow.color}" stop-opacity="0" />
            </radialGradient>`,
        )}
        ${
          dome
            ? svg`<radialGradient id="${domeId}" gradientUnits="userSpaceOnUse"
                cx="${round(dome.cx, 1)}" cy="${round(dome.cy, 1)}" r="${round(dome.r, 1)}">
                <stop offset="0%" stop-color="${palette.glow}" stop-opacity="${round(0.3 * strength, 3)}" />
                <stop offset="45%" stop-color="${palette.day}" stop-opacity="${round(0.18 * strength, 3)}" />
                <stop offset="100%" stop-color="${palette.day}" stop-opacity="0" />
              </radialGradient>`
            : svg``
        }
        <linearGradient id="${softFadeId}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${round(fadeTop, 1)}" x2="0" y2="${round(fadeBottom, 1)}">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${topFadeOffset}" stop-color="#ffffff" />
          <stop offset="${footFadeOffset}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${softMaskId}" maskUnits="userSpaceOnUse"
          x="${round(plotLeft - 2, 1)}" y="${round(fadeTop, 1)}"
          width="${round(plotWidth + 4, 1)}" height="${round(fadeSpan, 1)}">
          <rect
            x="${round(plotLeft - 2, 1)}" y="${round(fadeTop, 1)}"
            width="${round(plotWidth + 4, 1)}" height="${round(fadeSpan, 1)}"
            fill="url(#${softFadeId})" />
        </mask>
        <linearGradient id="${footFadeId}" gradientUnits="userSpaceOnUse"
          x1="0" y1="${round(fadeTop, 1)}" x2="0" y2="${round(fadeBottom, 1)}">
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="${footFadeOffset}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${footMaskId}" maskUnits="userSpaceOnUse"
          x="${round(plotLeft - 2, 1)}" y="${round(fadeTop, 1)}"
          width="${round(plotWidth + 4, 1)}" height="${round(fadeSpan, 1)}">
          <rect
            x="${round(plotLeft - 2, 1)}" y="${round(fadeTop, 1)}"
            width="${round(plotWidth + 4, 1)}" height="${round(fadeSpan, 1)}"
            fill="url(#${footFadeId})" />
        </mask>
        <linearGradient id="${sideFadeId}" gradientUnits="userSpaceOnUse"
          x1="${round(fadeLeft, 1)}" y1="0" x2="${round(fadeRight, 1)}" y2="0">
          <stop offset="0" stop-color="#000000" />
          <stop offset="${sideFadeOffset}" stop-color="#ffffff" />
          <stop offset="${round(1 - sideFadeOffset, 4)}" stop-color="#ffffff" />
          <stop offset="1" stop-color="#000000" />
        </linearGradient>
        <mask id="${sideMaskId}" maskUnits="userSpaceOnUse"
          x="${round(fadeLeft, 1)}" y="${round(fadeTop, 1)}"
          width="${round(fadeRight - fadeLeft, 1)}" height="${round(fadeSpan, 1)}">
          <rect
            x="${round(fadeLeft, 1)}" y="${round(fadeTop, 1)}"
            width="${round(fadeRight - fadeLeft, 1)}" height="${round(fadeSpan, 1)}"
            fill="url(#${sideFadeId})" />
        </mask>
        <clipPath id="${clipId}">
          <rect x="${round(plotLeft - 1, 1)}" y="${round(plotTop - 2, 1)}"
            width="${round(plotWidth + 2, 1)}" height="${round(plotHeight + 4, 1)}"
            rx="${cornerRadius}" ry="${cornerRadius}" />
        </clipPath>
        ${
          animations
            ? svg`<filter id="${glowId}" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="${round(markerRadius * 0.7, 2)}" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>`
            : svg``
        }
      </defs>

      <g clip-path="url(#${clipId})">
        ${gridLines.map(
          (x) =>
            svg`<line x1="${round(x, 1)}" y1="${round(plotTop, 1)}" x2="${round(x, 1)}" y2="${round(plotBottom, 1)}"
              stroke="var(--smc-grid-line, rgba(255,255,255,0.10))" stroke-width="0.6" />`,
        )}
        <g mask="url(#${sideMaskId})">
        <path d="${area}" fill="url(#${areaId})" opacity="0.9" mask="url(#${footMaskId})" />
        <g mask="url(#${softMaskId})">
          ${
            skyStops.length >= 2
              ? svg`<path d="${sky}" fill="url(#${skyId})" opacity="${skyOpacity}" />`
              : svg``
          }
          ${glows.map((glow) => {
            const cx = clamp(xOf(glow.time.getTime()), plotLeft, plotLeft + plotWidth);
            const cy = clamp(horizonY, plotTop, plotBottom);
            return svg`<ellipse
                cx="${round(cx, 1)}" cy="${round(cy, 1)}"
                rx="${round(glowRadiusX, 1)}" ry="${round(glowRadiusY, 1)}"
                fill="url(#${glow.id})" />`;
          })}
          ${
            dome
              ? svg`<path d="${dome.path}" fill="url(#${domeId})" opacity="0.95" />`
              : svg``
          }
        </g>
        </g>
        <path
          d="${curve}"
          fill="none"
          stroke="url(#${lineId})"
          stroke-width="${clamp(round(safeHeight * 0.017, 2), 1.4, 2.4)}"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.95"
        />
        ${refLines.map((line) => {
          const y = yOf(line.altitude);
          const primary = line.key === 'horizon';
          return svg`<g>
            <line
              x1="${round(plotLeft, 1)}" y1="${round(y, 1)}"
              x2="${round(plotLeft + plotWidth, 1)}" y2="${round(y, 1)}"
              stroke="var(--smc-horizon-line, rgba(255,255,255,0.5))"
              stroke-width="${primary ? 1 : 0.6}"
              stroke-dasharray="${primary ? '3 3' : '2 4'}"
              opacity="${primary ? 0.6 : 0.45}"
            />
            ${
              showRefLabels
                ? svg`<text
                    x="${round(plotLeft + 3, 1)}"
                    y="${round(y - 2.5, 1)}"
                    fill="var(--smc-muted-color)"
                    font-size="${refLabelFontSize}"
                    opacity="0.85"
                    stroke="var(--smc-halo, #10131a)"
                    stroke-width="2.4"
                    stroke-linejoin="round"
                    paint-order="stroke fill"
                  >${line.label}</text>`
                : svg``
            }
          </g>`;
        })}
      </g>

      <g class="event-markers">
        ${markers.map((marker) => {
          const x = clamp(xOf(marker.time.getTime()), plotLeft, plotLeft + plotWidth);
          const y = clamp(yOf(marker.altitude), plotTop, plotBottom);
          const primary = !marker.secondary;
          const dotRadius = primary ? clamp(round(safeHeight * 0.022, 1), 1.8, 3) : 1.4;
          const strong = 'var(--smc-marker-strong, rgba(255,255,255,0.9))';
          const soft = 'var(--smc-marker-soft, rgba(255,255,255,0.55))';
          const accent =
            marker.kind === 'dawn'
              ? 'var(--smc-dawn, #a5b4fc)'
              : marker.kind === 'sunrise'
                ? 'var(--smc-sunrise, #fbbf24)'
                : marker.kind === 'sunset'
                  ? 'var(--smc-sunset, #fdba74)'
                  : 'var(--smc-dusk, #d8b4fe)';
          const guide = primary ? accent : soft;
          const color = primary ? strong : soft;

          const glyph =
            marker.kind === 'sunrise' || marker.kind === 'sunset'
              ? svg`
                <circle cx="${round(x, 1)}" cy="${round(y, 1)}" r="${dotRadius + 1}"
                  fill="${marker.kind === 'sunrise' ? palette.lineDay : palette.lineNight}"
                  opacity="0.95" />
                <line
                  x1="${round(x - dotRadius * 2.6, 1)}"
                  y1="${round(marker.kind === 'sunrise' ? y + dotRadius + 2 : y - dotRadius - 2, 1)}"
                  x2="${round(x + dotRadius * 2.6, 1)}"
                  y2="${round(marker.kind === 'sunrise' ? y + dotRadius + 2 : y - dotRadius - 2, 1)}"
                  stroke="${strong}" stroke-width="1.1" stroke-linecap="round" opacity="0.8" />
              `
              : svg`<circle cx="${round(x, 1)}" cy="${round(y, 1)}" r="${dotRadius}"
                  fill="${color}" opacity="0.85" />`;

          return svg`<g>
            <line
              x1="${round(x, 1)}" y1="${round(plotTop, 1)}"
              x2="${round(x, 1)}" y2="${round(plotBottom, 1)}"
              stroke="${guide}" stroke-width="${primary ? 1 : 0.7}"
              stroke-dasharray="3 3" opacity="${primary ? 0.5 : 0.25}" />
            ${glyph}
          </g>`;
        })}
      </g>

      <g class="now-marker">
        <line
          x1="${round(nowX, 1)}" y1="${round(plotTop, 1)}"
          x2="${round(nowX, 1)}" y2="${round(plotBottom, 1)}"
          stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
          stroke-width="${clamp(round(safeHeight * 0.012, 2), 1, 1.8)}"
          opacity="0.85" />
        ${
          showSun
            ? svg`<g class="now-sun ${markerClass}" filter="${markerFilter}">
                <title>${format.t('chartSunNow', {
                  altitude: formatDegrees(currentAltitude, 1, format.locale),
                })}</title>
                <circle
                  cx="${round(nowX, 1)}"
                  cy="${round(nowY, 1)}"
                  r="${markerRadius}"
                  fill="${markerColor}"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${markerRing}"
                />
              </g>`
            : svg``
        }
        ${
          moonNow && moonX !== null && moon
            ? svg`<g class="now-moon">
                <title>${format.t('chartMoonNow', {
                  altitude: formatDegrees(moonNow.altitude, 1, format.locale),
                })}${moonNow.clamped ? ` ${format.t('chartOutside')}` : ''}</title>
                ${
                  moonX === nowX
                    ? svg``
                    : svg`<line
                        x1="${round(nowX, 1)}"
                        y1="${round(moonNow.y, 1)}"
                        x2="${round(moonX, 1)}"
                        y2="${round(moonNow.y, 1)}"
                        stroke="var(--smc-now-line, rgba(255,255,255,0.8))"
                        stroke-width="0.8"
                        opacity="0.7" />`
                }
                <circle
                  cx="${round(moonX, 1)}"
                  cy="${round(moonNow.y, 1)}"
                  r="${round(moonRadius + 0.6, 1)}"
                  fill="none"
                  stroke="var(--smc-now-stroke, rgba(0,0,0,0.25))"
                  stroke-width="${markerRing}" />
                <g
                  transform="translate(${round(moonX - moonRadius, 1)} ${round(
                    moonNow.y - moonRadius,
                    1,
                  )})"
                  opacity="${moonNow.clamped ? 0.6 : 1}"
                >
                  ${renderMoonDisc({
                    size: round(moonRadius * 2, 1),
                    illumination: moon.illumination,
                    brightLimbAngle: moon.brightLimbAngle,
                    litColor: 'var(--smc-moon-lit, #f2f5fc)',
                    darkColor: 'var(--smc-moon-dark, rgba(110,124,164,0.45))',
                    texture: false,
                    uid: `${uid}-moon-now`,
                  })}
                </g>
              </g>`
            : svg``
        }
      </g>

      ${
        showZenith
          ? svg`<g class="zenith-chip">
              <rect
                x="${round(zenithX - zenithWidth / 2, 1)}"
                y="${round(zenithY, 1)}"
                width="${round(zenithWidth, 1)}"
                height="${round(zenithChipHeight, 1)}"
                rx="${round(zenithChipHeight / 2.6, 1)}"
                fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                opacity="0.85" />
              <text
                x="${round(zenithX, 1)}"
                y="${round(zenithY + zenithChipHeight / 2 + zenithFontSize * 0.36, 1)}"
                text-anchor="middle"
                font-size="${zenithFontSize}"
                fill="var(--smc-label-color, #ffffff)"
              >${zenithLabel}</text>
            </g>`
          : svg``
      }

      ${
        showLabelStrip
          ? svg`<line
              x1="${round(plotLeft, 1)}" y1="${round(plotBottom + 0.5, 1)}"
              x2="${round(plotLeft + plotWidth, 1)}" y2="${round(plotBottom + 0.5, 1)}"
              stroke="var(--smc-divider, rgba(128,128,128,0.35))" stroke-width="0.7" />`
          : svg``
      }

      ${
        labels.length
          ? svg`<g class="event-labels" font-size="${labelFontSize}">
              ${labels.map((label) => {
                const top = showLabelStrip ? plotBottom + 2 : plotTop;
                return svg`<g>
                  <rect
                    x="${round(label.x - label.width / 2, 1)}"
                    y="${round(top, 1)}"
                    width="${round(label.width, 1)}"
                    height="${round(labelHeight, 1)}"
                    rx="${round(labelHeight / 2.6, 1)}"
                    fill="var(--smc-label-bg, rgba(0,0,0,0.34))"
                    opacity="${label.secondary ? 0.6 : 0.88}" />
                  <text
                    x="${round(label.x, 1)}"
                    y="${round(top + labelHeight / 2 + labelFontSize * 0.36, 1)}"
                    text-anchor="middle"
                    fill="var(--smc-label-color, #ffffff)"
                    opacity="${label.secondary ? 0.75 : 1}"
                  >${label.text}</text>
                </g>`;
              })}
            </g>`
          : svg``
      }
    </svg>
  `;
}
