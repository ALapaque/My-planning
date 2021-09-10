import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Agenda } from '../../../../../@shared/models/agenda.model';
import { AuthService } from '../../../../../@shared/services/auth.service';
import { ResponsiveService } from '../../../../../@shared/services/responsive.service';
import { AgendaService } from '../../../../@shared/services/agenda.service';
import { AgendaHelperService } from '../../services/agenda-helper.service';
import { CalendarCheckedState } from '../agenda-calendar-selector/agenda-calendar-selector.component';

@Component({
  selector: 'app-agenda-sidebar',
  templateUrl: './agenda-sidebar.component.html',
  styleUrls: [ './agenda-sidebar.component.scss' ]
})
export class AgendaSidebarComponent implements OnInit {
  public agendas$: Observable<Array<Agenda>>;
  public sharedAgendas$: Observable<Array<Agenda>>;

  private _calendarsSelected: Array<number>;

  constructor(
    public responsiveService: ResponsiveService,
    public nbSidebarService: NbSidebarService,
    private _agendaService: AgendaService,
    private _agendaHelperService: AgendaHelperService,
    private _authService: AuthService,
  ) {
    this._calendarsSelected = this._agendaHelperService.calendarsSelected;
    this.agendas$ = _agendaService.getUserAgendas().pipe(
      tap((agendas: Array<Agenda>) => {
        if (!this._agendaHelperService.calendarsSelected?.length) {
          const defaultUserAgenda: Agenda = agendas.find((agenda: Agenda) => (agenda.user.id === _authService.user.id) && agenda.byDefault);
          if (defaultUserAgenda) this._agendaHelperService.calendarsSelected = [ defaultUserAgenda.id ];
        } else {
          this._agendaHelperService.refreshAgenda$.next(true);
        }
      })
    );
    this.sharedAgendas$ = _agendaService.getUserSharedAgendas();
  }

  ngOnInit(): void {
  }

  calendarSelectedOnChange($event: CalendarCheckedState): void {
    if ($event.checked) {
      this._calendarsSelected.push($event.agenda.id);
    } else {
      const index: number = this._calendarsSelected.findIndex((id: number) => id === $event.agenda.id);

      this._calendarsSelected.splice(index, 1);
    }
  }

  applyFilter(): void {
    this._agendaHelperService.calendarsSelected = this._calendarsSelected;
  }
}
