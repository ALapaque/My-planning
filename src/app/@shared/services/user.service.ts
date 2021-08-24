import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _baseUrl: string = '/user';

  constructor(
    private _http: HttpClient
  ) {
  }

  public getUsers(): Observable<Array<any>> {
    return this._http.get<Array<any>>(`${ environment.apiUrl }${ this._baseUrl }`);
  }

  public getUser(id: string): Observable<any> {
    return this._http.get<any>(`${ environment.apiUrl }${ this._baseUrl }/${ id }`);
  }
}
