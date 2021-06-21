import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartProductComponent } from './cart-product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartProductComponent],
  imports: [CommonModule, RouterModule],
  exports: [CartProductComponent],
})
export class CartProductModule {}
