import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interfacte';
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

  constructor(private addToCartService: AddToCartService) {}

  addToCart() {
    const produtToAdd = {
      ...this.product,
      quantity: this.quantity,
    };

    this.addToCartService.addToCart(produtToAdd);

    Swal.fire({
      icon: 'success',
      title: 'your product(s) have been added to the cart',
      showConfirmButton: false,
      timer: 1500,
    });

    this.quantity = 1;
  }
}
