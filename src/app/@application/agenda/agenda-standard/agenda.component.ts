import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EventSettingsModel }                  from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent }                   from '@syncfusion/ej2-angular-schedule/src/schedule/schedule.component';
import { scheduleData }                        from '../../../@shared/datasources/agenda.datasource';
import { AgendaHelperService }                 from '../agenda-helper.service';

@Component({
             selector: 'app-agenda',
             templateUrl: './agenda.component.html',
             styleUrls: [ './agenda.component.scss' ],
           })
export class AgendaComponent implements AfterViewInit {

  public eventSettings: EventSettingsModel = { dataSource: scheduleData };

  @ViewChild('ejsSchedule') public ejsSchedule: ScheduleComponent | undefined;

  constructor(
    public agendaHelperService: AgendaHelperService,
  ) {
  }

  public ngAfterViewInit(): void {
    this.agendaHelperService.ejsSchedule = this.ejsSchedule;
    console.log(this.agendaHelperService.ejsSchedule);
  }
}