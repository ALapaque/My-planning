import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NbDialogService, NbMenuItem, NbMenuService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { filter, first, map, take, takeUntil, tap } from 'rxjs/operators';
import { Agenda } from '../../../../../../@shared/models/agenda.model';
import { NbDialogCustomService } from '../../../../../../@shared/services/nb-dialog-custom.service';
import { ConfirmDialogComponent } from '../../../../../../@shared/ui-components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-agenda-calendar-btn',
  templateUrl: './agenda-calendar-btn.component.html',
  styleUrls: [ './agenda-calendar-btn.component.scss' ]
})
export class AgendaCalendarBtnComponent implements OnInit, OnDestroy {
  @Input() agenda!: Agenda;
  @Input() index!: number;

  @Output() edit: EventEmitter<Agenda> = new EventEmitter<Agenda>();
  @Output() delete: EventEmitter<Agenda> = new EventEmitter<Agenda>();

  contextMenu: {
    tag: string,
    items: Array<NbMenuItem>
  } = {
    tag: '',
    items: []
  };

  private _destroy$: Subject<any> = new Subject<any>();

  constructor(
    private _nbMenuService: NbMenuService,
    private _nbDialogService: NbDialogService,
    private _nbDialogCustomService: NbDialogCustomService
  ) {
  }

  ngOnInit(): void {
    this._initMenuListeners();
    this.contextMenu = {
      tag: 'calendar-context-menu-' + this.index,
      items: [
        {
          title: 'Modifier',
          icon: 'edit-outline',
          data: this.agenda
        },
        {
          title: 'Supprimer',
          icon: 'trash-outline',
          data: this.agenda
        }
      ]
    };
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
  }

  private _initMenuListeners(): void {
    this._nbMenuService
      .onItemClick()
      .pipe(
        takeUntil(this._destroy$),
        tap(console.log),
        filter(({ tag }) => tag === this.contextMenu.tag),
        filter(({ item }) => item.icon === 'edit-outline'),
        map(({ item }) => item.data),
        tap((agenda: Agenda) => {
          console.log(agenda);
          this._editAgenda(agenda);
        })
      ).subscribe();

    this._nbMenuService
      .onItemClick()
      .pipe(
        takeUntil(this._destroy$),
        tap(console.log),
        filter(({ tag }) => tag === this.contextMenu.tag),
        filter(({ item }) => item.icon === 'trash-outline'),
        map(({ item }) => item.data),
        tap((agenda: Agenda) => this._deleteAgenda(agenda))
      ).subscribe();
  }

  private _editAgenda(agenda: Agenda): void {
    if (!agenda) return;
    console.log('_editAgenda');
    this.edit.emit(agenda);
  }

  private _deleteAgenda(agenda: Agenda): void {
    if (!agenda) return;

    this._nbDialogService
      .open(ConfirmDialogComponent,
        { dialogClass: this._nbDialogCustomService.isFullscreen })
      .onClose.subscribe((result: { confirmed: boolean }) => {
        if (!result.confirmed) return;
        this.delete.emit(agenda);
      }
    );
  }

}
