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

function groupById(arr: Product[], prod: Product) {
  //recorrer el arr de productos
  //si el producto existe
  //actualizar la cantidad del el producto que existe con la del nuevo
  // si no existe, lo agrego al arr
  const newArr = arr.map((product) => {
    console.log(prod.quantity);
    console.log(product.quantity);
    const groupedProduct = {
      quantity: prod.quantity + product.quantity,
      ...prod,
    };

    return groupedProduct;
  });
  return newArr;
}
