import {Component, Inject, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {SchedulerEvent} from '../../../models/scheduler-event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  @Input() public event: SchedulerEvent | undefined;

  constructor(
    public dialogRef: NbDialogRef<EventFormComponent>
  ) { }

  ngOnInit(): void {
  }

}
