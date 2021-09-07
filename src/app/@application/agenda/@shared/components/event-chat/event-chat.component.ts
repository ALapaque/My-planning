import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbJSThemeVariable, NbThemeService } from '@nebular/theme';
import { Comment } from '../../../../../@shared/models/comment.model';
import { Event } from '../../../../../@shared/models/event.model';
import { AuthService } from '../../../../../@shared/services/auth.service';
import { SchedulerEvent } from '../../models/scheduler-event.model';

@Component({
  selector: 'app-event-chat',
  templateUrl: './event-chat.component.html',
  styleUrls: [ './event-chat.component.scss' ]
})
export class EventChatComponent implements OnInit {

  @Input() event: SchedulerEvent;
  @Output() sendMessage: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor(
    private _authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  isSameUser(id: number) {
    return this._authService.user.id === id;
  }

  onSend(message: string) {
    this.sendMessage.emit(new Comment(
      {
        content: message,
        event: Event.transformIntoEvent(this.event),
        user: this._authService.user
      }
    ));
  }
}
