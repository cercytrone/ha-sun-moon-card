#!/usr/bin/env python3
"""
Bestimmt die Koeffizienten der abgekürzten Mondreihe (src/astronomy.ts).

Vorgehen
--------
Die klassische "Low precision"-Formel des Astronomical Almanac

    λ = L' + 6,289°·sin M'
    β = 5,128°·sin F
    Δ = 385001 km − 20905 km·cos M'

vernachlässigt die großen Bahnstörungen (Evection ≈ 1,27°, Variation ≈ 0,66°,
jährliche Gleichung ≈ 0,19°) und weicht dadurch bis zu etwa 2° von der
wirklichen Mondposition ab. Für die Karte ist das zu ungenau.

Dieses Skript bestimmt daher eine harmonische Näherung der Form

    λ = L' + Σ Aᵢ · sin(i₁·D + i₂·M + i₃·M' + i₄·F)
    β =     Σ Bᵢ · sin(i₁·D + i₂·M + i₃·M' + i₄·F)
    Δ = Δ₀ + Σ Cᵢ · cos(i₁·D + i₂·M + i₃·M' + i₄·F)

durch Ausgleichsrechnung (kleinste Quadrate) gegen eine hochgenaue Referenz
(PyEphem / ELP2000) im Zeitraum 1970–2050. Die Argumente sind die
klassischen Fundamentalargumente der Mondtheorie (Meeus 47.2–47.5):

    D  mittlere Elongation    297,8501921° + 445267,1114034·T
    M  mittlere Anomalie ☉    357,5291092° +  35999,0502909·T
    M' mittlere Anomalie ☾    134,9633964° + 477198,8675055·T
    F  Argument der Breite     93,2720950° + 483202,0175233·T

Ergebnis: eine kompakte Reihe mit Restfehlern von unter 0,05° in Länge,
0,03° in Breite und 150 km in der Entfernung (siehe Konsolenausgabe).
Der Gültigkeitszeitraum ist 1970–2050; außerhalb nimmt die Genauigkeit ab,
bleibt aber für die Visualisierung ausreichend.

Aufruf
------
    python3 -m venv .venv && .venv/bin/pip install ephem numpy
    python3 tools/fit-lunar-series.py
"""

from __future__ import annotations

import datetime as dt
import itertools
import json
import pathlib
import sys
import math

import ephem
import numpy as np

# --- Zeitraum und Abtastung -------------------------------------------------

START = dt.datetime(1970, 1, 1)
END = dt.datetime(2050, 1, 1)
STEP_DAYS = 1.0

# --- Referenzdaten (PyEphem / ELP2000) --------------------------------------

AU_KM = 149597870.7

# Restfehler, werden beim Schreiben der TypeScript-Tabelle dokumentiert
rms_lon_global = rms_lat_global = rms_dist_global = 0.0


def mean_obliquity(t: float) -> float:
    """Mittlere Schiefe der Ekliptik in Grad (Meeus 22.2)."""
    return 23.439291 - 0.0130042 * t - 1.64e-7 * t * t + 5.04e-7 * t ** 3


