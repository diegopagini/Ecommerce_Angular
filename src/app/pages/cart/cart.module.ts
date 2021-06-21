import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartListModule } from './cart-list/cart-list.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartListModule],
  exports: [CartComponent],
})
export class CartModule {}
