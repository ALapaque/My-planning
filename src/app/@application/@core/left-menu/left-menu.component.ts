import { Component, OnInit } from '@angular/core';
import { NbMenuItem }        from '@nebular/theme';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  items: NbMenuItem[] | undefined

  constructor(
    private _translateService: TranslateService
  ) {
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
    ];
  }

  ngOnInit(): void {
  }

}
