/**
 * sun-moon-card.ts
 *
 * Die eigentliche Custom Card.
 *
 * Aufbau
 * ------
 *   ┌──────────────────────────────────────────────┐
 *   │ Kopfzeile: Ort · Datum · Himmelsphase        │
 *   ├───────────────────────────────┬──────────────┤
 *   │ Tagesverlauf (SVG-Chart)      │ Himmelsansicht│
 *   ├───────────────────────────────┴──────────────┤
 *   │ Dämmerung · Sonnenaufgang · Sonnenuntergang  │
 *   ├──────────────────────────────────────────────┤
 *   │ Sonnenstand │ Mondphase                      │
 *   └──────────────────────────────────────────────┘
 *
 * Welche Bereiche erscheinen, hängt von der konfigurierten Höhe, der Breite
 * der Karte und den Sichtbarkeitsoptionen ab (siehe `computeLayout()`).
 * Der Tagesverlauf – das zentrale Element – wird niemals abgeschnitten.
 *
 * Aktualisierung
 * --------------
 * Home Assistant übergibt sehr häufig ein neues `hass`-Objekt. Damit nicht bei
 * jedem Zustandswechsel neu gerechnet wird, prüft `shouldUpdate()` eine
 * Signatur der tatsächlich genutzten Daten. Zusätzlich aktualisiert ein Timer
 * die Karte zu jeder vollen Minute.
 */

