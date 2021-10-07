import { Component, Input, ViewChild } from '@angular/core';
import { EventService } from '../../../../../@shared/services/event.service';
import { SchedulerEvent } from '../../../models/scheduler-event.model';
import { Comment } from '../../../../../../@shared/models/comment.model';
import { AuthService } from '../../../../../../@shared/services/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NbChatComponent, NbStepperComponent } from '@nebular/theme';
import { CommentService } from '../../../../../@shared/services/comment.service';

@Component({
  selector: 'app-event-details-content',
  templateUrl: './event-details-content.component.html',
  styleUrls: [ './event-details-content.component.scss' ]
})
export class EventDetailsContentComponent {
  @ViewChild('stepper') nbStepper: NbStepperComponent;
  @ViewChild('chat') nbChat: NbChatComponent;
  @Input() event!: SchedulerEvent;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private _authService: AuthService,
    private _commentService: CommentService,
    private _eventService: EventService,
  ) {
  }

  isOwner(): boolean {
    if (this.event.Meta?.agenda?.team) return true;
    return this.event?.Meta?.agenda?.user?.id === this._authService.user.id;
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
