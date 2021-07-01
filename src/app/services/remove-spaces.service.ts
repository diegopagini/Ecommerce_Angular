import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RemoveSpacesService {
  removeControlSpaces(control: string, form: FormGroup) {
    let formControl = form.get(control).value;
    formControl = formControl.replace(/ /g, '');
    form.get(control).setValue(formControl);
  }
}
