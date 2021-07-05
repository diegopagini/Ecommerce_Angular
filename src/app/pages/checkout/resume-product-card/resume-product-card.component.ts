import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.interfacte';

@Component({
  selector: 'app-resume-product-card',
  templateUrl: './resume-product-card.component.html',
  styleUrls: ['./resume-product-card.component.scss'],
})
export class ResumeProductCardComponent {
  @Input() product: Product;
}
