import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { EventService } from '../../../../@shared/services/event.service';
import { SchedulerEvent } from '../../models/scheduler-event.model';
import { NbDialogCustomService } from '../../../../../@shared/services/nb-dialog-custom.service';
import { AgendaHelperService } from '../../services/agenda-helper.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: [ './event-details.component.scss' ]
})
export class EventDetailsComponent implements OnInit {
  public event: SchedulerEvent = new SchedulerEvent();

  constructor(
    public dialogRef: NbDialogRef<EventDetailsComponent>,
    private _eventService: EventService,
    private _agendaHelperService: AgendaHelperService,
    private _dialogService: NbDialogService,
    private _dialogServiceCustom: NbDialogCustomService,
  ) {
  }

  ngOnInit(): void {
  }

  edit(): void {
    this._agendaHelperService.openEventFormDialog(this.event).onClose.subscribe(
      (schedulerEvent: SchedulerEvent) => {
        if (!schedulerEvent) return;

        this._eventService.save(schedulerEvent).subscribe();
      }
    );
  }

  delete(): void {
    this._agendaHelperService.openConfirmActionDialog().onClose.subscribe(
      (result: { confirmed: boolean }) => {
        if (!result.confirmed) return;

        this._eventService.delete(this.event.Meta.id).subscribe();
        this.dialogRef.close();
      }
    );
  }
}
