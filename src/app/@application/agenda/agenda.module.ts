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
