import { AbstractEntity } from './abstract-entity.model';
import { CardSize } from './types/card-size-type';
import { CardType } from './types/card-type.type';
import { User } from './user.model';

export class Card implements AbstractEntity<number> {
  public id: number = 0;
  public type: CardType = null;
  public recap: boolean = false;
  public size: CardSize = null;
  public users: Array<User> = null;

  constructor(card?: Partial<Card>) {
    if (card) {
      Object.assign(this, card);

      if (card?.users?.length) this.users = card.users.map((user: User) => new User(user));
    } else {
      Object.create(this);
    }
  }
}
