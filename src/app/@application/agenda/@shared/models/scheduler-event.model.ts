import {addHours} from 'date-fns';
import {Event} from '../../../../@shared/models/event.model';

export class SchedulerEvent {
  public Id: number = 0;
  public Subject: string = '';
  public StartTime: string = new Date().toISOString();
  public EndTime: string = addHours(new Date(), 1).toISOString();
  public Description?: string;
  public CategoryColor?: string;
  public PrimaryColor: string = '#1aaa7f';
  public SecondaryColor: string = '#aa811a'; // AGENDA BORDER COLOR
  public Meta?: Event;

  constructor(schedulerEvent?: Partial<SchedulerEvent>) {
    if (schedulerEvent) {
      Object.assign(this, schedulerEvent);
      if (schedulerEvent.Meta) {
        this.Meta = new Event(schedulerEvent.Meta);
        this.Meta.startDate = this.StartTime.toString();
        this.Meta.endDate = this.EndTime.toString();
      } else {
        this.Meta = new Event();
      }
    } else {
      Object.create(this);
    }
  }

  public static transformIntoSchedulerEvent(event: Event): SchedulerEvent {
    return new SchedulerEvent({
      Description: null,
      Subject: event.name,
      Id: event.id,
      StartTime: event.startDate,
      EndTime: event.endDate,
      SecondaryColor: event.agenda.color,
      Meta: new Event(event),
    });
  }
}
