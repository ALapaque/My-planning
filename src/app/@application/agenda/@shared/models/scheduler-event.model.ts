import {Event} from '../../../@shared/models/Event.model';

export interface SchedulerEvent {
  Id: number;
  Subject: string;
  StartTime: string | Date;
  EndTime: string | Date;
  Description?: string;
  CategoryColor?: string;
  PrimaryColor?: string;
  SecondaryColor?: string;
  Meta?: Event;
}
