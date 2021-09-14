import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SchedulerEvent} from '../../../models/scheduler-event.model';
import {AuthService} from '../../../../../../@shared/services/auth.service';

@Component({
  selector: 'app-event-details-header',
  templateUrl: './event-details-header.component.html',
  styleUrls: ['./event-details-header.component.scss']
})
export class EventDetailsHeaderComponent implements OnInit {

  @Input() event!: SchedulerEvent;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  isOwner(): boolean {
    if (this.event.Meta?.agenda?.team) return true;
    return this.event?.Meta?.agenda?.user?.id === this._authService.user.id;
  }
}
