import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public cartProductsLength$: Observable<any>;
  public menuVisible: boolean = false;
  public isLoggedIn: Observable<boolean>;

  constructor(private store: Store<{ cart: any }>) {
    this.cartProductsLength$ = this.store.select('cart').pipe(
      map((cart) => cart.cart.map((product) => product.quantity)),
      map((cartProducts: number[]) => {
        let sum: number = 0;
        cartProducts.map((totals: number) => {
          sum += totals;
        });
        return sum;
      })
    );
  }

  showMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
