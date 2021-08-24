import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelper } from '../models/jwt-helper.model';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private jwtHelper$: BehaviorSubject<JwtHelper> = new BehaviorSubject(new JwtHelper());
  private _jwtService: JwtHelperService = new JwtHelperService();
  public user: User;

  constructor(
    private http: HttpClient,
  ) {
    if (sessionStorage.getItem('jwtHelper')) {
      this.jwtHelper$.next(new JwtHelper(JSON.parse(<string>sessionStorage.getItem('jwtHelper'))));
      this.user = JSON.parse(this._jwtService.decodeToken(this.jwtHelper$.value.token).user);
    }
  }

  public get jwtHelper(): JwtHelper {
    return this.jwtHelper$.getValue();
  }

  public login(loginRequest: { usernameOrEmail: string, password: string }): Observable<JwtHelper> {
    return this.http.post<{ token: string }>(`${ environment.apiUrl }/auth/login`, loginRequest)
      .pipe(
        map((value: { token: string }) => new JwtHelper({ token: value.token, isAuthenticated: true, expired: false })),
        map((jwtHelper: JwtHelper) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            sessionStorage.setItem('jwtHelper', JSON.stringify(jwtHelper));
            this.user = JSON.parse(this._jwtService.decodeToken(jwtHelper.token).user);
            this.jwtHelper$.next(jwtHelper);
            return jwtHelper;
          }
        ),
      );
  }

  public register(registerRequest: { username: string, firstName: string, lastName: string, email: string, password: string, }): Observable<any> {
    return this.http.post<any>(`${ environment.apiUrl }/auth/register`, registerRequest);
  }

  public logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('jwtHelper');
    this.jwtHelper$.next(new JwtHelper());
  }
}
