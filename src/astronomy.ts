/**
 * astronomy.ts
 *
 * Astronomische Berechnungen für die Sun & Moon Card.
 *
 * Grundlagen und Genauigkeit
 * --------------------------
 * Alle Berechnungen sind lokale Implementierungen etablierter Algorithmen:
 *
 *  - Sonnenposition:               NOAA Solar Calculator / Meeus, Kapitel 25.
 *                                  Genauigkeit der Sonnenhöhe: ca. ±0,02°.
 *  - Sonnenereignisse:             Numerische Nullstellensuche der Sonnenhöhe,
 *                                  verfeinert per Bisektion.
 *                                  Genauigkeit: besser als ±5 Sekunden.
 *  - Mondposition (geozentrisch):  Abgekürzte ELP2000-Reihe (Meeus, Anhang III,
 *                                  Koeffizienten gegen PyEphem abgeglichen).
 *                                  Genauigkeit: ±0,003° in Länge und Breite,
 *                                  ±30 km in der Entfernung (1970–2050).
 *  - Mondphase / Beleuchtung:      Meeus, Kapitel 48 (inkl. Positionswinkel der
 *                                  beleuchteten Seite).
 *                                  Genauigkeit: besser als ±0,1 Prozentpunkte.
 *  - Mondaufgang / -untergang:     Nullstellensuche mit der Standardhöhe
 *                                  h0 = 0,7275·π − 0,5667° (Meeus, Kapitel 15).
 *                                  Genauigkeit: typischerweise ±1 Minute.
 *
 * Es werden ausschließlich zeit- und ortsabhängige Reihen verwendet. Es gibt
 * keine Netzwerkzugriffe und keine externen Laufzeitdienste.
 *
 * Alle Winkel werden – sofern nicht anders angegeben – in Grad übergeben und
 * zurückgegeben. Das Azimut wird ab Nord über Ost gezählt
 * (N = 0°, O = 90°, S = 180°, W = 270°).
 */

import {
  LUNAR_DISTANCE_TERMS,
  LUNAR_LATITUDE_TERMS,
  LUNAR_LONGITUDE_TERMS,
  LUNAR_MEAN_DISTANCE_KM,
} from './lunar-series.js';

export const DEG_TO_RAD = Math.PI / 180;
export const RAD_TO_DEG = 180 / Math.PI;

/** Astronomische Einheit in Kilometern. */
export const AU_KM = 149597870.7;
/** Äquatorradius der Erde in Kilometern (Meeus). */
export const EARTH_RADIUS_KM = 6378.14;

/**
 * Standardhöhen des Sonnenmittelpunkts über dem geometrischen Horizont.
 * Identisch mit den Werten der Home-Assistant-Sun-Integration
 * (homeassistant/components/sun/const.py).
 */
export const ELEVATION_SUNRISE_SUNSET = -0.833; // Refraktion + Sonnenradius
export const ELEVATION_CIVIL = -6; // Bürgerliche Dämmerung
export const ELEVATION_NAUTICAL = -12; // Nautische Dämmerung
export const ELEVATION_ASTRONOMICAL = -18; // Astronomische Dämmerung

/** Suchschritt für die Nullstellensuche: 2 Minuten. */
const SEARCH_STEP_MS = 2 * 60 * 1000;

/** Julianisches Datum. */
export function toJulian(date: Date | number): number {
  const ms = typeof date === 'number' ? date : date.getTime();
  return ms / 86400000 + 2440587.5;
}

/** Datum aus julianischem Datum. */
export function fromJulian(jd: number): Date {
  return new Date((jd - 2440587.5) * 86400000);
}

/** Julianische Jahrhunderte seit J2000.0. */
function julianCenturies(jd: number): number {
  return (jd - 2451545.0) / 36525.0;
}

/** Normalisiert einen Winkel auf [0, 360). */
export function normalizeDeg(deg: number): number {
  const value = deg % 360;
  return value < 0 ? value + 360 : value;
}

/** Mittlere Schiefe der Ekliptik in Grad (Meeus 22.2). */
function meanObliquity(jd: number): number {
  const t = julianCenturies(jd);
  const eps = 23.439291 - 0.0130042 * t - 1.64e-7 * t * t + 5.04e-7 * t * t * t;
  return eps;
}

