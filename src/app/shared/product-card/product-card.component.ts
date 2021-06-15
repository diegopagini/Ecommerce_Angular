import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.interfacte';
import { addToCart } from '../../store/actions/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private store: Store) {}

  addToCart() {
    this.store.dispatch(addToCart({ payload: this.product }));
  }
}
