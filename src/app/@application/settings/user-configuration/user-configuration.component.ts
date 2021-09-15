import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../../../@shared/models/user.model';
import { NbDialogCustomService } from '../../../@shared/services/nb-dialog-custom.service';
import { ConfirmDialogComponent } from '../../../@shared/ui-components/confirm-dialog/confirm-dialog.component';
import { UserDetailsComponent } from '../../@shared/components/user-details/user-details.component';
import { UserService } from '../../@shared/services/user.service';

@Component({
  selector: 'app-user-configuration',
  templateUrl: './user-configuration.component.html',
  styleUrls: [ './user-configuration.component.scss' ]
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
                  user: this.selectedUsers[0],
                },
                dialogClass: this._nbDialogCustomService.isFullscreen,
                closeOnEsc: true,
                closeOnBackdropClick: true
              });
        })
      )
      .subscribe();

  }

  addOrEdit(): void {

  }

  delete(): void {
    this._nbDialogService
      .open(ConfirmDialogComponent,
        { dialogClass: this._nbDialogCustomService.isFullscreen })
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

  private _refreshUsers(): void {
    this.users$ = this._userService.getUsers();
  }

  onCheckedChange($event: { checked: boolean; data: User }): void {
    const index: number = this.selectedUsers.findIndex((u: User) => u.id === $event.data.id);

    if (index !== -1 && !$event.checked) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push($event.data);
    }
  }
}
