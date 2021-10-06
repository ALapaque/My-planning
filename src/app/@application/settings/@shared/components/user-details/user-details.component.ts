import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Agenda } from '../../../../../@shared/models/agenda.model';
import { User } from '../../../../../@shared/models/user.model';
import { AgendaService } from '../../../../@shared/services/agenda.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: [ './user-details.component.scss' ]
})
export class UserDetailsComponent implements OnInit {
  @Input() user!: User;
  userAgendas$: Observable<Array<Agenda>>;
  userSharedAgendas$: Observable<Array<Agenda>>;

  constructor(
    public dialogRef: NbDialogRef<UserDetailsComponent>,
    private _agendaService: AgendaService,
  ) {
  }

  ngOnInit(): void {
    this.userAgendas$ = this._agendaService.getUserAgendas(this.user.id);
    this.userSharedAgendas$ = this._agendaService.getUserSharedAgendas(this.user.id);
  }

}
