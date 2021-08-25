import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared/shared.module';
import { TemplateComponent } from './@core/template/template.component';
import { TopbarComponent } from './@core/template/topbar/topbar.component';
import { AgendaService } from './@shared/services/agenda.service';
import { EventService } from './@shared/services/event.service';
import { LoaderService } from './@shared/services/loader.service';
import { ApplicationRouting } from './application.routing';
import { LeftMenuComponent } from './@core/left-menu/left-menu.component';
import { DateLabelComponent } from '../@shared/ui-components/date-label/date-label.component';

@NgModule(
  {
    declarations: [
      TemplateComponent,
      LeftMenuComponent,
      TopbarComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      ApplicationRouting,
    ],
    providers: [
      AgendaService,
      EventService,
      LoaderService
    ]
  },
)
export class ApplicationModule {
}
