import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list.component';
import { CartProductModule } from '../cart-product/cart-product.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartListComponent],
  imports: [CommonModule, CartProductModule, RouterModule],
  exports: [CartListComponent],
})
export class CartListModule {}
