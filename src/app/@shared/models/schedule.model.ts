import { AbstractEntity } from './abstract-entity.model';
import { Agenda } from './agenda.model';

export class Schedule implements AbstractEntity<number> {
  public id: number = 0;
  public day: number = null;
  public startHour: string = '08:00';
  public endHour: string = '17:00';
  public hasBreak: boolean = true;
  public startBreak: string = '12:00';
  public endBreak: string = '13:00';
  public agenda: Agenda;

  constructor(schedule?: Partial<Schedule>) {
    if (schedule) {
      Object.assign(this, schedule);
    } else {
      Object.create(this);
    }
  }
}
