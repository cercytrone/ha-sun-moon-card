/**
 * actions.ts
 *
 * Klick-Aktionen im Home-Assistant-Standard.
 *
 * Home Assistant stellt dafür `custom-card-helpers` bereit; die Karte kommt
 * aber ohne Laufzeitabhängigkeiten aus und bildet den kleinen Teil selbst ab,
 * den sie braucht. Die Feldnamen entsprechen dem Standard (`tap_action`,
 * `hold_action`, `double_tap_action` mit `action`, `entity`,
 * `navigation_path`, `service`/`perform_action`, `data`, `target`), damit
 * sich Aktionen aus anderen Karten unverändert übernehmen lassen.
 *
 * Alle Aktionen laufen über Ereignisse oder `hass.callService`; es gibt
 * keine Netzwerkzugriffe aus dieser Datei.
 */

import type { ActionConfig, HomeAssistant, ResolvedConfig } from './types.js';

/** Löst ein Ereignis aus, das auch über Schattenwurzelgrenzen hinweg ankommt. */
function fire(target: EventTarget, type: string, detail?: unknown): void {
  target.dispatchEvent(
    new CustomEvent(type, { detail, bubbles: true, composed: true }),
  );
}

/** Zerlegt „domain.service“; liegt kein gültiges Paar vor, folgt `null`. */
function splitService(value: unknown): [string, string] | null {
  if (typeof value !== 'string') return null;
  const [domain, service] = value.split('.', 2);
  if (!domain || !service) return null;
  return [domain, service];
}

/** Ruft einen Dienst ab, sofern Home Assistant die Funktion bereitstellt. */
function callService(
  hass: HomeAssistant | undefined,
  domain: string,
  service: string,
  data?: Record<string, unknown>,
  target?: Record<string, unknown>,
): void {
  if (typeof hass?.callService !== 'function') return;
  void hass.callService(domain, service, data, target);
}

/**
 * Führt eine Aktion aus.
 *
 * @param node    Element, von dem die Aktion ausgeht (Ereignisquelle).
 * @param hass    Home-Assistant-Objekt für Dienstaufrufe.
 * @param config  Aufgelöste Konfiguration (liefert die Standard-Entität).
 * @param action  Auszuführende Aktion; `null` ruft `fallback`.
 * @param fallbackWird ausgeführt, wenn keine Aktion konfiguriert ist oder die
 *                 Aktion `open-popup` verlangt. So bleibt der Minimalstreifen
 *                 ohne Konfiguration beim Overlay.
 */
export function runAction(
  node: HTMLElement,
  hass: HomeAssistant | undefined,
  config: Pick<ResolvedConfig, 'entity'>,
  action: ActionConfig | null,
  fallback?: () => void,
): void {
  if (!action) {
    fallback?.();
    return;
  }

  switch (action.action) {
    case 'none':
      return;

    // Karteneigene Aktion: Overlay mit der vollständigen Karte.
    case 'open-popup':
      fallback?.();
      return;

    case 'more-info':
      fire(node, 'hass-more-info', { entityId: action.entity ?? config.entity });
      return;

    case 'navigate': {
      const path = typeof action.navigation_path === 'string' ? action.navigation_path : '';
      if (path === '') return;
      history.pushState(null, '', path);
      fire(window, 'location-changed', { replace: false });
      return;
    }

    case 'url': {
      const url = typeof action.url_path === 'string' ? action.url_path : '';
      if (url === '') return;
      window.open(url, typeof action.url_target === 'string' ? action.url_target : '_blank');
      return;
    }

    case 'toggle':
      callService(hass, 'homeassistant', 'toggle', {
        entity_id: action.entity ?? config.entity,
      });
      return;

    case 'call-service':
    case 'perform-action': {
      const parts = splitService(action.service ?? action.perform_action);
      if (!parts) return;
      const data =
        typeof action.data === 'object' && action.data !== null
          ? action.data
          : typeof action.service_data === 'object' && action.service_data !== null
            ? (action.service_data as Record<string, unknown>)
            : undefined;
      const target =
        typeof action.target === 'object' && action.target !== null ? action.target : undefined;
      callService(hass, parts[0], parts[1], data, target);
      return;
    }

    case 'fire-dom-event':
      // Standardausweg für Erweiterungen wie Browser Mod.
      fire(window, 'll-custom', action);
      return;

    default:
      // Unbekannte Aktionen ignoriert auch Home Assistant stillschweigend.
      return;
  }
}
