import { HttpClient }                      from '@angular/common/http';
import { Injectable, Self }                from '@angular/core';
import { JwtHelperService }                from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap }                        from 'rxjs/operators';
import { JwtHelper }                       from '../models/jwt-helper.model';

@Injectable({
              providedIn: 'root',
            })
export class AuthService {

  public jwtToken: BehaviorSubject<JwtHelper> = new BehaviorSubject<JwtHelper>(new JwtHelper());

  constructor(
    private _httpService: HttpClient,
    @Self() private _jwtHelper: JwtHelperService,
  ) {
  }

  /**
   * isTokenExpired and update the jwtHelper
   * @returns {boolean}
   */
  public get isTokenExpired(): boolean {
    const isTokenExpired: boolean = this._jwtHelper.isTokenExpired(this._jwtHelper.tokenGetter(), 30);
    if (isTokenExpired) {
      this.jwtToken.next(
        new JwtHelper(
          {
            expired: true,
            token: this._jwtHelper.tokenGetter(),
            isAuthenticated: true,
          },
        ),
      );
    }
    return isTokenExpired;
  }

  public login(form: { username: string, password: string }): Observable<JwtHelper> {
    return of(
      new JwtHelper(
        {
          isAuthenticated: true,
          token: 'BLAHBLAHBLAH',
          expired: false,
        },
      ),
    );
    // return this._httpService
    //            .post<string>('/auth/login', form, { responseType: 'json' })
    //            .pipe(
    //              map((token: string) => {
    //                return new JwtHelper(
    //                  {
    //                    expired: false,
    //                    token,
    //                    isAuthenticated: true,
    //                  },
    //                );
    //              }),
    //            );
  }
}
