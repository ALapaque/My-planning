import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { generateCompleteUrl } from '../../../../environments/environment';
import { Team } from '../../../@shared/models/team.model';
import { AuthService } from '../../../@shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private _baseUrl: string = generateCompleteUrl() + 'team';

  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService
  ) {
  }

  public getUsersTeams(): Observable<Array<Team>> {
    return this._httpClient.get<Array<Team>>(`${ this._baseUrl }/${ this._authService.user.id }`)
      .pipe(
        map((teams: Array<Team>) => teams.map((team: Team) => new Team(team)))
      );
  }
}
