import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-calendar-selector',
  templateUrl: './agenda-calendar-selector.component.html',
  styleUrls: ['./agenda-calendar-selector.component.scss']
})
export class AgendaCalendarSelectorComponent implements OnInit {
  public expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
