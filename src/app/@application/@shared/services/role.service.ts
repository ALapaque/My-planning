import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { generateCompleteUrl } from '../../../../environments/environment';
import { Role } from '../../../@shared/models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private _baseUrl: string = generateCompleteUrl() + '/role';

  constructor(
    private _http: HttpClient,
  ) {
  }

  getRoles(): Observable<Array<Role>> {
    return this._http
      .get<Array<Role>>(`${ this._baseUrl }`)
      .pipe(
        map((roles: Array<Role>) => roles.map((role: Role) => new Role(role)))
      );
  }
}
