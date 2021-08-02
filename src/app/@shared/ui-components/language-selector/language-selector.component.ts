import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  selectedLanguage: FormControl = new FormControl(null);

  constructor(
    private _translateService: TranslateService
  ) {
    this.selectedLanguage.setValue(this._translateService.currentLang);
  }

  ngOnInit(): void {
  }

  languageSelectedChanged($event: 'en' | 'fr'): void {
    if ($event === localStorage.getItem('i18n')) return;
    localStorage.setItem('i18n', $event);
    location.reload();
  }
}
