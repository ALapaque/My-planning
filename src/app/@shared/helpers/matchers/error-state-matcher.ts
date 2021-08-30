import {AbstractControl, FormGroup} from '@angular/forms';

export abstract class ErrorStateMatcher {
  static checkField(fieldName: string, form: FormGroup): boolean | undefined {
    const control: AbstractControl | null = form.get(fieldName);
    return control?.touched && control?.invalid;
  }
}
