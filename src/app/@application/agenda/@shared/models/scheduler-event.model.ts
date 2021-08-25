import { addHours } from 'date-fns';
import { Event } from '../../../../@shared/models/event.model';

export class SchedulerEvent {
  public Id: number = 0;
  public Subject: string = '';
  public StartTime: Date | string = new Date().toISOString();
  public EndTime: Date | string = addHours(new Date(), 1).toISOString();
  public Description?: string;
  public CategoryColor?: string;
  public PrimaryColor?: string;
  public SecondaryColor?: string;
  public Meta?: Partial<Event>;

  constructor(schedulerEvent?: Partial<SchedulerEvent>) {
    if (schedulerEvent) {
      Object.assign(this, schedulerEvent);
      if (schedulerEvent.Meta) {
        this.Meta = new Event(schedulerEvent.Meta);
        this.Meta.startDate = this.StartTime.toString();
        this.Meta.endDate = this.EndTime.toString();
      }
    } else {
      Object.create(this);
    }
  }
}
