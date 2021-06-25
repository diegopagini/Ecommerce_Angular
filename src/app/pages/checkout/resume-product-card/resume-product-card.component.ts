import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interfacte';

@Component({
  selector: 'app-resume-product-card',
  templateUrl: './resume-product-card.component.html',
  styleUrls: ['./resume-product-card.component.scss'],
})
export class ResumeProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {}
}
