import { AbstractEntity } from './abstract-entity.model';
import { Role } from './role.model';

export class Authority implements AbstractEntity<number> {
  public id: number = 0;
  public name: string = null;
  public roles: Array<Role> = null;

  constructor(authority?: Partial<Authority>) {
    if (authority) {
      Object.assign(this, authority);

      if (authority?.roles?.length) this.roles = authority.roles.map((role: Role) => new Role(role));
    } else {
      Object.create(this);
    }
  }
}