/**
 * Mittlere Greenwich-Sternzeit in Grad (IAU 1982).
 * Für den Zeitraum 1900–2100 auf ca. 0,1 Bogensekunden genau.
 */
export function greenwichMeanSiderealTime(jd: number): number {
  const d = jd - 2451545.0;
  const t = julianCenturies(jd);
  const gmst =
    280.46061837 +
    360.98564736629 * d +
    0.000387933 * t * t -
    (t * t * t) / 38710000.0;
  return normalizeDeg(gmst);
}

export interface EquatorialCoords {
  /** Rektaszension in Grad. */
  ra: number;
  /** Deklination in Grad. */
  dec: number;
}

export interface HorizontalCoords {
  /** Höhe über dem Horizont in Grad. */
  altitude: number;
  /** Azimut in Grad, ab Nord über Ost. */
  azimuth: number;
}

export interface GeoLocation {
  /** Breitengrad, Nord positiv. */
  latitude: number;
  /** Längengrad, Ost positiv. */
  longitude: number;
}

/**
 * Scheinbare äquatoriale Koordinaten der Sonne (NOAA / Meeus 25).
 * @param jd Julianisches Datum (UTC)
 */
export function sunApparentEquatorial(jd: number): EquatorialCoords {
  const t = julianCenturies(jd);

  // Geometrische mittlere Länge und mittlere Anomalie der Sonne
  const l0 = normalizeDeg(280.46646 + t * (36000.76983 + t * 0.0003032));
  const m = normalizeDeg(357.52911 + t * (35999.05029 - 0.0001537 * t));

  // Mittelpunktsgleichung
  const c =
    Math.sin(m * DEG_TO_RAD) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
    Math.sin(2 * m * DEG_TO_RAD) * (0.019993 - 0.000101 * t) +
    Math.sin(3 * m * DEG_TO_RAD) * 0.000289;

  const trueLongitude = l0 + c;

  // Nutation in Länge (genähert) und wahre Schiefe der Ekliptik
  const omega = normalizeDeg(125.04 - 1934.136 * t);
  const lambda = trueLongitude - 0.00569 - 0.00478 * Math.sin(omega * DEG_TO_RAD);
  const eps0 = 23 + (26 + (21.448 - t * (46.815 + t * (0.00059 - t * 0.001813))) / 60) / 60;
  const eps = eps0 + 0.00256 * Math.cos(omega * DEG_TO_RAD);

  const lambdaRad = lambda * DEG_TO_RAD;
  const epsRad = eps * DEG_TO_RAD;

  const ra = normalizeDeg(
    Math.atan2(Math.cos(epsRad) * Math.sin(lambdaRad), Math.cos(lambdaRad)) * RAD_TO_DEG,
  );
  const dec = Math.asin(Math.sin(epsRad) * Math.sin(lambdaRad)) * RAD_TO_DEG;

  return { ra, dec };
}

/**
 * Scheinbare ekliptikale Länge der Sonne in Grad.
 * Wird für die Elongation bei der Mondphasenberechnung benötigt.
 */
export function sunApparentEclipticLongitude(jd: number): number {
  const t = julianCenturies(jd);
  const l0 = normalizeDeg(280.46646 + t * (36000.76983 + t * 0.0003032));
  const m = normalizeDeg(357.52911 + t * (35999.05029 - 0.0001537 * t));
  const c =
    Math.sin(m * DEG_TO_RAD) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
    Math.sin(2 * m * DEG_TO_RAD) * (0.019993 - 0.000101 * t) +
    Math.sin(3 * m * DEG_TO_RAD) * 0.000289;
  const omega = normalizeDeg(125.04 - 1934.136 * t);
  return normalizeDeg(l0 + c - 0.00569 - 0.00478 * Math.sin(omega * DEG_TO_RAD));
}

