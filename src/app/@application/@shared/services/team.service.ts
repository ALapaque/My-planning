import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { generateCompleteUrl } from '../../../../environments/environment';
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
}
