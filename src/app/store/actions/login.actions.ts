import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.interface';

export const startLogin = createAction(
  '[Login] Start Login',
  props<{ payload: User }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ payload: User }>()
);

export const logout = createAction('[Login] Logout');

export const loginFail = createAction('[Login] Login Fail');
