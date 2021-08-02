import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../@shared/helpers/validators/custom-validators';
import {ErrorStateMatcher} from '../../@shared/helpers/error-state-matcher/error-state-matcher';
import {AuthService} from '../../@shared/services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public showPassword: boolean = false;
  public registerForm: FormGroup = new FormGroup(
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
    private _authService: AuthService,
    private _toastrService: ToastrService,
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
      },
      (error: HttpErrorResponse) => {
        this._toastrService.error('Une erreur est survenue');
      }
    );
  }

  checkFieldForError(fieldName: string): boolean | undefined {
    return ErrorStateMatcher.checkField(fieldName, this.registerForm);
  }
}
