import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {catchError, map, takeUntil, tap} from 'rxjs/operators';
import {Event} from '../../../../@shared/models/event.model';
import {CardType} from '../../../../@shared/models/types/card-type.type';
import {CardService} from '../../../@shared/services/card.service';
import * as moment from 'moment';
import {SchedulerEvent} from '../../../agenda/@shared/models/scheduler-event.model';
import {EventService} from '../../../@shared/services/event.service';
import {AgendaHelperService} from '../../../agenda/@shared/services/agenda-helper.service';

@Component({
  selector: 'app-event-card-content',
  templateUrl: './event-card-content.component.html',
  styleUrls: ['./event-card-content.component.scss']
})
export class EventCardContentComponent implements OnInit, OnDestroy {
  @Input() type!: CardType;
  public content$: Observable<Array<Event>>;
  public contentLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private _destroy$: Subject<any> = new Subject();

  constructor(
    private _cardService: CardService,
  ) {
  }

  ngOnInit(): void {
    this._initContent();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  public isInProgress(event: Event): boolean {
    return moment(event.startDate).isBefore(new Date());
  }

  private _initContent(): void {
    this.content$ = this._cardService
      .getNormalIncoming(this.type)
      .pipe(
        tap(() => this.contentLoading$.next(false)),
        catchError(e => {
          this.contentLoading$.next(false);
          return of([]);
        })
      );
  }
}
