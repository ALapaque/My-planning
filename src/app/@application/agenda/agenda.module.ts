import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import {
  AgendaService,
  DayService, MonthAgendaService, MonthService,
  ScheduleAllModule,
  TimelineMonthService, TimelineViewsService,
  WeekService,
  WorkWeekService,
}                                  from '@syncfusion/ej2-angular-schedule';
import { SharedModule }            from '../../@shared/shared.module';
import { AgendaTimelineComponent } from './agenda-timeline/agenda-timeline.component';
import { AgendaComponent }         from './agenda.component';
import { AgendaRouting }           from './agenda.routing';
import { AgendaStandardComponent } from './agenda-standard/agenda-standard.component';
import { L10n, loadCldr, setCulture }          from '@syncfusion/ej2-base';
// @ts-ignore
import * as numberingSystems       from 'cldr-data/supplemental/numberingSystems.json';
// @ts-ignore
import * as gregorian              from 'cldr-data/main/fr-BE/ca-gregorian.json';
// @ts-ignore
import * as numbers                from 'cldr-data/main/fr-BE/numbers.json';
// @ts-ignore
import * as timeZoneNames          from 'cldr-data/main/fr-BE/timeZoneNames.json';
// @ts-ignore
import * as EJ2_LOCALE             from '@syncfusion/ej2-locale/src/fr.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

@NgModule({
            declarations: [
              AgendaComponent,
              AgendaTimelineComponent,
              AgendaStandardComponent,
            ],
            imports: [
              CommonModule,
              AgendaRouting,
              ScheduleAllModule,
              SharedModule,
            ],
            providers: [
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
