import { Location }                           from '@angular/common';
import { Component, OnInit }                  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
