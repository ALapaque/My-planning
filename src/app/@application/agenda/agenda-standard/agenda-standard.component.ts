import { Component, OnInit }  from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData }       from '../../../@shared/datasources/agenda.datasource';

@Component({
  selector: 'app-agenda-standard',
  templateUrl: './agenda-standard.component.html',
  styleUrls: ['./agenda-standard.component.scss']
})
export class AgendaStandardComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };

  constructor() { }

  ngOnInit(): void {
  }

}
