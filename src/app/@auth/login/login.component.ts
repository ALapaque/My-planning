import { Component, OnInit, Self } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../@shared/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorStateMatcher } from '../../@shared/helpers/matchers/error-state-matcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
})
export class LoginComponent implements OnInit {

  public showPassword: boolean = false;
  public loginForm: FormGroup = new FormGroup(
    {
      usernameOrEmail: new FormControl(null, [ Validators.required ]),
      password: new FormControl(null, [ Validators.required ]),
    },
  );

  constructor(
    private _routerService: Router,
    private _location: Location,
    private _authService: AuthService,
    private _toastrService: ToastrService,
    private _jwtHelperService: JwtHelperService,
  ) {
  }

  ngOnInit(): void {
  }


  public login(): void {
    this._authService
      .login(this.loginForm.value)
      .subscribe(
        () => {
          this._toastrService.success('Bienvenue dans My-planning');
          this._routerService.navigate([ '/app' ]);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this._toastrService.error('Les informations saisies sont érronées');
          } else {
            this._toastrService.error('Une erreur est survenue');
          }
        }
      );
  }

  checkFieldForError(fieldName: string): boolean {
    return ErrorStateMatcher.checkField(fieldName, this.loginForm);
  }
}
