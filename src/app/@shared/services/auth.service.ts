import { HttpClient }       from '@angular/common/http';
import { Injectable, Self } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelper }                   from '../models/jwt-helper.model';

@Injectable({
              providedIn: 'root',
            })
export class AuthService {

  public jwtHelper: BehaviorSubject<JwtHelper> = new BehaviorSubject<JwtHelper>(new JwtHelper());

  constructor(
    private _httpService: HttpClient,
    @Self() private _jwtHelper: JwtHelperService
  ) {
  }

  public login(form: { username: string, password: string }): Observable<JwtHelper> {
    return this._httpService
               .post<JwtHelper>('/auth/login', form, { responseType: 'json' })
               .pipe(

               );
  }
}