/** Entfernung Erde–Sonne in Kilometern (Meeus 25). */
export function sunDistanceKm(date: Date | number): number {
  const jd = toJulian(date);
  const t = julianCenturies(jd);
  const m = normalizeDeg(357.52911 + t * (35999.05029 - 0.0001537 * t));
  const e = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
  const c =
    Math.sin(m * DEG_TO_RAD) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
    Math.sin(2 * m * DEG_TO_RAD) * (0.019993 - 0.000101 * t) +
    Math.sin(3 * m * DEG_TO_RAD) * 0.000289;
  const trueAnomaly = (m + c) * DEG_TO_RAD;
  return ((1.000001018 * (1 - e * e)) / (1 + e * Math.cos(trueAnomaly))) * AU_KM;
}

/**
 * Umrechnung äquatorialer in horizontale Koordinaten (Meeus 13.5 / 13.6).
 * Ergebnis ist die geometrische Höhe ohne Refraktion.
 */
export function equatorialToHorizontal(
  coords: EquatorialCoords,
  latitude: number,
  longitude: number,
  jd: number,
): HorizontalCoords {
  const lst = normalizeDeg(greenwichMeanSiderealTime(jd) + longitude);
  const h = normalizeDeg(lst - coords.ra); // Stundenwinkel

  const latRad = latitude * DEG_TO_RAD;
  const decRad = coords.dec * DEG_TO_RAD;
  const hRad = h * DEG_TO_RAD;

  const altitude =
    Math.asin(
      Math.sin(latRad) * Math.sin(decRad) +
        Math.cos(latRad) * Math.cos(decRad) * Math.cos(hRad),
    ) * RAD_TO_DEG;

  // Azimut ab Nord über Ost
  const azimuth = normalizeDeg(
    Math.atan2(
      Math.sin(hRad),
      Math.cos(hRad) * Math.sin(latRad) - Math.tan(decRad) * Math.cos(latRad),
    ) *
      RAD_TO_DEG +
      180,
  );

  return { altitude, azimuth };
}

/** Sonnenhöhe in Grad zum angegebenen Zeitpunkt. */
export function sunAltitude(date: Date | number, location: GeoLocation): number {
  const jd = toJulian(date);
  return equatorialToHorizontal(
    sunApparentEquatorial(jd),
    location.latitude,
    location.longitude,
    jd,
  ).altitude;
}

/** Vollständige horizontale Sonnenposition. */
export function sunPosition(date: Date | number, location: GeoLocation): HorizontalCoords {
  const jd = toJulian(date);
  return equatorialToHorizontal(
    sunApparentEquatorial(jd),
    location.latitude,
    location.longitude,
    jd,
  );
}

export interface MoonGeocentric {
  /** Ekliptikale Länge in Grad. */
  longitude: number;
  /** Ekliptikale Breite in Grad. */
  latitude: number;
  /** Entfernung Erde–Mond in Kilometern. */
  distanceKm: number;
}

/**
 * Fundamentale Argumente der Mondtheorie (Meeus 47.2–47.5) in Grad.
 *
 *   D  mittlere Elongation des Mondes
 *   M  mittlere Anomalie der Sonne
 *   M' mittlere Anomalie des Mondes
 *   F  Argument der Breite
 *
 * @param julianCenturies Julianische Jahrhunderte seit J2000.0
 */
export function lunarArguments(julianCenturies: number): {
  D: number;
  M: number;
  Mp: number;
  F: number;
} {
  const t = julianCenturies;
  return {
    D: normalizeDeg(
      297.8501921 +
        445267.1114034 * t -
        0.0018819 * t * t +
        (t * t * t) / 545868.0 -
        (t * t * t * t) / 113065000.0,
    ),
    M: normalizeDeg(
      357.5291092 + 35999.0502909 * t - 0.0001536 * t * t + (t * t * t) / 24490000.0,
    ),
    Mp: normalizeDeg(
      134.9633964 +
        477198.8675055 * t +
        0.0087414 * t * t +
        (t * t * t) / 69699.0 -
        (t * t * t * t) / 14712000.0,
    ),
    F: normalizeDeg(
      93.272095 +
        483202.0175233 * t -
        0.0036539 * t * t -
        (t * t * t) / 3526000.0 +
        (t * t * t * t) / 863310000.0,
    ),
  };
}

