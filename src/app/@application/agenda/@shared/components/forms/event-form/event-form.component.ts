import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {SchedulerEvent} from '../../../models/scheduler-event.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {addHours} from 'date-fns';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements AfterViewInit {

  @Input() public event!: SchedulerEvent | undefined;
  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    startTime: new FormControl(new Date(), [Validators.required]),
    endTime: new FormControl(addHours(new Date(), 1), [Validators.required]),
    description: new FormControl(''),
    isPrivate: new FormControl(false),
    statusDisplayed: new FormControl('BUSY'),
  });

  constructor(
    public dialogRef: NbDialogRef<EventFormComponent>
  ) {
  }

  ngAfterViewInit(): void {
    this._initForm();
  }

  submit(): void {

  }

  private _initForm(): void {
    this.form.patchValue({
      title: this.event.Subject ?? '',
      startTime: this.event.StartTime ?? new Date(),
      endTime: this.event.EndTime ?? new Date(),
      description: this.event.Description ?? '',
      isPrivate: this.event.Meta.isPrivate ?? false,
      statusDisplayed: this.event.Meta.statusDisplayed ?? 'BUSY'
    });
  }
}
