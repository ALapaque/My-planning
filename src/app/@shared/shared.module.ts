import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FlexLayoutModule }                 from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }                     from '@angular/router';
import { NebularModule }                    from './nebular.module';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NebularModule,
  FlexLayoutModule,
];

@NgModule(
  {
    declarations: [],
    imports: [
      ...MODULES,
    ],
    exports: [
      ...MODULES,
    ],
  },
)
export class SharedModule {}
