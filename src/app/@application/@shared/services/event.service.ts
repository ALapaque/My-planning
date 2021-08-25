import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { endOfDay } from 'date-fns';
import {Observable, of} from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { generateCompleteUrl } from '../../../../environments/environment';
import { Event } from '../../../@shared/models/event.model';
import { AuthService } from '../../../@shared/services/auth.service';
import {SchedulerEvent} from '../../agenda/@shared/models/scheduler-event.model';
import {AgendaHelperService} from '../../agenda/@shared/services/agenda-helper.service';
import {scheduleData} from '../../../@shared/datasources/agenda.datasource';

@Injectable()
export class EventService {
  private _baseUrl: string = generateCompleteUrl() + '/event';

  constructor(
    private _http: HttpClient,
    private _agendaHelperService: AgendaHelperService,
    private _authService: AuthService,
  ) {
  }

  public getAll(startDate: Date | string, endDate: Date | string): Observable<Array<SchedulerEvent>> {
    const params: HttpParams = new HttpParams();
    params.append('startDate', startDate.toString());
    params.append('endDate', endDate.toString());

    return of(scheduleData).pipe(
      delay(250),
      tap(() => this._agendaHelperService.isAgendaLoading.next(false))
    );

    // return this._httpClient.get<Array<Event>>(`${environment.apiUrl}/events`, {params})
    //   .pipe(
    //     map((events: Array<Event>) => events.map((event: Event) => (new SchedulerEvent({
    //       Id: event.idEvent,
    //       Subject: event.title,
    //       StartTime: new Date(event.startDate),
    //       EndTime: new Date(event.endDate),
    //       Meta: event
    //     })))),
    //     tap(() => this._agendaHelperService.isAgendaLoading.next(false)),
    //     catchError((error) => {
    //       this._agendaHelperService.isAgendaLoading.next(false);
    //       throw of(error);
    //     }),
    //   );
  }

  public getById(id: number): Observable<SchedulerEvent> {
    return of(scheduleData.find((event: SchedulerEvent) => event.Id === id)).pipe(
      delay(250),
      tap(() => this._agendaHelperService.isAgendaLoading.next(false))
    );

    // return this._httpClient.get<Event>(`${environment.apiUrl}/events/${id.toString(10)}`)
    //   .pipe(
    //     map((event: Event) => (new SchedulerEvent({
    //       Id: event.idEvent,
    //       Subject: event.title,
    //       StartTime: new Date(event.startDate),
    //       EndTime: new Date(event.endDate),
    //       Meta: event
    //     }))),
    //     tap(() => this._agendaHelperService.isAgendaLoading.next(false)),
    //     catchError((error) => {
    //       this._agendaHelperService.isAgendaLoading.next(false);
    //       throw of(error);
    //     }),
    //   );

  }
}
