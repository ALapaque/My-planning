import {SchedulerEvent} from '../../@application/agenda/@shared/models/scheduler-event.model';
import {AbstractEntity} from './abstract-entity.model';
import {Agenda} from './agenda.model';
import {Comment} from './comment.model';
import {EventStatus} from './types/event-status.type';
import {EventType} from './types/event-type.type';
import * as moment from 'moment';

export class Event implements AbstractEntity<number> {
  public id: number = 0;
  public name: string = null;
  public dayOff: boolean = false;
  public privateEvent: boolean = false;
  public statusDisplayed: EventStatus = 'FREE';
  public eventType: EventType = 'APPOINTMENT';
  public startDate: string = moment().toISOString(false);
  public endDate: string = moment().add(1, 'hours').toISOString(false);
  public meetingUrl: string = null;
  public report: string = null;
  public agenda: Agenda = null;
  public comments: Array<Comment> = [];
  public sharedAgendas: Array<Agenda> = [];

  constructor(event?: Partial<Event>) {
    if (event) {
      Object.assign(this, event);
      this.agenda = new Agenda(event.agenda);
      if (event?.comments?.length) this.comments = event.comments.map((comment: Comment) => new Comment(comment));
      if (event?.sharedAgendas?.length) this.sharedAgendas = event.sharedAgendas.map((agenda: Agenda) => new Agenda(agenda));
    } else {
      Object.create(this);
    }
  }

  public static transformIntoEvent(schedulerEvent: SchedulerEvent): Event {
    return new Event({
      ...schedulerEvent.Meta,
      id: schedulerEvent.Id,
      startDate: schedulerEvent.StartTime,
      endDate: schedulerEvent.EndTime,
      name: schedulerEvent.Subject,
    });
  }
}
