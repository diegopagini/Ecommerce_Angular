import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.interfacte';
import { addToCart } from '../../store/actions/cart.actions';
import Swal from 'sweetalert2';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product;
  public quantity: number = 1;

  constructor(
    private store: Store,
    private addToCartService: AddToCartService
  ) {}

  addToCart() {
    const produtToAdd = {
      ...this.product,
      quantity: this.quantity,
    };

    this.store.dispatch(addToCart({ payload: produtToAdd }));
    Swal.fire({
      icon: 'success',
      title: 'your product(s) have been added to the cart',
      showConfirmButton: false,
      timer: 1500,
    });

    // this.addToCartService.addToCart(produtToAdd);
    this.quantity = 1;
  }
}
