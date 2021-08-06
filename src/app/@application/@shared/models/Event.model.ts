import {addHours} from 'date-fns';

export type EventType = 'MEETING' | 'TASK';
export type EventStatus = 'BUSY' | 'FREE';

export class Event {
  public idEvent: number = 0;
  public title: string = '';
  public isADayOff: boolean = false;
  public isPrivate: boolean = false;
  public statusDisplayed: EventStatus = 'BUSY';
  public eventType: EventType = 'MEETING';
  public startDate: string | Date = new Date();
  public endDate: string | Date = addHours(new Date(), 1);
  public meetingUrl?: string;
  public report?: string;

  constructor(event?: Partial<Event>) {
    if (event) {
      Object.assign(this, event);
    } else {
      Object.create(this);
    }
  }
}
