import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { FlexLayoutModule }                 from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';
import { NebularModule }                    from './nebular.module';
import { ScrollToTopComponent }             from './ui-components/scroll-to-top/scroll-to-top.component';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NebularModule,
  FlexLayoutModule,
];

const UI_COMPONENTS = [
  ScrollToTopComponent,
];

@NgModule(
  {
    declarations: [
      ...UI_COMPONENTS,
    ],
    imports: [
      ...MODULES,
    ],
    exports: [
      ...MODULES,
      ...UI_COMPONENTS,
    ],
  },
)
export class SharedModule {}
