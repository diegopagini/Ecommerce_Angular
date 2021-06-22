import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.interfacte';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  public cartList$: Observable<Product[]>;

  constructor(private store: Store<{ cart: any }>) {}

  ngOnInit(): void {
    this.cartList$ = this.store.select('cart').pipe(map((state) => state.cart));
  }
}
