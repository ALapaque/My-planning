import { AbstractEntity } from './abstract-entity.model';
import { Schedule } from './schedule.model';
import { Team } from './team.model';
import { User } from './user.model';

export class Agenda implements AbstractEntity<number> {
  public id: number = 0;
  public name: string = null;
  public user: User = null;
  public team: Team = null;
  public events: Array<Event> = null;
  public schedules: Array<Schedule> = null;
  public sharedEvents: Array<Event> = null;
  public sharedUsers: Array<User> = null;
  public sharedTeams: Array<Team> = null;

  constructor(agenda?: Partial<Agenda>) {
    if(agenda) {
      Object.assign(this, agenda);
    } else {
      Object.create(this);
    }
  }
}
