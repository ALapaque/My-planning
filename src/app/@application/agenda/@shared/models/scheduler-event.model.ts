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
        this.Meta.startDate = this.StartTime.toString();
        this.Meta.endDate = this.EndTime.toString();
      }
    } else {
      Object.create(this);
    }
  }

  public static transformIntoSchedulerEvent(event: Event): SchedulerEvent {
    return new SchedulerEvent({
      Description: event.name,
      Subject: event.name,
      CategoryColor: '#1aaa55',
      Id: event.id,
      StartTime: event.startDate,
      EndTime: event.endDate,
      Meta: new Event(event),
    });
  }
}
