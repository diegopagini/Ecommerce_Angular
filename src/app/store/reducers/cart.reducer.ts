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

function groupById(productList: Product[], product: Product): Product[] {
  const indexOfProductWithSameId = productList.findIndex(
    (el: Product) => el.id === product.id
  );
  const productWithSameId = productList.find(
    (el: Product) => el.id === product.id
  );
  let updatedProduct: Product;

  productList.forEach((item) => {
    if (item.id === productWithSameId.id) {
      const cloneItem = JSON.parse(JSON.stringify(item));
      cloneItem.quantity = item.quantity + product.quantity;
      updatedProduct = cloneItem;
    }
  });

  const newProductList = JSON.parse(JSON.stringify(productList));
  newProductList[indexOfProductWithSameId] = updatedProduct;

  return newProductList;
}
