import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SchedulerEvent} from '../../../models/scheduler-event.model';
import {Comment} from '../../../../../../@shared/models/comment.model';
import {AuthService} from '../../../../../../@shared/services/auth.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {NbStepperComponent} from '@nebular/theme';

@Component({
  selector: 'app-event-details-content',
  templateUrl: './event-details-content.component.html',
  styleUrls: ['./event-details-content.component.scss']
})
export class EventDetailsContentComponent implements OnInit {
  @ViewChild('stepper') public nbStepper: NbStepperComponent;
  @Input() public event!: SchedulerEvent;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private _authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  isSameUser(msg: Comment): boolean {
    return this._authService.user.id === msg.user.id;
  }
}
