import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SchedulerEvent} from '../../../../models/scheduler-event.model';
import {FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {NbStepperComponent} from '@nebular/theme';
import {Agenda} from '../../../../../../../@shared/models/agenda.model';
import {Observable} from 'rxjs';
import {AgendaService} from '../../../../../../@shared/services/agenda.service';
import {CompareStateMatcher} from '../../../../../../../@shared/helpers/matchers/compare-state-matcher';
import {ErrorStateMatcher} from '../../../../../../../@shared/helpers/matchers/error-state-matcher';

@Component({
  selector: 'app-event-form-content',
  templateUrl: './event-form-content.component.html',
  styleUrls: ['./event-form-content.component.scss']
})
export class EventFormContentComponent implements OnInit {
  @ViewChild('stepper') public nbStepper: NbStepperComponent;
  @Input() public event!: SchedulerEvent;
  @Input() public form!: FormGroup;

  compareFn = (o1: any, o2: any) => CompareStateMatcher.compareWith(o1, o2);

  agendas$: Observable<Array<Agenda>>;
  sharedAgendas$: Observable<Array<Agenda>>;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private _agendaService: AgendaService,
  ) {
  }

  ngOnInit(): void {
    this.agendas$ = this._agendaService.getUserAgendas();
    this.sharedAgendas$ = this._agendaService.getUserSharedAgendas();
  }

  get hasMeeting(): boolean {
    console.log(this.form.value.eventType === 'MEETING');
    if (this.form.value.eventType === 'MEETING') {
      this.hasMeetingChanged(true);
      return true;
    } else {
      this.hasMeetingChanged(false);
      return false;
    }
  }

  checkFieldForError(fieldName: string) {
    return ErrorStateMatcher.checkField(fieldName, this.form);
  }

  hasMeetingChanged(checked: boolean) {
    if (checked) {
      this.form.get('eventType').setValue('MEETING');
      this.form.get('meetingUrl').setValidators(
        [
          Validators.required,
          Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
        ]
      );
    } else {
      this.form.get('eventType').setValue('APPOINTMENT');
      this.form.get('meetingUrl').clearValidators();
      this.form.get('meetingUrl').updateValueAndValidity({emitEvent: true, onlySelf: false});
    }
  }
}