import { html, LitElement, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { renderDayChart, type DayChartCountdown } from './components/day-chart.js';
import { renderMoonDisc } from './components/moon-disc.js';
import { renderSkyView } from './components/sky-view.js';
import { runAction } from './actions.js';
import {
  CARD_ELEMENT_NAME,
  CARD_TYPE,
  DARK_PALETTE,
  DEFAULT_CONFIG,
  DETAILS_HEIGHT_DETAILED,
  DOUBLE_TAP_DELAY,
  HOLD_DELAY,
  LIGHT_PALETTE,
  POPUP_HEIGHT_RANGE,
  POPUP_WIDTH_RANGE,
  MIN_CARD_HEIGHT,
  MIN_SKY_VIEW_HEIGHT,
  SKY_READOUT_GAP,
  SKY_READOUT_ROW_HEIGHT,
  computeLayout,
  stubConfig,
  type LayoutMetrics,
  type PhasePalette,
} from './const.js';
import {
  compassDirection,
  createFormatContext,
  formatDate,
  formatDayOffset,
  formatDegrees,
  formatCountdown,
  formatDurationCompact,
  formatKilometers,
  formatPercent,
  formatSignedDuration,
  formatTime,
  resolveHour12,
  type FormatContext,
} from './format.js';
import {
  iconDawn,
  iconDusk,
  iconMoonrise,
  iconMoonset,
  iconSun,
  iconSunrise,
  iconSunset,
  iconWarning,
} from './icons.js';
import {
  localize,
  resolveLanguage,
  type Language,
  type StringKey,
} from './localize.js';
import { getModel, resolveCardHeight, resolveConfig } from './model.js';
import { localDayIndex } from './timezone.js';
import { cardStyles } from './styles.js';

// Der Editor wird mitgebündelt, damit `getConfigElement()` eine einzige
// Datei ausreicht.
import './sun-moon-card-editor.js';
import { clamp, nextMinute, round } from './utils.js';
import type {
  ActionConfig,
  CardModel,
  NextEventDetail,
  ConfigChangedEvent,
  HomeAssistant,
  LovelaceCard,
  LovelaceCardEditor,
  ResolvedConfig,
  SunMoonCardConfig,
} from './types.js';

/** Himmelskörper, auf den sich eine Restzeit bezieht. */
type CountdownBody = 'sun' | 'twilight' | 'moon';

/** Eine ausstehende Restzeit (Sonne, Dämmerung oder Mond). */
interface CountdownEntry {
  /** Restzeit in Minuten. */
  minutes: number;
  /** Kurze Fassung für die Kopfzeile, z. B. „Untergang in 3 h 12 min“. */
  compact: string;
  /**
   * Knappste Fassung, nur die Dauer („3 h 12 min“). Sie steht im Chip, wenn
   * die kurze Fassung nicht mehr passt – das Symbol nennt dann das Ereignis.
   */
  duration: string;
  /** Zeitpunkt des Ereignisses. */
  time: Date;
  /** Aufgang (bzw. Ende der Nacht) statt Untergang. */
  rising: boolean;
  /** Ausformulierte Fassung, z. B. „Sonnenuntergang in 3 h 12 min“. */
  long: string;
  /** Titel: Ereignis mit Uhrzeit und Tagesbezug. */
  title: string;
  /**
   * Symbol des Körpers. Erst es macht den Chip eindeutig: „Aufgang“ allein
   * ließe offen, ob die Sonne oder der Mond gemeint ist.
   */
  icon: TemplateResult;
  /** Körper; steht als `data-body` am Chip und erlaubt eigenes Styling. */
  body: CountdownBody;
}

/** Kantenlänge des Symbols im Restzeit-Chip. */
const COUNTDOWN_ICON_SIZE = 12;
/** Platzbedarf des Symbols im Chip: Kante plus Abstand zum Text. */
const COUNTDOWN_ICON_WIDTH = 17;

/** Eintrag der Ereignisleiste. */
interface EventTile {
  key: string;
  /** Bestimmt die Akzentfarbe der Kachel. */
  kind: 'dawn' | 'sunrise' | 'sunset' | 'dusk' | 'extra';
  label: string;
  /** Kürzere Beschriftung für schmale Karten. */
  shortLabel: string;
  time: Date | null;
  icon: TemplateResult;
  secondary?: boolean;
  /** Text, der bei fehlendem Ereignis erscheint. */
  missingText: string;
}

@customElement(CARD_ELEMENT_NAME)
export class SunMoonCard extends LitElement implements LovelaceCard {
  /**
   * Von Home Assistant gesetzt.
   *
   * Der Setter reicht das Objekt an ein geöffnetes Overlay weiter. Sonst
   * bliebe die vollständige Karte dort auf dem Stand beim Öffnen stehen –
   * Theme, Sprache und die Werte der Sonnen-Entität würden nicht nachgeführt.
   */
  @property({ attribute: false })
  public set hass(value: HomeAssistant | undefined) {
    const previous = this._hass;
    this._hass = value;
    this.requestUpdate('hass', previous);
    if (this._popupCard) this._popupCard.hass = value;
  }

  public get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  private _hass?: HomeAssistant;

  @state() private _config?: ResolvedConfig;
  @state() private _width = 0;
  @state() private _tick = 0;

  private _uid = `smc-${Math.random().toString(36).slice(2, 9)}`;

  /**
   * Restzeiten des laufenden Renderdurchgangs. Kopfzeile, Diagramm, Ablesung
   * und Minimalstreifen fragen sie ab; berechnet werden sie nur einmal je
   * Modell und Formatierungskontext.
   */
  private _countdownCache: {
    model: CardModel;
    context: FormatContext;
    entries: CountdownEntry[];
  } | null = null;
  /** Overlay mit der vollständigen Variante (nur im Minimalmodus). */
  private _popup: HTMLElement | null = null;
  /** Karte im Overlay – erhält jedes neue `hass` (siehe `hass`). */
  private _popupCard: SunMoonCard | null = null;
  /** Scroll-Verhalten des Dokuments, bevor das Overlay es sperrte. */
  private _previousOverflow = '';
  private _timer?: ReturnType<typeof setTimeout>;
  private _resizeObserver?: ResizeObserver;
  /** Beobachtet, ob die Karte im Sichtfeld liegt. */
  private _visibilityObserver?: IntersectionObserver;
  /** Liegt die Karte im Sichtfeld (Standard: ja)? */
  private _visible = true;
  private _hassSignature = '';
  /** Letzte protokollierte Warnung, damit sie sich nicht wiederholt. */
  private _warned = '';
  /** Zeitmessung für „gehalten“ und „doppelt getippt“. */
  private _holdTimer?: ReturnType<typeof setTimeout>;
  private _tapTimer?: ReturnType<typeof setTimeout>;
  private _tapCount = 0;
  /** Nach einer Halte-Aktion den folgenden Klick verschlucken. */
  private _held = false;

  static override styles = cardStyles;

  /** Registriert die Karte im Home-Assistant-Kartenkatalog. */
  public static getConfigElement(): LovelaceCardEditor {
    return document.createElement('sun-moon-card-editor') as LovelaceCardEditor;
  }

  /** Standardkonfiguration für neu hinzugefügte Karten. */
  public static getStubConfig(): SunMoonCardConfig {
    return stubConfig();
  }

  public setConfig(config: SunMoonCardConfig): void {
    if (!config || typeof config !== 'object') {
      throw new Error('Invalid configuration');
    }
    const language = resolveLanguage(config.language, this.hass?.locale?.language);
    const { config: resolved, errors, warnings } = resolveConfig(config, language);
    if (errors.length > 0) {
      throw new Error(errors[0]);
    }
    if (warnings.length > 0) {
      // Korrekturen an der Konfiguration werden protokolliert, stören aber
      // die Darstellung nicht. Wiederholt wird nur, was sich verändert hat:
      // Der Editor ruft `setConfig()` bei jedem Tastendruck auf.
      const text = warnings.join(' ');
      if (text !== this._warned) {
        this._warned = text;
        console.warn(`[sun-moon-card] ${text}`);
      }
    }
    this._config = resolved;
  }

  /** Höhe in Dashboard-Zeilen (ältere Home-Assistant-Versionen). */
  public getCardSize(): number {
    const height = this._resolvedHeight();
    return Math.max(1, Math.round(height / 50));
  }

  /** Rasteroptionen für das Dashboard-Layout (ab HA 2024.11). */
  public getGridOptions(): {
    rows: number;
    min_rows: number;
    columns: number;
    min_columns: number;
  } {
    const height = this._resolvedHeight();
    const rows = Math.max(1, Math.round(height / 56));
    return {
      rows,
      min_rows:
        this._config?.minimal_mode === true
          ? 1
          : Math.max(1, Math.round(MIN_CARD_HEIGHT / 56)),
      columns: 6,
      min_columns: 4,
    };
  }

  /**
   * Setzt die Gestaltungsvarianten am Wurzelelement.
   *
   * Die Klassen liegen am Host (nicht an `ha-card`), weil die CSS-Variablen
   * für Glas/Flach und hell/dunkel von dort in alle Bereiche – einschließlich
   * der SVG-Darstellungen – vererbt werden.
   */
  protected override willUpdate(changed: PropertyValues): void {
    super.willUpdate(changed);
    const dark = this._isDark();
    this.classList.toggle('smc-dark', dark);
    this.classList.toggle('smc-light', !dark);
    this.classList.toggle('smc-flat', this._config?.card_style === 'flat');
    this.classList.toggle('smc-glass', this._config?.card_style !== 'flat');
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this._startClock();
    this._watchVisibility();
    if (typeof ResizeObserver !== 'undefined') {
      this._resizeObserver = new ResizeObserver(() => {
        const width = Math.round(this.getBoundingClientRect().width);
        if (width > 0 && width !== this._width) {
          this._width = width;
        }
      });
      this._resizeObserver.observe(this);
    }
    // Erste Breitenmessung nach dem Einfügen ins Layout
    requestAnimationFrame(() => {
      const width = Math.round(this.getBoundingClientRect().width);
      if (width > 0) this._width = width;
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopClock();
    this._resizeObserver?.disconnect();
    this._resizeObserver = undefined;
    this._visibilityObserver?.disconnect();
    this._visibilityObserver = undefined;
    document.removeEventListener('visibilitychange', this._onVisibilityChange);
    this._clearHoldTimer();
    this._clearTapTimer();
    this._closeDetails();
  }

  /**
   * Öffnet die vollständige Variante über der Karte.
   *
   * Der Minimalstreifen ist zu flach, um Zahlen zu tragen. Ein Klick legt
   * daher dieselbe Karte – mit identischer Konfiguration, aber ohne
   * Minimalmodus – in ein Overlay in der eingestellten Größe. Das Overlay
   * hängt an `document.body`, damit es über allen Dashboard-Elementen
   * liegt; es nutzt ausschließlich inline gesetzte Stile, weil dort keine
   * Stile dieser Karte gelten.
   */
  private _openDetails(): void {
    if (!this._config || !this.hass || this._popup) return;
    const language = this._language();
    // Maße des Overlays: konfigurierbar, auf das Sichtfeld begrenzt.
    const width = clamp(
      this._config.popup_width,
      POPUP_WIDTH_RANGE[0],
      POPUP_WIDTH_RANGE[1],
    );
    const height = clamp(
      this._config.popup_height,
      POPUP_HEIGHT_RANGE[0],
      POPUP_HEIGHT_RANGE[1],
    );
    const overlay = document.createElement('div');
    overlay.className = 'smc-popup';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', localize(language, 'title'));
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '9999',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      boxSizing: 'border-box',
      background: 'rgba(0, 0, 0, 0.6)',
    } as Partial<CSSStyleDeclaration>);

    const panel = document.createElement('div');
    Object.assign(panel.style, {
      position: 'relative',
      width: `min(92vw, ${width}px)`,
      maxWidth: `${width}px`,
      maxHeight: '92vh',
      overflow: 'auto',
      borderRadius: '12px',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.45)',
    } as Partial<CSSStyleDeclaration>);

    const close = document.createElement('button');
    close.type = 'button';
    close.setAttribute('aria-label', localize(language, 'popupClose'));
    close.textContent = '✕';
    Object.assign(close.style, {
      position: 'absolute',
      top: '8px',
      right: '8px',
      zIndex: '1',
      width: '30px',
      height: '30px',
      padding: '0',
      borderRadius: '50%',
      border: '1px solid rgba(128, 128, 128, 0.4)',
      background: 'var(--card-background-color, #202124)',
      color: 'var(--primary-text-color, #ffffff)',
      font: '15px/1 system-ui, sans-serif',
      cursor: 'pointer',
    } as Partial<CSSStyleDeclaration>);
    close.addEventListener('click', () => this._closeDetails());

    const resolved = this._config;
    const popupConfig: SunMoonCardConfig = {
      ...resolved,
      // Die aufgelöste Konfiguration trägt `null`, wo der Kartenkonfiguration
      // `undefined` erlaubt ist; `setConfig()` prüft beides gleichermaßen.
      latitude: resolved.latitude ?? undefined,
      longitude: resolved.longitude ?? undefined,
      location_name: resolved.location_name ?? undefined,
      minimal_mode: false,
      card_height: height,
      // Aktionen gehören an den Streifen, nicht in die vollständige Karte:
      // Dort würde ein Klick sonst das Overlay erneut öffnen.
      tap_action: undefined,
      hold_action: undefined,
      double_tap_action: undefined,
    };
    const card = document.createElement(CARD_ELEMENT_NAME) as SunMoonCard;
    card.hass = this.hass;
    try {
      card.setConfig(popupConfig);
    } catch {
      // Ungültige Konfiguration: Das Overlay erscheint dennoch und zeigt
      // die Fehlermeldung der Karte.
    }
    this._popupCard = card;
    panel.append(card, close);
    overlay.append(panel);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) this._closeDetails();
    });
    // Der Hintergrund bleibt stehen, solange das Overlay offen ist.
    this._previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.append(overlay);
    document.addEventListener('keydown', this._onPopupKeydown, true);
    this._popup = overlay;
    close.focus();
  }

  /** Schließt das Overlay und gibt den Fokus an die Karte zurück. */
  private _closeDetails(): void {
    if (!this._popup) return;
    this._popup.remove();
    this._popup = null;
    this._popupCard = null;
    document.body.style.overflow = this._previousOverflow;
    document.removeEventListener('keydown', this._onPopupKeydown, true);
    const card = this.renderRoot?.querySelector?.('ha-card') as HTMLElement | null;
    card?.focus();
  }

  /**
   * Escape schließt das Overlay, `Tab` bleibt darin.
   *
   * Ohne Fokus-Falle würde die Tab-Taste hinter dem Dialog durch das
   * Dashboard wandern, das der Dialog mit `aria-modal` gerade ausblendet.
   */
  private _onPopupKeydown = (event: KeyboardEvent): void => {
    if (!this._popup) return;
    if (event.key === 'Escape') {
      event.stopPropagation();
      this._closeDetails();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = this._popupFocusable();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    const active = this._activeElement();
    const index = active ? focusable.indexOf(active) : -1;
    if (index === -1) {
      // Der Fokus ist abgewandert (oder liegt tiefer in einem Schattenbaum):
      // Zurück in den Dialog – bei Rückwärts-Tab an sein Ende.
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
      return;
    }
    if (event.shiftKey && index === 0) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && index === focusable.length - 1) {
      event.preventDefault();
      first.focus();
    }
  };

  /**
   * Aktives Element – bei Fokus in einer Schattenwurzel das innere Element.
   *
   * Der Browser meldet für Elemente in Schattenwurzeln den Host; für die
   * Reihenfolge im Dialog brauchen wir aber das eigentlich fokussierte
   * Element.
   */
  private _activeElement(): HTMLElement | null {
    const active = document.activeElement as HTMLElement | null;
    if (!active) return null;
    const deeper = active.shadowRoot?.activeElement;
    return deeper instanceof HTMLElement ? deeper : active;
  }

  /**
   * Bedienbare Elemente des Overlays in Dokumentreihenfolge.
   *
   * Die Karte selbst steht am Anfang: Ihre eigenen Bedienelemente liegen in
   * der Schattenwurzel und sind von außen nicht erreichbar – der Browser
   * meldet bei Fokus darin aber den Karten-Host als aktives Element.
   */
  private _popupFocusable(): HTMLElement[] {
    if (!this._popup) return [];
    const found: HTMLElement[] = [];
    // Die Karte liegt mit ihrem Inhalt in einer Schattenwurzel; deren
    // Wurzelelement trägt `tabindex` und ist damit die erste Station.
    const inner = this._popupCard?.shadowRoot?.querySelector<HTMLElement>('ha-card[tabindex]');
    if (inner) found.push(inner);
    const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    for (const element of this._popup.querySelectorAll<HTMLElement>(selector)) {
      if (!element.hasAttribute('disabled')) found.push(element);
    }
    return found;
  }

  /** Tastaturbedienung des Minimalstreifens. */
  private _handleMinimalKey(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const node = event.currentTarget;
      if (node instanceof HTMLElement) this._runTap(node);
    }
  }

  /** Startet die Zeitmessung für „gehalten“. */
  private _onMinimalPointerDown = (): void => {
    this._clearHoldTimer();
    const action = this._config?.hold_action;
    if (!action) return;
    this._holdTimer = setTimeout(() => {
      this._holdTimer = undefined;
      this._held = true;
      this._runAction(action, false);
    }, HOLD_DELAY);
  };

  /** Beendet die Zeitmessung für „gehalten“. */
  private _onMinimalPointerUp = (): void => {
    this._clearHoldTimer();
  };

  /** Berührung abgebrochen (z. B. Wischen): keine Halte-Aktion. */
  private _onMinimalPointerCancel = (): void => {
    this._clearHoldTimer();
  };

  /** Antippen – und Abwarten, ob ein zweites folgt. */
  private _onMinimalClick = (event: MouseEvent): void => {
    if (this._held) {
      // Nach einer Halte-Aktion senden viele Browser zusätzlich einen Klick;
      // der gehört nicht mehr zur Antipp-Aktion.
      this._held = false;
      return;
    }
    const node = event.currentTarget;
    if (!(node instanceof HTMLElement)) return;
    if (!this._config?.double_tap_action) {
      this._runTap(node);
      return;
    }
    this._tapCount += 1;
    this._clearTapTimer();
    if (this._tapCount >= 2) {
      this._tapCount = 0;
      this._runAction(this._config.double_tap_action, false, node);
      return;
    }
    // Erst wenn im Zeitfenster kein zweites Antippen folgt, gilt das erste.
    this._tapTimer = setTimeout(() => {
      this._tapTimer = undefined;
      this._tapCount = 0;
      this._runTap(node);
    }, DOUBLE_TAP_DELAY);
  };

  /** Antipp-Aktion – ohne Konfiguration öffnet sich das Overlay. */
  private _runTap(node: HTMLElement): void {
    this._runAction(this._config?.tap_action ?? null, true, node);
  }

  /**
   * Führt eine Klick-Aktion aus.
   *
   * @param action  Auszuführende Aktion.
   * @param withFallback Ohne Aktion (oder mit `open-popup`) öffnet sich das
   *                 Overlay – das bisherige Verhalten des Streifens.
   * @param node    Auslösendes Element (Quelle der Ereignisse).
   */
  private _runAction(
    action: ActionConfig | null,
    withFallback: boolean,
    node?: HTMLElement,
  ): void {
    const config = this._config;
    if (!config) return;
    const target =
      node ?? (this.renderRoot?.querySelector('ha-card') as HTMLElement | null) ?? this;
    runAction(
      target,
      this.hass,
      config,
      action,
      withFallback ? () => this._openDetails() : undefined,
    );
  }

  private _clearHoldTimer(): void {
    if (this._holdTimer) {
      clearTimeout(this._holdTimer);
      this._holdTimer = undefined;
    }
  }

  private _clearTapTimer(): void {
    if (this._tapTimer) {
      clearTimeout(this._tapTimer);
      this._tapTimer = undefined;
    }
  }

  /**
   * Verhindert unnötige Aktualisierungen: Home Assistant setzt `hass` bei
   * jeder Zustandsänderung. Neu gezeichnet wird nur, wenn sich die von der
   * Karte genutzten Daten ändern oder die Minute wechselt.
   */
  protected override shouldUpdate(changed: Map<string, unknown>): boolean {
    if (changed.has('_config') || changed.has('_width') || changed.has('_tick')) {
      return true;
    }
    if (changed.has('hass')) {
      const signature = this._computeHassSignature();
      if (signature === this._hassSignature) return false;
      this._hassSignature = signature;
      return true;
    }
    return true;
  }

  /**
   * Beobachtet, ob die Karte zu sehen ist.
   *
   * Im Hintergrund (anderer Reiter, minimiertes Fenster) oder außerhalb des
   * Sichtfelds läuft die Uhr nicht weiter: Ein Dashboard mit mehreren Karten
   * muss dann nicht im Minutentakt neu zeichnen. Beim Wiederauftauchen wird
   * sofort nachgezogen.
   */
  private _watchVisibility(): void {
    if (typeof IntersectionObserver !== 'undefined') {
      this._visibilityObserver = new IntersectionObserver((entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (visible === this._visible) return;
        this._visible = visible;
        this._syncClock();
      });
      this._visibilityObserver.observe(this);
    }
    document.addEventListener('visibilitychange', this._onVisibilityChange);
  }

  private _onVisibilityChange = (): void => {
    this._syncClock();
  };

  /** Startet oder pausiert die Uhr – je nach Sichtbarkeit. */
  private _syncClock(): void {
    this._stopClock();
    if (!this._visible || document.hidden) return;
    // Nach dem Wiederauftauchen sofort neu zeichnen, statt bis zur nächsten
    // Minute auf dem alten Stand zu bleiben.
    this._tick += 1;
    this._startClock();
  }

  private _startClock(): void {
    this._stopClock();
    this._timer = setTimeout(
      () => {
        this._tick += 1;
        this._startClock();
      },
      Math.max(1000, nextMinute() - Date.now()),
    );
  }

  private _stopClock(): void {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = undefined;
    }
  }

  /** Signatur der genutzten Home-Assistant-Daten. */
  private _computeHassSignature(): string {
    const config = this._config;
    const hass = this.hass;
    if (!hass || !config) return '';
    const sun = hass.states?.[config.entity];
    const moon = config.moon_entity ? hass.states?.[config.moon_entity] : undefined;
    return [
      hass.config?.time_zone ?? '',
      hass.config?.latitude ?? '',
      hass.config?.longitude ?? '',
      hass.config?.location_name ?? '',
      hass.locale?.language ?? '',
      // Ältere Oberflächen tragen die Sprache nur hier.
      hass.language ?? '',
      hass.locale?.time_format ?? '',
      hass.selectedTheme?.dark ?? hass.themes?.darkMode ?? '',
      sun?.attributes?.next_rising ?? sun?.last_updated ?? '',
      sun?.attributes?.next_setting ?? '',
      sun?.attributes?.next_dawn ?? '',
      sun?.attributes?.next_dusk ?? '',
      sun?.attributes?.elevation ?? '',
      sun?.attributes?.azimuth ?? '',
      moon?.state ?? '',
    ].join('|');
  }

  private _resolvedHeight(): number {
    if (!this._config) return DEFAULT_CONFIG.card_height as number;
    return resolveCardHeight(this._config, this._width || 400);
  }

  /** Ist der Dark Mode aktiv? */
  private _isDark(): boolean {
    if (!this._config) return false;
    if (this._config.theme_mode === 'dark') return true;
    if (this._config.theme_mode === 'light') return false;
    return Boolean(this.hass?.selectedTheme?.dark ?? this.hass?.themes?.darkMode ?? false);
  }

  private _language(): Language {
    return resolveLanguage(
      this._config?.language,
      this.hass?.locale?.language ?? this.hass?.language,
    );
  }

  private _locale(): string {
    return this.hass?.locale?.language ?? this.hass?.language ?? this._language();
  }

  override render(): TemplateResult {
    const config = this._config;
    if (!config) return html``;

    const width = this._width || 400;
    const height = this._resolvedHeight();
    const layout = computeLayout(height, width, config);
    const model = getModel(config, this.hass, new Date());
    const language = this._language();
    const dark = this._isDark();
    const palette: PhasePalette = dark ? DARK_PALETTE : LIGHT_PALETTE;

    if (model.fatal) {
      return html`
        <ha-card
          class=${classMap({ 'smc-dark': dark, 'smc-light': !dark, 'smc-minimal': layout.minimal })}
          style=${styleMap({ height: `${layout.minimal ? Math.max(height, 56) : height}px` })}
        >
          <div class="root">
            <div class="message" role="status">
              <span class="icon">${iconWarning(18)}</span>
              <span>${localize(language, 'missingLocation')}</span>
            </div>
          </div>
        </ha-card>
      `;
    }

    const context = createFormatContext(
      language,
      this._locale(),
      model.timeZone,
      resolveHour12(config.time_format, this.hass?.locale?.time_format, this._locale()),
    );

    // Minimalvariante: nur der Zeitstrahl. Er füllt die ganze Karte, damit
    // auch bei 24 px Höhe erkennbar bleibt, wo die Sonne im Tag steht.
    if (layout.minimal) {
      return html`
        <ha-card
          class=${classMap({ 'smc-dark': dark, 'smc-light': !dark, 'smc-minimal': true })}
          style=${styleMap({ height: `${height}px` })}
          role="button"
          tabindex="0"
          aria-label=${this._minimalAriaLabel(model, context)}
          title=${this._minimalTitle(model, context)}
          @pointerdown=${this._onMinimalPointerDown}
          @pointerup=${this._onMinimalPointerUp}
          @pointercancel=${this._onMinimalPointerCancel}
          @click=${this._onMinimalClick}
          @keydown=${this._handleMinimalKey}
        >
          <div
            class=${classMap({ root: true, minimal: true })}
            style=${styleMap({
              padding: `${layout.padding}px`,
              gap: '0px',
              '--smc-palette-day': palette.day,
              '--smc-palette-civil': palette.civil,
              '--smc-palette-night': palette.night,
            })}
          >
            ${this._renderMinimalTimes(model, context, layout, config)}
            <div
              class="chart-wrap minimal"
              style=${styleMap({ height: `${layout.chartHeight}px` })}
            >
              ${renderDayChart({
                profile: model.day,
                events: model.events,
                now: model.now,
                width: Math.max(60, layout.chartWidth),
                height: layout.chartHeight,
                palette,
                format: context,
                showSun: config.show_sun,
                showMoon: config.show_moon,
                showTwilight: config.show_twilight,
                twilightLevel: config.twilight_level,
                animations: config.animations,
                cardStyle: config.card_style,
                compact: false,
                minimal: true,
                sunMarkerSize: config.sun_marker_size,
                uid: `${this._uid}-chart`,
                showAstronomicalLayers: config.show_astronomical_details,
                currentAltitude: model.sun.altitude,
                // Der Höhenbereich richtet sich im Minimalmodus allein nach
                // der Sonne: Der Mond wird nicht gezeichnet und darf dem
                // schmalen Streifen keine Höhe stehlen.
                moonPath: null,
                moon: null,
              })}
            </div>
          </div>
        </ha-card>
      `;
    }

    return html`
      <ha-card
        class=${classMap({ 'smc-dark': dark, 'smc-light': !dark })}
        style=${styleMap({ height: `${height}px` })}
        role="group"
        tabindex="0"
        aria-label=${this._ariaLabel(model, context)}
      >
        <div
          class=${classMap({ root: true, compact: layout.compact })}
          style=${styleMap({
            padding: `${layout.padding}px`,
            gap: `${layout.compact ? 3 : 6}px`,
            '--smc-palette-day': palette.day,
            '--smc-palette-civil': palette.civil,
            '--smc-palette-night': palette.night,
          })}
        >
          ${layout.showHeader ? this._renderHeader(model, context, palette, layout) : nothing}

          <div
            class=${classMap({ body: true, columns: layout.skyViewSide })}
            style=${styleMap({
              height: `${layout.chartHeight + layout.legendHeight + (layout.showLegend ? 4 : 0)}px`,
            })}
          >
            ${config.show_day_chart
              ? html`<div class="chart-column">
                  <div
                    class="chart-wrap"
                    style=${styleMap({ height: `${layout.chartHeight}px` })}
                  >
                    ${renderDayChart({
                      profile: model.day,
                      events: model.events,
                      now: model.now,
                      width: Math.max(120, layout.chartWidth),
                      height: layout.chartHeight,
                      palette,
                      format: context,
                      showSun: config.show_sun,
                      showMoon: config.show_moon,
                      showTwilight: config.show_twilight,
                      twilightLevel: config.twilight_level,
                      animations: config.animations,
                      cardStyle: config.card_style,
                      compact: layout.compact,
                      minimal: false,
                      sunMarkerSize: config.sun_marker_size,
                      uid: `${this._uid}-chart`,
                      showAstronomicalLayers: config.show_astronomical_details,
                      currentAltitude: model.sun.altitude,
                      countdown: this._chartCountdown(model, context, layout),
                      moonPath: model.moonPath,
                      moon: config.show_moon
                        ? {
                            altitude: model.moon.position.apparentAltitude,
                            illumination: model.moon.phase.illumination,
                            brightLimbAngle: model.moon.phase.brightLimbAngle,
                          }
                        : null,
                    })}
                  </div>
                  ${layout.showLegend ? this._renderLegend(context, layout.legendHeight) : nothing}
                </div>`
              : nothing}
            ${layout.skyViewSide
              ? html`<div
                  class="sky-column"
                  style=${styleMap({ width: `${layout.skyViewWidth}px` })}
                >
                  <div class="sky-wrap">
                    ${renderSkyView({
                      width: layout.skyViewWidth,
                      height: layout.chartHeight,
                      sun: config.show_sun
                        ? { altitude: model.sun.altitude, azimuth: model.sun.azimuth }
                        : null,
                      moon: config.show_moon
                        ? {
                            altitude: model.moon.position.apparentAltitude,
                            azimuth: model.moon.position.azimuth,
                            illumination: model.moon.phase.illumination,
                            brightLimbAngle: model.moon.phase.brightLimbAngle,
                          }
                        : null,
                      sunTrack: model.sunTrack,
                      moonPhase: model.moon.phase,
                      showSun: config.show_sun,
                      showMoon: config.show_moon,
                      palette,
                      format: context,
                      animations: config.animations,
                      uid: `${this._uid}-sky`,
                      seed: localDayIndex(model.now, model.timeZone),
                    })}
                  </div>
                  ${this._renderSkyReadout(
                    model,
                    context,
                    layout.skyViewWidth,
                    this._countdownRows(layout),
                  )}
                </div>`
              : nothing}
          </div>

          ${layout.showEvents ? this._renderEvents(model, context, layout) : nothing}
          ${layout.showDetails
            ? this._renderDetails(model, context, config, layout, language, dark, width)
            : nothing}
          ${layout.showFooter ? this._renderFooter(model, context, config, layout) : nothing}
        </div>
      </ha-card>
    `;
  }

  /** Kopfzeile: Ort, Datum, Himmelsphase, Zeitzone und Tageslänge. */
  private _renderHeader(
    model: CardModel,
    context: FormatContext,
    palette: PhasePalette,
    layout: LayoutMetrics,
  ): TemplateResult {
    const title = model.locationName || context.t('title');
    const extras = model.extras;
    const width = layout.chartWidth + (layout.skyViewSide ? layout.skyViewWidth + 10 : 0);

    /*
     * Die Kopfzeile teilt sich in Ort/Datum und Chips. Damit der Ort nicht
     * durch zu viele Chips verdrängt wird, erhalten die Chips ein Budget:
     * Zuerst kommen Tageslänge und Himmelsphase, die Zeitzone nur, wenn
     * noch Platz bleibt (sie steht ohnehin in der Fußzeile).
     */
    const chipFontSize = 10.5;
    // Gemessener Erfahrungswert für Chips: 0,55 em mittlere Zeichenbreite.
    const estimateChip = (text: string, withDot = false): number =>
      text.length * chipFontSize * 0.58 + 20 + (withDot ? 12 : 0);
    const titleReserve = 108;
    let budget = Math.max(0, width - 10 - titleReserve);

    const phaseText = context.t(this._phaseKey(model));
    const phaseWidth = estimateChip(phaseText, true);

    /*
     * Die Restzeit ist die drängendste Angabe und bekommt das Budget zuerst.
     * Passt die kurze Fassung („Untergang in 1 h 48 min“) nicht neben die
     * Phase, bleibt nur die Dauer – das Symbol nennt das Ereignis. Reicht
     * selbst das nicht, weicht die Phase; sie steht als Farbe auch im
     * Diagramm.
     */
    const nextCountdown = this._primaryCountdown(model, context);
    let countdownChip: TemplateResult | typeof nothing = nothing;
    let showPhase = true;
    if (nextCountdown) {
      const fullWidth = estimateChip(nextCountdown.compact) + COUNTDOWN_ICON_WIDTH;
      const shortWidth = estimateChip(nextCountdown.duration) + COUNTDOWN_ICON_WIDTH;
      let text: string | null = null;
      if (fullWidth + phaseWidth <= budget) {
        text = nextCountdown.compact;
        budget -= fullWidth;
      } else if (shortWidth + phaseWidth <= budget) {
        text = nextCountdown.duration;
        budget -= shortWidth;
      } else if (shortWidth <= budget) {
        text = nextCountdown.duration;
        budget -= shortWidth;
        showPhase = false;
      }
      if (text !== null) {
        // Das Symbol trägt die Aussage: „Aufgang“ allein ließe offen, ob die
        // Sonne oder der Mond gemeint ist. Screenreader erhalten statt des
        // kurzen Textes die vollständige Bezeichnung.
        countdownChip = html`<span
          class="meta-chip countdown-chip"
          data-body=${nextCountdown.body}
          role="img"
          aria-label=${nextCountdown.long}
          title=${nextCountdown.title}
          >${nextCountdown.icon}<span>${text}</span></span
        >`;
      }
    }
    if (showPhase) budget -= phaseWidth;

    let dayLengthChip: TemplateResult | typeof nothing = nothing;
    if (model.daylightMinutes !== null) {
      const length = formatDurationCompact(model.daylightMinutes);
      const delta =
        extras.daylightDeltaMinutes === null
          ? ''
          : ` ${formatSignedDuration(extras.daylightDeltaMinutes, context.locale)}`;
      const text = `${context.t('dayLength')} ${length}${delta}`;
      const chipWidth = estimateChip(text);
      if (chipWidth <= budget) {
        budget -= chipWidth;
        dayLengthChip = html`<span class="meta-chip" title=${context.t('dayLength')}
          >${text}</span
        >`;
      }
    }

    let timeZoneChip: TemplateResult | typeof nothing = nothing;
    const timeZoneWidth = estimateChip(extras.timeZoneLongName);
    if (timeZoneWidth <= budget) {
      budget -= timeZoneWidth;
      timeZoneChip = html`<span class="meta-chip">${extras.timeZoneLongName}</span>`;
    }

    return html`
      <div class="header" style=${styleMap({ height: `${layout.headerHeight}px` })}>
        <div class="header-text">
          <span class="title">${title}</span>
          <span class="subtitle">${formatDate(model.now, context)}</span>
        </div>
        <div class="header-meta">
          ${countdownChip}${dayLengthChip}${timeZoneChip}
          ${showPhase
            ? html`<span class="phase-chip" title=${phaseText}>
                <span
                  class="phase-dot"
                  style=${styleMap({ background: this._phaseColor(model, palette) })}
                ></span>
                ${phaseText}
              </span>`
            : nothing}
        </div>
      </div>
    `;
  }

  /**
   * Ausstehende Restzeiten in zeitlicher Reihenfolge.
   *
   * Sonne, Dämmerung und Mond folgen ihren bestehenden Schaltern
   * (`show_sun`, `show_twilight`, `show_moon`). Gerechnet wird ab „jetzt“,
   * damit die Anzeige auch über Mitternacht hinaus stimmt – das Tagesprofil
   * allein kennt nur die Ereignisse dieses Tages. Ereignisse, die es nicht
   * gibt (Polartag, Polarnacht), entfallen, statt eine Zeit zu erfinden.
   */
  private _countdowns(model: CardModel, context: FormatContext): CountdownEntry[] {
    const cache = this._countdownCache;
    if (cache && cache.model === model && cache.context === context) return [...cache.entries];
    const entries = this._computeCountdowns(model, context);
    this._countdownCache = { model, context, entries };
    return [...entries];
  }

  private _computeCountdowns(model: CardModel, context: FormatContext): CountdownEntry[] {
    const config = this._config;
    if (!config?.show_remaining_time) return [];
    const now = model.now.getTime();
    const entries: CountdownEntry[] = [];
    const add = (
      event: NextEventDetail | null,
      longKey: StringKey,
      shortKey: StringKey | null,
      icon: TemplateResult,
      body: CountdownBody,
    ): void => {
      if (!event) return;
      const minutes = (event.time.getTime() - now) / 60_000;
      if (!(minutes >= 0)) return;
      // Auch die kurze Fassung nennt die Einheiten: „in 1:48“ läse sich wie
      // eine Uhrzeit.
      const duration = formatCountdown(minutes, context.t);
      entries.push({
        minutes,
        compact: context.t('untilFormat', {
          event: context.t(shortKey ?? longKey),
          duration,
        }),
        duration,
        time: event.time,
        rising: event.rising,
        long: context.t('untilFormat', {
          event: context.t(longKey),
          duration: formatCountdown(minutes, context.t),
        }),
        title: `${context.t(longKey)} ${formatTime(event.time, context)}${
          event.dayOffset > 0 ? ` (${formatDayOffset(event.dayOffset, context.t)})` : ''
        }`,
        icon,
        body,
      });
    };

    const sun = model.extras.nextSunEvent;
    add(
      sun,
      sun?.rising ? 'sunrise' : 'sunset',
      sun?.rising ? 'sunriseShort' : 'sunsetShort',
      sun?.rising ? iconSunrise(COUNTDOWN_ICON_SIZE) : iconSunset(COUNTDOWN_ICON_SIZE),
      'sun',
    );

    const twilight = model.extras.nextTwilightEvent;
    if (twilight) {
      const keys = this._twilightKeys();
      add(
        twilight,
        twilight.rising ? keys.dawn : keys.dusk,
        twilight.rising ? keys.dawnShort : keys.duskShort,
        twilight.rising ? iconDawn(COUNTDOWN_ICON_SIZE) : iconDusk(COUNTDOWN_ICON_SIZE),
        'twilight',
      );
    }

    const moon = model.extras.nextMoonEvent;
    add(
      moon,
      moon?.rising ? 'moonrise' : 'moonset',
      moon?.rising ? 'moonriseShort' : 'moonsetShort',
      moon?.rising ? iconMoonrise(COUNTDOWN_ICON_SIZE) : iconMoonset(COUNTDOWN_ICON_SIZE),
      'moon',
    );

    return entries.sort((a, b) => a.minutes - b.minutes);
  }

  /**
   * Restzeiten in Anzeigereihenfolge.
   *
   * Mit `remaining_time_focus: sun` (Standard) steht die Sonne vorn, die
   * übrigen folgen zeitlich. Sonst würde ein früher Monduntergang oder der
   * Beginn der Dämmerung den Sonnenauf-/-untergang verdrängen – gerade dort,
   * wo nur eine Zeile Platz hat. Gibt es kein Sonnenereignis (Polartag,
   * Polarnacht, `show_sun: false`), bleibt die zeitliche Reihenfolge.
   */
  private _orderedCountdowns(model: CardModel, context: FormatContext): CountdownEntry[] {
    const entries = this._countdowns(model, context);
    if (this._config?.remaining_time_focus === 'next') return entries;
    const sunIndex = entries.findIndex((entry) => entry.body === 'sun');
    if (sunIndex <= 0) return entries;
    const [sun] = entries.splice(sunIndex, 1);
    return [sun, ...entries];
  }

  /** Die Restzeit für Kopfzeilen-Chip und Minimalstreifen. */
  private _primaryCountdown(
    model: CardModel,
    context: FormatContext,
  ): CountdownEntry | undefined {
    return this._orderedCountdowns(model, context)[0];
  }

  /**
   * Restzeit für das Diagramm. Es markiert die Strecke bis zum Ereignis auf
   * dem Horizont; fehlt die Kopfzeile (niedrige Karten), trägt es zusätzlich
   * die Restzeit als kleines Etikett – sonst ginge sie dort ganz verloren.
   */
  private _chartCountdown(
    model: CardModel,
    context: FormatContext,
    layout: LayoutMetrics,
  ): DayChartCountdown | null {
    const entry = this._primaryCountdown(model, context);
    if (!entry) return null;
    return {
      time: entry.time,
      rising: entry.rising,
      body: entry.body,
      label: layout.showHeader ? null : `${entry.rising ? '↑' : '↓'} ${entry.duration}`,
      title: entry.long,
    };
  }

  /**
   * Bezeichnungen der Dämmerung je eingestellter Grenze.
   *
   * Kurzfassungen existieren nur für die bürgerliche Dämmerung; bei
   * nautischer und astronomischer Grenze steht die lange Fassung auch im
   * Chip. Dort entscheidet das Breitenbudget, ob er noch ins Bild passt.
   */
  private _twilightKeys(): {
    dawn: StringKey;
    dusk: StringKey;
    dawnShort: StringKey | null;
    duskShort: StringKey | null;
  } {
    const level = this._config?.twilight_level;
    if (level === 'nautical') {
      return { dawn: 'nauticalDawn', dusk: 'nauticalDusk', dawnShort: null, duskShort: null };
    }
    if (level === 'astronomical') {
      return {
        dawn: 'astronomicalDawn',
        dusk: 'astronomicalDusk',
        dawnShort: null,
        duskShort: null,
      };
    }
    return {
      dawn: 'civilDawn',
      dusk: 'civilDusk',
      dawnShort: 'civilDawnShort',
      duskShort: 'civilDuskShort',
    };
  }

  /** Legende der Phasenflächen unter dem Tagesverlauf. */
  private _renderLegend(context: FormatContext, height: number): TemplateResult {
    return html`
      <div class="legend" aria-hidden="true" style=${styleMap({ height: `${height}px` })}>
        <span class="legend-chip"
          ><span class="legend-dot day"></span>${context.t('legendDaylight')}</span
        >
        <span class="legend-chip"
          ><span class="legend-dot twilight"></span>${context.t('legendTwilightShort')}</span
        >
        <span class="legend-chip"
          ><span class="legend-dot night"></span>${context.t('legendNight')}</span
        >
      </div>
    `;
  }

  /**
   * Ablesung unter der Himmelsansicht: aktuelle Höhe und Richtung von Sonne
   * und Mond. Die Höhe steht vorne, damit die Stellung auch ohne Blick auf
   * die Polarprojektion lesbar ist; negative Werte liegen unter dem Horizont.
   */
  private _renderSkyReadout(
    model: CardModel,
    context: FormatContext,
    width: number,
    maxCountdownRows: number,
  ): TemplateResult | typeof nothing {
    const config = this._config!;
    const rows: TemplateResult[] = [];
    const readout = (label: string, altitude: number, azimuth: number) => {
      const altitudeText = formatDegrees(altitude, 1, context.locale);
      const azimuthText = `${Math.round(azimuth)}° ${compassDirection(azimuth, context.language)}`;
      return html`<span
        title=${`${context.t('elevation')} ${altitudeText} · ${context.t('azimuth')} ${azimuthText}`}
        >${context.t('positionReadout', {
          body: label,
          altitude: altitudeText,
          degrees: String(Math.round(azimuth)),
          direction: compassDirection(azimuth, context.language),
        })}</span
      >`;
    };

    if (config.show_sun) {
      rows.push(readout(context.t('sun'), model.sun.altitude, model.sun.azimuth));
    }
    if (config.show_moon) {
      rows.push(
        readout(
          context.t('moon'),
          model.moon.position.apparentAltitude,
          model.moon.position.azimuth,
        ),
      );
    }
    // Restzeiten ergänzen die Ablesung: Was die Positionszeilen über den
    // Augenblick sagen, sagen diese Zeilen über die nächsten Stunden.
    for (const entry of this._orderedCountdowns(model, context).slice(0, maxCountdownRows)) {
      rows.push(html`<span title=${entry.title}>${entry.long}</span>`);
    }
    if (rows.length === 0 || width < 150) return nothing;
    return html`<div class="sky-readout">${rows}</div>`;
  }

  /**
   * Wie viele Restzeiten unter der Himmelsansicht Platz finden.
   *
   * Die Ablesung teilt sich die Spalte mit der Himmelskuppel; jede Zeile
   * verkleinert sie. Deshalb erscheinen nur so viele Restzeiten, wie die
   * Kuppel verkraftet – die nächste zuerst.
   */
  private _countdownRows(layout: LayoutMetrics): number {
    const config = this._config!;
    const positionRows = (config.show_sun ? 1 : 0) + (config.show_moon ? 1 : 0);
    const columnHeight =
      layout.chartHeight + layout.legendHeight + (layout.showLegend ? SKY_READOUT_GAP : 0);
    const used = positionRows * SKY_READOUT_ROW_HEIGHT + SKY_READOUT_GAP;
    const spare = columnHeight - used - MIN_SKY_VIEW_HEIGHT;
    return Math.max(0, Math.min(3, Math.floor(spare / SKY_READOUT_ROW_HEIGHT)));
  }

  /** Fußzeile: Dämmerungsart, Zeitzone und Berechnungsverfahren. */
  private _renderFooter(
    model: CardModel,
    context: FormatContext,
    config: ResolvedConfig,
    layout: LayoutMetrics,
  ): TemplateResult {
    const twilightKey: StringKey =
      config.twilight_level === 'nautical'
        ? 'footerTwilightNautical'
        : config.twilight_level === 'astronomical'
          ? 'footerTwilightAstronomical'
          : config.twilight_level === 'all'
            ? 'footerTwilightAll'
            : 'footerTwilightCivil';

    /*
     * Auf schmalen Karten würde die Fußzeile abgeschnitten. Sie verzichtet
     * dann zuerst auf das Berechnungsverfahren, dann auf die Zeitzone (die
     * Kopfzeile nennt sie ohnehin, wo Platz ist). Der Tooltip trägt immer
     * den vollständigen Text.
     */
    const width = layout.chartWidth + (layout.skyViewSide ? layout.skyViewWidth + 10 : 0);
    const twilightText = context.t(twilightKey);
    const zoneText = model.extras.timeZoneLongName;
    const methodText = context.t('footerMethod');
    const fullText = `${twilightText} · ${zoneText} · ${methodText}`;
    const charWidth = 9.5 * 0.55;
    const fits = (text: string): boolean => text.length * charWidth <= width;
    const firstPart = fits(`${twilightText} · ${zoneText}`)
      ? `${twilightText} · ${zoneText}`
      : twilightText;
    const showMethod = fits(`${firstPart} · ${methodText}`) || width >= 520;

    return html`
      <div
        class="footer"
        title=${fullText}
        style=${styleMap({ height: `${layout.footerHeight}px` })}
      >
        <span class="part">${firstPart}</span>
        ${showMethod ? html`<span class="part">${methodText}</span>` : nothing}
      </div>
    `;
  }

  private _phaseKey(model: CardModel): StringKey {
    if (model.day.polar === 'polar-day') return 'phasePolarDay';
    if (model.day.polar === 'polar-night') return 'phasePolarNight';
    switch (model.sun.phase) {
      case 'day':
        return 'phaseDay';
      case 'civil':
        return 'phaseCivil';
      case 'nautical':
        return 'phaseNautical';
      case 'astronomical':
        return 'phaseAstronomical';
      default:
        return 'phaseNight';
    }
  }

  private _phaseColor(model: CardModel, palette: PhasePalette): string {
    switch (model.sun.phase) {
      case 'day':
        return palette.day;
      case 'civil':
        return palette.civil;
      case 'nautical':
        return palette.nautical;
      case 'astronomical':
        return palette.astronomical;
      default:
        return palette.night;
    }
  }

  /**
   * Wählt die erste Beschriftung, die in die verfügbare Breite passt.
   *
   * Die Breite wird über eine Näherung der mittleren Zeichenbreite
   * abgeschätzt. Der Faktor 0,7 em ist absichtlich grob gewählt: Gemessen
   * wurden 0,48 em für Eigennamen, 0,58 em für Ziffern (tabellarisch) und
   * bis zu 0,70 em für wortreiche Beschriftungen mit Umlauten. Lieber wird
   * die kürzere Variante gewählt, als dass Text abgeschnitten wird.
   */
  private _fitLabel(
    candidates: Array<string | null>,
    availableWidth: number,
    fontSize: number,
    factor = 0.7,
  ): string | null {
    for (const candidate of candidates) {
      if (!candidate) continue;
      if (candidate.length * fontSize * factor <= availableWidth) return candidate;
    }
    return null;
  }

  /** Leiste mit Dämmerungs- und Sonnenzeiten. */
  private _renderEvents(
    model: CardModel,
    context: FormatContext,
    layout: LayoutMetrics,
  ): TemplateResult | typeof nothing {
    const { compact, padding } = layout;
    const width = layout.chartWidth + (layout.skyViewSide ? layout.skyViewWidth + 10 : 0);
    const config = this._config!;
    const tiles: EventTile[] = [];

    if (config.show_twilight) {
      tiles.push({
        key: 'civilDawn',
        kind: 'dawn',
        label: context.t('civilDawn'),
        shortLabel: context.t('civilDawnShort'),
        time: model.events.civilDawn,
        icon: iconDawn(compact ? 14 : 16),
        missingText: context.t('noEvent'),
      });
    }
    tiles.push({
      key: 'sunrise',
      kind: 'sunrise',
      label: context.t('sunrise'),
      shortLabel: context.t('sunriseShort'),
      time: model.events.sunrise,
      icon: iconSunrise(compact ? 14 : 16),
      missingText: context.t('noSunrise'),
    });
    tiles.push({
      key: 'sunset',
      kind: 'sunset',
      label: context.t('sunset'),
      shortLabel: context.t('sunsetShort'),
      time: model.events.sunset,
      icon: iconSunset(compact ? 14 : 16),
      missingText: context.t('noSunset'),
    });
    if (config.show_twilight) {
      tiles.push({
        key: 'civilDusk',
        kind: 'dusk',
        label: context.t('civilDusk'),
        shortLabel: context.t('civilDuskShort'),
        time: model.events.civilDusk,
        icon: iconDusk(compact ? 14 : 16),
        missingText: context.t('noEvent'),
      });
    }

    if (config.twilight_level === 'all' || config.show_astronomical_details) {
      const extras: Array<[StringKey, Date | null, 'dawn' | 'dusk']> = [
        ['nauticalDawn', model.events.nauticalDawn, 'dawn'],
        ['nauticalDusk', model.events.nauticalDusk, 'dusk'],
        ['astronomicalDawn', model.events.astronomicalDawn, 'dawn'],
        ['astronomicalDusk', model.events.astronomicalDusk, 'dusk'],
      ];
      for (const [key, time, kind] of extras) {
        tiles.push({
          key,
          kind,
          label: context.t(key),
          shortLabel: context.t(key),
          time,
          icon: kind === 'dawn' ? iconDawn(compact ? 13 : 15) : iconDusk(compact ? 13 : 15),
          secondary: true,
          missingText: context.t('noEvent'),
        });
      }
    }

    // Bei schmalen Karten werden die zusätzlichen Ebenen ausgeblendet,
    // damit keine Beschriftung abgeschnitten wird.
    const maxTiles = width < 300 ? 3 : width < 420 ? 4 : width < 560 ? 6 : 8;
    const visible = tiles.slice(0, Math.max(2, maxTiles));

    // verfügbare Breite je Kachel (Innenmaß)
    const gap = 6;
    const innerWidth = Math.max(40, width - 2 * padding - gap * (visible.length - 1));
    // Innenmaß einer Kachel: Rand 1 px und Innenabstand 3 px je Seite
    const tileInner = innerWidth / visible.length - 10;
    const labelFontSize = compact
      ? tileInner < 120
        ? 8.5
        : 9
      : tileInner < 92
        ? 8.5
        : 9.5;
    const timeFontSize = tileInner < 74 ? 11 : tileInner < 96 ? 12 : 12.5;

    return html`
      <div
        class="events"
        style=${styleMap({ gap: `${gap}px`, height: `${layout.eventsHeight}px` })}
      >
        ${visible.map((tile) => {
          const label = this._fitLabel([tile.label, tile.shortLabel], tileInner, labelFontSize);
          const timeText = tile.time ? formatTime(tile.time, context) : tile.missingText;
          const fittedTime = this._fitLabel([timeText, '—'], tileInner, timeFontSize) ?? '—';
          return html`
            <div
              class=${classMap({
                'event-tile': true,
                [tile.kind]: true,
                secondary: Boolean(tile.secondary),
                compact,
              })}
              title=${`${tile.label}: ${timeText}`}
            >
              <span class="event-head">
                <span class="event-icon">${tile.icon}</span>
                <span
                  class=${classMap({ 'event-time': true, missing: !tile.time })}
                  style=${styleMap({ fontSize: `${timeFontSize}px` })}
                >
                  ${fittedTime}
                </span>
                ${compact && label
                  ? html`<span
                      class="event-label"
                      style=${styleMap({ fontSize: `${labelFontSize}px` })}
                      >${label}</span
                    >`
                  : nothing}
              </span>
              ${!compact && label
                ? html`<span
                    class="event-label"
                    style=${styleMap({ fontSize: `${labelFontSize}px` })}
                    >${label}</span
                  >`
                : nothing}
            </div>
          `;
        })}
      </div>
    `;
  }

  /** Detailzeile mit Sonnenstand und Monddaten. */
  private _renderDetails(
    model: CardModel,
    context: FormatContext,
    config: ResolvedConfig,
    layout: LayoutMetrics,
    language: Language,
    dark: boolean,
    width: number,
  ): TemplateResult {
    const extras = model.extras;
    const moonPhaseKey = (model.moon.haPhaseName ?? model.moon.phase.phaseKey) as StringKey;

    // Auf sehr schmalen Karten wird die Himmelsansicht ausgeblendet, damit
    // die Texte der Detailkacheln nicht abgeschnitten werden.
    const showInlineSky = layout.skyViewInline && width >= 430;
    const tileCount =
      (config.show_sun ? 1 : 0) + (config.show_moon ? 1 : 0) + (showInlineSky ? 1 : 0);
    const innerWidth = Math.max(
      60,
      width - 2 * layout.padding - 8 * Math.max(0, tileCount - 1),
    );
    const contentWidth = innerWidth / Math.max(1, tileCount) - 20 - 26 - 9;

    // ---- Sonne ------------------------------------------------------------
    const sunTitle = this._fitLabel(
      [context.t('sunAltitude'), context.t('elevation')],
      contentWidth,
      10.5,
    );
    const sunValue = formatDegrees(model.sun.altitude, 1, context.locale);
    const azimuthText = `${Math.round(model.sun.azimuth)}° ${compassDirection(
      model.sun.azimuth,
      language,
    )}`;
    // Unter dem Horizont nennt die Zeile die Tiefe; die Richtung steht
    // zusätzlich dabei, solange sie in die Zeile passt.
    const sunBelowText =
      extras.sunBelowHorizon !== null
        ? `${formatDegrees(extras.sunBelowHorizon, 1, context.locale)} ${context.t('belowHorizon')}`
        : null;
    const sunSub = this._fitLabel(
      [
        sunBelowText
          ? `${sunBelowText} · ${azimuthText}`
          : `${context.t('azimuth')} ${azimuthText}`,
        sunBelowText ?? azimuthText,
        azimuthText,
      ],
      contentWidth,
      9.5,
    );
    // Azimut bei Auf- und Untergang – nur mit astronomischen Details.
    const riseAzimuth =
      extras.sunriseAzimuth !== null
        ? `${Math.round(extras.sunriseAzimuth)}° ${compassDirection(extras.sunriseAzimuth, language)}`
        : null;
    const setAzimuth =
      extras.sunsetAzimuth !== null
        ? `${Math.round(extras.sunsetAzimuth)}° ${compassDirection(extras.sunsetAzimuth, language)}`
        : null;
    const sunEventAzimuth =
      config.show_astronomical_details && riseAzimuth && setAzimuth
        ? this._fitLabel(
            [
              context.t('sunAzimuthAtEvents', { rise: riseAzimuth, set: setAzimuth }),
              `${Math.round(extras.sunriseAzimuth as number)}° / ${Math.round(
                extras.sunsetAzimuth as number,
              )}°`,
            ],
            contentWidth,
            9.5,
          )
        : null;
    // Kulmination und Mittagshöhe – nur mit astronomischen Details.
    const sunExtra = config.show_astronomical_details
      ? this._fitLabel(
          [
            `${context.t('solarNoon')} ${
              model.events.solarNoon ? formatTime(model.events.solarNoon, context) : '—'
            } · ${formatDegrees(model.day.maxAltitude, 1, context.locale)}`,
            model.events.solarNoon ? formatTime(model.events.solarNoon, context) : null,
          ],
          contentWidth,
          9.5,
        )
      : null;

    // ---- Mond -------------------------------------------------------------
    const moonTitle = this._fitLabel(
      [context.t(moonPhaseKey), context.t('moon')],
      contentWidth,
      10.5,
    );
    const percentText = formatPercent(model.moon.phase.illumination, context.locale);
    const moonValue = this._fitLabel(
      [`${percentText} ${context.t('illumination')}`, percentText],
      contentWidth,
      13,
    );

    // Aktuelle Stellung des Mondes: Höhe über bzw. unter dem Horizont und
    // Himmelsrichtung. Unter dem Horizont nennt die Zeile das eigens, weil
    // das Vorzeichen leicht zu übersehen ist.
    const moonAltitude = model.moon.position.apparentAltitude;
    const moonAltitudeText = formatDegrees(moonAltitude, 1, context.locale);
    const moonAzimuthText = `${Math.round(model.moon.position.azimuth)}° ${compassDirection(
      model.moon.position.azimuth,
      language,
    )}`;
    const moonPositionTitle = `${context.t('elevation')} ${moonAltitudeText} · ${context.t(
      'azimuth',
    )} ${moonAzimuthText}`;
    // Abnehmende Fülle: mit Bezeichnung, ohne Bezeichnung, nur die Höhe.
    // Unter dem Horizont nennt die Zeile das eigens, weil das Vorzeichen
    // leicht zu übersehen ist.
    const moonPositionBase =
      moonAltitude >= 0
        ? [
            `${context.t('elevation')} ${moonAltitudeText} · ${moonAzimuthText}`,
            `${moonAltitudeText} · ${moonAzimuthText}`,
            moonAltitudeText,
          ]
        : [
            `${formatDegrees(Math.abs(moonAltitude), 1, context.locale)} ${context.t(
              'belowHorizon',
            )} · ${moonAzimuthText}`,
            `${formatDegrees(Math.abs(moonAltitude), 1, context.locale)} ${context.t(
              'belowHorizon',
            )}`,
            moonAltitudeText,
          ];

    // Entfernung mit Einordnung: nahe Erdnähe bzw. nahe Erdferne.
    let moonSub: string | null = null;
    let moonSubTitle = '';
    if (extras.moonDistance) {
      const { current, min, max } = extras.moonDistance;
      const span = Math.max(1, max - min);
      const nearPerigee = current <= min + span * 0.2;
      const nearApogee = current >= min + span * 0.8;
      const distance = formatKilometers(current, context.locale);
      const hint = nearPerigee
        ? context.t('nearPerigee')
        : nearApogee
          ? context.t('nearApogee')
          : '';
      moonSubTitle = `${context.t('moonDistance')}: ${distance} · ${context.t('distanceRange', {
        min: formatKilometers(min, context.locale),
        max: formatKilometers(max, context.locale),
      })}`;
      moonSub = this._fitLabel(
        hint ? [`${distance} · ${hint}`, distance] : [distance],
        contentWidth,
        9.5,
      );
    }

    // Stellung und Entfernung teilen sich eine Zeile, solange sie hineinpasst.
    const moonPositionLine = this._fitLabel(
      moonSub
        ? moonPositionBase.flatMap((text) => [`${text} · ${moonSub}`, text])
        : moonPositionBase,
      contentWidth,
      9.5,
    );
    const distanceInPosition = moonSub !== null && (moonPositionLine?.includes(moonSub) ?? false);

    // Nächster Vollmond – inklusive Hinweis auf einen zweiten Vollmond
    // im Kalendermonat („Blue Moon“).
    let moonExtra: string | null = null;
    let moonExtraTitle = '';
    if (config.show_astronomical_details && extras.nextFullMoon) {
      const days = extras.nextFullMoonDays ?? 0;
      const when = days <= 0 ? context.t('dayToday') : context.t('inDays', { days: String(days) });
      const short = `${context.t('nextFullMoon')} ${when}`;
      const blue = extras.blueMoon ? ` · ${context.t('blueMoon')}` : '';
      const full = `${short}${blue}${
        extras.moonFolkName ? ` · ${extras.moonFolkName}` : ''
      }`;
      moonExtraTitle = extras.blueMoon
        ? context.t('blueMoonHint')
        : extras.moonFolkName
          ? context.t('folkNameHint')
          : context.t('nextFullMoon');
      moonExtra = this._fitLabel([full, `${short}${blue}`, short], contentWidth, 9.5);
    }

    const moonTimes = config.show_moon_times
      ? this._fitLabel(
          [this._moonTimesText(model, context, false), this._moonTimesText(model, context, true)],
          contentWidth,
          9.5,
        )
      : null;

    // Die Kachel hat nur für eine begrenzte Zahl Zusatzzeilen Platz (Titel und
    // Wert stehen immer). Die Reihenfolge ist nach Wichtigkeit: Stellung,
    // Auf- und Untergang, nächster Vollmond, Entfernung.
    const moonLines: { text: string; title: string | null; position?: boolean }[] = [];
    if (moonPositionLine) {
      moonLines.push({ text: moonPositionLine, title: moonPositionTitle, position: true });
    }
    if (moonTimes) moonLines.push({ text: moonTimes, title: null });
    if (moonExtra) moonLines.push({ text: moonExtra, title: moonExtraTitle });
    if (moonSub && !distanceInPosition) {
      moonLines.push({ text: moonSub, title: moonSubTitle });
    }
    const moonLinesShown = moonLines.slice(
      0,
      layout.detailsHeight >= DETAILS_HEIGHT_DETAILED ? 3 : 2,
    );
    // Reicht der Platz nicht für die Entfernung, steht sie im Tooltip der
    // Stellungszeile – verloren geht sie damit nicht.
    const distanceVisible =
      distanceInPosition || moonLinesShown.some((line) => line.text === moonSub);
    const moonDistanceHint = moonSub && !distanceVisible ? moonSubTitle || moonSub : null;

    return html`
      <div
        class="details"
        style=${styleMap({ gap: '8px', height: `${layout.detailsHeight}px` })}
      >
        ${config.show_sun
          ? html`
              <div class="detail-tile sun">
                <span class="detail-icon">${iconSun(20, dark ? '#ffd166' : '#f5a524')}</span>
                <span class="detail-content">
                  ${sunTitle ? html`<span class="detail-title">${sunTitle}</span>` : nothing}
                  <span class="detail-value">${sunValue}</span>
                  ${sunSub ? html`<span class="detail-sub">${sunSub}</span>` : nothing}
                  ${sunExtra ? html`<span class="detail-sub">${sunExtra}</span>` : nothing}
                  ${sunEventAzimuth
                    ? html`<span class="detail-sub">${sunEventAzimuth}</span>`
                    : nothing}
                </span>
              </div>
            `
          : nothing}
        ${config.show_moon
          ? html`
              <div class="detail-tile moon">
                <span class="detail-icon">
                  ${renderMoonDisc({
                    size: 26,
                    illumination: model.moon.phase.illumination,
                    brightLimbAngle: model.moon.phase.brightLimbAngle,
                    uid: `${this._uid}-moon-detail`,
                  })}
                </span>
                <span class="detail-content">
                  ${moonTitle ? html`<span class="detail-title">${moonTitle}</span>` : nothing}
                  ${moonValue ? html`<span class="detail-value">${moonValue}</span>` : nothing}
                  ${moonLinesShown.map((line) => {
                    const title =
                      [
                        line.title,
                        line.position ? moonDistanceHint : null,
                      ]
                        .filter(Boolean)
                        .join(' · ') || null;
                    return html`<span class="detail-sub" title=${title ?? nothing}
                      >${line.text}</span
                    >`;
                  })}
                </span>
              </div>
            `
          : nothing}
        ${showInlineSky
          ? html`
              <div class="detail-tile sky-inline">
                <span class="sky-inline-wrap">
                  ${renderSkyView({
                  width: 56,
                  height: 56,
                  sun: config.show_sun
                    ? { altitude: model.sun.altitude, azimuth: model.sun.azimuth }
                    : null,
                  moon: config.show_moon
                    ? {
                        altitude: model.moon.position.apparentAltitude,
                        azimuth: model.moon.position.azimuth,
                        illumination: model.moon.phase.illumination,
                        brightLimbAngle: model.moon.phase.brightLimbAngle,
                      }
                    : null,
                  sunTrack: model.sunTrack,
                  moonPhase: model.moon.phase,
                  showSun: config.show_sun,
                  showMoon: config.show_moon,
                  palette: dark ? DARK_PALETTE : LIGHT_PALETTE,
                  format: context,
                  animations: config.animations,
                  uid: `${this._uid}-sky-inline`,
                  showCardinals: false,
                  seed: localDayIndex(model.now, model.timeZone),
                  })}
                </span>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  /**
   * Auf- und Untergang des Mondes als Kurzform.
   *
   * @param shortOnly nur der Aufgang (für sehr schmale Karten)
   */
  private _moonTimesText(model: CardModel, context: FormatContext, shortOnly: boolean): string {
    const rise = model.extras.moonRise;
    const set = model.extras.moonSet;
    const riseSuffix = rise && rise.dayOffset !== 0
      ? ` ${formatDayOffset(rise.dayOffset, context.t)}`
      : '';
    const riseText = rise ? `↑ ${formatTime(rise.time, context)}${riseSuffix}` : '↑ —';
    if (shortOnly) return riseText;
    const setSuffix = set && set.dayOffset !== 0
      ? ` ${formatDayOffset(set.dayOffset, context.t)}`
      : '';
    const setText = set ? `↓ ${formatTime(set.time, context)}${setSuffix}` : '↓ —';
    return `${riseText} · ${setText}`;
  }

  /**
   * Zeile über dem Zeitstrahl der Minimalvariante: links der Sonnenaufgang,
   * rechts der Sonnenuntergang, dazwischen die Kulmination (Zenit). Beide
   * Gruppen sind getrennt abschaltbar; fehlt ein Ereignis (Polartag,
   * Polarnacht), entfällt sein Eintrag statt einen Platzhalter zu zeigen.
   */
  private _renderMinimalTimes(
    model: CardModel,
    context: FormatContext,
    layout: LayoutMetrics,
    config: ResolvedConfig,
  ): TemplateResult | typeof nothing {
    if (layout.minimalTimesHeight <= 0) return nothing;
    const t = context.t;
    const entries: TemplateResult[] = [];

    if (config.minimal_show_times && model.events.sunrise) {
      const time = formatTime(model.events.sunrise, context);
      entries.push(
        html`<span class="minimal-time rise" title=${`${t('sunrise')} ${time}`}
          >↑ ${time}</span
        >`,
      );
    }
    if (config.minimal_show_zenith && model.events.solarNoon) {
      const time = formatTime(model.events.solarNoon, context);
      // Auf schmalen Karten bleibt nur die Zeit – das Wort entfällt.
      const text = layout.chartWidth < 250 ? time : `${t('zenith')} ${time}`;
      entries.push(
        html`<span class="minimal-time zenith" title=${`${t('zenith')} ${time}`}
          >${text}</span
        >`,
      );
    }
    if (config.minimal_show_times && model.events.sunset) {
      const time = formatTime(model.events.sunset, context);
      entries.push(
        html`<span class="minimal-time set" title=${`${t('sunset')} ${time}`}
          >↓ ${time}</span
        >`,
      );
    }
    if (entries.length === 0) return nothing;

    const fontSize = clamp(round(layout.minimalTimesHeight * 0.78, 1), 8, 12);
    return html`<div
      class="minimal-times"
      style=${styleMap({
        height: `${layout.minimalTimesHeight}px`,
        fontSize: `${fontSize}px`,
        lineHeight: `${layout.minimalTimesHeight}px`,
      })}
    >
      ${entries}
    </div>`;
  }

  /**
   * Bildet die Zusammenfassung des Minimalstreifens für Screenreader. Sie
   * ergänzt die Kurzfassung um den aktuellen Sonnenstand und den Hinweis,
   * dass die vollständige Karte per Klick erreichbar ist.
   */
  private _minimalAriaLabel(model: CardModel, context: FormatContext): string {
    return `${this._minimalTitle(model, context)}, ${context.t('popupOpenHint')}`;
  }

  /**
   * Kurzfassung für den Tooltip des Streifens – und Basis der
   * Screenreader-Meldung.
   *
   * Die zwölf Pixel hohe Zeile trägt keine weitere Angabe; die Restzeit
   * steht daher im Tooltip und wird von Screenreadern vorgelesen.
   */
  private _minimalTitle(model: CardModel, context: FormatContext): string {
    const parts = [this._ariaLabel(model, context)];
    parts.push(
      `${context.t('sun')} ${formatDegrees(model.sun.altitude, 0, context.locale)}`,
    );
    const next = this._primaryCountdown(model, context);
    if (next) parts.push(next.long);
    return parts.join(' · ');
  }

  /** Bildet eine kurze Zusammenfassung für Screenreader. */
  private _ariaLabel(model: CardModel, context: FormatContext): string {
    const parts: string[] = [context.t('title')];
    parts.push(context.t(this._phaseKey(model)));
    if (model.events.sunrise) {
      parts.push(`${context.t('sunrise')} ${formatTime(model.events.sunrise, context)}`);
    }
    if (model.events.sunset) {
      parts.push(`${context.t('sunset')} ${formatTime(model.events.sunset, context)}`);
    }
    return parts.join(', ');
  }
}

/** Meldet die Karte im Home-Assistant-Kartenkatalog an. */
declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}

if (typeof window !== 'undefined') {
  window.customCards = window.customCards || [];
  const exists = window.customCards.some((entry) => entry.type === `custom:${CARD_TYPE}`);
  if (!exists) {
    window.customCards.push({
      type: `custom:${CARD_TYPE}`,
      name: 'Sun & Moon Card',
      description:
        'Astronomischer Tagesverlauf mit Sonnenaufgang, Sonnenuntergang, Dämmerungsphasen sowie Mondphase und Mondstand.',
      preview: true,
      documentationURL: 'https://github.com/cercytrone/ha-sun-moon-card',
    });
  }
}

export type { SunMoonCardConfig, ConfigChangedEvent, HomeAssistant };
