import { AfterViewInit, Component, HostListener, OnDestroy, ViewChild } from '@angular/core';
import {
  CellClickEventArgs,
  DragEventArgs,
  EventClickArgs,
  EventSettingsModel, ResizeEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule/src/schedule/schedule.component';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { LocaleService } from '../../@shared/services/locale.service';
import { AgendaHelperService } from '../@shared/services/agenda-helper.service';
import { TranslateService } from '@ngx-translate/core';
import { NbDialogCustomService } from '../../../@shared/services/nb-dialog-custom.service';
import { NbDialogService } from '@nebular/theme';
import { EventService } from '../../@shared/services/event.service';
import { SchedulerEvent } from '../@shared/models/scheduler-event.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: [ './agenda.component.scss' ],
})
export class AgendaComponent implements AfterViewInit, OnDestroy {
  @ViewChild('ejsSchedule') public ejsSchedule: ScheduleComponent | undefined;

  public events$: Observable<EventSettingsModel>;

  private _destroy: Subject<any> = new Subject<any>();

  constructor(
    public agendaHelperService: AgendaHelperService,
    public localeService: LocaleService,
    private _eventService: EventService,
    private _dialogService: NbDialogService,
    private _dialogServiceCustom: NbDialogCustomService,
    private _translateService: TranslateService,
    private _toastrService: ToastrService,
  ) {
    this.onResize({ target: { innerWidth: window.innerWidth } });

    this.agendaHelperService.isAgendaLoading.next(true);
    this._refreshEvents();
    this._initRefreshListener();
  }

  @HostListener('window:resize', [ '$event' ])
  onResize(event: any): void {
    const width: number = event.target.innerWidth;

    if (width <= 960) {
      if (this.agendaHelperService.currentViewDisplayed !== 'Day') {
        this.agendaHelperService.currentViewDisplayed = 'Day';
        this.agendaHelperService.refreshAgenda$.next(true);
      }
    } else {
      if (this.agendaHelperService.currentViewDisplayed !== 'Week') {
        this.agendaHelperService.currentViewDisplayed = 'Week';
        this.agendaHelperService.refreshAgenda$.next(true);
      }
    }

    if (this.ejsSchedule) this.ejsSchedule.render();
  }

  public ngAfterViewInit(): void {
    this.agendaHelperService.ejsSchedule = this.ejsSchedule;
  }

  public ngOnDestroy(): void {
    this._destroy.next();
  }

  public cellClicked($event: CellClickEventArgs): void {
    if ($event.isAllDay) return;
    this.agendaHelperService.openEventFormDialog(new SchedulerEvent({
      StartTime: $event.startTime.toISOString(),
      EndTime: $event.endTime.toISOString()
    }));
  }

  public eventClicked($event: EventClickArgs): void {
    const event: SchedulerEvent = $event.event as SchedulerEvent;
    this._eventService
      .getById(event.Id)
      .pipe(tap((eventReceived: SchedulerEvent) => this.agendaHelperService.openEventDetailsDialog(eventReceived)))
      .subscribe();
  }

  public eventDropped($event: DragEventArgs): void {
    this._eventService
      .save(new SchedulerEvent($event.data))
      .subscribe();
  }

  public eventResized($event: ResizeEventArgs): void {
    console.log($event.data);
    this._eventService.save(new SchedulerEvent($event.data)).subscribe();
  }

  private _refreshEvents(): void {
    this.events$ = this._eventService.getEvents().pipe(
      takeUntil(this._destroy)
    );
  }

  private _initRefreshListener(): void {
    this.agendaHelperService
      .refreshAgenda$
      .pipe(
        takeUntil(this._destroy),
        tap((refresh: true) => {
          if (refresh) {
            this._refreshEvents();
          }
        }))
      .subscribe();
  }
}
