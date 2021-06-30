import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SamePasswordsService } from 'src/app/services/same-password.service';
import { startRegister } from '../../../store/actions/register.actions';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private samePasswordService: SamePasswordsService,
    private store: Store
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        age: ['', [Validators.required, Validators.min(18)]],
        password: ['', [Validators.required]],
        repeatedPassword: ['', [Validators.required]],
      },
      {
        Validators: [
          this.samePasswordService.samePasswords(
            'password',
            'repeatedPassword'
          ),
        ],
      }
    );
  }

  get nameNoValid() {
    return (
      this.registerForm.get('name').invalid &&
      this.registerForm.get('name').touched
    );
  }

  get lastNameNoValid() {
    return (
      this.registerForm.get('lastName').invalid &&
      this.registerForm.get('lastName').touched
    );
  }

  get emailNoValid() {
    return (
      this.registerForm.get('email').invalid &&
      this.registerForm.get('email').touched
    );
  }

  get ageNoValid() {
    return (
      this.registerForm.get('age').invalid &&
      this.registerForm.get('age').touched
    );
  }

  get passwordNoValid() {
    return (
      this.registerForm.get('password').invalid &&
      this.registerForm.get('password').touched
    );
  }

  get repeatedPasswordNoValid() {
    return (
      this.registerForm.get('repeatedPassword').invalid &&
      this.registerForm.get('repeatedPassword').touched
    );
  }

  register() {
    if (this.registerForm.valid) {
      this.store.dispatch(startRegister(this.registerForm.value));
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
