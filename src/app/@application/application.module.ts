import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { NebularModule } from '../@shared/nebular.module';
import { SharedModule } from '../@shared/shared.module';
import { TemplateComponent } from './@core/template/template.component';
import { TopbarComponent } from './@core/template/topbar/topbar.component';
import { AgendaService } from './@shared/services/agenda.service';
import { EventService } from './@shared/services/event.service';
import { LoaderService } from './@shared/services/loader.service';
import { ApplicationRouting } from './application.routing';
import { LeftMenuComponent } from './@core/template/left-menu/left-menu.component';


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
