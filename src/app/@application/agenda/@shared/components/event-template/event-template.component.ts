import {Component, Input, OnInit} from '@angular/core';
import {SchedulerEvent} from '../../models/scheduler-event.model';

@Component({
  selector: 'app-event-template',
  templateUrl: './event-template.component.html',
  styleUrls: ['./event-template.component.scss'],
})
export class EventTemplateComponent implements OnInit {

  @Input() public event!: SchedulerEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
