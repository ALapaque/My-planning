import {Component, OnInit} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {User} from '../../../@shared/models/user.model';
import {AuthService} from '../../../@shared/services/auth.service';
import {NbDialogCustomService} from '../../../@shared/services/nb-dialog-custom.service';
import {ConfirmDialogComponent} from '../../../@shared/ui-components/confirm-dialog/confirm-dialog.component';
import {UserFormComponent} from '../@shared/components/form/user-form/user-form.component';
import {UserDetailsComponent} from '../@shared/components/user-details/user-details.component';
import {UserService} from '../../@shared/services/user.service';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styleUrls: ['./user-configuration.component.scss']
})
export class UserConfigurationComponent implements OnInit {
  users$: Observable<Array<User>>;
  selectedUsers: Array<User> = new Array<User>();

  constructor(
    private _userService: UserService,
    private _nbDialogService: NbDialogService,
    private _nbDialogCustomService: NbDialogCustomService,
    private _toastrService: ToastrService,
    private _translateService: TranslateService,
    private _authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this._refreshUsers();
  }

  details(): void {
    this._userService
      .getUser(this.selectedUsers[0].id)
      .pipe(
        tap((userComplete: User) => {
          this._nbDialogService
            .open(UserDetailsComponent,
              {
                context: {
                  // @ts-ignore
                  user: userComplete,
                },
                dialogClass: this._nbDialogCustomService.isFullscreen,
                closeOnEsc: true,
                closeOnBackdropClick: true
              });
        })
      )
      .subscribe();
  }

  addUser(): void {
    this._openForm(new User());
  }

  editUser(): void {
    if (!this.selectedUsers.length) return;
    this._userService
      .getUser(this.selectedUsers[0].id)
      .pipe(
        tap((userComplete: User) => {
          this._openForm(userComplete);
        })
      )
      .subscribe();
  }

  delete(): void {
    this._nbDialogService
      .open(ConfirmDialogComponent,
        {dialogClass: this._nbDialogCustomService.isFullscreen})
      .onClose
      .subscribe((result: { confirmed: boolean }) => {
        if (!result.confirmed) return;
        this._userService
          .delete(this.selectedUsers[0])
          .subscribe(
            (deleted: boolean) => {
              if (deleted) {
                this._toastrService.success(this._translateService.instant('APP.CONFIGURATION.TOASTR.SUCCESS.DELETE'));
              }
              this._refreshUsers();
            },
            () => this._toastrService.error(this._translateService.instant('APP.CONFIGURATION.TOASTR.ERROR.DELETE'))
          );
      });
  }

  onCheckedChange($event: { checked: boolean; data: User }): void {
    const index: number = this.selectedUsers.findIndex((u: User) => u.id === $event.data.id);

    if (index !== -1 && !$event.checked) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push($event.data);
    }
  }

  selfSelected(): boolean {
    return this.selectedUsers.findIndex((user: User) => user.id === this._authService.user.id) !== -1;
  }

  private _refreshUsers(): void {
    this.users$ = this._userService.getUsers().pipe(
      tap(() => this.selectedUsers = [])
    );
  }

  private _openForm(user: User): void {
    this._nbDialogService
      .open(UserFormComponent,
        {
          context: {
            user
          },
          dialogClass: this._nbDialogCustomService.isFullscreen
        })
      .onClose
      .subscribe((result: User) => {
        if (!result) return;
        this._refreshUsers();
      });
  }
}
