import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../../@shared/services/auth.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: [ './left-menu.component.scss' ]
})
export class LeftMenuComponent implements OnInit {

  items: NbMenuItem[] | undefined;

  constructor(
    private _translateService: TranslateService,
    private _authService: AuthService,
  ) {
    this._initItems();
  }

  ngOnInit(): void {
  }

  private async _initItems(): Promise<void> {
    await this._translateService.get('APPNAME').toPromise();
    this.items = [
      {
        title: this._translateService.instant('APP.LEFT_MENU.DASHBOARD'),
        icon: 'grid-outline',
        link: '/app/dashboard',
        pathMatch: 'full',
      },
      {
        title: this._translateService.instant('APP.LEFT_MENU.AGENDA'),
        icon: 'calendar-outline',
        link: '/app/agenda',
        pathMatch: 'full',
      },
      {
        hidden: !this._authService.isAdmin,
        title: this._translateService.instant('APP.LEFT_MENU.SETTINGS'),
        icon: 'settings-2-outline',
        children: [
          {
            title: this._translateService.instant('APP.LEFT_MENU.USERS'),
            icon: 'person-outline',
            link: '/app/configuration/users',
            pathMatch: 'full'
          },
          {
            title: this._translateService.instant('APP.LEFT_MENU.TEAMS'),
            icon: 'people-outline',
            link: '/app/configuration/teams',
            pathMatch: 'full'
          }
        ]
      },
    ];
  }
}
