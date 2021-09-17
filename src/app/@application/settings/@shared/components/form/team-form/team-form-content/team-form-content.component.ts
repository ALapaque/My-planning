import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { of, Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { ErrorStateMatcher } from '../../../../../../../@shared/helpers/matchers/error-state-matcher';
import { Team } from '../../../../../../../@shared/models/team.model';
import { User } from '../../../../../../../@shared/models/user.model';
import { AuthService } from '../../../../../../../@shared/services/auth.service';
import { UserService } from '../../../../../../@shared/services/user.service';

@Component({
  selector: 'app-team-form-content',
  templateUrl: './team-form-content.component.html',
  styleUrls: [ './team-form-content.component.scss' ]
})
export class TeamFormContentComponent implements OnInit, OnDestroy {
  @Input() team!: Team;
  @Input() form!: FormGroup;

  private _destroy$: Subject<any> = new Subject();

  constructor(
    private _userService: UserService,
    private _toastrService: ToastrService,
    private _translateService: TranslateService,
    private _authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  checkFieldForError(fieldName: string): boolean | undefined {
    return ErrorStateMatcher.checkField(fieldName, this.form);
  }

  getUsers(): Array<User> {
    return this.form.value.users;
  }

  onUserRemove({ text }: NbTagComponent): void {
    const users: Array<User> = this.form.value.users;
    const index: number = users.findIndex((u: User) => u.email === text);

    if (index !== -1) {
      users.splice(index, 1);
      this.form.patchValue({ users });
    }
  }

  onUserAdd({ value, input }: NbTagInputAddEvent): void {
    console.log(value);
    if (value) {
      const users: Array<User> = this.form.value.users;
      this._userService.getUser(value)
        .pipe(
          takeUntil(this._destroy$),
          tap((user: User) => {
            if (users.findIndex((u: User) => u.id === user.id) === -1) {
              users.push(user);
              this.form.patchValue({ users });
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
    }
  }

  isCurrentUser(user: User): boolean {
    return this._authService.user.id === user.id;

  }
}
