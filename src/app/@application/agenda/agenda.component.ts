import { Component, OnInit } from '@angular/core';
import {
  AgendaService,
  DragAndDropService, EventSettingsModel, GroupModel,
  ResizeService,
  TimelineMonthService,
  TimelineViewsService, View,
}                            from '@syncfusion/ej2-angular-schedule';
import { roomData }          from '../../@shared/datasources/agenda.datasource';

@Component({
             selector: 'app-agenda',
             templateUrl: './agenda.component.html',
             styleUrls: [ './agenda.component.scss' ],
           })
export class AgendaComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
