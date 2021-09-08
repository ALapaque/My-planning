import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { NbSidebarState } from '@nebular/theme/components/sidebar/sidebar.component';
import { View } from '@syncfusion/ej2-angular-schedule';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../../@shared/services/loader.service';
import { AgendaHelperService } from '../../services/agenda-helper.service';
import { NbDialogCustomService } from '../../../../../@shared/services/nb-dialog-custom.service';
import { AgendaSettingsComponent } from '../agenda-settings/agenda-settings.component';
import { NbDialogService, NbSidebarService } from '@nebular/theme';
import * as moment from 'moment';

@Component({
  selector: 'app-agenda-toolbar',
  templateUrl: './agenda-toolbar.component.html',
  styleUrls: [ './agenda-toolbar.component.scss' ],
})
export class AgendaToolbarComponent implements OnInit, OnDestroy {
  @Input() calendarSidebarState!: NbSidebarState;

  private _destroy$: Subject<any> = new Subject();

  constructor(
    public agendaHelperService: AgendaHelperService,
    public nbSidebarService: NbSidebarService,
    private _loaderService: LoaderService,
    private _dialogService: NbDialogService,
    private _dialogCustomService: NbDialogCustomService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  navigatePrevious(): void {
    this._navigate('previous');
  }

  navigateNext(): void {
    this._navigate('next');
  }

  agendaSettings(): void {
    this._dialogService.open(AgendaSettingsComponent,
      { dialogClass: this._dialogCustomService.isFullscreen }
    );
  }

  private _navigate(type: 'previous' | 'next'): void {
    switch (this.agendaHelperService.currentViewDisplayed) {
      case 'Day':
      case 'Agenda':
      case 'TimelineDay':
        if (type === 'next') {
          this.agendaHelperService.viewDate = moment(this.agendaHelperService.viewDate).add(1, 'day').toDate();
        } else {
          this.agendaHelperService.viewDate = moment(this.agendaHelperService.viewDate).subtract(1, 'day').toDate();
        }
        break;
      case 'Week':
      case 'WorkWeek':
      case 'TimelineWeek':
      case 'TimelineWorkWeek':
        if (type === 'next') {
          this.agendaHelperService.viewDate = moment(this.agendaHelperService.viewDate).add(1, 'week').toDate();
        } else {
          this.agendaHelperService.viewDate = moment(this.agendaHelperService.viewDate).subtract(1, 'week').toDate();
        }
        break;
      case 'Month':
      case 'MonthAgenda':
      case 'TimelineMonth':
        if (type === 'next') {
          this.agendaHelperService.viewDate = moment(this.agendaHelperService.viewDate).add(1, 'month').toDate();
        } else {
          this.agendaHelperService.viewDate = moment(this.agendaHelperService.viewDate).subtract(1, 'month').toDate();
        }
        break;
      case 'Year':
      case 'TimelineYear':
        if (type === 'next') {
          this.agendaHelperService.viewDate = moment(this.agendaHelperService.viewDate).add(1, 'year').toDate();
        } else {
          this.agendaHelperService.viewDate = moment(this.agendaHelperService.viewDate).subtract(1, 'year').toDate();
        }
        break;
    }
    this.agendaHelperService.refreshAgenda$.next(true);
  }

  onViewChange(view: View): void {
    this.agendaHelperService.currentViewDisplayed = view;
    this.agendaHelperService.refreshAgenda$.next(true);
  }

  normalViews(): Array<View> {
    return this.agendaHelperService.views.filter((view: string) => !view.toLowerCase().includes('timeline'));
  }

  timeLineViews(): Array<View> {
    return this.agendaHelperService.views.filter((view: string) => view.toLowerCase().includes('timeline'));
  }
}
