import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { NbMenuItem }        from '@nebular/theme';
import { share }             from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

@Component(
  {
    selector: 'app-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: [ './header-menu.component.scss' ],
  },
)
export class HeaderMenuComponent implements OnInit {

  public menuItems: NbMenuItem[] | undefined = [];

  public mobileMenuItems: NbMenuItem[] | undefined;

  public activeFragment = this._activatedRoute.fragment.pipe(share());

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _translateService: TranslateService,
  ) {
    this._initMenu();
  }

  ngOnInit(): void {
  }

  /**
   * method in order to scroll to an anchor
   * @param {string} location
   * @param {number} wait
   */
  public scrollToAnchor(location: string | undefined, wait: number = 250): void {
    if (!location) {
      return;
    }
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'end' });
      }, wait);
    }
  }

  private async _initMenu() {
    await this._translateService.get('APPNAME').toPromise();
    // this.menuItems = [
    //   {
    //     title: this._translateService.instant('HOMEPAGE.HEADER.MENU.HOMEPAGE'),
    //     link: '/homepage',
    //     fragment: 'home',
    //   },
    //   {
    //     title: this._translateService.instant('HOMEPAGE.HEADER.MENU.FUNCTIONNALITIES'),
    //     link: '/homepage',
    //     fragment: 'features',
    //   },
    //   {
    //     title: this._translateService.instant('HOMEPAGE.HEADER.MENU.SECTORS'),
    //     link: '/homepage',
    //     fragment: 'sectors',
    //   },
    //   {
    //     title: this._translateService.instant('HOMEPAGE.HEADER.MENU.OFFERS'),
    //     link: '/homepage',
    //     fragment: 'offers',
    //   },
    //   {
    //     title: this._translateService.instant('HOMEPAGE.HEADER.MENU.CLIENTS'),
    //     link: '/homepage',
    //     fragment: 'clients',
    //   },
    //   {
    //     title: this._translateService.instant('HOMEPAGE.HEADER.MENU.ABOUT'),
    //     link: '/homepage',
    //     fragment: 'about',
    //   },
    // ];
    this.mobileMenuItems = [
      ...this.menuItems,
      {
        title: this._translateService.instant('HOMEPAGE.HEADER.GOTOAPP'),
        link: '/auth',
      },
    ];
  }
}
