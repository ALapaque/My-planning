import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbStepperComponent, NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { CompareStateMatcher } from '../../../../../../../@shared/helpers/matchers/compare-state-matcher';
import { ErrorStateMatcher } from '../../../../../../../@shared/helpers/matchers/error-state-matcher';
import { Agenda } from '../../../../../../../@shared/models/agenda.model';
import { Team } from '../../../../../../../@shared/models/team.model';
import { User } from '../../../../../../../@shared/models/user.model';
import { AuthService } from '../../../../../../../@shared/services/auth.service';
import { TeamService } from '../../../../../../@shared/services/team.service';
import { UserService } from '../../../../../../@shared/services/user.service';

@Component({
  selector: 'app-agenda-form-content',
  templateUrl: './agenda-form-content.component.html',
  styleUrls: [ './agenda-form-content.component.scss' ]
})
export class AgendaFormContentComponent implements OnInit, OnDestroy {
  @ViewChild('stepper') public nbStepper: NbStepperComponent;
  @ViewChild('colorInput') public colorInput: HTMLInputElement;
  @Input() public agenda!: Agenda;
  @Input() public form!: FormGroup;

  teams$: Observable<Array<Team>>;

  private _destroy$: Subject<any> = new Subject<any>();

  compareFn = (o1: any, o2: any) => CompareStateMatcher.compareWith(o1, o2);

  constructor(
    public breakpointObserver: BreakpointObserver,
    private _userService: UserService,
    private _teamService: TeamService,
    private _toastrService: ToastrService,
    private _translateService: TranslateService,
    private _authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.teams$ = this._teamService.getUsersTeams();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  checkFieldForError(fieldName: string): boolean | undefined {
    return ErrorStateMatcher.checkField(fieldName, this.form);
  }

  getSharedUsers(): Array<User> {
    return this.form.value.sharedUsers;
  }

  onSharedUserRemove({ text }: NbTagComponent): void {
    const sharedUsers: Array<User> = this.form.value.sharedUsers;
    const index: number = sharedUsers.findIndex((u: User) => u.email === text);

    if (index !== -1) {
      sharedUsers.splice(index, 1);
      this.form.patchValue({ sharedUsers });
    }
  }

  onSharedUserAdd({ value, input }: NbTagInputAddEvent): void {
    if (value && value !== this._authService.user.username) {
      const sharedUsers: Array<User> = this.form.value.sharedUsers;
      this._userService.getUser(value)
        .pipe(
          takeUntil(this._destroy$),
          tap((user: User) => {
            if (sharedUsers.findIndex((u: User) => u.id === user.id) === -1) {
              sharedUsers.push(user);
              this.form.patchValue({ sharedUsers });
            } else {
              this._toastrService.error(this._translateService.instant('APP.AGENDA.TOASTR.ERROR.ALREADY_IN'));
            }
            input.nativeElement.value = '';
          }),
          catchError((e) => {
            this._toastrService.error(this._translateService.instant('APP.AGENDA.TOASTR.ERROR.NOT_FOUND'));
            return of(e);
          })
        ).subscribe();
    } else {
      this._toastrService.error(this._translateService.instant('APP.AGENDA.TOASTR.ERROR.NOT_ALLOWED'));
    }
  }

  onColorChange(color: string): void {
    this.form.patchValue({ color });
  }

  isCurrentUser(user: User): boolean {
    return this._authService.user.id === user.id;
  }
}
