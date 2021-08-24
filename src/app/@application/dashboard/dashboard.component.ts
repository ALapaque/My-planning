import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../../@shared/models/card.model';
import { CardType } from '../../@shared/models/enumeration/card-type.enum';
import { AuthService } from '../../@shared/services/auth.service';
import { CardService } from '../@shared/services/card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  public cards$: Observable<Array<Card>> = of(new Array(
    new Card({ cardType: CardType.MEETING, id: 1, isRecap: true, }),
    new Card({ cardType: CardType.MEETING, id: 2, isRecap: true }),
    new Card({ cardType: CardType.MEETING, id: 3 }),
    new Card({ cardType: CardType.MEETING, id: 4 }),
    new Card({ cardType: CardType.MEETING, id: 5 }),
    new Card({ cardType: CardType.MEETING, id: 6 }),
    new Card({ cardType: CardType.MEETING, id: 7 }),
    new Card({ cardType: CardType.MEETING, id: 8 }),
    new Card({ cardType: CardType.MEETING, id: 9 }),
    new Card({ cardType: CardType.MEETING, id: 10 }),
    new Card({ cardType: CardType.MEETING, id: 11 }),
    new Card({ cardType: CardType.MEETING, id: 12 }),
    new Card({ cardType: CardType.MEETING, id: 13 }),
    new Card({ cardType: CardType.MEETING, id: 14 }),
    new Card({ cardType: CardType.MEETING, id: 12 }),
  ));

  constructor(
    private _cardService: CardService,
    private _authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    // this.cards$ = this._cardService.getUserCards(this._authService.user.id);
  }

  getRecapCards(cards: Array<Card>): Array<Card> {
    return cards.filter((card: Card) => card.isRecap);
  }

  getNormalCards(cards: Array<Card>): Array<Card> {
    return cards.filter((card: Card) => !card.isRecap);
  }
}
