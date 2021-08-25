import { addHours, setDate } from 'date-fns';
import { SchedulerEvent } from '../../@application/agenda/@shared/models/scheduler-event.model';
import { AbstractEntity } from './abstract-entity.model';
import { Agenda } from './agenda.model';
import { EventStatus } from './types/event-status.type';
import { EventType } from './types/event-type.type';

export class Event implements AbstractEntity<number> {
  public id: number;
  public name: string = null;
  public adayOff: boolean = false;
  public isPrivate: boolean = false;
  public statusDisplayed: EventStatus = 'FREE';
  public eventType: EventType = 'APPOINTMENT';
  public startDate: string = new Date().toISOString();
  public endDate: string = addHours(new Date(), 1).toISOString();
  public meetingUrl: string = null;
  public report: string = null;
  public agenda: Agenda = null;
  public comments: Array<Comment> = null;
  public sharedAgendas: Array<Agenda> = null;

  constructor(event?: Partial<Event>) {
    if (event) {
      Object.assign(this, event);
    } else {
      Object.create(this);
    }
  }

  public transformIntoSchedulerEvent(): SchedulerEvent {
    return new SchedulerEvent({
      Description: this.name,
      Subject: this.name,
      CategoryColor: '#1aaa55',
      Id: this.id,
      StartTime: new Date(this.startDate),
      EndTime: new Date(this.endDate),
      Meta: this,
    });
  }
}
