import { AbstractEntity } from './abstract-entity.model';
import { Agenda } from './agenda.model';
import { User } from './user.model';

export class Team implements AbstractEntity<number> {
  public id: number = 0;
  public name: string = null;
  public agendas: Array<Agenda> = null;
  public users: Array<User> = null;
  public sharedAgendas: Array<Agenda> = null;

  constructor(team?: Partial<Team>) {
    if (team) {
      Object.assign(this, team);
    } else {
      Object.create(this);
    }
  }
}
