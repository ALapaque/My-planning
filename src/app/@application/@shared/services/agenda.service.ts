import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Agenda} from '../../../@shared/models/agenda.model';
import {HttpClient} from '@angular/common/http';
import {generateCompleteUrl} from '../../../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {AuthService} from '../../../@shared/services/auth.service';
import {User} from '../../../@shared/models/user.model';

@Injectable()
export class AgendaService {
  private _baseUrl: string = generateCompleteUrl() + '/agenda';

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) {
  }

  getUserAgendas(): Observable<Array<Agenda>> {
    return this._http.get<Array<Agenda>>(`${this._baseUrl}/user/${this._authService.user.id.toString(10)}`).pipe(
      map((agendas: Array<Agenda>) => agendas.map((agenda: Agenda) => new Agenda(agenda))),
    );
  }

  getUserSharedAgendas(): Observable<Array<Agenda>> {
    return this._http.get<Array<Agenda>>(`${this._baseUrl}/shared/user/${this._authService.user.id.toString(10)}`).pipe(
      map((agendas: Array<Agenda>) => agendas.map((agenda: Agenda) => new Agenda(agenda))),
    );
  }
}
