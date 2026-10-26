/**
 * icons.ts
 *
 * Kleine SVG-Symbole. Sie werden inline erzeugt – es gibt keine externen
 * Bilddateien und keine Icon-Schriftarten. Alle Symbole erben die
 * Textfarbe (`currentColor`), soweit nicht anders angegeben.
 */

import { svg, type TemplateResult } from 'lit';

/** Sonne über dem Horizont (Sonnenaufgang). */
export function iconSunrise(size = 16, color = 'currentColor'): TemplateResult {
  return svg`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18h16" stroke="${color}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 18a4.5 4.5 0 0 1 9 0" stroke="${color}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 3v2.2M12 3l-1.8 1.6M12 3l1.8 1.6" stroke="${color}" stroke-width="1.5"
        stroke-linecap="round" opacity="0.85" />
      <path d="M5.6 6.2 7 7.6M18.4 6.2 17 7.6" stroke="${color}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.55" />
    </svg>
  `;
}

/** Sonne unter dem Horizont (Sonnenuntergang). */
export function iconSunset(size = 16, color = 'currentColor'): TemplateResult {
  return svg`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13h16" stroke="${color}" stroke-width="1.6" stroke-linecap="round" opacity="0.75" />
      <path d="M7.5 13a4.5 4.5 0 0 0 9 0" stroke="${color}" stroke-width="1.6" stroke-linecap="round" />
      <path d="M12 17.5v2M9.5 19.5h5" stroke="${color}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.7" />
      <path d="M5.6 4.6 7 6M18.4 4.6 17 6" stroke="${color}" stroke-width="1.4"
        stroke-linecap="round" opacity="0.5" />
    </svg>
  `;
}

/** Morgendämmerung. */
export function iconDawn(size = 16, color = 'currentColor'): TemplateResult {
  return svg`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19h18" stroke="${color}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 19a6 6 0 0 1 12 0" stroke="${color}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 6.5v3M10 8.2l2-2 2 2" stroke="${color}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

/** Abenddämmerung. */
export function iconDusk(size = 16, color = 'currentColor'): TemplateResult {
  return svg`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 13h18" stroke="${color}" stroke-width="1.5" stroke-linecap="round" opacity="0.6" />
      <path d="M6 13a6 6 0 0 0 12 0" stroke="${color}" stroke-width="1.4"
        stroke-dasharray="2.5 2.5" stroke-linecap="round" opacity="0.85" />
      <path d="M12 15v3M10 16.8l2 2 2-2" stroke="${color}" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

/** Sonne (Strahlenkranz). */
export function iconSun(size = 20, color = 'currentColor'): TemplateResult {
  return svg`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" fill="${color}" />
      <g stroke="${color}" stroke-width="1.5" stroke-linecap="round" opacity="0.85">
        <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2" />
        <path d="M5.4 5.4 7 7M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" opacity="0.6" />
      </g>
    </svg>
  `;
}

/** Hinweis- bzw. Warnsymbol. */
export function iconWarning(size = 18, color = 'currentColor'): TemplateResult {
  return svg`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.6 21.2 20H2.8L12 3.6Z" stroke="${color}" stroke-width="1.5"
        stroke-linejoin="round" opacity="0.85" />
      <path d="M12 9.5v4.2" stroke="${color}" stroke-width="1.7" stroke-linecap="round" />
      <circle cx="12" cy="16.6" r="0.95" fill="${color}" />
    </svg>
  `;
}
