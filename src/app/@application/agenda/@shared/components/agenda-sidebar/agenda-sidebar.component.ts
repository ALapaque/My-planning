import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NbDialogService, NbSidebarService} from '@nebular/theme';
import {Observable, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {Agenda} from '../../../../../@shared/models/agenda.model';
import {AuthService} from '../../../../../@shared/services/auth.service';
import {ResponsiveService} from '../../../../../@shared/services/responsive.service';
import {AgendaService} from '../../../../@shared/services/agenda.service';
import {AgendaHelperService} from '../../services/agenda-helper.service';
import {
  AgendaCalendarSelectorComponent,
  CalendarCheckedState
} from '../agenda-calendar-selector/agenda-calendar-selector.component';
import {NbDialogCustomService} from '../../../../../@shared/services/nb-dialog-custom.service';
import {AgendaFormComponent} from '../forms/agenda-form/agenda-form.component';

@Component({
  selector: 'app-agenda-sidebar',
  templateUrl: './agenda-sidebar.component.html',
  styleUrls: ['./agenda-sidebar.component.scss']
})
export class AgendaSidebarComponent implements OnInit, OnDestroy {
  public agendas$: Observable<Array<Agenda>>;
  public sharedAgendas$: Observable<Array<Agenda>>;

  private _calendarsSelected: Array<number>;
  private _destroy$: Subject<any> = new Subject<any>();

  @ViewChild('userAgendas') private _userAgendas: AgendaCalendarSelectorComponent;

  constructor(
    public responsiveService: ResponsiveService,
    public nbSidebarService: NbSidebarService,
    private _agendaService: AgendaService,
    private _agendaHelperService: AgendaHelperService,
    private _authService: AuthService,
    private _dialogCustomService: NbDialogCustomService,
    private _dialogService: NbDialogService,
  ) {
    this._initUserAgendas();
    this._initUserSharedAgendas();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._destroy$.next();
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

  addOrEditAgenda(agenda?: Agenda): void {
    console.log('addOrEdit', agenda);
    this._dialogService
      .open(AgendaFormComponent, {
        context: {
          // @ts-ignore
          agenda: agenda ?? new Agenda(),
        },
        dialogClass: this._dialogCustomService.isFullscreen,
        closeOnEsc: true
      })
      .onClose
      .pipe(takeUntil(this._destroy$))
      .subscribe((agenda: Agenda) => {
        this._refreshUserAgendas();
      });
  }

  delete(agenda: Agenda): void {
    console.log('delete');
  }

  private _refreshUserAgendas(): void {
    this._initUserAgendas();
    this._userAgendas.refreshAgenda(this.agendas$);
  }

  private _initUserAgendas(): void {
    this.agendas$ = this._agendaService.getUserAgendas().pipe(
      tap((agendas: Array<Agenda>) => {
        if (!this._agendaHelperService.calendarsSelected || !this._agendaHelperService.calendarsSelected.length) {
          const defaultUserAgenda: Agenda = agendas.find((agenda: Agenda) => (agenda.user.id === this._authService.user.id) && agenda.byDefault);
          if (defaultUserAgenda) this._agendaHelperService.calendarsSelected = [defaultUserAgenda.id];
        } else {
          this._agendaHelperService.refreshAgenda$.next(true);
        }
        this._calendarsSelected = this._agendaHelperService.calendarsSelected;
      })
    );

  }

  private _initUserSharedAgendas(): void {
    this.sharedAgendas$ = this._agendaService.getUserSharedAgendas();
  }
}
