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

  public smallScreenMenu: NbMenuItem[] = [
    {
      title: 'Accueil',
      link: '/homepage'
    },
    {
      title: 'Fonctionnalités',
      link: '/homepage',
      fragment: 'features',
      children: [
        {
          title: 'Le tableau de bord',
          link: '/homepage',
          fragment: 'dashboard'
        },
        {
          title: 'L\'agenda',
          link: '/homepage',
          fragment: 'agenda'
        },
        {
          title: 'La communication',
          link: '/homepage',
          fragment: 'communication'
        },
        {
          title: 'Le suivi des réunions',
          link: '/homepage',
          fragment: 'meetings'
        },
      ],
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
    {
      title: 'Accèder à l\'application',
      link: '/auth'
    },
  ];
  public biggerScreenMenu: NbMenuItem[] = [
    {
      title: 'Accueil',
      link: '/homepage'
    },
    {
      title: 'Fonctionnalités',
      link: '/homepage',
      fragment: 'features',
      children: [
        {
          title: 'Le tableau de bord',
          link: '/homepage',
          fragment: 'dashboard'
        },
        {
          title: 'L\'agenda',
          link: '/homepage',
          fragment: 'agenda'
        },
        {
          title: 'La communication',
          link: '/homepage',
          fragment: 'communication'
        },
        {
          title: 'Le suivi des réunions',
          link: '/homepage',
          fragment: 'meetings'
        },
      ],
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
