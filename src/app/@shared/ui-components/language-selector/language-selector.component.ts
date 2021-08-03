import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {Locale} from '../../services/session.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  selectedLanguage: FormControl = new FormControl(null);

  constructor(
    private _translateService: TranslateService,
  ) {
    this.selectedLanguage.setValue(this._translateService.currentLang);
  }

  ngOnInit(): void {
  }

  languageSelectedChanged($event: Locale): void {
    if ($event === sessionStorage.getItem('i18n')) return;
    this._translateService.use($event);
  }
}
