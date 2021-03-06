import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { generateCompleteUrl } from '../../../../environments/environment';
import { User } from '../../../@shared/models/user.model';
import { AuthService } from '../../../@shared/services/auth.service';

@Injectable()
export class UserService {

  private _baseUrl: string = generateCompleteUrl() + '/user';

  constructor(
    private _http: HttpClient,
    private _authService: AuthService,
  ) {
  }

  getUsers(): Observable<Array<User>> {
    return this._http.get<Array<User>>(`${ this._baseUrl }/organization/${ this._authService.user.organization }`).pipe(
      map((users: Array<User>) => users.map((user: User) => new User(user)))
    );
  }

  getUser(value: number | string): Observable<User> {
    return this._http.get<User>(`${ this._baseUrl }/${ value }`).pipe(
      map((user: User) => new User(user))
    );
  }

  delete(user: User): Observable<boolean> {
    return this._http.delete<boolean>(`${ this._baseUrl }/${ user.id.toString(10) }`);
  }

  save(user: User): Observable<User> {
    let obs: Observable<User>;
    obs = user.id ? this._update(user) : this._create(user);

    return obs.pipe(
      map((t: User) => new User(t))
    );
  }

  private _create(user: User): Observable<User> {
    return this._http.post<User>(`${ this._baseUrl }`, user);
  }

  private _update(user: User): Observable<User> {
    return this._http.put<User>(`${ this._baseUrl }/${ user.id.toString(10) }`, user);
  }
}
