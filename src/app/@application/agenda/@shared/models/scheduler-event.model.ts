import { addHours } from 'date-fns';
import { Event } from '../../../../@shared/models/event.model';

export class SchedulerEvent {
  public Id: number = 0;
  public Subject: string = '';
  public StartTime: string = new Date().toISOString();
  public EndTime: string = addHours(new Date(), 1).toISOString();
  public Description?: string;
  public CategoryColor?: string;
  public PrimaryColor?: string;
  public SecondaryColor?: string;
  public Meta?: Event;

  constructor(schedulerEvent?: Partial<SchedulerEvent>) {
    if (schedulerEvent) {
      Object.assign(this, schedulerEvent);
      if (schedulerEvent.Meta) {
        this.Meta = new Event(schedulerEvent.Meta);
        this.Meta.startDate = this.StartTime;
        this.Meta.endDate = this.EndTime;
      }
    } else {
      Object.create(this);
    }
  }
}
