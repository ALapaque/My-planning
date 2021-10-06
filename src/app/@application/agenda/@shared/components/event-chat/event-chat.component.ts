import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NbChatComponent, NbJSThemeVariable, NbThemeService} from '@nebular/theme';
import {Comment} from '../../../../../@shared/models/comment.model';
import {Event} from '../../../../../@shared/models/event.model';
import {AuthService} from '../../../../../@shared/services/auth.service';
import {SchedulerEvent} from '../../models/scheduler-event.model';

@Component({
  selector: 'app-event-chat',
  templateUrl: './event-chat.component.html',
  styleUrls: ['./event-chat.component.scss']
})
export class EventChatComponent implements AfterViewInit {
  @ViewChild('chat') nbChat: NbChatComponent;
  @Input() event: SchedulerEvent;
  @Output() sendMessage: EventEmitter<Comment> = new EventEmitter<Comment>();

  constructor(
    private _authService: AuthService,
  ) {
  }

  ngAfterViewInit(): void {
    if (this.nbChat) this.nbChat.scrollBottom = true;
  }

  isSameUser(id: number): boolean {
    return this._authService.user.id === id;
  }

  onSend(message: string): void {
    this.sendMessage.emit(new Comment(
      {
        content: message,
        event: Event.transformIntoEvent(this.event),
        user: this._authService.user
      }
    ));
  }
}
