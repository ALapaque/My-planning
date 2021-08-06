import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {SchedulerEvent} from '../../models/scheduler-event.model';
import {EventFormComponent} from '../forms/event-form/event-form.component';
import {NbDialogCustomService} from '../../../../../@shared/services/nb-dialog-custom.service';
import {AgendaHelperService} from '../../services/agenda-helper.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  public event: SchedulerEvent = new SchedulerEvent();

  constructor(
    public dialogRef: NbDialogRef<EventDetailsComponent>,
    private _agendaHelperService: AgendaHelperService,
    private _dialogService: NbDialogService,
    private _dialogServiceCustom: NbDialogCustomService,
  ) {
  }

  ngOnInit(): void {
  }

  edit(): void {
    this._agendaHelperService.openEventFormDialog(this.event);
  }

  delete(): void {
    this._agendaHelperService.openConfirmActionDialog().onClose.subscribe(
      (result: { confirmed: boolean }) => {
        if (result.confirmed) this.dialogRef.close();
      }
    );
  }
}
