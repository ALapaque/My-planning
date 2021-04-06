import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { NbMenuItem }        from '@nebular/theme';
import { share }             from 'rxjs/operators';

@Component({
             selector: 'app-header-menu',
             templateUrl: './header-menu.component.html',
             styleUrls: [ './header-menu.component.scss' ],
           })
export class HeaderMenuComponent implements OnInit {

  public menuItems: NbMenuItem[] = [
    {
      title: 'Accueil',
      link: '/homepage',
    },
    {
      title: 'Fonctionnalités',
      link: '/homepage',
      fragment: 'features',
    },
    {
      title: 'Secteurs',
      link: '/homepage',
      fragment: 'sectors'
    },
    {
      title: 'Nos offres',
      link: '/homepage',
      fragment: 'offers'
    },
    {
      title: 'Clients',
      link: '/homepage',
      fragment: 'clients'
    },
    {
      title: 'A propos',
      link: '/homepage',
      fragment: 'about'
    },
  ];

  public activeFragment = this._activatedRoute.fragment.pipe(share());

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

}
