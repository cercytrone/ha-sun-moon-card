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

import { html, LitElement, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { renderDayChart } from './components/day-chart.js';
import { renderMoonDisc } from './components/moon-disc.js';
import { renderSkyView } from './components/sky-view.js';
import {
  CARD_ELEMENT_NAME,
  CARD_TYPE,
  DARK_PALETTE,
  DEFAULT_CONFIG,
  LIGHT_PALETTE,
  MIN_CARD_HEIGHT,
  computeLayout,
  stubConfig,
  type PhasePalette,
} from './const.js';
import {
  compassDirection,
  createFormatContext,
  formatDate,
  formatDegrees,
  formatDuration,
  formatPercent,
  formatTime,
  resolveHour12,
  type FormatContext,
} from './format.js';
import { iconDawn, iconDusk, iconSun, iconSunrise, iconSunset, iconWarning } from './icons.js';
import { localize, resolveLanguage, type Language, type StringKey } from './localize.js';
import { clearModelCache, getModel, resolveCardHeight, resolveConfig } from './model.js';
import { cardStyles } from './styles.js';

// Der Editor wird mitgebündelt, damit `getConfigElement()` eine einzige
// Datei ausreicht.
import './sun-moon-card-editor.js';
import { round, nextMinute } from './utils.js';
import type {
  CardModel,
  ConfigChangedEvent,
  HomeAssistant,
  LovelaceCard,
  LovelaceCardEditor,
  ResolvedConfig,
  SunMoonCardConfig,
} from './types.js';

/** Eintrag der Ereignisleiste. */
interface EventTile {
  key: string;
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
  /** Von Home Assistant gesetzt. */
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: ResolvedConfig;
  @state() private _width = 0;
  @state() private _tick = 0;

  private _uid = `smc-${Math.random().toString(36).slice(2, 9)}`;
  private _timer?: ReturnType<typeof setTimeout>;
  private _resizeObserver?: ResizeObserver;
  private _hassSignature = '';

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
      // die Darstellung nicht.
      console.warn(`[sun-moon-card] ${warnings.join(' ')}`);
    }
    this._config = resolved;
    clearModelCache();
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
      min_rows: Math.max(1, Math.round(MIN_CARD_HEIGHT / 56)),
      columns: 6,
      min_columns: 4,
    };
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this._startClock();
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
          class=${classMap({ 'smc-dark': dark, 'smc-light': !dark })}
          style=${styleMap({ height: `${height}px` })}
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

    const chartWidth =
      width - 2 * layout.padding - (layout.skyViewSide ? layout.skyViewWidth + 10 : 0);

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
          style=${styleMap({ padding: `${layout.padding}px`, gap: `${layout.compact ? 3 : 6}px` })}
        >
          ${layout.showHeader ? this._renderHeader(model, context, palette) : nothing}

          <div class="body">
            ${config.show_day_chart
              ? html`<div class="chart-wrap" style=${styleMap({ height: `${layout.chartHeight}px` })}>
                  ${renderDayChart({
                    profile: model.day,
                    events: model.events,
                    now: model.now,
                    width: Math.max(120, chartWidth),
                    height: layout.chartHeight,
                    palette,
                    format: context,
                    showSun: config.show_sun,
                    showMoon: config.show_moon,
                    showTwilight: config.show_twilight,
                    twilightLevel: config.twilight_level,
                    animations: config.animations,
                    compact: layout.compact,
                    uid: `${this._uid}-chart`,
                    showAstronomicalLayers: config.show_astronomical_details,
                    currentAltitude: model.sun.altitude,
                  })}
                </div>`
              : nothing}
            ${layout.skyViewSide
              ? html`<div
                  class="sky-wrap"
                  style=${styleMap({
                    width: `${layout.skyViewWidth}px`,
                    height: `${layout.chartHeight}px`,
                  })}
                >
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
                  })}
                </div>`
              : nothing}
          </div>

          ${layout.showEvents
            ? this._renderEvents(model, context, width, layout.compact, layout.padding)
            : nothing}
          ${layout.showDetails
            ? this._renderDetails(
                model,
                context,
                config,
                layout.skyViewInline,
                language,
                dark,
                width,
                layout.padding,
              )
            : nothing}
        </div>
      </ha-card>
    `;
  }

  /** Kopfzeile mit Ort, Datum und Himmelsphase. */
  private _renderHeader(
    model: CardModel,
    context: FormatContext,
    palette: PhasePalette,
  ): TemplateResult {
    const title = model.locationName || context.t('title');
    return html`
      <div class="header">
        <div class="header-text">
          <span class="title">${title}</span>
          <span class="subtitle">${formatDate(model.now, context)}</span>
        </div>
        <span class="phase-chip" title=${context.t(this._phaseKey(model))}>
          <span
            class="phase-dot"
            style=${styleMap({ background: this._phaseColor(model, palette) })}
          ></span>
          ${context.t(this._phaseKey(model))}
        </span>
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
   * abgeschätzt (0,62 em – Erfahrungswert für lateinische Schrift mit
   * Großbuchstaben und Umlauten). Damit werden abgeschnittene Texte auf
   * schmalen Karten zuverlässig vermieden.
   */
  private _fitLabel(
    candidates: Array<string | null>,
    availableWidth: number,
    fontSize: number,
  ): string | null {
    for (const candidate of candidates) {
      if (!candidate) continue;
      if (candidate.length * fontSize * 0.62 <= availableWidth) return candidate;
    }
    return null;
  }

  /** Leiste mit Dämmerungs- und Sonnenzeiten. */
  private _renderEvents(
    model: CardModel,
    context: FormatContext,
    width: number,
    compact: boolean,
    padding: number,
  ): TemplateResult | typeof nothing {
    const config = this._config!;
    const tiles: EventTile[] = [];

    if (config.show_twilight) {
      tiles.push({
        key: 'civilDawn',
        label: context.t('civilDawn'),
        shortLabel: context.t('civilDawnShort'),
        time: model.events.civilDawn,
        icon: iconDawn(compact ? 14 : 16),
        missingText: context.t('noEvent'),
      });
    }
    tiles.push({
      key: 'sunrise',
      label: context.t('sunrise'),
      shortLabel: context.t('sunriseShort'),
      time: model.events.sunrise,
      icon: iconSunrise(compact ? 14 : 16),
      missingText: context.t('noSunrise'),
    });
    tiles.push({
      key: 'sunset',
      label: context.t('sunset'),
      shortLabel: context.t('sunsetShort'),
      time: model.events.sunset,
      icon: iconSunset(compact ? 14 : 16),
      missingText: context.t('noSunset'),
    });
    if (config.show_twilight) {
      tiles.push({
        key: 'civilDusk',
        label: context.t('civilDusk'),
        shortLabel: context.t('civilDuskShort'),
        time: model.events.civilDusk,
        icon: iconDusk(compact ? 14 : 16),
        missingText: context.t('noEvent'),
      });
    }

    if (config.twilight_level === 'all' || config.show_astronomical_details) {
      const extras: Array<[StringKey, Date | null]> = [
        ['nauticalDawn', model.events.nauticalDawn],
        ['nauticalDusk', model.events.nauticalDusk],
        ['astronomicalDawn', model.events.astronomicalDawn],
        ['astronomicalDusk', model.events.astronomicalDusk],
      ];
      for (const [key, time] of extras) {
        tiles.push({
          key,
          label: context.t(key),
          shortLabel: context.t(key),
          time,
          icon: key.endsWith('Dawn') ? iconDawn(compact ? 13 : 15) : iconDusk(compact ? 13 : 15),
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
    const tileInner = innerWidth / visible.length - 6;
    const labelFontSize = compact
      ? tileInner < 120
        ? 8.5
        : 9
      : tileInner < 92
        ? 8.5
        : 9.5;
    const timeFontSize = tileInner < 74 ? 11 : tileInner < 96 ? 12 : 12.5;

    return html`
      <div class="events" style=${styleMap({ gap: `${gap}px` })}>
        ${visible.map((tile) => {
          const label = this._fitLabel([tile.label, tile.shortLabel], tileInner, labelFontSize);
          const timeText = tile.time ? formatTime(tile.time, context) : tile.missingText;
          const fittedTime = this._fitLabel([timeText, '—'], tileInner, timeFontSize) ?? '—';
          return html`
            <div
              class=${classMap({
                'event-tile': true,
                secondary: Boolean(tile.secondary),
                compact,
              })}
              title=${`${tile.label}: ${timeText}`}
            >
              <span class="event-icon">${tile.icon}</span>
              ${compact && label ? html`<span class="event-label">${label}</span>` : nothing}
              <span
                class=${classMap({ 'event-time': true, missing: !tile.time })}
                style=${styleMap({ fontSize: `${timeFontSize}px` })}
              >
                ${fittedTime}
              </span>
              ${!compact && label
                ? html`<span class="event-label" style=${styleMap({ fontSize: `${labelFontSize}px` })}>${label}</span>`
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
    inlineSky: boolean,
    language: Language,
    dark: boolean,
    width: number,
    padding: number,
  ): TemplateResult {
    const moonPhaseKey = (model.moon.haPhaseName ?? model.moon.phase.phaseKey) as StringKey;
    const nextMoonRise = model.moon.events.nextRise ?? model.moon.events.previousRise;
    const nextMoonSet = model.moon.events.nextSet ?? model.moon.events.previousSet;

    // Auf sehr schmalen Karten wird die Himmelsansicht ausgeblendet, damit
    // die Texte der Detailkacheln nicht abgeschnitten werden.
    const showInlineSky = inlineSky && width >= 430;
    const tileCount =
      (config.show_sun ? 1 : 0) + (config.show_moon ? 1 : 0) + (showInlineSky ? 1 : 0);
    const innerWidth = Math.max(60, width - 2 * padding - 8 * Math.max(0, tileCount - 1));
    const contentWidth = innerWidth / Math.max(1, tileCount) - 20 - 26 - 9;

    const sunTitle = this._fitLabel([context.t('sunAltitude'), context.t('elevation')], contentWidth, 10.5);
    const sunSub = config.show_astronomical_details
      ? `${context.t('solarNoon')} ${model.events.solarNoon ? formatTime(model.events.solarNoon, context) : '—'}` +
        (model.daylightMinutes !== null
          ? ` · ${context.t('dayLength')} ${formatDuration(model.daylightMinutes, language)}`
          : '')
      : `${round(model.sun.azimuth, 0)}° ${compassDirection(model.sun.azimuth, language)}`;
    const sunValue = formatDegrees(model.sun.altitude, 1, context.locale);

    const moonTitle = this._fitLabel([context.t(moonPhaseKey), context.t('moon')], contentWidth, 10.5);
    const percentText = formatPercent(model.moon.phase.illumination, context.locale);
    const moonValue = this._fitLabel(
      [`${percentText} ${context.t('illumination')}`, percentText],
      contentWidth,
      13,
    );
    const moonTimes = config.show_moon_times
      ? this._fitLabel(
          [
            `↑ ${nextMoonRise ? formatTime(nextMoonRise, context) : '—'} · ↓ ${
              nextMoonSet ? formatTime(nextMoonSet, context) : '—'
            }`,
            `↑ ${nextMoonRise ? formatTime(nextMoonRise, context) : '—'}`,
          ],
          contentWidth,
          9.5,
        )
      : null;

    return html`
      <div class="details" style=${styleMap({ gap: '8px' })}>
        ${config.show_sun
          ? html`
              <div class="detail-tile">
                <span class="detail-icon">${iconSun(20, dark ? '#ffd166' : '#f5a524')}</span>
                <span class="detail-content">
                  ${sunTitle ? html`<span class="detail-title">${sunTitle}</span>` : nothing}
                  <span class="detail-value">${sunValue}</span>
                  <span class="detail-sub">${sunSub}</span>
                </span>
              </div>
            `
          : nothing}
        ${config.show_moon
          ? html`
              <div class="detail-tile">
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
                  ${moonTimes ? html`<span class="detail-sub">${moonTimes}</span>` : nothing}
                </span>
              </div>
            `
          : nothing}
        ${showInlineSky
          ? html`
              <div class="detail-tile sky-inline">
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
                })}
              </div>
            `
          : nothing}
      </div>
    `;
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
