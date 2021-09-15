import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: [ './right-menu.component.scss' ]
})
export class RightMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  isAgendaVisible(): boolean {
    return document.URL.toLowerCase().includes('agenda');
  }
}
