import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.interfacte';

@Component({
  selector: 'app-checkout-resume',
  templateUrl: './checkout-resume.component.html',
  styleUrls: ['./checkout-resume.component.scss'],
})
export class CheckoutResumeComponent implements OnInit {
  public resume$: Observable<Product[]>;
  public quantity$: Observable<number>;
  public total$: Observable<number>;

  constructor(private store: Store<{ cart }>) {}

  ngOnInit(): void {
    this.resume$ = this.store.select('cart').pipe(map((store) => store.cart));
    this.quantity$ = this.resume$.pipe(
      map((cart) => cart.map((product) => product.quantity)),
      map((cartProducts: number[]) => {
        let sum: number = 0;
        cartProducts.map((totals: number) => {
          sum += totals;
        });
        return sum;
      })
    );
    this.total$ = this.resume$.pipe(
      map((cart) => cart.map((produtcs) => produtcs.price)),
      map((cartProducts: number[]) => {
        let sum: number = 0;
        cartProducts.map((totals: number) => {
          sum += totals;
        });
        return sum;
      })
    );
  }
}
