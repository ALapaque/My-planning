import { Injectable } from '@angular/core';
import { View } from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule/src/schedule/schedule.component';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Agenda } from '../../../../@shared/models/agenda.model';
import { NbDialogCustomService } from '../../../../@shared/services/nb-dialog-custom.service';
import { SchedulerEvent } from '../models/scheduler-event.model';
import { EventFormComponent } from '../components/forms/event-form/event-form.component';
import { EventDetailsComponent } from '../components/event-details/event-details.component';
import { ConfirmDialogComponent } from '../../../../@shared/ui-components/confirm-dialog/confirm-dialog.component';
import { DateFnsWorkDay } from '../../../@shared/services/event.service';
import * as moment from 'moment';

export interface TimeSlot {
  name: string;
  value: number;
};

export interface WeekDay {
  name: string;
  value: DateFnsWorkDay;
}

@Injectable()
export class AgendaHelperService {
  refreshAgenda$: BehaviorSubject<true> = new BehaviorSubject<true>(undefined);
  isAgendaLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  ejsSchedule: ScheduleComponent | undefined;

  private _calendarsSelected: Array<number>;
  private _viewDate: Date = new Date();
  private _views: Array<View> = [ 'Day', 'Week', 'WorkWeek', 'Month', 'Year', 'TimelineDay', 'TimelineWeek', 'TimelineWorkWeek', 'TimelineMonth', 'TimelineYear' ];
  private _timeSlotDuration: Array<TimeSlot> = [
    { name: 'APP.AGENDA.FORM.SETTINGS.TIMESLOTS', value: 15 },
    { name: 'APP.AGENDA.FORM.SETTINGS.TIMESLOTS', value: 30 },
    { name: 'APP.AGENDA.FORM.SETTINGS.TIMESLOTS', value: 60 },
    { name: 'APP.AGENDA.FORM.SETTINGS.TIMESLOTS', value: 90 },
    { name: 'APP.AGENDA.FORM.SETTINGS.TIMESLOTS', value: 120 },
  ];
  private _weekDays: Array<WeekDay> = [
    { name: 'APP.AGENDA.FORM.SETTINGS.DAYS', value: 0 },
    { name: 'APP.AGENDA.FORM.SETTINGS.DAYS', value: 1 },
    { name: 'APP.AGENDA.FORM.SETTINGS.DAYS', value: 2 },
    { name: 'APP.AGENDA.FORM.SETTINGS.DAYS', value: 3 },
    { name: 'APP.AGENDA.FORM.SETTINGS.DAYS', value: 4 },
    { name: 'APP.AGENDA.FORM.SETTINGS.DAYS', value: 5 },
    { name: 'APP.AGENDA.FORM.SETTINGS.DAYS', value: 6 }
  ];
  private _currentViewDisplayed: View = 'Week';
  private _timeSlotDisplayed: TimeSlot;
  private _weekDaysDisplayed: Array<WeekDay>;
  private _firstDayDisplayed: WeekDay;
  private _startTime: Date = moment().hours(8).minutes(0).seconds(0).toDate();
  private _endTime: Date = moment().hours(17).minutes(0).seconds(0).toDate();

  constructor(
    private _translateService: TranslateService,
    private _dialogService: NbDialogService,
    private _dialogCustomService: NbDialogCustomService,
  ) {
    this.calendarsSelected = JSON.parse(sessionStorage.getItem('calendarsSelected'));
    this._timeSlotDisplayed = this._timeSlotDuration[2];
    this._weekDaysDisplayed = this._weekDays;
    this._firstDayDisplayed = this._weekDays[1];
  }


  get startTime(): Date {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
    this.ejsSchedule.startHour = value.toDateString();
  }

  get endTime(): Date {
    return this._endTime;
  }

  set endTime(value: Date) {
    this._endTime = value;
    this.ejsSchedule.endHour = value.toDateString();
  }

  get viewDate(): Date {
    return this._viewDate;
  }

  set viewDate(value: Date) {
    this._viewDate = value;
  }

  get views(): Array<View> {
    return this._views;
  }

  set views(value: Array<View>) {
    this._views = value;
  }

  get timeSlotDuration(): Array<TimeSlot> {
    return this._timeSlotDuration;
  }

  set timeSlotDuration(value: Array<TimeSlot>) {
    this._timeSlotDuration = value;
  }

  get weekDays(): Array<WeekDay> {
    return this._weekDays;
  }

  get workDays(): Array<number> {
    return this._weekDays.map((weekDay: WeekDay) => weekDay.value);
  }

  set weekDays(value: Array<WeekDay>) {
    this._weekDays = value;
  }

  get currentViewDisplayed(): View {
    return this._currentViewDisplayed;
  }

  set currentViewDisplayed(value: View) {
    console.log(value);
    this._currentViewDisplayed = value;
  }

  get timeSlotDisplayed(): TimeSlot {
    return this._timeSlotDisplayed;
  }

  set timeSlotDisplayed(value: TimeSlot) {
    this._timeSlotDisplayed = value;
    this.ejsSchedule.timeScale.interval = value.value;
  }

  get weekDaysDisplayed(): Array<WeekDay> {
    return this._weekDaysDisplayed;
  }

  set weekDaysDisplayed(value: Array<WeekDay>) {
    this._weekDaysDisplayed = value;
  }

  get firstDayDisplayed(): WeekDay {
    return this._firstDayDisplayed;
  }

  set firstDayDisplayed(value: WeekDay) {
    this._firstDayDisplayed = value;
    this.ejsSchedule.firstDayOfWeek = value.value;
  }

  get calendarsSelected(): Array<number> {
    return this._calendarsSelected;
  }

  set calendarsSelected(value: Array<number>) {
    this._calendarsSelected = value;
    if (value === undefined) {
      sessionStorage.removeItem('calendarsSelected');
      return;
    }

    sessionStorage.setItem('calendarsSelected', JSON.stringify(value));
    console.log(4, this.calendarsSelected);
    if (!!this.calendarsSelected?.length) {
      this.refreshAgenda$.next(true);
    }
  }

  openEventDetailsDialog(event: SchedulerEvent): NbDialogRef<EventDetailsComponent> {
    return this._dialogService.open(EventDetailsComponent,
      {
        context: {
          // @ts-ignore
          event: event
        },
        dialogClass: this._dialogCustomService.isFullscreen
      }
    );
  }

  openEventFormDialog(event: SchedulerEvent): NbDialogRef<EventFormComponent> {
    return this._dialogService.open(EventFormComponent,
      {
        context: {
          event: event
        },
        dialogClass: this._dialogCustomService.isFullscreen
      }
    );
  }

  openConfirmActionDialog(): NbDialogRef<ConfirmDialogComponent> {
    return this._dialogService.open(ConfirmDialogComponent,
      { dialogClass: this._dialogCustomService.isFullscreen }
    );
  }
}
