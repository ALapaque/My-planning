import { Component, OnInit } from '@angular/core';
import { NbSidebarService }  from '@nebular/theme';
import { NbSidebarState }    from '@nebular/theme/components/sidebar/sidebar.component';
import {AuthService} from '../../../@shared/services/auth.service';

@Component({
             selector: 'app-template',
             templateUrl: './template.component.html',
             styleUrls: [ './template.component.scss' ],
           })
export class TemplateComponent implements OnInit {

  public sideBarState: NbSidebarState | undefined;

  constructor(
    private _sidebarService: NbSidebarService,
    private _authService: AuthService,
    ) {
  }

  ngOnInit(): void {
  }

  public toggle() {
    this._sidebarService.toggle(true, 'left');
  }

  public logout() {
    this._authService.logout();
  }

}
