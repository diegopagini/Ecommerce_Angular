import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.interfacte';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public resume$: Observable<any>;

  constructor(private store: Store<{ cart }>) {}

  ngOnInit(): void {
    this.resume$ = this.store.select('cart').pipe(
      map((state) => {
        if (state.cart.length >= 1) {
          let totalQuantity: number = 0;
          let totalMoney: number = 0;

          state.cart.forEach((product: Product) => {
            totalQuantity += product.quantity;
            totalMoney += product.price;
          });

          const total = {
            quantity: totalQuantity,
            money: totalMoney,
          };

          return total;
        } else {
          return;
        }
      })
    );
  }
}
