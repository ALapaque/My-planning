import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { User } from '../../../@shared/models/user.model';

@Injectable()
export class UserService {

  private _baseUrl: string = '/user';

  constructor(
    private _http: HttpClient
  ) {
  }

  public getUsers(): Observable<Array<User>> {
    return this._http.get<Array<User>>(`${ environment.apiUrl }${ this._baseUrl }`).pipe(
      map((users: Array<User>) => users.map((user: User) => new User(user)))
    );
  }

  public getUser(id: string): Observable<User> {
    return this._http.get<User>(`${ environment.apiUrl }${ this._baseUrl }/${ id }`).pipe(
      map((user: User) => new User(user))
    );
  }
}
