import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interfacte';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }
}
