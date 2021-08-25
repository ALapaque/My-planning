import { AbstractEntity } from './abstract-entity.model';
import { Agenda } from './agenda.model';
import { Card } from './card.model';
import { Role } from './role.model';
import { Team } from './team.model';

export class User implements AbstractEntity<number> {
  public id: number = 0;
  public firstName: string = null;
  public lastName: string = null;
  public username: string = null;
  public email: string = null;
  public password: string = null;
  public role: Role = null;
  public comments: Array<Comment> = null;
  public agendas: Array<Agenda> = null;
  public teams: Array<Team> = null;
  public cards: Array<Card> = null;
  public sharedAgendas: Array<Agenda> = null;

  constructor(user?: Partial<User>) {
    if (user) {
      Object.assign(this, user);
    } else {
      Object.create(this);
    }
  }
}
