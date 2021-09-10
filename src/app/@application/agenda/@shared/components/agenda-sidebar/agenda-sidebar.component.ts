import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Agenda } from '../../../../../@shared/models/agenda.model';
import { AuthService } from '../../../../../@shared/services/auth.service';
import { ResponsiveService } from '../../../../../@shared/services/responsive.service';
import { AgendaService } from '../../../../@shared/services/agenda.service';
import { AgendaHelperService } from '../../services/agenda-helper.service';

@Component({
  selector: 'app-agenda-sidebar',
  templateUrl: './agenda-sidebar.component.html',
  styleUrls: [ './agenda-sidebar.component.scss' ]
})
export class AgendaSidebarComponent implements OnInit {
  public agendas$: Observable<Array<Agenda>>;
  public sharedAgendas$: Observable<Array<Agenda>>;

  constructor(
    public responsiveService: ResponsiveService,
    public nbSidebarService: NbSidebarService,
    private _agendaService: AgendaService,
    private _agendaHelperService: AgendaHelperService,
    private _authService: AuthService,
  ) {
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

}
