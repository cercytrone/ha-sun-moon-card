/**
 * sun-moon-card-editor.ts
 *
 * Visueller Konfigurationseditor für den Home-Assistant-Karteneditor.
 *
 * Der Editor verwendet bewusst einfache HTML-Formularelemente, die mit den
 * CSS-Variablen von Home Assistant gestaltet sind. Damit ist er unabhängig von
 * internen Frontend-Komponenten (`ha-form`, `mwc-*`) und funktioniert über
 * alle Home-Assistant-Versionen hinweg.
 *
 * Änderungen werden über das Ereignis `config-changed` an Home Assistant
 * gemeldet (Standard der Lovelace-Karten).
 */

import { html, LitElement, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { EDITOR_ELEMENT_NAME } from './const.js';
import {
  CONFIG_CHOICES,
  DEFAULT_CONFIG,
  styleDefaultHeight,
  POPUP_HEIGHT_RANGE,
  POPUP_WIDTH_RANGE,
  SUN_MARKER_SIZE_RANGE,
  MOON_MARKER_SIZE_RANGE,
  cardHeightRange,
  stubConfig,
} from './const.js';
import { localize, resolveLanguage, type StringKey } from './localize.js';
import { editorStyles } from './styles.js';
import { clamp, round, toNumber } from './utils.js';
import type {
  ConfigChangedEvent,
  HomeAssistant,
  LovelaceCardEditor,
  SunMoonCardConfig,
} from './types.js';

/** Meldet eine Konfigurationsänderung an Home Assistant. */
function fireConfigChanged(
  element: HTMLElement,
  config: SunMoonCardConfig,
): void {
  element.dispatchEvent(
    new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    }) as ConfigChangedEvent<SunMoonCardConfig>,
  );
}

