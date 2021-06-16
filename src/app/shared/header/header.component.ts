import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public cartProductsLength$: Observable<any>;

  constructor(private store: Store<{ cart: any }>) {
    this.cartProductsLength$ = this.store.select('cart').pipe(
      map((cart) => cart.cart),
      map((cartProducts) => cartProducts.length),
      tap(console.log)
    );
  }
}
