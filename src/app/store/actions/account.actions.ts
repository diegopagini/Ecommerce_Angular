import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.interfacte';

export const buyOrder = createAction(
  '[Account] Buy Order',
  props<{ payload: any }>()
);
