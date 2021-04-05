import { Component, OnInit }                  from '@angular/core';
import { Location }                           from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    private _location: Location,
  ) {
  }

  ngOnInit(): void {
  }

  public navigatePrevious(): void {
    this._location.back();
  }

  public login(): void {

  }
}
