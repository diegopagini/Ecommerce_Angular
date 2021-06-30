import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public cartProductsLength$: Observable<any>;
  public menuVisible: boolean = false;
  public isLoggedIn$: Observable<boolean>;
  public user$: Observable<any>;

  constructor(private store: Store<{ cart: any; login: any }>) {
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

    this.user$ = this.store.select('login').pipe(
      filter((user) => !!user),
      map((user) => user.user?.displayName)
    );
  }

  showMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
