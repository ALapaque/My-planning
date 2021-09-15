import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment, generateCompleteUrl } from '../../../../environments/environment';
import { User } from '../../../@shared/models/user.model';

@Injectable()
export class UserService {

  private _baseUrl: string = generateCompleteUrl() + '/user';

  constructor(
    private _http: HttpClient
  ) {
  }

  public getUsers(): Observable<Array<User>> {
    return this._http.get<Array<User>>(`${ this._baseUrl }`).pipe(
      map((users: Array<User>) => users.map((user: User) => new User(user)))
    );
  }

  public getUser(value: number | string): Observable<User> {
    return this._http.get<User>(`${ this._baseUrl }/${ value }`).pipe(
      map((user: User) => new User(user))
    );
  }

  public delete(user: User): Observable<boolean> {
    return this._http.delete<boolean>(`${ this._baseUrl }/${ user.id.toString(10) }`);
  }
}
