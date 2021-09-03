import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {SchedulerEvent} from '../../../models/scheduler-event.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DateValidators} from '../../../../../../@shared/helpers/validators/date-validators';
import {EventService} from '../../../../../@shared/services/event.service';
import * as moment from 'moment';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements AfterViewInit {

  @Input() public event!: SchedulerEvent | undefined;
  public form: FormGroup = new FormGroup({
    eventType: new FormControl('APPOINTMENT', [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    agenda: new FormControl(null, [Validators.required]),
    startDate: new FormControl(new Date(), [Validators.required]),
    endDate: new FormControl(moment().add(1, 'hour').toDate(), [Validators.required]),
    description: new FormControl(''),
    private: new FormControl(false),
    adayOff: new FormControl(false),
    meetingUrl: new FormControl(null),
    statusDisplayed: new FormControl('BUSY'),
  }, [DateValidators.validateDate()]);

  constructor(
    public dialogRef: NbDialogRef<EventFormComponent>,
    private _eventService: EventService,
  ) {
  }

  ngAfterViewInit(): void {
    this._initForm();
  }

  submit(): void {
    this._eventService.save(
      new SchedulerEvent(SchedulerEvent.transformIntoSchedulerEvent(
        {
          ...this.form.value,
          id: this.event.Id
        }
      ))
    ).subscribe(
      (event: SchedulerEvent) => this.dialogRef.close(event)
    );
  }

  private _initForm(): void {
    this.form.patchValue({
      name: this.event.Subject ?? '',
      agenda: this.event.Meta.agenda ?? null,
      startDate: this.event.StartTime ? new Date(this.event.StartTime) : new Date(),
      endDate: this.event.EndTime ? new Date(this.event.EndTime) : new Date(),
      description: this.event.Description ?? '',
      private: this.event?.Meta?.privateEvent ?? false,
      statusDisplayed: this.event?.Meta?.statusDisplayed ?? 'BUSY',
      adayOff: this.event?.Meta?.dayOff ?? false,
      meetingUrl: this.event?.Meta?.meetingUrl ?? null,
      eventType: this.event?.Meta?.eventType ?? 'APPOINTMENT'
    });
  }
}
