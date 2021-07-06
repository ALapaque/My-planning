import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { SharedModule }       from '../@shared/shared.module';
import { TemplateComponent }  from './@core/template/template.component';
import { ApplicationRouting } from './application.routing';
import { LeftMenuComponent } from './@core/left-menu/left-menu.component';

@NgModule(
  {
    declarations: [
      TemplateComponent,
      LeftMenuComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      ApplicationRouting,
    ],
  },
)
export class ApplicationModule {}
