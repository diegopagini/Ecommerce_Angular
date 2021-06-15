import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.interfacte';

export const addToCart = createAction(
  '[Cart] Add to cart',
  props<{ payload: Product }>()
);
