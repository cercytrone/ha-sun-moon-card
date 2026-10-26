/**
 * lunar-series.ts – KOEFIZIENTENTABELLE, GENERIERT MIT tools/fit-lunar-series.py
 *
 * Abgekürzte Mondreihe (ELP2000, Meeus Anhang III). Die Koeffizienten wurden
 * durch Ausgleichsrechnung gegen eine hochgenaue Referenz (PyEphem) über den
 * Zeitraum 1970–2050 bestimmt und stimmen mit den Werten aus Meeus,
 * "Astronomical Algorithms", Anhang III überein.
 *
 * Restfehler der Näherung:
 *   Länge      0.00267°
 *   Breite     0.00325°
 *   Entfernung 28.6 km
 *
 * Jeder Term besteht aus [iD, iM, iMp, iF, Amplitude]:
 *   Winkel = iD·D + iM·M + iMp·M' + iF·F   (Meeus 47.2–47.5)
 *   D  mittlere Elongation, M mittlere Anomalie der Sonne,
 *   M' mittlere Anomalie des Mondes, F Argument der Breite
 */

/** Terme der ekliptikalen Länge: Amplitude in Grad, sin des Arguments. */
export const LUNAR_LONGITUDE_TERMS: readonly number[][] = [
  [0, 0, 1, 0, 6.288789],
  [2, 0, -1, 0, 1.274034],
  [2, 0, 0, 0, 0.658313],
  [0, 0, 2, 0, 0.213621],
  [0, 1, 0, 0, -0.185045],
  [0, 0, 0, 2, -0.114380],
  [2, 0, -2, 0, 0.058801],
  [2, -1, -1, 0, 0.057052],
  [2, 0, 1, 0, 0.053323],
  [2, -1, 0, 0, 0.045747],
  [0, 1, -1, 0, -0.040917],
  [1, 0, 0, 0, -0.034720],
  [0, 1, 1, 0, -0.030375],
  [2, 0, 0, -2, 0.015326],
  [0, 0, 1, 2, -0.012535],
  [0, 0, 1, -2, 0.010984],
  [4, 0, -1, 0, 0.010674],
  [0, 0, 3, 0, 0.010036],
  [4, 0, -2, 0, 0.008549],
  [2, 1, -1, 0, -0.007886],
  [2, 1, 0, 0, -0.006765],
  [1, 0, -1, 0, -0.005166],
  [1, 1, 0, 0, 0.004950],
  [2, -1, 1, 0, 0.004035],
  [2, 0, 2, 0, 0.003994],
  [4, 0, 0, 0, 0.003859],
  [2, 0, -3, 0, 0.003668],
  [0, 1, -2, 0, -0.002689],
  [2, 0, -1, 2, -0.002599],
  [2, -1, -2, 0, 0.002396],
  [1, 0, 1, 0, -0.002347],
  [2, -2, 0, 0, 0.002235],
  [0, 1, 2, 0, -0.002118],
  [2, 2, -1, -1, -0.001871],
  [2, -2, -1, 0, 0.002053],
  [2, 0, 1, -2, -0.001753],
  [0, 2, 0, 0, -0.001753],
  [2, 0, 0, 2, -0.001594],
  [4, -1, -1, 0, 0.001214],
  [0, 0, 2, 2, -0.001106],
];

/** Terme der ekliptikalen Breite: Amplitude in Grad, sin des Arguments. */
export const LUNAR_LATITUDE_TERMS: readonly number[][] = [
  [0, 0, 0, 1, 5.129327],
  [0, 0, 1, 1, 0.280666],
  [0, 0, 1, -1, 0.277757],
  [2, 0, 0, -1, 0.173245],
  [2, 0, -1, 1, 0.055426],
  [2, 0, -1, -1, 0.046290],
  [2, 0, 0, 1, 0.032587],
  [0, 0, 2, 1, 0.017204],
  [2, 0, 1, -1, 0.009267],
  [0, 0, 2, -1, 0.008785],
  [2, -1, 0, -1, 0.008216],
  [2, 0, -2, -1, 0.004332],
  [2, 0, 1, 1, 0.004200],
  [2, 1, 0, -1, -0.003312],
  [2, -1, -1, 1, 0.002465],
  [2, -1, 0, 1, 0.002210],
  [2, -1, -1, -1, 0.002068],
  [0, 1, -1, -1, -0.001859],
  [4, 0, -1, -1, 0.001831],
  [0, 1, 0, 1, -0.001802],
  [0, 0, 0, 3, -0.001752],
  [0, 1, -1, 1, -0.001570],
  [1, 0, 0, 1, -0.001499],
  [0, 1, 1, 1, -0.001472],
];

/** Terme der Entfernung: Amplitude in Kilometern, cos des Arguments. */
export const LUNAR_DISTANCE_TERMS: readonly number[][] = [
  [0, 0, 1, 0, -20905.375327],
  [2, 0, -1, 0, -3699.128410],
  [2, 0, 0, 0, -2955.997749],
  [0, 0, 2, 0, -569.950385],
  [2, 0, -2, 0, 246.243544],
  [2, -1, 0, 0, -204.552044],
  [2, 0, 1, 0, -170.733561],
  [2, -1, -1, 0, -152.113661],
  [0, 1, -1, 0, -129.592159],
  [1, 0, 0, 0, 108.761096],
  [0, 1, 1, 0, 104.749015],
  [0, 0, 1, -2, 79.421761],
  [0, 1, 0, 0, 48.881156],
  [4, 0, -1, 0, -34.774658],
  [2, 1, 0, 0, 30.794417],
  [2, 1, -1, 0, 24.217654],
  [0, 0, 3, 0, -23.211076],
  [4, 0, -2, 0, -21.685795],
];

/** Mittlere Entfernung Erde–Mond in Kilometern. */
export const LUNAR_MEAN_DISTANCE_KM = 385000.49;

/** Konstante Korrektur der mittleren Länge in Grad. */
export const LUNAR_LONGITUDE_OFFSET = 0.012739;