/**
 * Geozentrische ekliptikale Koordinaten des Mondes.
 *
 * Verwendet wird die abgekürzte Reihe der ELP2000-Mondtheorie in der Form von
 * Meeus, "Astronomical Algorithms", Anhang III:
 *
 *   λ = L' + Σ Aᵢ·sin(iD·D + iM·M + iMp·M' + iF·F)
 *   β =     Σ Bᵢ·sin(iD·D + iM·M + iMp·M' + iF·F)
 *   Δ = Δ₀ + Σ Cᵢ·cos(iD·D + iM·M + iMp·M' + iF·F)
 *
 * Die Koeffizienten in src/lunar-series.ts wurden mit
 * tools/fit-lunar-series.py durch Ausgleichsrechnung gegen PyEphem (ELP2000)
 * für den Zeitraum 1970–2050 bestimmt; sie stimmen mit den Werten aus Meeus,
 * Anhang III überein (Hauptglied 6,2888°, Evection 1,2740°, Variation 0,6583°,
 * jährliche Gleichung −0,1850°).
 *
 * Genauigkeit im Zeitraum 1970–2050:
 *   Länge ±0,003°, Breite ±0,003°, Entfernung ±30 km.
 * Daraus folgt eine Unsicherheit der Mondhöhe von unter ±0,01° und des
 * Beleuchtungsgrades von unter ±0,05 Prozentpunkten.
 */
export function moonGeocentric(jd: number): MoonGeocentric {
  const t = julianCenturies(jd);

  // Mittlere Länge des Mondes (Meeus 47.1)
  const meanLongitude = normalizeDeg(
    218.3164477 +
      481267.88123421 * t -
      0.0015786 * t * t +
      (t * t * t) / 538841.0 -
      (t * t * t * t) / 65194000.0,
  );

  const args = lunarArguments(t);

  let longitude = meanLongitude;
  for (const term of LUNAR_LONGITUDE_TERMS) {
    const angle =
      term[0] * args.D + term[1] * args.M + term[2] * args.Mp + term[3] * args.F;
    longitude += term[4] * Math.sin(angle * DEG_TO_RAD);
  }

  let latitude = 0;
  for (const term of LUNAR_LATITUDE_TERMS) {
    const angle =
      term[0] * args.D + term[1] * args.M + term[2] * args.Mp + term[3] * args.F;
    latitude += term[4] * Math.sin(angle * DEG_TO_RAD);
  }

  let distanceKm = LUNAR_MEAN_DISTANCE_KM;
  for (const term of LUNAR_DISTANCE_TERMS) {
    const angle =
      term[0] * args.D + term[1] * args.M + term[2] * args.Mp + term[3] * args.F;
    distanceKm += term[4] * Math.cos(angle * DEG_TO_RAD);
  }

  return {
    longitude: normalizeDeg(longitude),
    latitude,
    distanceKm,
  };
}

/** Ekliptikale → äquatoriale Koordinaten. */
export function eclipticToEquatorial(
  longitude: number,
  latitude: number,
  jd: number,
): EquatorialCoords {
  const eps = meanObliquity(jd) * DEG_TO_RAD;
  const lonRad = longitude * DEG_TO_RAD;
  const latRad = latitude * DEG_TO_RAD;

  const ra = normalizeDeg(
    Math.atan2(
      Math.sin(lonRad) * Math.cos(eps) - Math.tan(latRad) * Math.sin(eps),
      Math.cos(lonRad),
    ) * RAD_TO_DEG,
  );
  const dec =
    Math.asin(
      Math.sin(latRad) * Math.cos(eps) +
        Math.cos(latRad) * Math.sin(eps) * Math.sin(lonRad),
    ) * RAD_TO_DEG;

  return { ra, dec };
}

export interface MoonPosition extends HorizontalCoords {
  /** Entfernung Erde–Mond in Kilometern. */
  distanceKm: number;
  /** Horizontale Parallaxe in Grad. */
  parallax: number;
  /**
   * Scheinbare (topozentrische) Höhe: geozentrische Höhe abzüglich
   * Parallaxenkorrektur. Ohne Refraktion.
   */
  apparentAltitude: number;
  /** Äquatoriale Koordinaten. */
  equatorial: EquatorialCoords;
  /** Ekliptikale Koordinaten. */
  geocentric: MoonGeocentric;
}

