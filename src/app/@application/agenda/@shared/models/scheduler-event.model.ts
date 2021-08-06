import {Event} from '../../../@shared/models/Event.model';
import {addHours} from 'date-fns';

export class SchedulerEvent {
  public Id: number = 0;
  public Subject: string = '';
  public StartTime: string | Date = new Date();
  public EndTime: string | Date = addHours(new Date(), 1);
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
      }
    } else {
      Object.create(this);
    }
  }
}
