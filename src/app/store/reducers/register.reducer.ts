import { createReducer, on } from '@ngrx/store';
import {
  startRegister,
  registerSuccess,
  registerFail,
} from '../actions/register.actions';

const initialState = {
  isRegistered: false,
  user: null,
};

const _registerReducer = createReducer(
  initialState,
  on(startRegister, (state, { payload }) => ({
    ...state,
    isRegistered: false,
    user: payload,
  })),
  on(registerSuccess, (state, { payload }) => ({
    ...state,
    isRegistered: true,
    user: payload,
  })),
  on(registerFail, (state) => ({
    ...state,
    isRegistered: false,
    user: null,
  }))
);

export function registerReducer(state, action) {
  return _registerReducer(state, action);
}