/**
 * Vollständige Mondposition für einen Beobachter.
 *
 * `altitude` ist die geozentrische Höhe (Grundlage für Auf-/Untergang),
 * `apparentAltitude` die für die Anzeige verwendete topozentrische Höhe.
 */
export function moonPosition(date: Date | number, location: GeoLocation): MoonPosition {
  const jd = toJulian(date);
  const geocentric = moonGeocentric(jd);
  const equatorial = eclipticToEquatorial(
    geocentric.longitude,
    geocentric.latitude,
    jd,
  );
  const horizontal = equatorialToHorizontal(
    equatorial,
    location.latitude,
    location.longitude,
    jd,
  );
  const parallax = Math.asin(EARTH_RADIUS_KM / geocentric.distanceKm) * RAD_TO_DEG;
  const apparentAltitude =
    horizontal.altitude - parallax * Math.cos(horizontal.altitude * DEG_TO_RAD);

  return {
    altitude: horizontal.altitude,
    azimuth: horizontal.azimuth,
    distanceKm: geocentric.distanceKm,
    parallax,
    apparentAltitude,
    equatorial,
    geocentric,
  };
}

/**
 * Standardhöhe des Mondmittelpunkts bei Auf- oder Untergang (Meeus 15).
 * Berücksichtigt Refraktion, scheinbaren Radius und Parallaxe.
 */
export function moonRiseSetAltitude(distanceKm: number): number {
  const parallax = Math.asin(EARTH_RADIUS_KM / distanceKm) * RAD_TO_DEG;
  return 0.7275 * parallax - 0.5667;
}

export type MoonPhaseKey =
  | 'newMoon'
  | 'waxingCrescent'
  | 'firstQuarter'
  | 'waxingGibbous'
  | 'fullMoon'
  | 'waningGibbous'
  | 'lastQuarter'
  | 'waningCrescent';

/**
 * Mondphasen in der Reihenfolge, die auch die Home-Assistant-Moon-Integration
 * verwendet (homeassistant/components/moon/helpers.py).
 */
export const MOON_PHASE_KEYS: MoonPhaseKey[] = [
  'newMoon',
  'waxingCrescent',
  'firstQuarter',
  'waxingGibbous',
  'fullMoon',
  'waningGibbous',
  'lastQuarter',
  'waningCrescent',
];

export interface MoonPhaseInfo {
  /** Beleuchteter Anteil als Wert 0..1. */
  illumination: number;
  /** Phasenwinkel in Grad (0° = Neumond, 180° = Vollmond). */
  phaseAngle: number;
  /** Geozentrische Elongation Mond–Sonne in Grad. */
  elongation: number;
  /**
   * Phasenindex 0..7:
   * 0 Neumond, 1 zunehmende Sichel, 2 erstes Viertel, 3 zunehmender Mond,
   * 4 Vollmond, 5 abnehmender Mond, 6 letztes Viertel, 7 abnehmende Sichel
   */
  phaseIndex: number;
  /** Phasenname. */
  phaseKey: MoonPhaseKey;
  /**
   * Positionswinkel der beleuchteten Seite (Meeus 48.5) in Grad,
   * ab Nord über Ost (Himmelskarte: Norden oben, Osten links).
   */
  brightLimbAngle: number;
  /** Alter des Mondes in Tagen seit dem letzten Neumond. */
  moonAgeDays: number;
  /** Zunehmend (true) oder abnehmend (false). */
  waxing: boolean;
  /** Entfernung Erde–Mond in Kilometern. */
  distanceKm: number;
}

/**
 * Mondphase und Beleuchtungsgrad (Meeus, Kapitel 48).
 *
 * Der Positionswinkel der beleuchteten Seite wird aus den Differenzen der
 * Rektaszensionen sowie den Deklinationen von Sonne und Mond bestimmt; er ist
 * damit für eine Himmelskarte mit Norden oben und Osten links direkt
 * verwendbar.
 */