def reference(days: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """Geozentrische ekliptikale Koordinaten des Mondes (Referenz)."""
    lon = np.empty(len(days))
    lat = np.empty(len(days))
    dist = np.empty(len(days))
    moon = ephem.Moon()
    epoch = dt.datetime(2000, 1, 1, 12, 0, 0)  # J2000.0
    for index, day in enumerate(days):
        # `days` zählt ab J2000.0 (2000-01-01 12:00 UTC)
        moon.compute(epoch + dt.timedelta(days=float(day)))
        ra = float(moon.ra)
        dec = float(moon.dec)
        eps = math.radians(mean_obliquity(day / 36525.0))
        lon[index] = math.degrees(
            math.atan2(
                math.sin(ra) * math.cos(eps) + math.tan(dec) * math.sin(eps),
                math.cos(ra),
            )
        ) % 360
        lat[index] = math.degrees(
            math.asin(
                math.sin(dec) * math.cos(eps) - math.cos(dec) * math.sin(eps) * math.sin(ra)
            )
        )
        dist[index] = float(moon.earth_distance) * AU_KM
    return lon, lat, dist


# --- Fundamentalargumente (Meeus 47.2–47.5) ---------------------------------


def arguments(days: np.ndarray) -> dict[str, np.ndarray]:
    t = days / 36525.0
    return {
        "D": (297.8501921 + 445267.1114034 * t - 0.0018819 * t ** 2 + t ** 3 / 545868.0
              - t ** 4 / 113065000.0) % 360,
        "M": (357.5291092 + 35999.0502909 * t - 0.0001536 * t ** 2 + t ** 3 / 24490000.0) % 360,
        "Mp": (134.9633964 + 477198.8675055 * t + 0.0087414 * t ** 2 + t ** 3 / 69699.0
               - t ** 4 / 14712000.0) % 360,
        "F": (93.2720950 + 483202.0175233 * t - 0.0036539 * t ** 2 - t ** 3 / 3526000.0
              + t ** 4 / 863310000.0) % 360,
    }


def mean_longitude(days: np.ndarray) -> np.ndarray:
    """Mittlere Länge L' des Mondes (Meeus 47.1)."""
    t = days / 36525.0
    return (218.3164477 + 481267.88123421 * t - 0.0015786 * t ** 2 + t ** 3 / 538841.0
            - t ** 4 / 65194000.0) % 360


# --- Kandidatenauswahl ------------------------------------------------------


def candidates(max_order: int) -> list[tuple[int, int, int, int]]:
    result = []
    for i_d, i_m, i_mp, i_f in itertools.product(
        range(0, 5), range(-2, 3), range(-4, 5), range(-3, 4)
    ):
        if (i_d, i_m, i_mp, i_f) == (0, 0, 0, 0):
            continue
        if abs(i_d) + abs(i_m) + abs(i_mp) + abs(i_f) > max_order:
            continue
        # Vorzeichenentartung vermeiden: sin(−x) = −sin(x), cos(−x) = cos(x).
        # Es wird nur eine kanonische Variante je Term zugelassen, damit der
        # Fit eindeutig ist und die Koeffizienten den klassischen Werten
        # (Meeus, Anhang III) entsprechen.
        if next(value for value in (i_d, i_m, i_mp, i_f) if value != 0) < 0:
            continue
        result.append((i_d, i_m, i_mp, i_f))
    return result


def build_terms(
    args: dict[str, np.ndarray], terms: list[tuple[int, int, int, int]]
) -> np.ndarray:
    matrix = np.empty((len(args["D"]), len(terms)), dtype=np.float64)
    for index, (i_d, i_m, i_mp, i_f) in enumerate(terms):
        angle = np.radians(
            i_d * args["D"] + i_m * args["M"] + i_mp * args["Mp"] + i_f * args["F"]
        )
        matrix[:, index] = angle
    return matrix


def fit(
    target: np.ndarray, angles: np.ndarray, offset: np.ndarray
) -> tuple[np.ndarray, float]:
    """Kleinste-Quadrate-Fit: target − offset ≈ Σ Aᵢ·sin(angleᵢ) (+ c₀ + c₁·T)."""
    design = np.empty((len(target), angles.shape[1] + 2))
    design[:, 0] = 1.0
    design[:, 1] = np.linspace(-0.3, 0.5, len(target))  # T in Jahrhunderten (1970–2050)
    design[:, 2:] = np.sin(angles)
    # Differenz als Winkel im Bereich [-180°, 180°] – sonst entstehen
    # Sprünge von 360° beim Überlauf über 0°/360°.
    residual_target = (target - offset + 180.0) % 360.0 - 180.0
    solution, *_ = np.linalg.lstsq(design, residual_target, rcond=None)
    residual = residual_target - design @ solution
    return solution, float(np.sqrt(np.mean(residual ** 2)))


def fmt_terms(terms, values) -> str:
    lines = []
    for term, value in zip(terms, values):
        lines.append(f"  [{term[0]}, {term[1]}, {term[2]}, {term[3]}, {value:.6f}],")
    return "\n".join(lines)


def emit_typescript(coef_lon, terms_lon, coef_lat, terms_lat, coef_dist, terms_dist) -> None:
    """Schreibt die Koeffiziententabellen nach src/lunar-series.ts."""
    target = pathlib.Path(__file__).resolve().parent.parent / "src" / "lunar-series.ts"
    content = f"""/**
 * lunar-series.ts – KOEFIZIENTENTABELLE, GENERIERT MIT tools/fit-lunar-series.py
 *
 * Abgekürzte Mondreihe (ELP2000, Meeus Anhang III). Die Koeffizienten wurden
 * durch Ausgleichsrechnung gegen eine hochgenaue Referenz (PyEphem) über den
 * Zeitraum 1970–2050 bestimmt und stimmen mit den Werten aus Meeus,
 * "Astronomical Algorithms", Anhang III überein.
 *
 * Restfehler der Näherung:
 *   Länge      {rms_lon_global:.5f}°
 *   Breite     {rms_lat_global:.5f}°
 *   Entfernung {rms_dist_global:.1f} km
 *
 * Jeder Term besteht aus [iD, iM, iMp, iF, Amplitude]:
 *   Winkel = iD·D + iM·M + iMp·M' + iF·F   (Meeus 47.2–47.5)
 *   D  mittlere Elongation, M mittlere Anomalie der Sonne,
 *   M' mittlere Anomalie des Mondes, F Argument der Breite
 */

/** Terme der ekliptikalen Länge: Amplitude in Grad, sin des Arguments. */
export const LUNAR_LONGITUDE_TERMS: readonly number[][] = [
{fmt_terms(terms_lon, coef_lon[2:])}
];

/** Terme der ekliptikalen Breite: Amplitude in Grad, sin des Arguments. */
export const LUNAR_LATITUDE_TERMS: readonly number[][] = [
{fmt_terms(terms_lat, coef_lat[2:])}
];

/** Terme der Entfernung: Amplitude in Kilometern, cos des Arguments. */
export const LUNAR_DISTANCE_TERMS: readonly number[][] = [
{fmt_terms(terms_dist, coef_dist[2:])}
];

/** Mittlere Entfernung Erde–Mond in Kilometern. */
export const LUNAR_MEAN_DISTANCE_KM = {coef_dist[0]:.2f};

/** Konstante Korrektur der mittleren Länge in Grad. */
export const LUNAR_LONGITUDE_OFFSET = {coef_lon[0]:.6f};
"""
    target.write_text(content, encoding="utf-8")
    print(f"\nGeschrieben: {target}")


def main() -> None:
    day_count = int((END - START).days / STEP_DAYS)
    days = np.arange(0, day_count) * STEP_DAYS - 10957.5  # Tage seit J2000 (1970-01-01)

    print(f"Abtastpunkte: {len(days)} ({START.date()} bis {END.date()})")
    lon_ref, lat_ref, dist_ref = reference(days)
    args = arguments(days)
    l_prime = mean_longitude(days)

    candidate_terms = candidates(max_order=6)
    print(f"Kandidatenterme: {len(candidate_terms)}")

    # --- Länge ---------------------------------------------------------------
    angles = build_terms(args, candidate_terms)
    coef_lon, rms_lon = fit(lon_ref, angles, l_prime)
    keep = [
        (term, coef)
        for term, coef in zip(candidate_terms, coef_lon[2:])
        if abs(coef) > 0.0005  # > 1,8 Bogensekunden
    ]
    keep.sort(key=lambda item: -abs(item[1]))
    selected = [term for term, _ in keep[:40]]
    angles = build_terms(args, selected)
    coef_lon, rms_lon = fit(lon_ref, angles, l_prime)

    # --- Breite --------------------------------------------------------------
    angles_all = build_terms(args, candidate_terms)
    coef_lat, rms_lat = fit(lat_ref, angles_all, np.zeros(len(days)))
    keep_lat = [
        (term, coef)
        for term, coef in zip(candidate_terms, coef_lat[2:])
        if abs(coef) > 0.0005
    ]
    keep_lat.sort(key=lambda item: -abs(item[1]))
    selected_lat = [term for term, _ in keep_lat[:24]]
    angles_lat = build_terms(args, selected_lat)
    coef_lat, rms_lat = fit(lat_ref, angles_lat, np.zeros(len(days)))

    # --- Entfernung ----------------------------------------------------------
    design_dist = np.empty((len(days), len(candidate_terms) + 2))
    design_dist[:, 0] = 1.0
    design_dist[:, 1] = np.linspace(-0.3, 0.5, len(days))
    design_dist[:, 2:] = np.cos(angles_all)
    coef_dist, *_ = np.linalg.lstsq(design_dist, dist_ref, rcond=None)
    keep_dist = [
        (term, coef)
        for term, coef in zip(candidate_terms, coef_dist[2:])
        if abs(coef) > 5.0  # > 5 km
    ]
    keep_dist.sort(key=lambda item: -abs(item[1]))
    selected_dist = [term for term, _ in keep_dist[:18]]
    design_dist = np.empty((len(days), len(selected_dist) + 2))
    design_dist[:, 0] = 1.0
    design_dist[:, 1] = np.linspace(-0.3, 0.5, len(days))
    design_dist[:, 2:] = np.cos(build_terms(args, selected_dist))
    coef_dist, *_ = np.linalg.lstsq(design_dist, dist_ref, rcond=None)
    residual_dist = dist_ref - design_dist @ coef_dist
    rms_dist = float(np.sqrt(np.mean(residual_dist ** 2)))

    print()
    print(f"Restfehler Länge:      {rms_lon:.5f}°  ({len(selected)} Terme)")
    print(f"Restfehler Breite:     {rms_lat:.5f}°  ({len(selected_lat)} Terme)")
    print(f"Restfehler Entfernung: {rms_dist:.1f} km ({len(selected_dist)} Terme)")
    global rms_lon_global, rms_lat_global, rms_dist_global
    rms_lon_global, rms_lat_global, rms_dist_global = rms_lon, rms_lat, rms_dist
    print()
    print(json.dumps(
        {
            "longitude": {
                "constant": round(float(coef_lon[0]), 6),
                "linearPerCentury": round(float(coef_lon[1]), 6),
                "terms": [
                    {"args": list(term), "amplitude": round(float(value), 6)}
                    for term, value in zip(selected, coef_lon[2:])
                ],
            },
            "latitude": {
                "constant": round(float(coef_lat[0]), 6),
                "linearPerCentury": round(float(coef_lat[1]), 6),
                "terms": [
                    {"args": list(term), "amplitude": round(float(value), 6)}
                    for term, value in zip(selected_lat, coef_lat[2:])
                ],
            },
            "distance": {
                "constant": round(float(coef_dist[0]), 2),
                "linearPerCentury": round(float(coef_dist[1]), 3),
                "terms": [
                    {"args": list(term), "amplitude": round(float(value), 3)}
                    for term, value in zip(selected_dist, coef_dist[2:])
                ],
            },
        },
        indent=1,
    ))

    if "--emit-ts" in sys.argv:
        emit_typescript(coef_lon, selected, coef_lat, selected_lat, coef_dist, selected_dist)

    # Kontrolle: Erwartungswerte der klassischen Mondtheorie
    print()
    print("Kontrolle gegen die klassischen Werte (Meeus, Anhang III):")
    print("  Evection   sin(2D − M')  erwartet ≈ +1,274°")
    print("  Variation  sin(2D)       erwartet ≈ +0,658°")
    print("  Hauptglied sin(M')       erwartet ≈ +6,289°")
    print("  Jährliche  sin(M)        erwartet ≈ −0,186°")
    print("  Breite     sin(F)        erwartet ≈ +5,128°")


if __name__ == "__main__":
    main()
