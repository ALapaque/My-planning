import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Card } from '../../../@shared/models/card.model';
import { Event } from '../../../@shared/models/event.model';
import { CardService } from '../../@shared/services/card.service';

@Component({
  selector: 'app-recap-card',
  templateUrl: './recap-card.component.html',
  styleUrls: [ './recap-card.component.scss' ]
})
export class RecapCardComponent implements OnInit, OnDestroy {
  @Input() card!: Card;
  public content: number;
  public contentLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private destroy$: Subject<any> = new Subject<any>();

  constructor(
    private _cardService: CardService,
  ) {
  }

  ngOnInit(): void {

    this._cardService.getContentIncoming(this.card.type).pipe(
      takeUntil(this.destroy$),
      map((events: Array<Event>) => events.length)
    ).subscribe(
      (content: number) => {
        this.content = content;
        this.contentLoading$.next(false);
      },
      () => {
        this.contentLoading$.next(false);
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
