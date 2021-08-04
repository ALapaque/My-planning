import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  AgendaService,
  DayService,
  MonthAgendaService,
  MonthService,
  ScheduleAllModule,
  TimelineMonthService,
  TimelineViewsService,
  WeekService,
  WorkWeekService,
} from '@syncfusion/ej2-angular-schedule';
import {loadCldr} from '@syncfusion/ej2-base';
import * as gregorian from 'cldr-data/main/fr-BE/ca-gregorian.json';
import * as numbers from 'cldr-data/main/fr-BE/numbers.json';
import * as timeZoneNames from 'cldr-data/main/fr-BE/timeZoneNames.json';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import {SharedModule} from '../../@shared/shared.module';
import {AgendaToolbarComponent} from './@shared/components/agenda-toolbar/agenda-toolbar.component';
import {AgendaContainerComponent} from './agenda-container.component';
import {AgendaHelperService} from './agenda-helper.service';
import {AgendaComponent} from './agenda/agenda.component';
import {AgendaRouting} from './agenda.routing';
import {EventFormComponent} from './@shared/components/forms/event-form/event-form.component';
import { AgendaSettingsComponent } from './@shared/components/agenda-settings/agenda-settings.component';
import { AgendaSettingsContentComponent } from './@shared/components/agenda-settings/agenda-settings-content/agenda-settings-content.component';
import { EventFormContentComponent } from './@shared/components/forms/event-form/event-form-content/event-form-content.component';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

@NgModule({
  declarations: [
    AgendaContainerComponent,
    AgendaComponent,
    AgendaToolbarComponent,
    EventFormComponent,
    AgendaSettingsComponent,
    AgendaSettingsContentComponent,
    EventFormContentComponent,
  ],
  imports: [
    CommonModule,
    AgendaRouting,
    ScheduleAllModule,
    SharedModule,
  ],
  providers: [
    AgendaHelperService,
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
  ],
})
export class AgendaModule {
}
