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
  type LayoutMetrics,
  type PhasePalette,
} from './const.js';
import {
  compassDirection,
  createFormatContext,
  formatDate,
  formatDayOffset,
  formatDegrees,
  formatDurationCompact,
  formatKilometers,
  formatPercent,
  formatSignedDuration,
  formatTime,
  resolveHour12,
  type FormatContext,
} from './format.js';
import { iconDawn, iconDusk, iconSun, iconSunrise, iconSunset, iconWarning } from './icons.js';
import {
  localize,
  resolveLanguage,
  type Language,
  type StringKey,
} from './localize.js';
import { clearModelCache, getModel, resolveCardHeight, resolveConfig } from './model.js';
import { localDayIndex } from './timezone.js';
import { cardStyles } from './styles.js';

// Der Editor wird mitgebündelt, damit `getConfigElement()` eine einzige
// Datei ausreicht.
import './sun-moon-card-editor.js';
import { nextMinute } from './utils.js';
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

  /**
   * Setzt die Gestaltungsvarianten am Wurzelelement.
   *
   * Die Klassen liegen am Host (nicht an `ha-card`), weil die CSS-Variablen
   * für Glas/Flach und hell/dunkel von dort in alle Bereiche – einschließlich
   * der SVG-Darstellungen – vererbt werden.
   */
  protected override updated(changed: PropertyValues): void {
    const dark = this._isDark();
    this.classList.toggle('smc-dark', dark);
    this.classList.toggle('smc-light', !dark);
    this.classList.toggle('smc-flat', this._config?.card_style === 'flat');
    this.classList.toggle('smc-glass', this._config?.card_style !== 'flat');
    void changed;
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
                      compact: layout.compact,
                      uid: `${this._uid}-chart`,
                      showAstronomicalLayers: config.show_astronomical_details,
                      currentAltitude: model.sun.altitude,
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
                  ${this._renderSkyReadout(model, context, layout.skyViewWidth)}
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
    budget -= phaseWidth;

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
          ${dayLengthChip}${timeZoneChip}
          <span class="phase-chip" title=${phaseText}>
            <span
              class="phase-dot"
              style=${styleMap({ background: this._phaseColor(model, palette) })}
            ></span>
            ${phaseText}
          </span>
        </div>
      </div>
    `;
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

  /** Ablesung unter der Himmelsansicht: Azimut von Sonne und Mond. */
  private _renderSkyReadout(
    model: CardModel,
    context: FormatContext,
    width: number,
  ): TemplateResult | typeof nothing {
    const config = this._config!;
    const rows: TemplateResult[] = [];
    const readout = (label: string, azimuth: number) =>
      html`<span
        >${context.t('azimuthReadout', {
          body: label,
          degrees: String(Math.round(azimuth)),
          direction: compassDirection(azimuth, context.language),
        })}</span
      >`;

    if (config.show_sun) rows.push(readout(context.t('sun'), model.sun.azimuth));
    if (config.show_moon) {
      rows.push(readout(context.t('moon'), model.moon.position.azimuth));
    }
    if (rows.length === 0 || width < 150) return nothing;
    return html`<div class="sky-readout">${rows}</div>`;
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

    return html`
      <div class="footer" style=${styleMap({ height: `${layout.footerHeight}px` })}>
        <span class="part">${context.t(twilightKey)} · ${model.extras.timeZoneLongName}</span>
        <span class="part">${context.t('footerMethod')}</span>
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
    const sunSubText =
      extras.sunBelowHorizon !== null
        ? `${formatDegrees(extras.sunBelowHorizon, 1, context.locale)} ${context.t('belowHorizon')}`
        : `${context.t('azimuth')} ${azimuthText}`;
    const sunSub = this._fitLabel([sunSubText, azimuthText], contentWidth, 9.5);
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
                  ${moonSub
                    ? html`<span class="detail-sub" title=${moonSubTitle}>${moonSub}</span>`
                    : nothing}
                  ${moonExtra
                    ? html`<span class="detail-sub" title=${moonExtraTitle}>${moonExtra}</span>`
                    : nothing}
                  ${moonTimes ? html`<span class="detail-sub">${moonTimes}</span>` : nothing}
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
