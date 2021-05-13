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
      link: 'dashboard',
    },
    {
      title: 'Agenda',
      icon: 'calendar-outline',
      children: [
        {
          title: 'Standard',
          link: 'agenda/standard'
        },
        {
          title: 'Time line',
          link: 'agenda/timeline'
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
