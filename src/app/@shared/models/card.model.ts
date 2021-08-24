import { AbstractEntity } from './abstract-entity.model';
import { CardType } from './enumeration/card-type.enum';
import { User } from './user.model';

export class Card implements AbstractEntity<number> {
  public id: number = 0;
  public cardType: CardType = null;
  public isRecap: boolean = false;
  public users: Array<User> = null;

  constructor(card?: Partial<Card>) {
    if (card) {
      Object.assign(this, card);
    } else {
      Object.create(this);
    }
  }
}
