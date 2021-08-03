import {Injectable} from '@angular/core';
import {View} from '@syncfusion/ej2-angular-schedule';
import {ScheduleComponent} from '@syncfusion/ej2-angular-schedule/src/schedule/schedule.component';
import {BehaviorSubject, Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Injectable()
export class AgendaHelperService {

  public ejsSchedule: ScheduleComponent | undefined;
  public isAgendaLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _viewDate: Date = new Date();
  private _views: Array<View> = ['Day', 'Week', 'WorkWeek', 'Month', 'Year', 'Agenda'];
  private _timelineViews: Array<View> = ['TimelineDay', 'TimelineWeek', 'TimelineWorkWeek', 'TimelineMonth', 'TimelineYear'];

  constructor() {
  }

  get views(): Array<View> {
    return this._views;
  }

  get timelineViews(): Array<View> {
    return this._timelineViews;
  }

  public get viewDate(): Date {
    return this._viewDate;
  }

  public set viewDate(value: Date) {
    this._viewDate = value;
  }

  private _currentView: View = 'Week';

  public get currentView(): View {
    return this._currentView;
  }

  public set currentView(value: View) {
    this._currentView = value;
  }
}
