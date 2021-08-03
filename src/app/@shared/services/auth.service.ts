import {HttpClient} from '@angular/common/http';
import {Injectable, Self} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {JwtHelper} from '../models/jwt-helper.model';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {
  private jwtHelper$: BehaviorSubject<JwtHelper> = new BehaviorSubject(new JwtHelper());

  constructor(private http: HttpClient) {
    if (sessionStorage.getItem('jwtHelper')) {
      this.jwtHelper$.next(new JwtHelper(JSON.parse(<string>sessionStorage.getItem('jwtHelper'))));
    }
  }

  public get jwtHelper(): JwtHelper {
    return this.jwtHelper$.getValue();
  }

  public login(loginRequest: { usernameOrEmail: string, password: string }): Observable<JwtHelper> {
    return this.http.post<string>(`${environment.apiUrl}/auth/login`, loginRequest)
      .pipe(
        map((token: string) => new JwtHelper({token, isAuthenticated: true, expired: false})),
        map((jwtHelper: JwtHelper) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('jwtHelper', JSON.stringify(jwtHelper));
          this.jwtHelper$.next(jwtHelper);
          return jwtHelper;
        }));
  }

  public register(registerRequest: {username: string, email: string, password: string, confirmPassword: string}): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, registerRequest);
  }

  public logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('jwtHelper');
    this.jwtHelper$.next(new JwtHelper());
  }
}
