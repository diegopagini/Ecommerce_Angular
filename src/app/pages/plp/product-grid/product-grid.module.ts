import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGridComponent } from './product-grid.component';
import { ProductCardModule } from 'src/app/shared/product-card/product-card.module';

@NgModule({
  declarations: [ProductGridComponent],
  imports: [CommonModule, ProductCardModule],
  exports: [ProductGridComponent],
})
export class ProductGridModule {}
