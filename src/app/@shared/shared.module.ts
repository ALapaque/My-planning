import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { FlexLayoutModule }                 from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';
import { NebularModule }                    from './nebular.module';
import { ConfirmDialogComponent }           from './ui-components/confirm-dialog/confirm-dialog.component';
import { ScrollToTopComponent }             from './ui-components/scroll-to-top/scroll-to-top.component';

const MODULES: Array<any> = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NebularModule,
  FlexLayoutModule,
];

const UI_COMPONENTS: Array<any> = [
  ScrollToTopComponent,
  ConfirmDialogComponent,
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
