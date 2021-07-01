import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { startLogin } from '../../../store/actions/login.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.loginForm = this.fb.group({
      email: [
        'diegopaginidev@gmail.com',
        [Validators.required, Validators.email],
      ],
      password: ['123456', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(startLogin({ payload: this.loginForm.value }));
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
