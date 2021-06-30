import { createReducer, on } from '@ngrx/store';
import { buyOrder } from '../actions/account.actions';

export const initialState = {
  orders: [],
};

const _accountReducer = createReducer(
  initialState,
  on(buyOrder, (state, { payload }) => ({
    ...state,
    orders: [...state.orders, payload],
  }))
);

export function accountReducer(state, action) {
  return _accountReducer(state, action);
}
