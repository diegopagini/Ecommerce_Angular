import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './product-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductFilterComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProductFilterComponent],
})
export class ProductFilterModule {}
