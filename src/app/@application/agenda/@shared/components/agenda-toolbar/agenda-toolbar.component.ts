import { Component, EventEmitter, OnInit } from '@angular/core';
import { LoaderService } from '../../../../@shared/services/loader.service';
import { AgendaHelperService } from '../../services/agenda-helper.service';
import { subDays, addDays, addWeeks, subWeeks, addMonths, subMonths, addYears, subYears } from 'date-fns';
import { NbDialogCustomService } from '../../../../../@shared/services/nb-dialog-custom.service';
import { AgendaSettingsComponent } from '../agenda-settings/agenda-settings.component';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-agenda-toolbar',
  templateUrl: './agenda-toolbar.component.html',
  styleUrls: [ './agenda-toolbar.component.scss' ],
})
export class AgendaToolbarComponent implements OnInit {

  constructor(
    public agendaHelperService: AgendaHelperService,
    private _loaderService: LoaderService,
    private _dialogService: NbDialogService,
    private _dialogCustomService: NbDialogCustomService,
  ) {
  }

  ngOnInit(): void {
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
          this.agendaHelperService.viewDate = addDays(this.agendaHelperService.viewDate, 1);
        } else {
          this.agendaHelperService.viewDate = subDays(this.agendaHelperService.viewDate, 1);
        }
        break;
      case 'Week':
      case 'WorkWeek':
      case 'TimelineWeek':
      case 'TimelineWorkWeek':
        if (type === 'next') {
          this.agendaHelperService.viewDate = addWeeks(this.agendaHelperService.viewDate, 1);
        } else {
          this.agendaHelperService.viewDate = subWeeks(this.agendaHelperService.viewDate, 1);
        }
        break;
      case 'Month':
      case 'MonthAgenda':
      case 'TimelineMonth':
        if (type === 'next') {
          this.agendaHelperService.viewDate = addMonths(this.agendaHelperService.viewDate, 1);
        } else {
          this.agendaHelperService.viewDate = subMonths(this.agendaHelperService.viewDate, 1);
        }
        break;
      case 'Year':
      case 'TimelineYear':
        if (type === 'next') {
          this.agendaHelperService.viewDate = addYears(this.agendaHelperService.viewDate, 1);
        } else {
          this.agendaHelperService.viewDate = subYears(this.agendaHelperService.viewDate, 1);
        }
        break;
    }
    this.agendaHelperService.refreshAgenda$.next(true);
  }
}
