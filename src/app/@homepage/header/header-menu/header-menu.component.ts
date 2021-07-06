import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { NbMenuItem }        from '@nebular/theme';
import { share }             from 'rxjs/operators';

@Component(
  {
    selector: 'app-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: [ './header-menu.component.scss' ],
  },
)
export class HeaderMenuComponent implements OnInit {

  public menuItems: NbMenuItem[] = [
    {
      title: 'Accueil',
      link: '/homepage',
      fragment: 'home',
    },
    {
      title: 'Fonctionnalités',
      link: '/homepage',
      fragment: 'features',
    },
    {
      title: 'Secteurs',
      link: '/homepage',
      fragment: 'sectors',
    },
    {
      title: 'Nos offres',
      link: '/homepage',
      fragment: 'offers',
    },
    {
      title: 'Clients',
      link: '/homepage',
      fragment: 'clients',
    },
    {
      title: 'A propos',
      link: '/homepage',
      fragment: 'about',
    },
  ];

  public mobileMenuItems: NbMenuItem[] = [
    ...this.menuItems,
    {
      title: 'Accéder à l\'application',
      link: '/auth',
    },
  ];

  public activeFragment = this._activatedRoute.fragment.pipe(share());

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  /**
   * test
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
}
