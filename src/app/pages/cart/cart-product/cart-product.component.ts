import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interfacte';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {}

  removeItem() {
    Swal.fire({
      icon: 'success',
      title: 'your product was removed from the cart',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
