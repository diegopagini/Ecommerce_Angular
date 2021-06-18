import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
