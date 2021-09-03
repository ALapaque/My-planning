import {Event} from '../../../../@shared/models/event.model';
import * as moment from 'moment';;

export class SchedulerEvent {
  public Id: number = 0;
  public Subject: string = '';
  public StartTime: string = moment().toISOString(true);
  public EndTime: string = moment().add(1, 'hours').toISOString(true);
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
      PrimaryColor: event.eventType === 'MEETING' ? '#e3a73f' : '#5987bb',
      Meta: new Event(event),
    });
  }
}
