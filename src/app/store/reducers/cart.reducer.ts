import { createReducer, on } from '@ngrx/store';
import { addToCart, updateCart, removeFromCart } from '../actions/cart.actions';
import { buyOrder } from '../actions/account.actions';

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
    cart: [],
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

function groupById(arr, prod) {
  //recorrer el arr de productos
  //si el producto existe
  //actualizar la cantidad del el producto que existe con la del nuevo
  // si no existe, lo agrego al arr

  return arr.map((element) => {
    if (prod.id === element.id) {
      const updatedElement = {
        ...element,
        quantity: element.quantity + prod.quantity,
      };
      return updatedElement;
    } else {
      return [...arr, prod];
    }
  });
}
