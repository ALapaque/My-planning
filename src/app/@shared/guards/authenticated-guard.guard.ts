import { Injectable }                                                                                    from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable }                                                                                    from 'rxjs';
import { JwtHelper }                                                                                     from '../models/jwt-helper.model';
import { AuthService }                                                                                   from '../services/auth.service';

@Injectable({
              providedIn: 'root',
            })
export class AuthenticatedGuardGuard implements CanActivate, CanLoad {

  constructor(
    private _authService: AuthService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const jwtToken: JwtHelper = this._authService.jwtToken.getValue();
    return !(this._authService.isTokenExpired || !jwtToken.isAuthenticated || !jwtToken);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const jwtToken: JwtHelper = this._authService.jwtToken.getValue();
    return !(this._authService.isTokenExpired || !jwtToken.isAuthenticated || !jwtToken);
  }
}
