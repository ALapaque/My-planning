import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SchedulerEvent} from '../../../models/scheduler-event.model';

@Component({
  selector: 'app-event-details-header',
  templateUrl: './event-details-header.component.html',
  styleUrls: ['./event-details-header.component.scss']
})
export class EventDetailsHeaderComponent implements OnInit {

  @Input() event!: SchedulerEvent;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
