import { AbstractEntity } from './abstract-entity.model';
import { User } from './user.model';

export class Comment implements AbstractEntity<number> {
  public id: number = 0;
  public content: string = null;
  public user: User = null;
  public event: Event = null;

  constructor(comment?: Partial<Comment>) {
    if (comment) {
      Object.assign(this, comment);
    } else {
      Object.create(this);
    }
  }
}
