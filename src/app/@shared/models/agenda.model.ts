import { AbstractEntity } from './abstract-entity.model';
import { Event } from './event.model';
import { Schedule } from './schedule.model';
import { Team } from './team.model';
import { User } from './user.model';

export class Agenda implements AbstractEntity<number> {
  public id: number = 0;
  public name: string = null;
  public color: string = '#de5c08';
  public user: User = null;
  public team: Team = null;
  public events: Array<Event> = null;
  public schedules: Array<Schedule> = null;
  public sharedEvents: Array<Event> = null;
  public sharedUsers: Array<User> = null;
  public sharedTeams: Array<Team> = null;

  constructor(agenda?: Partial<Agenda>) {
    if (agenda) {
      Object.assign(this, agenda);

      if (agenda?.user) this.user = new User(agenda.user);
      if (agenda?.team) this.team = new Team(agenda.team);
      if (agenda?.events?.length) this.events = agenda.events.map((event: Event) => new Event(event));
      if (agenda?.schedules?.length) this.schedules = agenda.schedules.map((schedules: Schedule) => new Schedule(schedules));
      if (agenda?.sharedEvents?.length) this.sharedEvents = agenda.sharedEvents.map((sharedEvent: Event) => new Event(sharedEvent));
      if (agenda?.sharedUsers?.length) this.sharedUsers = agenda.sharedUsers.map((sharedUser: User) => new User(sharedUser));
      if (agenda?.sharedTeams?.length) this.sharedTeams = agenda.sharedTeams.map((sharedTeam: Team) => new Team(sharedTeam));
    } else {
      Object.create(this);
    }
  }
}
