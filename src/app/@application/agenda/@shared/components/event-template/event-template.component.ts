import {Component, Input, OnInit} from '@angular/core';
import { View } from '@syncfusion/ej2-angular-schedule';
import {SchedulerEvent} from '../../models/scheduler-event.model';

@Component({
  selector: 'app-event-template',
  templateUrl: './event-template.component.html',
  styleUrls: ['./event-template.component.scss'],
})
export class EventTemplateComponent implements OnInit {

  @Input() event!: SchedulerEvent;
  @Input() view!: View;

  constructor() { }

  ngOnInit(): void {
  }

}
