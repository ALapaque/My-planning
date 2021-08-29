import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {SchedulerEvent} from '../../../models/scheduler-event.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {addHours} from 'date-fns';
import {DateValidators} from '../../../../../../@shared/helpers/validators/date-validators';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements AfterViewInit {

  @Input() public event!: SchedulerEvent | undefined;
  public form: FormGroup = new FormGroup({
    agenda: new FormControl(null, [Validators.required]),
    title: new FormControl('', [Validators.required]),
    startDate: new FormControl(new Date(), [Validators.required]),
    endDate: new FormControl(addHours(new Date(), 1), [Validators.required]),
    description: new FormControl(''),
    private: new FormControl(false),
    statusDisplayed: new FormControl('BUSY'),
  }, [DateValidators.validateDate()]);

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
      agenda: this.event.Meta.agenda ?? null,
      title: this.event.Subject ?? '',
      startDate: this.event.StartTime ? new Date(this.event.StartTime) : new Date(),
      endDate: this.event.EndTime ? new Date(this.event.EndTime) : new Date(),
      description: this.event.Description ?? '',
      private: this.event?.Meta?.private ?? false,
      statusDisplayed: this.event?.Meta?.statusDisplayed ?? 'BUSY'
    });
  }
}
