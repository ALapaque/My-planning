import { AfterViewInit, Component, HostListener, OnDestroy, ViewChild } from '@angular/core';
import {
  CellClickEventArgs,
  DragEventArgs,
  EventClickArgs,
  EventSettingsModel, ResizeEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule/src/schedule/schedule.component';
import { Observable, of, Subject } from 'rxjs';
import { delay, takeUntil, tap } from 'rxjs/operators';
import { scheduleData } from '../../../@shared/datasources/agenda.datasource';
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

  public eventSettings: Observable<EventSettingsModel>;

  private _destroy: Subject<any> = new Subject<any>();

  constructor(
    public agendaHelperService: AgendaHelperService,
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
  onResize(event: any) {
    const width: number = event.target.innerWidth;

    if (width <= 960) {
      this.agendaHelperService.currentViewDisplayed = 'Day';
    } else {
      this.agendaHelperService.currentViewDisplayed = 'Week';
    }
  }

  public ngAfterViewInit(): void {
    this.agendaHelperService.ejsSchedule = this.ejsSchedule;
  }

  public ngOnDestroy() {
    this._destroy.next();
  }

  public cellClicked($event: CellClickEventArgs): void {
    if ($event.isAllDay) return;
    console.log($event);
    this.agendaHelperService.openEventFormDialog(new SchedulerEvent({
      StartTime: $event.startTime.toISOString(),
      EndTime: $event.endTime.toISOString()
    }));
  }

  public eventClicked($event: EventClickArgs): void {
    const event: SchedulerEvent = $event.event as SchedulerEvent;
    this.agendaHelperService.isAgendaLoading.next(true);
    this._eventService.getById(event.Id).subscribe(
      (eventReceived: SchedulerEvent) => this.agendaHelperService.openEventDetailsDialog(eventReceived),
      () => this._toastrService.error('Une erreur est survenue')
    );

  }

  public eventDropped($event: DragEventArgs): void {
    console.log($event);
    this._eventService.save(new SchedulerEvent($event.data)).subscribe();
  }

  public eventResized($event: ResizeEventArgs) {
    this._eventService.save(new SchedulerEvent($event.data)).subscribe();
  }

  public getAgendaLocale() {
    const browserLang: string = this._translateService.getBrowserLang();
    let languageUsed: string;

    if (sessionStorage.getItem('i18n')) {
      languageUsed = (sessionStorage.getItem('i18n') as string).match(/fr|fr-FR/) ? 'fr-BE' : 'en-US';
    } else {
      languageUsed = browserLang.match(/fr|fr-FR/) ? 'fr-BE' : 'en-US';
      sessionStorage.setItem('i18n', languageUsed);
    }

    return languageUsed;
  }


  private _refreshEvents() {
    this.eventSettings = this._eventService.getEvents();
  }

  private _initRefreshListener() {
    this.agendaHelperService.refreshAgenda$.pipe(
      takeUntil(this._destroy)
    ).subscribe((refresh: true) => this._refreshEvents());
  }
}
