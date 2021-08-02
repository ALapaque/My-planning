import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { FlexLayoutModule }                 from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';
import { NebularModule }                    from './nebular.module';
import { ConfirmDialogComponent }           from './ui-components/confirm-dialog/confirm-dialog.component';
import { ScrollToTopComponent }             from './ui-components/scroll-to-top/scroll-to-top.component';
import {NbErrorComponent} from './ui-components/nb-error/nb-error.component';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageSelectorComponent} from './ui-components/language-selector/language-selector.component';
import {FooterComponent} from './ui-components/footer/footer.component';

const MODULES: Array<any> = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NebularModule,
  FlexLayoutModule,
  TranslateModule,
];

const UI_COMPONENTS: Array<any> = [
  ScrollToTopComponent,
  ConfirmDialogComponent,
  NbErrorComponent,
  LanguageSelectorComponent,
  FooterComponent
];

const DIRECTIVES: Array<any> = [];

@NgModule(
  {
    declarations: [
      ...UI_COMPONENTS,
      ...DIRECTIVES,
    ],
    imports: [
      ...MODULES,
    ],
    exports: [
      ...MODULES,
      ...UI_COMPONENTS,
      ...DIRECTIVES,
    ],
  },
)
export class SharedModule {
}
