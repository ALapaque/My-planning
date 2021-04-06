import { Component, OnInit }                  from '@angular/core';
import { Location }                           from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';
import { NbToastrService }                    from '@nebular/theme';
import { AuthService }                        from '../../@shared/services/auth.service';

@Component({
             selector: 'app-login',
             templateUrl: './login.component.html',
             styleUrls: [ './login.component.scss' ],
           })
export class LoginComponent implements OnInit {

  public showPassword: boolean = false;
  public loginForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [ Validators.required ]),
      password: new FormControl(null, [ Validators.required ]),
    },
  );

  constructor(
    private _routerService: Router,
    private _location: Location,
    private _authService: AuthService,
    private _toastrService: NbToastrService,
  ) {
  }

  ngOnInit(): void {
  }

  public navigatePrevious(): void {
    this._location.back();
  }

  public login(): void {
    this._authService.login(this.loginForm.value).subscribe(
      () => {
        this._routerService.navigate(['/app']);
        this._toastrService.warning('Bienvenue dans My-planning');
      },
      () => {
        this._toastrService.danger('Une erreur est survenue');
      }
    );
  }
}
