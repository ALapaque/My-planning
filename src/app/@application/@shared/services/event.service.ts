import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import {
  endOfDay, endOfMonth, endOfWeek, endOfYear,
  startOfDay, startOfMonth, startOfWeek, startOfYear,
} from 'date-fns';
import {ToastrService} from 'ngx-toastr';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {generateCompleteUrl} from '../../../../environments/environment';
import {Event} from '../../../@shared/models/event.model';
import {AuthService} from '../../../@shared/services/auth.service';
import {SchedulerEvent} from '../../agenda/@shared/models/scheduler-event.model';
import {AgendaHelperService} from '../../agenda/@shared/services/agenda-helper.service';

export type DateFnsWorkDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

@Injectable()
export class EventService {
  private _baseUrl: string = generateCompleteUrl() + '/event';

  constructor(
    private _http: HttpClient,
    private _agendaHelperService: AgendaHelperService,
    private _authService: AuthService,
    private _taostrService: ToastrService,
    private _translateService: TranslateService,
  ) {
  }

  public getEvents(): Observable<EventSettingsModel> {
    this._agendaHelperService.isAgendaLoading.next(true);

    const parameters: { startDate: string, endDate: string } = this._generateHttpParams;
    const params: HttpParams = new HttpParams()
      .set('userId', this._authService.user.id.toString(10))
      .set('startDate', parameters.startDate)
      .set('endDate', parameters.endDate);

    return this._http.get<Array<Event>>(`${this._baseUrl}`, {params}).pipe(
      map((events: Array<Event>) => {
        const transformedEvents: Array<SchedulerEvent> = events.map((event: Event) => SchedulerEvent.transformIntoSchedulerEvent(event));

        return {dataSource: transformedEvents};
      }),
      tap(() => {
        this._agendaHelperService.isAgendaLoading.next(false);
        this._taostrService.success(this._translateService.instant('APP.AGENDA.TOASTR.SUCCESS.GET_EVENTS'));
      }),
      catchError((error) => {
        this._agendaHelperService.isAgendaLoading.next(false);
        this._taostrService.error(this._translateService.instant('APP.AGENDA.TOASTR.ERROR.GET_EVENTS'));
        throw of(error);
      }),
    );
  }

  public getById(id: number): Observable<SchedulerEvent> {
    this._agendaHelperService.isAgendaLoading.next(true);

    return this._http.get<Event>(`${this._baseUrl}/${id.toString(10)}`).pipe(
      map((event: Event) => SchedulerEvent.transformIntoSchedulerEvent(event)),
      tap(() => {
        this._agendaHelperService.isAgendaLoading.next(false);
        this._taostrService.success(this._translateService.instant('APP.AGENDA.TOASTR.SUCCESS.GET_EVENT'));
      }),
      catchError((error) => {
        this._agendaHelperService.isAgendaLoading.next(false);
        this._taostrService.error(this._translateService.instant('APP.AGENDA.TOASTR.ERROR.GET_EVENT'));
        throw of(error);
      }),
    );
  }

  public save(schedulerEvent: SchedulerEvent): Observable<SchedulerEvent> {
    this._agendaHelperService.isAgendaLoading.next(true);

    const event: Event = Event.transformIntoEvent(schedulerEvent);
    const action: Observable<SchedulerEvent> = schedulerEvent.Id ? this.update(event) : this.create(event);

    return action.pipe(
      tap(() => {
        this._agendaHelperService.isAgendaLoading.next(false);
        this._taostrService.success(this._translateService.instant('APP.AGENDA.TOASTR.SUCCESS.SAVE'));
      }),
      catchError((error) => {
        this._agendaHelperService.isAgendaLoading.next(false);
        this._taostrService.error(this._translateService.instant('APP.AGENDA.TOASTR.ERROR.SAVE'));
        throw of(error);
      }),
    );
  }

  public create(event: Event): Observable<SchedulerEvent> {
    return this._http.post<Event>(`${this._baseUrl}`, event).pipe(
      map((eventReceived: Event) => SchedulerEvent.transformIntoSchedulerEvent(eventReceived))
    );
  }

  public update(event: Event): Observable<SchedulerEvent> {
    return this._http.put<Event>(`${this._baseUrl}/${event.id}`, event).pipe(
      map((eventReceived: Event) => SchedulerEvent.transformIntoSchedulerEvent(eventReceived))
    );
  }

  public delete(id: number): Observable<boolean> {
    this._agendaHelperService.isAgendaLoading.next(true);

    return this._http.delete<boolean>(`${this._baseUrl}/${id.toString(10)}`).pipe(
      tap(() => {
        this._agendaHelperService.isAgendaLoading.next(false);
        this._taostrService.success(this._translateService.instant('APP.AGENDA.TOASTR.SUCCESS.DELETE'));
        this._agendaHelperService.ejsSchedule.deleteEvent(id);
      }),
      catchError((error) => {
        this._agendaHelperService.isAgendaLoading.next(false);
        this._taostrService.error(this._translateService.instant('APP.AGENDA.TOASTR.DELETE.ERROR'));
        throw of(error);
      }),
    );
  }

  private get _generateHttpParams(): { startDate: string, endDate: string } {
    switch (this._agendaHelperService.currentViewDisplayed) {
      case 'Day':
      case 'Agenda':
      case 'TimelineDay':
        return {
          'startDate': startOfDay(this._agendaHelperService.viewDate).toISOString(),
          'endDate': endOfDay(this._agendaHelperService.viewDate).toISOString()
        };
      case 'Week':
      case 'WorkWeek':
      case 'TimelineWeek':
      case 'TimelineWorkWeek':
        return {
          'startDate': startOfWeek(
            this._agendaHelperService.viewDate,
            {
              weekStartsOn: this._agendaHelperService.firstDayDisplayed.value
            }
          ).toISOString(),
          'endDate': endOfWeek(
            this._agendaHelperService.viewDate,
            {
              weekStartsOn: this._agendaHelperService.firstDayDisplayed.value
            }
          ).toISOString()
        };
      case 'Month':
      case 'MonthAgenda':
      case 'TimelineMonth':
        return {
          'startDate': startOfMonth(this._agendaHelperService.viewDate).toISOString(),
          'endDate': endOfMonth(this._agendaHelperService.viewDate).toISOString()
        };
      case 'Year':
      case 'TimelineYear':
        return {
          'startDate': startOfYear(this._agendaHelperService.viewDate).toISOString(),
          'endDate': endOfYear(this._agendaHelperService.viewDate).toISOString()
        };
    }
  }
}
