#!/usr/bin/env python3
"""
Erzeugt unabhängige Referenzwerte für die Tests der Astronomie-Funktionen.

Verwendet werden zwei etablierte, von dieser Card unabhängige Bibliotheken:

  * astral – die Bibliothek, die auch die Home-Assistant-Sun-Integration
             (homeassistant/components/sun) für Sonnenaufgang, Sonnenuntergang
             und Dämmerungszeiten verwendet.
  * ephem  – PyEphem, Implementierung der Standardreihen (VSOP87/ELP2000),
             hier als hochgenaue Referenz für die Monddaten.

Aufruf
------
    python3 -m venv .venv && .venv/bin/pip install astral ephem
    python3 tools/reference-values.py > tests/fixtures/reference.json

Die erzeugte Datei wird von tests/astronomy.reference.test.ts als Prüfgrundlage
verwendet. Toleranzen siehe dort.
"""

from __future__ import annotations

import datetime as dt
import json
import math
from zoneinfo import ZoneInfo

import astral
import astral.sun
import ephem

CASES = [
    # name, latitude, longitude, tz, dates
    ("Berlin_Winter", 52.5200, 13.4050, "Europe/Berlin", ["2026-01-15", "2026-12-21"]),
    ("Berlin_Sommer", 52.5200, 13.4050, "Europe/Berlin", ["2026-06-21", "2026-07-01"]),
    ("Berlin_DST_Wechsel", 52.5200, 13.4050, "Europe/Berlin", ["2026-03-29", "2026-10-25"]),
    ("Berlin_Herbst", 52.5200, 13.4050, "Europe/Berlin", ["2026-10-26"]),
    ("New_York", 40.7128, -74.0060, "America/New_York", ["2026-06-21", "2026-03-08"]),
    ("Sydney", -33.8688, 151.2093, "Australia/Sydney", ["2026-06-21", "2026-12-21"]),
    ("Quito_Aequator", -0.1807, -78.4678, "America/Guayaquil", ["2026-03-20", "2026-06-21"]),
    ("Longyearbyen_Polartag", 78.2232, 15.6469, "Europe/Oslo", ["2026-06-21"]),
    ("Longyearbyen_Polarnacht", 78.2232, 15.6469, "Europe/Oslo", ["2026-12-21"]),
    ("Longyearbyen_Uebergang", 78.2232, 15.6469, "Europe/Oslo", ["2026-10-05", "2026-02-20"]),
    ("Tromsoe_Mitternachtssonne", 69.6492, 18.9553, "Europe/Oslo", ["2026-06-21", "2026-11-27"]),
    ("Kapstadt", -33.9249, 18.4241, "Africa/Johannesburg", ["2026-06-21"]),
]

# Sonnenhöhe / Azimut zu diesen lokalen Uhrzeiten prüfen (Stunde, Minute)
POSITION_TIMES = [(3, 20), (6, 0), (9, 30), (12, 0), (15, 45), (18, 30), (21, 10), (23, 50)]

# Mond-Referenzzeitpunkte (UTC) – decken verschiedene Phasen ab
MOON_TIMES_UTC = [
    "2026-01-03T10:03:00Z",  # nahe Vollmond
    "2026-01-18T19:52:00Z",  # nahe Neumond
    "2026-10-26T18:00:00Z",
    "2026-10-26T00:00:00Z",
    "2026-04-01T12:00:00Z",
    "2026-07-09T03:00:00Z",
    "2025-06-11T07:44:00Z",  # Vollmond
    "2024-01-25T17:54:00Z",  # Vollmond
    "2024-01-11T11:57:00Z",  # Neumond
]


def moon_rise_set_horizon(distance_km: float) -> str:
    """Äquivalente PyEphem-Horizonthöhe für die Meeus-Standardhöhe h0."""
    parallax = math.degrees(math.asin(6378.14 / distance_km))
    # topozentrische Höhe des Mondmittelpunkts beim Auf-/Untergang
    return f"{-(0.2725 * parallax + 0.5667):.6f}"


