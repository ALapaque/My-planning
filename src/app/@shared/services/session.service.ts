import {Injectable} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFrench from '@angular/common/locales/fr-BE';
import localeEnglish from '@angular/common/locales/en';
import {LangChangeEvent, TranslateService, TranslationChangeEvent} from '@ngx-translate/core';

export type Locale = 'fr-BE' | 'en-US';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _locale: Locale = 'fr-BE';

  constructor(
    private _translateService: TranslateService
  ) {
    _translateService.addLangs(['en-US', 'fr-BE']);
    _translateService.setDefaultLang('fr-BE');

    const defaultLanguage: Locale = localStorage.getItem('i18n') as Locale ?? 'fr-BE';

    if (defaultLanguage.match(/fr|fr-BE/)) {
      this.registerCulture('fr-BE');
    } else if (defaultLanguage.match(/en|en-US/)) {
      this.registerCulture('en-US');
    } else {
      const languageUsed: Locale = _translateService.getBrowserLang().match(/fr|fr-FR/) ? 'fr-BE' : 'en-US';
      localStorage.setItem('i18n', languageUsed);
    }

    this._initListener();
  }

  set locale(value: Locale) {
    this._locale = value;
    localStorage.setItem('i18n', value);
  }

  get locale(): Locale {
    return this._locale;
  }

  public registerCulture(culture: Locale): void {
    if (!culture) {
      return;
    }
    this.locale = culture;

    // Register locale data since only the en-US locale data comes with Angular
    switch (culture) {
      case 'fr-BE': {
        registerLocaleData(localeFrench);
        break;
      }
      case 'en-US': {
        registerLocaleData(localeEnglish);
        break;
      }
    }
    this._translateService.use(this.locale);
  }

  private _initListener(): void {
    this._translateService.onLangChange.subscribe((lang: LangChangeEvent) => {
      if (this.locale === lang.lang) return;
      this.registerCulture(lang.lang as Locale);
      location.reload();
    });
  }
}
