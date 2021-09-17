import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

/**
 * password validator check if the confirm password matches
 */
export abstract class PasswordValidators {
  static passwordMatch(): ValidatorFn {
    // @ts-ignore
    return (group: FormGroup): ValidationErrors | null => {
      const password: string = group.value.password;
      const confirmPassword: string = group.value.confirmPassword;

      if (!password && !confirmPassword) return null;


      if (password !== confirmPassword) {
        group.get('password')?.setErrors({passwordNoMatch: true});
        group.get('confirmPassword')?.setErrors({passwordNoMatch: true});
        return {passwordNoMatch: true};
      }
      group.get('password')?.setErrors(null);
      group.get('confirmPassword')?.setErrors(null);

      return null;
    };
  }
}
