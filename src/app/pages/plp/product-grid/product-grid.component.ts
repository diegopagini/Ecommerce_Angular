import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interfacte';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent {
  @Input() products: Product[] = [];
}
