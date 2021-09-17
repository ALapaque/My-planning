import { AbstractEntity } from './abstract-entity.model';
import { Agenda } from './agenda.model';
import { Card } from './card.model';
import { Role } from './role.model';
import { Team } from './team.model';

export class User implements AbstractEntity<number> {
  public id: number = 0;
  public firstName: string = null;
  public lastName: string = null;
  public organization: string = null;
  public username: string = null;
  public email: string = null;
  public password: string = null;
  public role: Role = null;
  public comments: Array<Comment> = [];
  public agendas: Array<Agenda> = [];
  public teams: Array<Team> = [];
  public cards: Array<Card> = [];
  public sharedAgendas: Array<Agenda> = [];

  constructor(user?: Partial<User>) {
    if (user) {
      Object.assign(this, user);

      if (user?.role) this.role = new Role(user.role);
    } else {
      Object.create(this);
    }
  }

  public displayFormattedName(): string {
    return this.firstName + ' ' + this.lastName;
  }

}
