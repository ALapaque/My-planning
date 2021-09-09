import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from '../../../../../@shared/models/agenda.model';

@Component({
  selector: 'app-agenda-calendar-selector',
  templateUrl: './agenda-calendar-selector.component.html',
  styleUrls: [ './agenda-calendar-selector.component.scss' ]
})
export class AgendaCalendarSelectorComponent implements OnInit {
  @Input() public expanded: boolean = false;
  @Input() public agendas$: Observable<Array<Agenda>>;

  constructor() {
  }

  ngOnInit(): void {
  }
}
