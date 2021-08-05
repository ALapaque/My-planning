import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SchedulerEvent} from '../../../models/scheduler-event.model';

@Component({
  selector: 'app-event-details-content',
  templateUrl: './event-details-content.component.html',
  styleUrls: ['./event-details-content.component.scss']
})
export class EventDetailsContentComponent implements OnInit {
  @Input() public event!: SchedulerEvent;

  constructor() {
  }

  ngOnInit(): void {
  }

}
