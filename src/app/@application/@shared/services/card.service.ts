import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { generateCompleteUrl } from '../../../../environments/environment';
import { Card } from '../../../@shared/models/card.model';
import { Event } from '../../../@shared/models/event.model';
import { CardType } from '../../../@shared/models/types/card-type.type';
import { AuthService } from '../../../@shared/services/auth.service';
import * as moment from 'moment';

@Injectable()
export class CardService {
  private _baseUrl: string = generateCompleteUrl() + '/card';

  constructor(
    private _http: HttpClient,
    private _authService: AuthService,
  ) {
  }

  getCards(): Observable<Array<Card>> {
    return this._http.get<Array<Card>>(`${ this._baseUrl }`).pipe(
      map((cards: Array<Card>) => cards.map((card: Card) => new Card(card)))
    );
  }

  getUserCards(): Observable<Array<Card>> {
    return this._http.get<Array<Card>>(`${ this._baseUrl }/user/${ this._authService.user.id.toString(10) }`).pipe(
      map((cards: Array<Card>) => cards.map((card: Card) => new Card(card)))
    );
  }

  /**
   * will get the card content for the recap cards
   * @param cardType
   */
  getRecapIncoming(cardType: CardType): Observable<Array<Event>> {
    const params: HttpParams = new HttpParams()
      .set('userId', this._authService.user.id.toString(10))
      .set('type', cardType)
      .set('start', moment().toISOString(false))
      .set('end', moment().endOf('day').toISOString(false));

    return this._getEventsIncoming(params);
  }

  /**
   * will get the card content for the normal cards
   * @param cardType
   */
  getNormalIncoming(cardType: CardType): Observable<Array<Event>> {
    const params: HttpParams = new HttpParams()
      .set('userId', this._authService.user.id.toString(10))
      .set('type', cardType)
      .set('start', moment().startOf('day').toISOString(false))
      .set('end', moment().endOf('day').toISOString(false));

    return this._getEventsIncoming(params);
  }

  private _getEventsIncoming(params: HttpParams): Observable<Array<Event>> {
    return this._http.get<Array<Event>>(`${ this._baseUrl }/incoming`, { params }).pipe(
      map((events: Array<Event>) => events.map((event: Event) => new Event(event)))
    );
  }
}
