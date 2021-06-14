import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SamePasswordsService {
  samePasswords(password1: string, password2: string) {
    return (formGroup: FormGroup) => {
      const pass1 = formGroup.controls[password1];
      const pass2 = formGroup.controls[password2];

      if (pass1.value === pass2.value) {
        pass2.setErrors(null);
      } else {
        pass2.setErrors({ isDifferent: true });
      }
    };
  }
}
