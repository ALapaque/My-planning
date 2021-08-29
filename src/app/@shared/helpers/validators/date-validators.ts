import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {isBefore} from 'date-fns';

export abstract class DateValidators {
  static validateDate(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const startDate: Date = new Date(form.get('startDate').value);
      const endDate: Date = new Date(form.get('endDate').value);

      console.log(isBefore(startDate, endDate));
      if (isBefore(startDate, endDate)) {
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