export function moonPhase(date: Date | number): MoonPhaseInfo {
  const jd = toJulian(date);

  const geocentric = moonGeocentric(jd);
  const moonEq = eclipticToEquatorial(geocentric.longitude, geocentric.latitude, jd);
  const sunEq = sunApparentEquatorial(jd);
  const sunLon = sunApparentEclipticLongitude(jd);

  const r = sunDistanceKm(date);
  const delta = geocentric.distanceKm;

  // Geozentrische Elongation
  const latRad = geocentric.latitude * DEG_TO_RAD;
  const elongationRad = Math.acos(
    Math.min(
      1,
      Math.max(
        -1,
        Math.cos(latRad) * Math.cos((geocentric.longitude - sunLon) * DEG_TO_RAD),
      ),
    ),
  );

  // Phasenwinkel
  const phaseAngleRad = Math.atan2(
    r * Math.sin(elongationRad),
    delta - r * Math.cos(elongationRad),
  );
  const phaseAngle = normalizeDeg(phaseAngleRad * RAD_TO_DEG);
  const illumination = (1 + Math.cos(phaseAngleRad)) / 2;

  // Positionswinkel der beleuchteten Seite (Meeus 48.5)
  const dRa = (sunEq.ra - moonEq.ra) * DEG_TO_RAD;
  const decSun = sunEq.dec * DEG_TO_RAD;
  const decMoon = moonEq.dec * DEG_TO_RAD;
  const brightLimbAngle = normalizeDeg(
    Math.atan2(
      Math.cos(decSun) * Math.sin(dRa),
      Math.sin(decSun) * Math.cos(decMoon) -
        Math.cos(decSun) * Math.sin(decMoon) * Math.cos(dRa),
    ) * RAD_TO_DEG,
  );

  // Phasenzyklus: 0 = Neumond, 0,5 = Vollmond
  const phaseCycle = normalizeDeg(geocentric.longitude - sunLon) / 360;
  const phaseIndex = Math.min(7, Math.floor(phaseCycle * 8 + 0.5) % 8);
  const moonAgeDays = phaseCycle * 29.530588853;

  return {
    illumination,
    phaseAngle,
    elongation: elongationRad * RAD_TO_DEG,
    phaseIndex,
    phaseKey: MOON_PHASE_KEYS[phaseIndex],
    brightLimbAngle,
    moonAgeDays,
    waxing: phaseCycle < 0.5,
    distanceKm: delta,
  };
}

/**
 * Numerische Nullstellensuche.
 *
 * Findet alle Zeitpunkte im Intervall [from, to], an denen `fn` den Wert
 * `target` überschreitet. Jedes gefundene Intervall wird per Bisektion auf
 * etwa eine Millisekunde verfeinert.
 */
export function findCrossings(
  from: number,
  to: number,
  stepMs: number,
  fn: (time: number) => number,
  target: number,
): { time: number; rising: boolean }[] {
  const results: { time: number; rising: boolean }[] = [];
  if (!(to > from)) return results;

  const steps = Math.max(2, Math.ceil((to - from) / stepMs));
  const actualStep = (to - from) / steps;

  let prevTime = from;
  let prevValue = fn(from) - target;

  for (let i = 1; i <= steps; i++) {
    const time = from + i * actualStep;
    const value = fn(time) - target;

    if (prevValue === 0) {
      results.push({ time: prevTime, rising: value > 0 });
    } else if ((prevValue < 0 && value >= 0) || (prevValue > 0 && value <= 0)) {
      let lo = prevTime;
      let hi = time;
      let loValue = prevValue;
      for (let k = 0; k < 50 && hi - lo > 1; k++) {
        const mid = (lo + hi) / 2;
        const midValue = fn(mid) - target;
        if ((midValue < 0 && loValue < 0) || (midValue > 0 && loValue > 0)) {
          lo = mid;
          loValue = midValue;
        } else {
          hi = mid;
        }
      }
      results.push({ time: (lo + hi) / 2, rising: value > prevValue });
    }

    prevTime = time;
    prevValue = value;
  }

  return results;
}

/** Erstes steigendes/fallendes Ereignis im Zeitfenster [from, to). */
function firstCrossing(
  crossings: { time: number; rising: boolean }[],
  rising: boolean,
  from: number,
  to: number,
): Date | null {
  const match = crossings.find((c) => c.rising === rising && c.time >= from && c.time < to);
  return match ? new Date(match.time) : null;
}

/**
 * Sonnenereignisse eines lokalen Tages.
 *
 * Ein Ereignis ist `null`, wenn es an diesem Tag nicht eintritt
 * (Polartag, Polarnacht, Übergangstage hoher geografischer Breiten).
 */
