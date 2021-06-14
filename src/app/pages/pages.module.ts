import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PdpModule } from './pdp/pdp.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  imports: [CommonModule, HomeModule, PdpModule, CartModule],
  exports: [HomeModule, PdpModule, CartModule],
})
export class PagesModule {}
