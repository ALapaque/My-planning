import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../@shared/models/card.model';
import { CardService } from '../@shared/services/card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  public cards$: Observable<Array<Card>>;

  constructor(
    private _cardService: CardService,
  ) {
  }

  ngOnInit(): void {
    this.cards$ = this._cardService.getUserCards();
  }

  getRecapCards(cards: Array<Card>): Array<Card> {
    return cards.filter((card: Card) => card.recap);
  }

  getGiantCards(cards: Array<Card>): Array<Card> {
    return cards.filter((card: Card) => (!card.recap && card.size === 'giant'));
  }
}
