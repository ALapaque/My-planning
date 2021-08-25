import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import {
  endOfDay, endOfMonth, endOfWeek, endOfYear,
  startOfDay, startOfMonth, startOfWeek, startOfYear,
} from 'date-fns';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { generateCompleteUrl } from '../../../../environments/environment';
import { Event } from '../../../@shared/models/event.model';
import { Page } from '../../../@shared/models/page.model';
import { AuthService } from '../../../@shared/services/auth.service';
import { SchedulerEvent } from '../../agenda/@shared/models/scheduler-event.model';
import { AgendaHelperService } from '../../agenda/@shared/services/agenda-helper.service';
import { scheduleData } from '../../../@shared/datasources/agenda.datasource';

@Injectable()
export class EventService {
  private _baseUrl: string = generateCompleteUrl() + '/event';

  constructor(
    private _http: HttpClient,
    private _agendaHelperService: AgendaHelperService,
    private _authService: AuthService,
  ) {
  }

  public getEvents(): Observable<EventSettingsModel> {
    const parameters: { startDate: string, endDate: string } = this._generateHttpParams;
    const params: HttpParams = new HttpParams()
      .set('startDate', parameters.startDate)
      .set('endDate', parameters.endDate);

    return this._http.get<Page<Event>>(`${ this._baseUrl }`, { params }).pipe(
      map((pagination: Page<Event>) => {
        const transformedEvents: Array<SchedulerEvent> = pagination.content.map((event: Event) => {
          const newEvent: Event = new Event(event);
          return newEvent.transformIntoSchedulerEvent();
        });

        return { dataSource: transformedEvents };
      }),
      tap(() => this._agendaHelperService.isAgendaLoading.next(false)),
      catchError((error) => {
        this._agendaHelperService.isAgendaLoading.next(false);
        throw of(error);
      }),
    );
  }

  public getById(id: number): Observable<SchedulerEvent> {
    return this._http.get<Event>(`${ this._baseUrl }/${ id.toString(10) }`)
      .pipe(
        map((event: Event) => new Event(event).transformIntoSchedulerEvent()),
        tap(() => this._agendaHelperService.isAgendaLoading.next(false)),
        catchError((error) => {
          this._agendaHelperService.isAgendaLoading.next(false);
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
          'startDate': startOfWeek(this._agendaHelperService.viewDate).toISOString(),
          'endDate': endOfWeek(this._agendaHelperService.viewDate).toISOString()
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
