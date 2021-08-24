import { addHours, setDate } from 'date-fns';
import { AbstractEntity } from './abstract-entity.model';
import { Agenda } from './agenda.model';
import { EventStatus } from './enumeration/event-status.enum';
import { EventType } from './enumeration/event-type.enum';

export class Event implements AbstractEntity<number> {
  public id: number;
  public isADayOff: boolean = false;
  public isPrivate: boolean = false;
  public statusDisplayed: EventStatus = EventStatus.FREE;
  public eventType: EventType = EventType.APPOINTMENT;
  public startDate: string = new Date().toISOString();
  public endDate: string = addHours(new Date(), 1).toISOString();
  public meetingUrl: string = null;
  public report: string = null;
  public agenda: Agenda = null;
  public comments: Array<Comment> = null;
  public sharedAgenda: Array<Agenda> = null;

  constructor(event?: Partial<Event>) {
    if (event) {
      Object.assign(this, event);
    } else {
      Object.create(this);
    }
  }
}
