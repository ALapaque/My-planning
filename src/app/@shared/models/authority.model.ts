import { AbstractEntity } from './abstract-entity.model';
import { Role } from './role.model';

export class Authority implements AbstractEntity<number> {
  public id: number = 0;
  public name: string = null;
  public roles: Array<Role> = null;

  constructor(authority?: Partial<Authority>) {
    if (authority) {
      Object.assign(this, authority);
    } else {
      Object.create(this);
    }
  }
}
