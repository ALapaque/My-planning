import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Agenda} from '../../../../../@shared/models/agenda.model';
import {AuthService} from '../../../../../@shared/services/auth.service';
import {AgendaHelperService} from '../../services/agenda-helper.service';

export interface CalendarCheckedState {
  checked: boolean;
  agenda: Agenda;
}

@Component({
  selector: 'app-agenda-calendar-selector',
  templateUrl: './agenda-calendar-selector.component.html',
  styleUrls: ['./agenda-calendar-selector.component.scss']
})
export class AgendaCalendarSelectorComponent implements OnInit {
  agendas$: Observable<Array<Agenda>>;

  @Input() expanded: boolean = false;
  @Input() getAgendas$: Observable<Array<Agenda>>;
  @Input() type!: 'shared' | 'user';

  @Output() editEmitter: EventEmitter<Agenda> = new EventEmitter<Agenda>();
  @Output() deleteEmitter: EventEmitter<Agenda> = new EventEmitter<Agenda>();
  @Output() checkedOnChange: EventEmitter<CalendarCheckedState> = new EventEmitter<CalendarCheckedState>();

  constructor(
    private _authService: AuthService,
    private _agendaHelperService: AgendaHelperService
  ) {
  }

  ngOnInit(): void {
    this.refreshAgenda(this.getAgendas$);
  }

  isDefaultUserAgenda(agenda: Agenda): boolean {
    return (agenda?.user?.id === this._authService.user.id) && agenda.byDefault;
  }

  isSelected(agenda: Agenda): boolean {
    return this._agendaHelperService.calendarsSelected?.findIndex((id: number) => id === agenda.id) !== -1;
  }

  refreshAgenda(obs: Observable<Array<Agenda>>): void {
    this.agendas$ = obs;
  }

  canPerformAction(agenda: Agenda): boolean {
    if (this.type !== 'user' || agenda.byDefault) return false;
    else if (agenda.team) {
      return this._authService.user.role.name.toLowerCase().includes('admin');
    } else {
      return true;
    }
  }
}
