import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from '../../../../../@shared/models/agenda.model';
import { AuthService } from '../../../../../@shared/services/auth.service';
import { AgendaHelperService } from '../../services/agenda-helper.service';

@Component({
  selector: 'app-agenda-calendar-selector',
  templateUrl: './agenda-calendar-selector.component.html',
  styleUrls: [ './agenda-calendar-selector.component.scss' ]
})
export class AgendaCalendarSelectorComponent implements OnInit {
  @Input() public expanded: boolean = false;
  @Input() public agendas$: Observable<Array<Agenda>>;

  constructor(
    private _authService: AuthService,
    private _agendaHelperService: AgendaHelperService
  ) {
  }

  ngOnInit(): void {
  }

  public isDefaultUserAgenda(agenda: Agenda): boolean {
    return agenda?.user?.id === this._authService.user.id;
  }

  isSelected(agenda: Agenda): boolean {
    return this._agendaHelperService
      .calendarsSelected
      ?.findIndex((id: number) => id === agenda.id) !== -1;
  }
}
