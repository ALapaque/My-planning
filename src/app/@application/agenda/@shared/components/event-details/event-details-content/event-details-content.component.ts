import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventService } from '../../../../../@shared/services/event.service';
import { SchedulerEvent } from '../../../models/scheduler-event.model';
import { Comment } from '../../../../../../@shared/models/comment.model';
import { AuthService } from '../../../../../../@shared/services/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NbChatComponent, NbStepperComponent } from '@nebular/theme';
import { CommentService } from '../../../../../@shared/services/comment.service';
import { Event } from '../../../../../../@shared/models/event.model';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-event-details-content',
  templateUrl: './event-details-content.component.html',
  styleUrls: [ './event-details-content.component.scss' ]
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

  public isOwner(): boolean {
    return this.event.Meta.agenda.user.id === this._authService.user.id;
  }


  sendMessage(commentToAdd: Comment): void {
    this._commentService.save(commentToAdd).subscribe(
      (comment: Comment) => {
        if (!comment) return;
        this.event.Meta.comments.push(comment);
        this.nbChat.scrollBottom = true;
      }
    );
  }

  saveDocument(): void {
    this._eventService.save(this.event).subscribe();
  }

  navigateTo(meetingUrl: string): void {
    window.open(meetingUrl);
  }
}
