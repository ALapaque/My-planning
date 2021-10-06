import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../../../../@shared/models/user.model';
import { AuthService } from '../../../../../../@shared/services/auth.service';
import { UserService } from '../../../../../@shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.scss' ]
})
export class UserFormComponent implements AfterViewInit {
  @Input() user!: User;
  form: FormGroup = new FormGroup({
    id: new FormControl(0, [ Validators.required ]),
    firstName: new FormControl(null, [ Validators.required ]),
    lastName: new FormControl(null, [ Validators.required ]),
    organization: new FormControl({ value: null, disabled: true }, [ Validators.required ]),
    username: new FormControl({ value: null, disabled: true }, [ Validators.required ]),
    email: new FormControl(null, [ Validators.required, Validators.email ]),
    password: new FormControl(''),
    role: new FormControl(null, [ Validators.required ]),
    teams: new FormControl([], [ Validators.required, Validators.minLength(1) ])
  });

  constructor(
    public dialogRef: NbDialogRef<UserFormComponent>,
    private _userService: UserService,
    private _toastrService: ToastrService,
    private _translateService: TranslateService,
    private _authService: AuthService,
  ) {
  }

  ngAfterViewInit(): void {
    this._initForm();
  }

  submit(): void {
    this._userService
      .save(new User({
        ...this.user,
        id: this.form.value.id,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        organization: this.form.get('organization').value,
        username: this.form.get('username').value,
        email: this.form.value.email,
        password: this.form.value.password,
        role: this.form.value.role,
        teams: this.form.value.teams,
      }))
      .subscribe(
        (user: User) => {
          if (!user) return this.dialogRef.close();
          this._toastrService.success(this._translateService.instant('APP.CONFIGURATION.TOASTR.SUCCESS.SAVE'));
          this.dialogRef.close(user);
        },
        () => this._toastrService.success(this._translateService.instant('APP.CONFIGURATION.TOASTR.ERRORS.SAVE'))
      );
  }

  private _initForm(): void {
    this.form.patchValue({
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      organization: this._authService.user.organization,
      username: this.user.username,
      email: this.user.email,
      role: this.user.role,
      teams: this.user.teams,
    });
    if (!this.user?.id) {
      this.form.get('username').enable();
    }
  }
}
