import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { Product } from '../models/product.interfacte';
import { addToCart, updateCart } from '../store/actions/cart.actions';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  private cart$: Observable<Product[]>;

  constructor(private store: Store<{ cart }>) {
    this.cart$ = this.store.select('cart').pipe(
      filter((produtcs) => !!produtcs),
      map((store) => store.cart),
      take(1)
    );
  }

  addToCart(product: Product) {
    this.cart$.subscribe((cart) => {
      if (cart.length === 0) {
        this.store.dispatch(addToCart({ payload: product }));
      } else {
        cart.forEach((products) => {
          if (product.id === products.id) {
            this.store.dispatch(updateCart({ payload: product }));
          } else {
            this.store.dispatch(addToCart({ payload: product }));
          }
        });
      }
    });
  }
}
