import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../@shared/helpers/validators/custom-validators';
import {ErrorStateMatcher} from '../../@shared/helpers/error-state-matcher/error-state-matcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public showPassword: boolean = false;
  public loginForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(1)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(1)])
    },
    [CustomValidators.passwordMatch()]
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

  checkFieldForError(fieldName: string): boolean | undefined {
    return ErrorStateMatcher.checkField(fieldName, this.loginForm);
  }
}
