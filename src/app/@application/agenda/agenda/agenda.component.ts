import {AfterViewInit, Component, HostListener, ViewChild} from '@angular/core';
import {CellClickEventArgs, DragEventArgs, EventClickArgs, EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import {ScheduleComponent} from '@syncfusion/ej2-angular-schedule/src/schedule/schedule.component';
import {scheduleData} from '../../../@shared/datasources/agenda.datasource';
import {AgendaHelperService} from '../agenda-helper.service';
import {NbDialogService} from '@nebular/theme';
import {EventFormComponent} from '../@shared/components/forms/event-form/event-form.component';

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
  ) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width: number = event.target.innerWidth;

    if (width <= 960) {
      this.agendaHelperService.currentView = 'Day';
    } else {
      this.agendaHelperService.currentView = 'Week';
    }
  }

  public ngAfterViewInit(): void {
    this.agendaHelperService.ejsSchedule = this.ejsSchedule;
  }

  public cellClicked($event: CellClickEventArgs): void {
    console.log($event);
    const isFullscreen: string = (window.innerWidth <= 960) ? 'nebular-dialog-fullscreen' : '';
    this._dialogService.open(EventFormComponent, {dialogClass: isFullscreen});
  }

  public eventClicked($event: EventClickArgs): void {
    console.log($event);
  }

  public eventDropped($event: DragEventArgs): void {
    console.log($event);
  }
}
