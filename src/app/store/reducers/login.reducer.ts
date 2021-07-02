import { createReducer, on } from '@ngrx/store';
import {
  startLogin,
  loginSuccess,
  loginFail,
  logout,
} from '../actions/login.actions';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const _loginReducer = createReducer(
  initialState,
  on(startLogin, (state, { payload }) => ({
    ...state,
    isLoggedIn: false,
    user: payload,
  })),
  on(loginSuccess, (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    user: payload,
  })),
  on(loginFail, (state) => ({
    ...state,
    isLoggedIn: false,
    user: null,
  })),
  on(logout, (state) => ({
    ...state,
    isLoggedIn: false,
    user: null,
  }))
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}
