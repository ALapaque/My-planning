import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Card } from '../../../@shared/models/card.model';

@Injectable()
export class CardService {
  private _baseUrl: string = '/card';

  constructor(
    private _http: HttpClient,
  ) {
  }

  public getCards(): Observable<Array<Card>> {
    return this._http.get<Array<Card>>(`${ environment.apiUrl }${ this._baseUrl }`).pipe(
      map((cards: Array<Card>) => cards.map((card: Card) => new Card(card)))
    );
  }

  public getUserCards(userId: number): Observable<Array<Card>> {
    return this._http.get<Array<Card>>(`${ environment.apiUrl }${ this._baseUrl }/user/${ userId.toString(10) }`).pipe(
      map((cards: Array<Card>) => cards.map((card: Card) => new Card(card)))
    );
  }
}