def moon_rising_reference(observer, moon, moment):
    observer.horizon = moon_rise_set_horizon(
        float(moon.earth_distance) * ephem.meters_per_au / 1000.0
    )
    observer.date = moment
    return observer.next_rising(moon, use_center=True)


def moon_setting_reference(observer, moon, moment):
    observer.horizon = moon_rise_set_horizon(
        float(moon.earth_distance) * ephem.meters_per_au / 1000.0
    )
    observer.date = moment
    return observer.next_setting(moon, use_center=True)


def iso(value: dt.datetime | None) -> str | None:
    if value is None:
        return None
    return value.isoformat()


def main() -> None:
    result = {
        "generatedWith": {
            "astral": astral.__version__ if hasattr(astral, "__version__") else "3.x",
            "ephem": ephem.__version__,
        },
        "note": "Referenzwerte wurden mit astral (Sun-Integration von Home Assistant) "
        "und PyEphem erzeugt. Astronomische Höhen sind geometrisch (ohne Refraktion).",
        "cases": [],
    }

    for name, lat, lon, tz_name, dates in CASES:
        tz = ZoneInfo(tz_name)
        observer = astral.Observer(latitude=lat, longitude=lon, elevation=0.0)
        for day in dates:
            date = dt.date.fromisoformat(day)
            entry: dict = {
                "name": f"{name}_{day}",
                "latitude": lat,
                "longitude": lon,
                "timeZone": tz_name,
                "date": day,
            }

            def safe(fn, *args, **kwargs):
                try:
                    return iso(fn(*args, **kwargs))
                except Exception:  # astral wirft ValueError bei Polartag/Polarnacht
                    return None

            entry["sun"] = {
                "sunrise": safe(astral.sun.sunrise, observer, date, tz),
                "sunset": safe(astral.sun.sunset, observer, date, tz),
                "civilDawn": safe(
                    astral.sun.dawn, observer, date, astral.Depression.CIVIL.value, tz
                ),
                "civilDusk": safe(
                    astral.sun.dusk, observer, date, astral.Depression.CIVIL.value, tz
                ),
                "nauticalDawn": safe(
                    astral.sun.dawn, observer, date, astral.Depression.NAUTICAL.value, tz
                ),
                "nauticalDusk": safe(
                    astral.sun.dusk, observer, date, astral.Depression.NAUTICAL.value, tz
                ),
                "astronomicalDawn": safe(
                    astral.sun.dawn, observer, date, astral.Depression.ASTRONOMICAL.value, tz
                ),
                "astronomicalDusk": safe(
                    astral.sun.dusk, observer, date, astral.Depression.ASTRONOMICAL.value, tz
                ),
                "solarNoon": safe(astral.sun.noon, observer, date, tz),
            }

            positions = []
            ephem_observer_pos = ephem.Observer()
            ephem_observer_pos.lat = math.radians(lat)
            ephem_observer_pos.lon = math.radians(lon)
            ephem_observer_pos.pressure = 0.0
            sun_body = ephem.Sun()
            for hour, minute in POSITION_TIMES:
                moment = dt.datetime.combine(date, dt.time(hour, minute), tzinfo=tz)
                ephem_observer_pos.date = moment
                sun_body.compute(ephem_observer_pos)
                positions.append(
                    {
                        "time": moment.isoformat(),
                        "altitude": astral.sun.elevation(observer, moment, with_refraction=False),
                        "azimuth": astral.sun.azimuth(observer, moment),
                        "altitudeEphem": math.degrees(float(sun_body.alt)),
                    }
                )
            # Unabhängige Präzisionsreferenz: PyEphem (VSOP87), gerechnet für
            # den lokalen Tag. Im Gegensatz zu astral werden Polartag und
            # Polarnacht explizit als "kein Ereignis" gemeldet.
            ephem_observer = ephem.Observer()
            ephem_observer.lat = math.radians(lat)
            ephem_observer.lon = math.radians(lon)
            ephem_observer.pressure = 0.0  # keine Refraktion
            day_start_local = dt.datetime.combine(date, dt.time(0, 0), tzinfo=tz)
            day_end_local = dt.datetime.combine(
                date + dt.timedelta(days=1), dt.time(0, 0), tzinfo=tz
            )
            ephem_events = {}
            for label, horizon in [
                ("sunrise", "-0.833"),
                ("sunset", "-0.833"),
                ("civilDawn", "-6"),
                ("civilDusk", "-6"),
                ("nauticalDawn", "-12"),
                ("nauticalDusk", "-12"),
                ("astronomicalDawn", "-18"),
                ("astronomicalDusk", "-18"),
            ]:
                ephem_observer.date = day_start_local
                ephem_observer.horizon = horizon
                sun_body = ephem.Sun()
                try:
                    rising = label.endswith("Dawn") or label == "sunrise"
                    moment = (
                        ephem_observer.next_rising(sun_body, use_center=True)
                        if rising
                        else ephem_observer.next_setting(sun_body, use_center=True)
                    )
                    moment = ephem.to_timezone(moment, ZoneInfo("UTC")) if False else moment
                    value = ephem.Date(moment).datetime().replace(tzinfo=dt.timezone.utc)
                    if day_start_local <= value < day_end_local:
                        ephem_events[label] = value.astimezone(tz).isoformat()
                    else:
                        ephem_events[label] = None
                except (ephem.NeverUpError, ephem.AlwaysUpError):
                    ephem_events[label] = None
            entry["sunEphem"] = ephem_events

            entry["positions"] = positions
            result["cases"].append(entry)

    # Mondreferenzwerte (PyEphem, hochgenau)
    moon_cases = []
    observer = ephem.Observer()
    observer.pressure = 0.0  # keine Refraktion
    for name, lat, lon, tz_name, _ in CASES[:4]:
        observer.lat = math.radians(lat)
        observer.lon = math.radians(lon)
        for stamp in MOON_TIMES_UTC:
            moment = dt.datetime.fromisoformat(stamp.replace("Z", "+00:00"))
            observer.date = moment
            moon = ephem.Moon(observer)
            sun = ephem.Sun(observer)
            # Geozentrische Werte: Entfernung Erde–Mond und Positionswinkel der
            # beleuchteten Seite werden geozentrisch definiert (Meeus 48.5).
            moon_geo = ephem.Moon()
            moon_geo.compute(moment)
            sun_geo = ephem.Sun()
            sun_geo.compute(moment)
            # Positionswinkel der Sonne relativ zum Mond (Nord über Ost)
            d_ra = float(sun_geo.ra) - float(moon_geo.ra)
            dec_s = float(sun_geo.dec)
            dec_m = float(moon_geo.dec)
            pa = math.degrees(
                math.atan2(
                    math.sin(d_ra),
                    math.cos(dec_m) * math.tan(dec_s) - math.sin(dec_m) * math.cos(d_ra),
                )
            ) % 360
            moon_cases.append(
                {
                    "name": f"{name}_{stamp}",
                    "latitude": lat,
                    "longitude": lon,
                    "timeUtc": stamp,
                    "illumination": float(moon.phase) / 100.0,
                    "altitude": math.degrees(float(moon.alt)),
                    "azimuth": math.degrees(float(moon.az)),
                    "distanceKm": float(moon_geo.earth_distance) * ephem.meters_per_au / 1000.0,
                    "elongation": math.degrees(float(ephem.separation(moon_geo, sun_geo))),
                    "brightLimbPositionAngle": pa,
                    # Auf- und Untergang nach Meeus 15: Standardhöhe des
                    # Mondmittelpunkts (geozentrisch) h0 = 0,7275·π − 0,5667°.
                    # PyEphem rechnet topozentrisch (Parallaxe enthalten) und
                    # ohne Refraktion (pressure = 0), daher gilt als äquivalente
                    # Horizont Höhe: h0 − π = −(0,2725·π + 0,5667)° ≈ −0,826°.
                    "nextRising": iso(
                        ephem.localtime(moon_rising_reference(observer, moon, moment))
                    ),
                    "nextSetting": iso(
                        ephem.localtime(moon_setting_reference(observer, moon, moment))
                    ),
                }
            )
    result["moonCases"] = moon_cases

    print(json.dumps(result, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
