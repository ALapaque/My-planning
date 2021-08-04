import {AfterViewInit, Component, HostListener, ViewChild} from '@angular/core';
import {CellClickEventArgs, DragEventArgs, EventClickArgs, EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import {ScheduleComponent} from '@syncfusion/ej2-angular-schedule/src/schedule/schedule.component';
import {scheduleData} from '../../../@shared/datasources/agenda.datasource';
import {AgendaHelperService} from '../@shared/services/agenda-helper.service';
import {EventFormComponent} from '../@shared/components/forms/event-form/event-form.component';
import {TranslateService} from '@ngx-translate/core';
import {NbDialogCustomService} from '../../../@shared/services/nb-dialog-custom.service';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements AfterViewInit {

  public eventSettings: EventSettingsModel = {dataSource: scheduleData};

  @ViewChild('ejsSchedule') public ejsSchedule: ScheduleComponent | undefined;

  constructor(
    public agendaHelperService: AgendaHelperService,
    private _dialogService: NbDialogService,
    private _dialogServiceCustom: NbDialogCustomService,
    private _translateService: TranslateService,
  ) {
  }

  @HostListener('window:resize', ['$event'])
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

  public cellClicked($event: CellClickEventArgs): void {
    this._dialogService.open(EventFormComponent,
      {dialogClass: this._dialogServiceCustom.isFullscreen}
    );
  }

  public eventClicked($event: EventClickArgs): void {
    console.log($event);
  }

  public eventDropped($event: DragEventArgs): void {
    console.log($event);
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
}
