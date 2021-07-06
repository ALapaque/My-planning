import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {environment} from '../../../environments/environment';
import {JwtHelper} from '../models/jwt-helper.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const jwtHelper: JwtHelper = this._authService.jwtHelper;
    const isApiUrl: boolean = request.url.startsWith(environment.apiUrl);

    if (jwtHelper.isAuthenticated && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtHelper.token}`
        }
      });
    }

    return next.handle(request);
  }
}
