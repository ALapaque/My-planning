import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  locale: 'fr-FR' | 'fr-BE' | 'en-US';

  constructor(
    private _translateService: TranslateService
  ) {
    this._initLocale();
  }

  private _initLocale(): void {
    const browserLang: string = this._translateService.getBrowserLang();

    if (sessionStorage.getItem('i18n')) {
      this.locale = (sessionStorage.getItem('i18n') as string).match(/fr|fr-FR/) ? 'fr-BE' : 'en-US';
    } else {
      this.locale = browserLang.match(/fr|fr-FR/) ? 'fr-BE' : 'en-US';
    }
  }

}