export interface SolarEvents {
  /** Beginn der bürgerlichen Morgendämmerung (−6°). */
  civilDawn: Date | null;
  /** Sonnenaufgang (−0,833°). */
  sunrise: Date | null;
  /** Kulmination (höchster Sonnenstand). */
  solarNoon: Date | null;
  /** Sonnenuntergang (−0,833°). */
  sunset: Date | null;
  /** Ende der bürgerlichen Abenddämmerung (−6°). */
  civilDusk: Date | null;
  /** Beginn der nautischen Morgendämmerung (−12°). */
  nauticalDawn: Date | null;
  /** Ende der nautischen Abenddämmerung (−12°). */
  nauticalDusk: Date | null;
  /** Beginn der astronomischen Morgendämmerung (−18°). */
  astronomicalDawn: Date | null;
  /** Ende der astronomischen Abenddämmerung (−18°). */
  astronomicalDusk: Date | null;
}

export type PolarState = 'none' | 'polar-day' | 'polar-night';

export interface DayProfile {
  /** Start des lokalen Tages (00:00 Ortszeit). */
  dayStart: Date;
  /** Ende des lokalen Tages (nächste 00:00 Ortszeit). */
  dayEnd: Date;
  /** Abtastwerte der Sonnenhöhe im Tagesverlauf. */
  samples: { time: number; altitude: number }[];
  /** Höchster Sonnenstand des Tages in Grad. */
  maxAltitude: number;
  /** Tiefster Sonnenstand des Tages in Grad. */
  minAltitude: number;
  /** Sonnenereignisse des Tages. */
  events: SolarEvents;
  /** Sonderfall hoher geografischer Breiten. */
  polar: PolarState;
}

/**
 * Berechnet Höhenprofil und Ereignisse für den lokalen Tag, der durch
 * `dayStart` und `dayEnd` begrenzt wird.
 *
 * @param sampleStepMinutes Auflösung des Höhenprofils für die Kurve
 */
export function buildDayProfile(
  location: GeoLocation,
  dayStart: Date,
  dayEnd: Date,
  sampleStepMinutes = 4,
): DayProfile {
  const from = dayStart.getTime() - 45 * 60 * 1000;
  const to = dayEnd.getTime() + 45 * 60 * 1000;
  const dayFrom = dayStart.getTime();
  const dayTo = dayEnd.getTime();

  const altitudeAt = (time: number): number => sunAltitude(time, location);

  // 1. Höhenprofil für die Kurve
  const samples: { time: number; altitude: number }[] = [];
  const stepMs = Math.max(30_000, Math.round(sampleStepMinutes * 60 * 1000));
  for (let t = dayFrom; t < dayTo; t += stepMs) {
    samples.push({ time: t, altitude: altitudeAt(t) });
  }
  samples.push({ time: dayTo, altitude: altitudeAt(dayTo) });

  let maxAltitude = -Infinity;
  let minAltitude = Infinity;
  for (const sample of samples) {
    if (sample.altitude > maxAltitude) maxAltitude = sample.altitude;
    if (sample.altitude < minAltitude) minAltitude = sample.altitude;
  }

  // 2. Ereignisse per Nullstellensuche
  const targets: Array<[keyof SolarEvents, keyof SolarEvents, number]> = [
    ['sunrise', 'sunset', ELEVATION_SUNRISE_SUNSET],
    ['civilDawn', 'civilDusk', ELEVATION_CIVIL],
    ['nauticalDawn', 'nauticalDusk', ELEVATION_NAUTICAL],
    ['astronomicalDawn', 'astronomicalDusk', ELEVATION_ASTRONOMICAL],
  ];

  const events: SolarEvents = {
    civilDawn: null,
    sunrise: null,
    solarNoon: null,
    sunset: null,
    civilDusk: null,
    nauticalDawn: null,
    nauticalDusk: null,
    astronomicalDawn: null,
    astronomicalDusk: null,
  };

  for (const [dawnKey, duskKey, target] of targets) {
    const crossings = findCrossings(from, to, SEARCH_STEP_MS, altitudeAt, target);
    events[dawnKey] = firstCrossing(crossings, true, dayFrom, dayTo);
    events[duskKey] = firstCrossing(crossings, false, dayFrom, dayTo);
  }

  // 3. Kulmination: Maximum der Sonnenhöhe im Tagesverlauf
  let bestTime = dayFrom;
  let bestAltitude = -Infinity;
  const coarseStep = 2 * 60 * 1000;
  for (let t = dayFrom; t <= dayTo; t += coarseStep) {
    const altitude = altitudeAt(t);
    if (altitude > bestAltitude) {
      bestAltitude = altitude;
      bestTime = t;
    }
  }
  let lo = Math.max(dayFrom, bestTime - coarseStep);
  let hi = Math.min(dayTo, bestTime + coarseStep);
  for (let k = 0; k < 40 && hi - lo > 1000; k++) {
    const m1 = lo + (hi - lo) / 3;
    const m2 = hi - (hi - lo) / 3;
    if (altitudeAt(m1) < altitudeAt(m2)) lo = m1;
    else hi = m2;
  }
  events.solarNoon = new Date((lo + hi) / 2);

  // 4. Sonderfälle hoher Breiten
  let polar: PolarState = 'none';
  if (minAltitude > ELEVATION_SUNRISE_SUNSET) polar = 'polar-day';
  else if (maxAltitude < ELEVATION_SUNRISE_SUNSET) polar = 'polar-night';

  return {
    dayStart,
    dayEnd,
    samples,
    maxAltitude,
    minAltitude,
    events,
    polar,
  };
}

