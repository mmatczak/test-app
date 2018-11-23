// copied from Angular's Validators
import { AbstractControl, ValidationErrors } from '@angular/forms';

function isEmptyInputValue(value) {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

export class MyAppValidators {
  static isSuperHero(control: AbstractControl): ValidationErrors | null {
    if (isEmptyInputValue(control.value) || control.value === 'Marek') {
      return null;
    } else {
      return {
        isSuperHero: {
          name: 'Marek'
        }
      };
    }
  }

}
