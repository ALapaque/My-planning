import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { EventService } from '../../../../../@shared/services/event.service';
import {SchedulerEvent} from '../../../models/scheduler-event.model';
import {Comment} from '../../../../../../@shared/models/comment.model';
import {AuthService} from '../../../../../../@shared/services/auth.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {NbChatComponent, NbStepperComponent} from '@nebular/theme';
import {CommentService} from '../../../../../@shared/services/comment.service';
import {Event} from '../../../../../../@shared/models/event.model';
import {fromEvent} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-event-details-content',
  templateUrl: './event-details-content.component.html',
  styleUrls: ['./event-details-content.component.scss']
})
export class EventDetailsContentComponent {
  @ViewChild('stepper') public nbStepper: NbStepperComponent;
  @ViewChild('chat') public nbChat: NbChatComponent;
  @Input() public event!: SchedulerEvent;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private _authService: AuthService,
    private _commentService: CommentService,
    private _eventService: EventService,
  ) {
  }

  isSameUser(msg: Comment): boolean {
    return this._authService.user.id === msg.user.id;
  }


  sendMessage($event: { message: string }) {
    this._commentService.save(new Comment(
      {
        content: $event.message,
        event: Event.transformIntoEvent(this.event),
        user: this._authService.user
      }
    )).subscribe((comment: Comment) => {
      if (!comment) return;
      this.event.Meta.comments.push(comment);
      this.nbChat.scrollBottom = true;
    });
  }

  saveDocument() {
    this._eventService.save(this.event).subscribe();
  }
}
