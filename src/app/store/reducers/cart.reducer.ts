import { createReducer, on } from '@ngrx/store';
import { addToCart, updateCart, removeFromCart } from '../actions/cart.actions';
import { buyOrder } from '../actions/account.actions';
import { Product } from 'src/app/models/product.interfacte';

export const initialState = {
  cart: [],
  isLoggedIn: false,
};

const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { payload }) => ({
    ...state,
    cart: [...state.cart, payload],
  })),
  on(updateCart, (state, { payload }) => ({
    ...state,
    cart: groupById(state.cart, payload),
  })),
  on(removeFromCart, (state, { payload }) => ({
    ...state,
    cart: [...state.cart.filter((product) => product !== payload)],
  })),
  on(buyOrder, (state) => ({
    ...state,
    cart: [],
  }))
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}

function groupById(arr: Product[], product: Product) {
  const itemWithSameId = arr.find((el) => el.id === product.id);

  console.log(itemWithSameId);
  return arr.map((items) => {
    // if (product.id === items.id) {
    //   console.log(product);
    //   console.log(items);
    //   items.quantity += product.quantity;
    // }
  });
}
