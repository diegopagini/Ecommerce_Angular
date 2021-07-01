import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.interfacte';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartWithProducts$: Observable<Product[]>;

  constructor(private store: Store<{ cart }>) {}

  ngOnInit(): void {
    this.cartWithProducts$ = this.store
      .select('cart')
      .pipe(map((store) => store.cart));
  }
}
