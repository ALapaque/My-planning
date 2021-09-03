import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import * as moment from 'moment';;

export abstract class DateValidators {
  static validateDate(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const startDate: Date = new Date(form.get('startDate').value);
      const endDate: Date = new Date(form.get('endDate').value);

      form.get('startDate').markAsTouched();
      form.get('endDate').markAsTouched();

      if (moment(startDate).isBefore(endDate)) {
        form.get('startDate').setErrors(null);
        form.get('endDate').setErrors(null);
        return null;
      } else {
        form.get('startDate').setErrors({incorrectDate: true});
        form.get('endDate').setErrors({incorrectDate: true});
        return {incorrectDate: true};
      }
    };
  }
}
