import { AbstractEntity } from './abstract-entity.model';
import { Authority } from './authority.model';
import { User } from './user.model';

export class Role implements AbstractEntity<number> {
  public id: number = 0;
  public name: string = null;
  public users: Array<User> = null;
  public authorities: Array<Authority> = null;

  constructor(role?: Partial<Role>) {
    if (role) {
      Object.assign(this, role);
    } else {
      Object.create(this);
    }
  }
}