@customElement(EDITOR_ELEMENT_NAME)
export class SunMoonCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: SunMoonCardConfig;

  static override styles = editorStyles;

  public setConfig(config: SunMoonCardConfig): void {
    this._config = { ...config };
  }

  private get _language() {
    return resolveLanguage(
      this._config?.language,
      this.hass?.locale?.language ?? this.hass?.language,
    );
  }

  private _t(key: StringKey, replacements?: Record<string, string | number>): string {
    return localize(this._language, key, replacements);
  }

  private _value<K extends keyof SunMoonCardConfig>(
    key: K,
    fallback: NonNullable<SunMoonCardConfig[K]>,
  ): NonNullable<SunMoonCardConfig[K]> {
    const value = this._config?.[key];
    return (value === undefined || value === null ? fallback : value) as NonNullable<
      SunMoonCardConfig[K]
    >;
  }

  private _update(patch: Partial<SunMoonCardConfig>): void {
    if (!this._config) return;
    const next = { ...this._config, ...patch } as SunMoonCardConfig;
    // Standardwerte werden nicht gespeichert – die YAML bleibt übersichtlich.
    for (const [key, value] of Object.entries(patch)) {
      const defaultValue = (DEFAULT_CONFIG as unknown as Record<string, unknown>)[key];
      if (value === defaultValue && key in DEFAULT_CONFIG) {
        delete (next as unknown as Record<string, unknown>)[key];
      }
    }
    this._config = next;
    fireConfigChanged(this, next);
  }

  /** Geöffnete Bereiche; „Kartenstil & Aussehen“ ist anfangs offen. */
  @state() private _open: ReadonlySet<string> = new Set(['style']);

  /**
   * Ausklappbarer Bereich. Die Kopfzeile nennt den Titel und – zugeklappt –
   * eine kurze Zusammenfassung der wichtigsten Einstellung.
   */
  private _group(key: string, titleKey: StringKey, summary: string, body: TemplateResult): TemplateResult {
    const open = this._open.has(key);
    return html`
      <details
        class="group"
        data-group=${key}
        ?open=${open}
        @toggle=${(event: Event) => {
          const isOpen = (event.target as HTMLDetailsElement).open;
          if (isOpen === this._open.has(key)) return;
          const next = new Set(this._open);
          if (isOpen) next.add(key);
          else next.delete(key);
          this._open = next;
        }}
      >
        <summary>
          <span class="group-title">${this._t(titleKey)}</span>
          <span class="group-summary">${summary}</span>
          <svg class="group-chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </summary>
        <div class="group-body">${body}</div>
      </details>
    `;
  }

  /** Auswahlfeld mit Optionen aus Wert und Textschlüssel. */
  private _select<K extends keyof SunMoonCardConfig>(
    id: string,
    key: K,
    labelKey: StringKey,
    fallback: string,
    options: Array<[string, string]>,
    extra: { disabled?: boolean; patch?: (value: string) => Partial<SunMoonCardConfig> } = {},
  ): TemplateResult {
    const current = String(this._config?.[key] ?? fallback);
    return html`
      <div class="row">
        <label for=${id}>${this._t(labelKey)}</label>
        <div class="control">
          <select
            id=${id}
            .value=${current}
            ?disabled=${extra.disabled === true}
            @change=${(event: Event) => {
              const value = (event.target as HTMLSelectElement).value;
              this._update({
                [key]: value,
                ...(extra.patch ? extra.patch(value) : {}),
              } as Partial<SunMoonCardConfig>);
            }}
          >
            ${
              // „selected“ an der Option selbst: Der Wert des Auswahlfelds wird
              // vor den Optionen gesetzt und griffe beim ersten Rendern ins Leere.
              options.map(
                ([value, text]) =>
                  html`<option value=${value} ?selected=${value === current}>${text}</option>`,
              )
            }
          </select>
        </div>
      </div>
    `;
  }

  override render(): TemplateResult {
    if (!this._config) return html``;
    const config = this._config;

    const height = config.card_height;
    // Nur ein ausdrücklich gesetztes 'auto' (oder ein leerer YAML-Schlüssel)
    // schaltet die Höhenfelder ab. Fehlt der Schlüssel, gilt der Standardwert
    // und die Felder bleiben bedienbar – sonst wäre die Höhe bei jeder neuen
    // Karte ausgegraut.
    const heightIsAuto = height === 'auto' || height === null;
    // Im Minimalmodus beginnt der zulässige Höhenbereich weit unten – der
    // Streifen funktioniert bis 24 px.
    const minimal = config.minimal_mode === true;
    const heightRange = cardHeightRange(minimal);
    const defaultHeight = minimal
      ? (DEFAULT_CONFIG.card_height as number)
      : styleDefaultHeight(config.card_style);
    const heightNumber = typeof height === 'number' ? height : defaultHeight;
    const useHaLocation = config.latitude === undefined || config.latitude === null;

    // Welche Schalter zum Kartenstil passen: Szene und Minimalistisch haben
    // eigene Infofelder; Himmelsansicht, Zeitenleiste & Co. gibt es nur im
    // klassischen Aufbau.
    const style = config.card_style ?? 'glass';
    const modern = (style === 'scene' || style === 'clean') && !minimal;
    const styleNames: Record<string, string> = {
      glass: this._t('editorCardStyleGlass'),
      flat: this._t('editorCardStyleFlat'),
      horizon: this._t('editorCardStyleHorizon'),
      scene: this._t('editorCardStyleScene'),
      clean: this._t('editorCardStyleClean'),
    };
    const sceneNames: Record<string, string> = {
      city: this._t('editorSceneCity'),
      mountains: this._t('editorSceneMountains'),
      forest: this._t('editorSceneForest'),
      coast: this._t('editorSceneCoast'),
      none: this._t('editorSceneNone'),
    };
    const on = (key: keyof SunMoonCardConfig): boolean =>
      this._value(key, (DEFAULT_CONFIG as unknown as Record<string, boolean>)[key]) as boolean;

    const styleSummary =
      style === 'scene'
        ? `${styleNames.scene.split(' (')[0]} · ${sceneNames[config.scene ?? 'city']}`
        : (styleNames[style] ?? style).split(' (')[0];
    const layoutSummary = [
      heightIsAuto ? this._t('editorCardHeightAuto') : `${heightNumber} px`,
      minimal ? this._t('editorMinimalMode') : null,
      !minimal && config.compact_mode ? this._t('editorCompactMode') : null,
    ]
      .filter(Boolean)
      .join(' · ');
    const contentSwitches: Array<[keyof SunMoonCardConfig, StringKey]> = [
      ['show_sun', 'editorShowSun'],
      ['show_moon', 'editorShowMoon'],
      ...(modern
        ? ([
            ['show_sun_info', 'editorSunInfo'],
            ['show_moon_info', 'editorMoonInfo'],
            ['show_header', 'editorShowHeader'],
            ['show_day_chart', 'editorShowDayChart'],
          ] as Array<[keyof SunMoonCardConfig, StringKey]>)
        : ([
            ['show_twilight', 'editorShowTwilight'],
            ['show_astronomical_details', 'editorShowAstronomicalDetails'],
            ['show_header', 'editorShowHeader'],
            ['show_day_chart', 'editorShowDayChart'],
            ['show_sky_view', 'editorShowSkyView'],
            ['show_events', 'editorShowEvents'],
            ['show_moon_times', 'editorShowMoonTimes'],
            ['show_golden_hour', 'editorGoldenHour'],
            ['show_footer', 'editorShowFooter'],
          ] as Array<[keyof SunMoonCardConfig, StringKey]>)),
    ];
    const enabled = contentSwitches.filter(([key]) => on(key)).length;
    const contentSummary = this._t('editorSwitchCount', {
      on: enabled,
      total: contentSwitches.length,
    });
    const countdownSummary = on('show_remaining_time')
      ? this._t(
          config.remaining_time_focus === 'next'
            ? 'editorRemainingTimeFocusNext'
            : config.remaining_time_focus === 'golden_hour'
              ? 'editorRemainingTimeFocusGolden'
              : 'editorRemainingTimeFocusSun',
        ).split(' (')[0]
      : this._t('editorOff');
    const localeSummary = [
      config.language === 'de' ? 'Deutsch' : config.language === 'en' ? 'English' : this._t('editorLanguageAuto'),
      config.time_format === '12'
        ? this._t('editorTimeFormat12')
        : config.time_format === '24'
          ? this._t('editorTimeFormat24')
          : null,
    ]
      .filter(Boolean)
      .join(' · ');
    const sourceSummary = useHaLocation
      ? 'Home Assistant'
      : `${round(Number(config.latitude), 2)}°, ${round(Number(config.longitude ?? 0), 2)}°`;

    return html`
      <div class="card-config">
        ${this._group(
          'style',
          'editorGroupStyle',
          styleSummary,
          html`
            ${this._select(
              'cardstyle',
              'card_style',
              'editorCardStyle',
              'glass',
              CONFIG_CHOICES.cardStyle.map((value) => [value, styleNames[value]]),
              // Beim Wechsel des Stils zieht die Standardhöhe mit – sonst bliebe
              // z. B. für Himmel und Kacheln der Szene zu wenig Raum.
              { patch: (value) => this._styleHeight(value) },
            )}
            ${style === 'scene'
              ? this._select(
                  'scene',
                  'scene',
                  'editorScene',
                  'city',
                  CONFIG_CHOICES.scene.map((value) => [value, sceneNames[value]]),
                )
              : nothing}
            ${this._select('theme', 'theme_mode', 'editorThemeMode', 'auto', [
              ['auto', this._t('editorThemeAuto')],
              ['light', this._t('editorThemeLight')],
              ['dark', this._t('editorThemeDark')],
            ])}
            ${this._switch('animations', 'editorAnimations')}
            ${style === 'scene' && !minimal
              ? nothing
              : this._numberRow({
                  id: 'sun-marker',
                  labelKey: 'editorSunMarkerSize',
                  value: this._value('sun_marker_size', DEFAULT_CONFIG.sun_marker_size),
                  min: SUN_MARKER_SIZE_RANGE[0],
                  max: SUN_MARKER_SIZE_RANGE[1],
                  step: 0.5,
                  digits: 1,
                  set: (value) => this._update({ sun_marker_size: value }),
                })}
            ${style === 'clean' && !minimal
              ? this._numberRow({
                  id: 'moon-marker',
                  labelKey: 'editorMoonMarkerSize',
                  value: this._value('moon_marker_size', DEFAULT_CONFIG.moon_marker_size),
                  min: MOON_MARKER_SIZE_RANGE[0],
                  max: MOON_MARKER_SIZE_RANGE[1],
                  step: 0.5,
                  digits: 1,
                  set: (value) => this._update({ moon_marker_size: value }),
                })
              : nothing}
          `,
        )}
        ${this._group(
          'layout',
          'editorGroupLayout',
          layoutSummary,
          html`
            <div class="row">
              <label for="height">${this._t('editorCardHeight')}</label>
              <div class="control height-control">
                <input
                  id="height"
                  type="range"
                  min="${heightRange[0]}"
                  max="${heightRange[1]}"
                  step="${minimal ? 2 : 10}"
                  .value=${String(heightNumber)}
                  ?disabled=${heightIsAuto}
                  @input=${(event: Event) =>
                    this._update({
                      card_height: Number((event.target as HTMLInputElement).value),
                    })}
                />
                <input
                  id="height-number"
                  type="number"
                  aria-label=${this._t('editorCardHeight')}
                  min="${heightRange[0]}"
                  max="${heightRange[1]}"
                  .value=${String(heightNumber)}
                  ?disabled=${heightIsAuto}
                  @change=${(event: Event) => {
                    const parsed = toNumber((event.target as HTMLInputElement).value);
                    if (parsed !== null) {
                      this._update({
                        card_height: Math.round(clamp(parsed, heightRange[0], heightRange[1])),
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div class="row">
              <label for="auto">${this._t('editorCardHeightAuto')}</label>
              <div class="control">
                <span class="switch">
                  <input
                    id="auto"
                    type="checkbox"
                    .checked=${heightIsAuto}
                    @change=${(event: Event) =>
                      this._update({
                        card_height: (event.target as HTMLInputElement).checked
                          ? 'auto'
                          : defaultHeight,
                      })}
                  />
                  <span class="slider"></span>
                </span>
              </div>
            </div>
            <div class="hint">
              ${heightRange[0]}–${heightRange[1]} px · ${this._t('editorDefault')}
              ${defaultHeight} px
            </div>
            ${modern ? nothing : this._switch('compact_mode', 'editorCompactMode', 'compact')}
            ${this._switch('minimal_mode', 'editorMinimalMode', 'minimal')}
            ${minimal
              ? html`<div class="hint">${this._t('editorMinimalModeHelp')}</div>
                  ${this._switch('minimal_show_times', 'editorMinimalTimes', 'minimal-times')}
                  ${this._switch('minimal_show_zenith', 'editorMinimalZenith', 'minimal-zenith')}
                  ${this._numberRow({
                    id: 'popup-width',
                    labelKey: 'editorPopupWidth',
                    value: this._value('popup_width', DEFAULT_CONFIG.popup_width),
                    min: POPUP_WIDTH_RANGE[0],
                    max: POPUP_WIDTH_RANGE[1],
                    step: 20,
                    set: (value) => this._update({ popup_width: Math.round(value) }),
                  })}
                  ${this._numberRow({
                    id: 'popup-height',
                    labelKey: 'editorPopupHeight',
                    value: this._value('popup_height', DEFAULT_CONFIG.popup_height),
                    min: POPUP_HEIGHT_RANGE[0],
                    max: POPUP_HEIGHT_RANGE[1],
                    step: 20,
                    set: (value) => this._update({ popup_height: Math.round(value) }),
                  })}`
              : nothing}
          `,
        )}
        ${this._group(
          'content',
          'editorGroupContent',
          contentSummary,
          html`
            ${contentSwitches.map(([key, labelKey]) => this._switch(key, labelKey))}
            ${this._select('twilight', 'twilight_level', 'editorTwilightLevel', 'civil', [
              ['civil', this._t('editorTwilightCivil')],
              ['nautical', this._t('editorTwilightNautical')],
              ['astronomical', this._t('editorTwilightAstronomical')],
              ['all', this._t('editorTwilightAll')],
            ])}
          `,
        )}
        ${this._group(
          'countdown',
          'editorGroupCountdown',
          countdownSummary,
          html`
            ${this._switch('show_remaining_time', 'editorRemainingTime')}
            ${this._select(
              'remaining-focus',
              'remaining_time_focus',
              'editorRemainingTimeFocus',
              'sun',
              [
                ['sun', this._t('editorRemainingTimeFocusSun')],
                ['next', this._t('editorRemainingTimeFocusNext')],
                ...(config.show_golden_hour
                  ? ([['golden_hour', this._t('editorRemainingTimeFocusGolden')]] as Array<
                      [string, string]
                    >)
                  : []),
              ],
              { disabled: config.show_remaining_time === false },
            )}
            ${modern ? nothing : this._switch('show_countdown_tile', 'editorCountdownTile')}
          `,
        )}
        ${this._group(
          'locale',
          'editorGroupLocale',
          localeSummary,
          html`
            ${this._select('language', 'language', 'editorLanguage', 'auto', [
              ['auto', this._t('editorLanguageAuto')],
              ['de', 'Deutsch'],
              ['en', 'English'],
            ])}
            ${this._select('timeformat', 'time_format', 'editorTimeFormat', 'auto', [
              ['auto', this._t('editorTimeFormatAuto')],
              ['24', this._t('editorTimeFormat24')],
              ['12', this._t('editorTimeFormat12')],
            ])}
          `,
        )}
        ${this._group(
          'source',
          'editorGroupSource',
          sourceSummary,
          html`
            <div class="row">
              <label for="entity">${this._t('editorEntity')}</label>
              <div class="control">
                <input
                  id="entity"
                  type="text"
                  .value=${this._value('entity', DEFAULT_CONFIG.entity)}
                  @change=${(event: Event) =>
                    this._update({ entity: (event.target as HTMLInputElement).value.trim() })}
                />
              </div>
            </div>
            <div class="row">
              <label for="moonentity">${this._t('editorMoonEntity')}</label>
              <div class="control">
                <input
                  id="moonentity"
                  type="text"
                  .value=${this._value('moon_entity', DEFAULT_CONFIG.moon_entity)}
                  @change=${(event: Event) =>
                    this._update({ moon_entity: (event.target as HTMLInputElement).value.trim() })}
                />
              </div>
            </div>
            <div class="hint">${this._t('editorMoonEntityHint')}</div>
            <div class="row">
              <label for="halocation">${this._t('editorUseHaLocation')}</label>
              <div class="control">
                <span class="switch">
                  <input
                    id="halocation"
                    type="checkbox"
                    .checked=${useHaLocation}
                    @change=${(event: Event) => {
                      const checked = (event.target as HTMLInputElement).checked;
                      if (checked) {
                        const next = { ...this._config } as SunMoonCardConfig;
                        delete next.latitude;
                        delete next.longitude;
                        this._config = next;
                        fireConfigChanged(this, next);
                      } else {
                        this._update({
                          latitude: round(this.hass?.config?.latitude ?? 0, 4),
                          longitude: round(this.hass?.config?.longitude ?? 0, 4),
                        });
                      }
                    }}
                  />
                  <span class="slider"></span>
                </span>
              </div>
            </div>
            <div class="row">
              <label for="latitude">${this._t('editorLatitude')}</label>
              <div class="control">
                <input
                  id="latitude"
                  type="number"
                  step="0.0001"
                  min="-90"
                  max="90"
                  .value=${String(config.latitude ?? this.hass?.config?.latitude ?? '')}
                  ?disabled=${useHaLocation}
                  @change=${(event: Event) => {
                    const parsed = toNumber((event.target as HTMLInputElement).value);
                    this._update({ latitude: parsed === null ? undefined : clamp(parsed, -90, 90) });
                  }}
                />
              </div>
            </div>
            <div class="row">
              <label for="longitude">${this._t('editorLongitude')}</label>
              <div class="control">
                <input
                  id="longitude"
                  type="number"
                  step="0.0001"
                  min="-180"
                  max="180"
                  .value=${String(config.longitude ?? this.hass?.config?.longitude ?? '')}
                  ?disabled=${useHaLocation}
                  @change=${(event: Event) => {
                    const parsed = toNumber((event.target as HTMLInputElement).value);
                    this._update({
                      longitude: parsed === null ? undefined : clamp(parsed, -180, 180),
                    });
                  }}
                />
              </div>
            </div>
            <div class="row">
              <label for="locationname">${this._t('editorLocationName')}</label>
              <div class="control">
                <input
                  id="locationname"
                  type="text"
                  .value=${this._value('location_name', '')}
                  @change=${(event: Event) =>
                    this._update({ location_name: (event.target as HTMLInputElement).value })}
                />
              </div>
            </div>
          `,
        )}

        <div class="editor-footer">
          ${this._warnings()}
          <button class="link" @click=${() => this._reset()}>${this._t('editorReset')}</button>
        </div>
      </div>
    `;
  }

  /**
   * Zeile mit Schieberegler und Zahlenfeld für ein Maß – wie bei der
   * Kartenhöhe: Der Regler stellt grob ein, das Feld genau.
   */
  private _numberRow(options: {
    id: string;
    labelKey: StringKey;
    value: number;
    min: number;
    max: number;
    step: number;
    digits?: number;
    set: (value: number) => void;
  }): TemplateResult {
    const { id, labelKey, value, min, max, step, digits = 0, set } = options;
    const format = (input: number) =>
      String(digits === 0 ? Math.round(input) : round(input, digits));
    return html`
      <div class="row">
        <label for=${id}>${this._t(labelKey)}</label>
        <div class="control height-control">
          <input
            id=${id}
            type="range"
            min=${min}
            max=${max}
            step=${step}
            .value=${format(value)}
            @input=${(event: Event) => set(Number((event.target as HTMLInputElement).value))}
          />
          <input
            id="${id}-number"
            type="number"
            aria-label=${this._t(labelKey)}
            min=${min}
            max=${max}
            step=${step}
            .value=${format(value)}
            @change=${(event: Event) => {
              const parsed = toNumber((event.target as HTMLInputElement).value);
              if (parsed !== null) set(clamp(parsed, min, max));
            }}
          />
        </div>
      </div>
    `;
  }

  /**
   * Passt die Höhe beim Wechsel des Kartenstils an, solange sie noch auf der
   * Standardhöhe des bisherigen Stils steht. Eigene Höhen bleiben unberührt.
   */
  private _styleHeight(style: string): { card_height?: number } {
    const height = this._config?.card_height;
    if (this._config?.minimal_mode === true) return {};
    const previous = styleDefaultHeight(this._config?.card_style);
    const next = styleDefaultHeight(style);
    if (next !== previous && (height === undefined || height === previous)) {
      return { card_height: next };
    }
    return {};
  }

  private _warnings(): TemplateResult | typeof nothing {
    const height = this._config?.card_height;
    const range = cardHeightRange(this._config?.minimal_mode === true);
    if (typeof height === 'number' && (height < range[0] || height > range[1])) {
      return html`<span class="hint">
        ${this._t('invalidHeight', {
          value: String(height),
          min: range[0],
          max: range[1],
        })}
      </span>`;
    }
    return nothing;
  }

  private _switch(
    key: keyof SunMoonCardConfig,
    labelKey: StringKey,
    id: string = String(key),
  ): TemplateResult {
    const fallback = (DEFAULT_CONFIG as unknown as Record<string, unknown>)[key] as boolean;
    return html`
      <div class="row">
        <label for="${id}">${this._t(labelKey)}</label>
        <div class="control">
          <span class="switch">
            <input
              id="${id}"
              type="checkbox"
              .checked=${this._value(key, fallback)}
              @change=${(event: Event) =>
                this._update({ [key]: (event.target as HTMLInputElement).checked })}
            />
            <span class="slider"></span>
          </span>
        </div>
      </div>
    `;
  }

  private _reset(): void {
    const config = stubConfig();
    this._config = config;
    fireConfigChanged(this, config);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sun-moon-card-editor': SunMoonCardEditor;
  }
}

export { CONFIG_CHOICES };
