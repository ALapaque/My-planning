import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, map, takeUntil, tap } from 'rxjs/operators';
import { Card } from '../../../@shared/models/card.model';
import { Event } from '../../../@shared/models/event.model';
import { CardService } from '../../@shared/services/card.service';

@Component({
  selector: 'app-recap-card',
  templateUrl: './recap-card.component.html',
  styleUrls: [ './recap-card.component.scss' ]
})
export class RecapCardComponent implements OnInit {
  @Input() card!: Card;
  content$: Observable<number>;
  contentLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private _cardService: CardService,
  ) {
  }

  ngOnInit(): void {
    this.content$ = this._cardService.getRecapIncoming(this.card.type).pipe(
      map((events: Array<Event>) => events.length)
    ).pipe(
      tap(() => this.contentLoading$.next(false)),
      catchError(e => {
        this.contentLoading$.next(false);
        return of(null);
      })
    );
  }
}
