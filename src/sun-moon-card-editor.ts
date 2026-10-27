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
  CARD_HEIGHT_RANGE,
  CONFIG_CHOICES,
  DEFAULT_CONFIG,
  MIN_CARD_HEIGHT,
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

  override render(): TemplateResult {
    if (!this._config) return html``;

    const height = this._config.card_height;
    // Nur ein ausdrücklich gesetztes 'auto' (oder ein leerer YAML-Schlüssel)
    // schaltet die Höhenfelder ab. Fehlt der Schlüssel, gilt der Standardwert
    // und die Felder bleiben bedienbar – sonst wäre die Höhe bei jeder neuen
    // Karte ausgegraut.
    const heightIsAuto = height === 'auto' || height === null;
    const heightNumber = typeof height === 'number' ? height : DEFAULT_CONFIG.card_height;
    const useHaLocation =
      this._config.latitude === undefined || this._config.latitude === null;

    return html`
      <div class="card-config">
        <div class="section">
          <div class="section-title">${this._t('editorAppearance')}</div>

          <div class="row">
            <label for="height">${this._t('editorCardHeight')}</label>
            <div class="control height-control">
              <input
                id="height"
                type="range"
                min="${CARD_HEIGHT_RANGE[0]}"
                max="${CARD_HEIGHT_RANGE[1]}"
                step="10"
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
                min="${CARD_HEIGHT_RANGE[0]}"
                max="${CARD_HEIGHT_RANGE[1]}"
                .value=${String(heightNumber)}
                ?disabled=${heightIsAuto}
                @change=${(event: Event) => {
                  const parsed = toNumber((event.target as HTMLInputElement).value);
                  if (parsed !== null) {
                    this._update({
                      card_height: Math.round(
                        clamp(parsed, CARD_HEIGHT_RANGE[0], CARD_HEIGHT_RANGE[1]),
                      ),
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
                        : DEFAULT_CONFIG.card_height,
                    })}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>

          <div class="row">
            <label for="theme">${this._t('editorThemeMode')}</label>
            <div class="control">
              <select
                id="theme"
                .value=${this._value('theme_mode', 'auto')}
                @change=${(event: Event) =>
                  this._update({
                    theme_mode: (event.target as HTMLSelectElement).value as 'auto' | 'light' | 'dark',
                  })}
              >
                <option value="auto">${this._t('editorThemeAuto')}</option>
                <option value="light">${this._t('editorThemeLight')}</option>
                <option value="dark">${this._t('editorThemeDark')}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="cardstyle">${this._t('editorCardStyle')}</label>
            <div class="control">
              <select
                id="cardstyle"
                .value=${this._value('card_style', 'glass')}
                @change=${(event: Event) =>
                  this._update({
                    card_style: (event.target as HTMLSelectElement).value as 'glass' | 'flat',
                  })}
              >
                <option value="glass">${this._t('editorCardStyleGlass')}</option>
                <option value="flat">${this._t('editorCardStyleFlat')}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="timeformat">${this._t('editorTimeFormat')}</label>
            <div class="control">
              <select
                id="timeformat"
                .value=${this._value('time_format', 'auto')}
                @change=${(event: Event) =>
                  this._update({
                    time_format: (event.target as HTMLSelectElement).value as 'auto' | '12' | '24',
                  })}
              >
                <option value="auto">${this._t('editorTimeFormatAuto')}</option>
                <option value="24">${this._t('editorTimeFormat24')}</option>
                <option value="12">${this._t('editorTimeFormat12')}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="language">${this._t('editorLanguage')}</label>
            <div class="control">
              <select
                id="language"
                .value=${this._value('language', 'auto')}
                @change=${(event: Event) =>
                  this._update({
                    language: (event.target as HTMLSelectElement).value as 'auto' | 'de' | 'en',
                  })}
              >
                <option value="auto">${this._t('editorLanguageAuto')}</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="twilight">${this._t('editorTwilightLevel')}</label>
            <div class="control">
              <select
                id="twilight"
                .value=${this._value('twilight_level', 'civil')}
                @change=${(event: Event) =>
                  this._update({
                    twilight_level: (event.target as HTMLSelectElement).value as
                      | 'civil'
                      | 'nautical'
                      | 'astronomical'
                      | 'all',
                  })}
              >
                <option value="civil">${this._t('editorTwilightCivil')}</option>
                <option value="nautical">${this._t('editorTwilightNautical')}</option>
                <option value="astronomical">${this._t('editorTwilightAstronomical')}</option>
                <option value="all">${this._t('editorTwilightAll')}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <label for="animations">${this._t('editorAnimations')}</label>
            <div class="control">
              <span class="switch">
                <input
                  id="animations"
                  type="checkbox"
                  .checked=${this._value('animations', true)}
                  @change=${(event: Event) =>
                    this._update({ animations: (event.target as HTMLInputElement).checked })}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>

          <div class="row">
            <label for="compact">${this._t('editorCompactMode')}</label>
            <div class="control">
              <span class="switch">
                <input
                  id="compact"
                  type="checkbox"
                  .checked=${this._value('compact_mode', false)}
                  @change=${(event: Event) =>
                    this._update({ compact_mode: (event.target as HTMLInputElement).checked })}
                />
                <span class="slider"></span>
              </span>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">${this._t('editorSections')}</div>
          ${this._switch('show_sun', 'editorShowSun')}
          ${this._switch('show_moon', 'editorShowMoon')}
          ${this._switch('show_twilight', 'editorShowTwilight')}
          ${this._switch('show_astronomical_details', 'editorShowAstronomicalDetails')}
          ${this._switch('show_header', 'editorShowHeader')}
          ${this._switch('show_day_chart', 'editorShowDayChart')}
          ${this._switch('show_sky_view', 'editorShowSkyView')}
          ${this._switch('show_events', 'editorShowEvents')}
          ${this._switch('show_moon_times', 'editorShowMoonTimes')}
          ${this._switch('show_footer', 'editorShowFooter')}
        </div>

        <div class="section">
          <div class="section-title">${this._t('editorBehaviour')}</div>
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
          <div class="hint">
            ${this._t('editorMoonEntity')}: sensor.moon – die Mondphase wird berechnet, die
            Bezeichnung kann aus der Entität übernommen werden.
          </div>
        </div>

        <div class="section">
          <div class="section-title">${this._t('editorLocation')}</div>
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
                .value=${String(this._config?.latitude ?? this.hass?.config?.latitude ?? '')}
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
                .value=${String(this._config?.longitude ?? this.hass?.config?.longitude ?? '')}
                ?disabled=${useHaLocation}
                @change=${(event: Event) => {
                  const parsed = toNumber((event.target as HTMLInputElement).value);
                  this._update({ longitude: parsed === null ? undefined : clamp(parsed, -180, 180) });
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
        </div>

        <div class="section">
          <div class="row">
            <span class="hint">
              ${this._t('editorCardHeight')}: ${CARD_HEIGHT_RANGE[0]}–${CARD_HEIGHT_RANGE[1]} px
              (Standard ${DEFAULT_CONFIG.card_height} px, mindestens ${MIN_CARD_HEIGHT} px)
            </span>
            <button class="link" @click=${() => this._reset()}>${this._t('editorReset')}</button>
          </div>
          ${this._warnings()}
        </div>
      </div>
    `;
  }

  private _warnings(): TemplateResult | typeof nothing {
    const height = this._config?.card_height;
    if (typeof height === 'number' && (height < CARD_HEIGHT_RANGE[0] || height > CARD_HEIGHT_RANGE[1])) {
      return html`<span class="hint">
        ${this._t('invalidHeight', {
          value: String(height),
          min: CARD_HEIGHT_RANGE[0],
          max: CARD_HEIGHT_RANGE[1],
        })}
      </span>`;
    }
    return nothing;
  }

  private _switch(key: keyof SunMoonCardConfig, labelKey: StringKey): TemplateResult {
    const fallback = (DEFAULT_CONFIG as unknown as Record<string, unknown>)[key] as boolean;
    return html`
      <div class="row">
        <label for="${String(key)}">${this._t(labelKey)}</label>
        <div class="control">
          <span class="switch">
            <input
              id="${String(key)}"
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
