import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, map, takeUntil, tap } from 'rxjs/operators';
import { Event } from '../../../../@shared/models/event.model';
import { CardType } from '../../../../@shared/models/types/card-type.type';
import { CardService } from '../../../@shared/services/card.service';
import * as moment from 'moment';;

@Component({
  selector: 'app-event-card-content',
  templateUrl: './event-card-content.component.html',
  styleUrls: [ './event-card-content.component.scss' ]
})
export class EventCardContentComponent implements OnInit {
  @Input() type!: CardType;
  public content$: Observable<Array<Event>>;
  public contentLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private _cardService: CardService,
  ) {
  }

  ngOnInit(): void {
    this.content$ = this._cardService.getNormalIncoming(this.type).pipe(
      tap(() => this.contentLoading$.next(false)),
      catchError(e => {
        this.contentLoading$.next(false);
        return of([]);
      })
    );
  }

  public isInProgress(event: Event): boolean {
    return moment(event.startDate).isBefore(new Date());
  }
}
