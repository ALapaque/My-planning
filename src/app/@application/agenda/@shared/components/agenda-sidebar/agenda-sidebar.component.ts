import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Agenda } from '../../../../../@shared/models/agenda.model';
import { ResponsiveService } from '../../../../../@shared/services/responsive.service';
import { AgendaService } from '../../../../@shared/services/agenda.service';

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
  ) {
    this.agendas$ = _agendaService.getUserAgendas();
    this.sharedAgendas$ = _agendaService.getUserSharedAgendas();
  }

  ngOnInit(): void {
  }

}
