import { Component, OnInit } from '@angular/core';
import { NbMenuItem }        from '@nebular/theme';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Tableau de bord',
      icon: 'grid-outline',
      link: '/app/dashboard',
      pathMatch: 'full',
    },
    {
      title: 'Agenda',
      icon: 'calendar-outline',
      link: '/app/agenda',
      pathMatch: 'full',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
