import {Component, Input, OnInit} from '@angular/core';
import {SchedulerEvent} from '../../../../models/scheduler-event.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {addHours} from 'date-fns';

@Component({
  selector: 'app-event-form-content',
  templateUrl: './event-form-content.component.html',
  styleUrls: ['./event-form-content.component.scss']
})
export class EventFormContentComponent implements OnInit {

  @Input() public event!: SchedulerEvent;
  public eventForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.eventForm = new FormGroup({
      title: new FormControl(this.event.Subject ?? '', [Validators.required]),
      startTime: new FormControl(this.event.StartTime ?? new Date(), [Validators.required]),
      endTime: new FormControl(this.event.EndTime ?? addHours(new Date(), 1), [Validators.required]),
      description: new FormControl(this.event.Description ?? ''),
      isPrivate: new FormControl(false),
      statusDisplayed: new FormControl('BUSY'),
    });
  }
}
