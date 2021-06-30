import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.interface';

export const startRegister = createAction(
  '[Register] Start Register',
  props<{ payload: User }>()
);

export const registerSuccess = createAction(
  '[Register] Register Success',
  props<{ payload: User }>()
);

export const registerFail = createAction('[Register] Register Fail');
