import {Component, Inject, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {SchedulerEvent} from '../../../models/scheduler-event.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {addHours} from 'date-fns';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  @Input() public event: SchedulerEvent | undefined;
  public form: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: NbDialogRef<EventFormComponent>
  ) {
  }

  ngOnInit(): void {
    this._initForm();
  }

  submit(): void {

  }

  private _initForm(): void {
    this.form = new FormGroup({
      title: new FormControl(this.event.Subject ?? '', [Validators.required]),
      startTime: new FormControl(this.event.StartTime ?? new Date(), [Validators.required]),
      endTime: new FormControl(this.event.EndTime ?? addHours(new Date(), 1), [Validators.required]),
      description: new FormControl(this.event.Description ?? ''),
      isPrivate: new FormControl(this.event.Meta.isPrivate),
      statusDisplayed: new FormControl(this.event.Meta.statusDisplayed ?? 'BUSY'),
    });
  }
}
