import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { RightMenuService } from '../@shared/services/right-menu.service';

@Component({
  selector: 'app-agenda-container',
  templateUrl: './agenda-container.component.html',
  styleUrls: [ './agenda-container.component.scss' ],
})
export class AgendaContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  expanded: boolean = false;

  private _destroy$: Subject<any> = new Subject();

  constructor(
    private _nbSidebarService: NbSidebarService,
    private _rightMenuService: RightMenuService,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this._rightMenuService
      .expanded$
      .pipe(
        takeUntil(this._destroy$)
      ).subscribe((expanded: boolean) => this.expanded = expanded);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._rightMenuService.expanded$.next(false);
  }

}
