import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { generateCompleteUrl } from '../../../../environments/environment';
import { Agenda } from '../../../@shared/models/agenda.model';
import { Team } from '../../../@shared/models/team.model';
import { User } from '../../../@shared/models/user.model';
import { AuthService } from '../../../@shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private _baseUrl: string = generateCompleteUrl() + '/team';

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) {
  }

  public getUsersTeams(): Observable<Array<Team>> {
    return this._http.get<Array<Team>>(`${ this._baseUrl }/user/${ this._authService.user.id }`)
      .pipe(
        map((teams: Array<Team>) => teams.map((team: Team) => new Team(team)))
      );
  }


  public getTeam(value: number | string): Observable<Team> {
    return this._http.get<Team>(`${ this._baseUrl }/${ value }`).pipe(
      map((team: Team) => new Team(team))
    );
  }

  public delete(team: Team): Observable<boolean> {
    return this._http.delete<boolean>(`${ this._baseUrl }/${ team.id.toString(10) }`);
  }

  save(team: Team): Observable<Team> {
    let obs: Observable<Team>;
    obs = team.id ? this._update(team) : this._create(team);

    return obs.pipe(
      map((t: Team) => new Team(t))
    );
  }

  private _create(team: Team): Observable<Team> {
    return this._http.post<Team>(`${ this._baseUrl }`, team);
  }

  private _update(team: Team): Observable<Team> {
    return this._http.put<Team>(`${ this._baseUrl }/${ team.id.toString(10) }`, team);
  }
}
