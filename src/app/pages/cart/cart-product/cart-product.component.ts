import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.interfacte';
import { removeFromCart } from '../../../store/actions/cart.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  removeItem() {
    this.store.dispatch(removeFromCart({ payload: this.product }));

    Swal.fire({
      icon: 'success',
      title: 'your product was removed from the cart',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
