import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {SchedulerEvent} from '../../models/scheduler-event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  public event!: SchedulerEvent;

  constructor(
    public dialogRef: NbDialogRef<EventDetailsComponent>
  ) {
  }

  ngOnInit(): void {
  }

  edit(): void {

  }

  delete(): void {

  }
}
