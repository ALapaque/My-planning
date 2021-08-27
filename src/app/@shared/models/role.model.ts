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

      if (role?.users?.length) this.users = role.users.map((user: User) => new User(user));
      if (role?.authorities?.length) this.authorities = role.authorities.map((authority: Authority) => new Authority(authority));
    } else {
      Object.create(this);
    }
  }
}
