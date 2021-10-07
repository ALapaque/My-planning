import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared/shared.module';
import { TemplateComponent } from './@core/template/template.component';
import { TopbarComponent } from './@core/template/topbar/topbar.component';
import { AgendaService } from './@shared/services/agenda.service';
import { EventService } from './@shared/services/event.service';
import { LoaderService } from './@shared/services/loader.service';
import { RightMenuService } from './@shared/services/right-menu.service';
import { UserService } from './@shared/services/user.service';
import { AgendaHelperService } from './agenda/@shared/services/agenda-helper.service';
import { AgendaModule } from './agenda/agenda.module';
import { ApplicationRouting } from './application.routing';
import { LeftMenuComponent } from './@core/template/left-menu/left-menu.component';
import { RightMenuComponent } from './@core/template/right-menu/right-menu.component';

@NgModule(
  {
    declarations: [
      TemplateComponent,
      LeftMenuComponent,
      TopbarComponent,
      RightMenuComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      ApplicationRouting,
      AgendaModule,
    ],
    providers: [
      AgendaHelperService,
      AgendaService,
      EventService,
      LoaderService,
      UserService,
      RightMenuService
    ],
  },
)
export class ApplicationModule {
}
