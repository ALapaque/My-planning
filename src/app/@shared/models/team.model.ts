import { AbstractEntity } from './abstract-entity.model';
import { Agenda } from './agenda.model';
import { User } from './user.model';

export class Team implements AbstractEntity<number> {
  public id: number = 0;
  public name: string = '';
  public agendas: Array<Agenda> = null;
  public users: Array<User> = null;
  public sharedAgendas: Array<Agenda> = null;

  constructor(team?: Partial<Team>) {
    if (team) {
      Object.assign(this, team);

      if (team?.agendas?.length) this.agendas = team.agendas.map((agenda: Agenda) => new Agenda(agenda));
      if (team?.users?.length) this.users = team.users.map((user: User) => new User(user));
      if (team?.sharedAgendas?.length) this.sharedAgendas = team.sharedAgendas.map((sharedAgenda: Agenda) => new Agenda(sharedAgenda));
    } else {
      Object.create(this);
    }
  }
}
