import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from '../actions/cart.actions';

export const initialState = {
  cart: [],
};

const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { payload }) => ({
    ...state,
    cart: [...state.cart, payload],
  })),
  on(removeFromCart, (state, { payload }) => ({
    ...state,
    cart: [...state.cart.filter((product) => product !== payload)],
  }))
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}