export interface MoonEvents {
  /** Letzter Mondaufgang vor dem Referenzzeitpunkt. */
  previousRise: Date | null;
  /** Letzter Monduntergang vor dem Referenzzeitpunkt. */
  previousSet: Date | null;
  /** Nächster Mondaufgang nach dem Referenzzeitpunkt. */
  nextRise: Date | null;
  /** Nächster Monduntergang nach dem Referenzzeitpunkt. */
  nextSet: Date | null;
}

/**
 * Mondauf- und -untergänge im Umfeld des Referenzzeitpunkts.
 *
 * Da der Mond im Mittel alle 24 h 50 min aufgeht, besitzt nicht jeder
 * Kalendertag einen eigenen Auf- oder Untergang. Es werden daher der
 * vorhergehende und der nächste Auf- bzw. Untergang bestimmt.
 */
export function findMoonEvents(reference: Date, location: GeoLocation): MoonEvents {
  const referenceMs = reference.getTime();
  const from = referenceMs - 30 * 60 * 60 * 1000;
  const to = referenceMs + 30 * 60 * 60 * 1000;

  const altitudeFn = (time: number): number => {
    const moon = moonPosition(time, location);
    return moon.altitude - moonRiseSetAltitude(moon.distanceKm);
  };

  const crossings = findCrossings(from, to, SEARCH_STEP_MS, altitudeFn, 0);
  const rises = crossings.filter((c) => c.rising);
  const sets = crossings.filter((c) => !c.rising);

  const nextRise = rises.find((c) => c.time > referenceMs) ?? null;
  const previousRise = [...rises].reverse().find((c) => c.time <= referenceMs) ?? null;
  const nextSet = sets.find((c) => c.time > referenceMs) ?? null;
  const previousSet = [...sets].reverse().find((c) => c.time <= referenceMs) ?? null;

  return {
    previousRise: previousRise ? new Date(previousRise.time) : null,
    previousSet: previousSet ? new Date(previousSet.time) : null,
    nextRise: nextRise ? new Date(nextRise.time) : null,
    nextSet: nextSet ? new Date(nextSet.time) : null,
  };
}

export type SkyPhase = 'day' | 'civil' | 'nautical' | 'astronomical' | 'night';

/** Einordnung der aktuellen Himmelsphase anhand der Sonnenhöhe. */
export function skyPhase(sunElevation: number): SkyPhase {
  if (sunElevation > 0) return 'day';
  if (sunElevation > ELEVATION_CIVIL) return 'civil';
  if (sunElevation > ELEVATION_NAUTICAL) return 'nautical';
  if (sunElevation > ELEVATION_ASTRONOMICAL) return 'astronomical';
  return 'night';
}
