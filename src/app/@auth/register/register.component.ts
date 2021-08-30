import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidators } from '../../@shared/helpers/validators/password-validators';
import { ErrorStateMatcher } from '../../@shared/helpers/matchers/error-state-matcher';
import { AuthService } from '../../@shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {

  public showPassword: boolean = false;
  public registerForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [ Validators.required ]),
      email: new FormControl(null, [ Validators.required, Validators.email ]),
      firstName: new FormControl(null, [ Validators.required ]),
      lastName: new FormControl(null, [ Validators.required ]),
      password: new FormControl(null, [ Validators.required, Validators.minLength(1) ]),
      confirmPassword: new FormControl(null, [ Validators.required, Validators.minLength(1) ])
    },
    [ PasswordValidators.passwordMatch() ]
  );

  constructor(
    private _location: Location,
    private _authService: AuthService,
    private _toastrService: ToastrService,
    private _router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  public navigatePrevious(): void {
    this._location.back();
  }

  public register(): void {
    this._authService.register(this.registerForm.value).subscribe(
      () => {
        this._toastrService.success('Votre compte a été créé');
        this._router.navigate([ '/auth/login' ]);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this._toastrService.error('Nom d\'utilisateur ou email, déjà existant');
        } else {
          this._toastrService.error('Une erreur est survenue');
        }
      }
    );
  }

  checkFieldForError(fieldName: string): boolean | undefined {
    return ErrorStateMatcher.checkField(fieldName, this.registerForm);
  }
}
