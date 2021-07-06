import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
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
}                                   from '@syncfusion/ej2-angular-schedule';
import { loadCldr }                 from '@syncfusion/ej2-base';
import * as gregorian               from 'cldr-data/main/fr-BE/ca-gregorian.json';
import * as numbers                 from 'cldr-data/main/fr-BE/numbers.json';
import * as timeZoneNames           from 'cldr-data/main/fr-BE/timeZoneNames.json';
import * as numberingSystems        from 'cldr-data/supplemental/numberingSystems.json';
import { SharedModule }             from '../../@shared/shared.module';
import { AgendaToolbarComponent }   from './@shared/components/agenda-toolbar/agenda-toolbar.component';
import { AgendaContainerComponent } from './agenda-container.component';
import { AgendaHelperService }      from './agenda-helper.service';
import { AgendaComponent }          from './agenda-standard/agenda.component';
import { AgendaRouting }            from './agenda.routing';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

@NgModule({
            declarations: [
              AgendaContainerComponent,
              AgendaComponent,
              AgendaToolbarComponent,
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
export class AgendaModule {}
