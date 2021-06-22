import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PdpModule } from './pdp/pdp.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    PdpModule,
    CartModule,
    CheckoutModule,
    NotFoundModule,
  ],
  exports: [HomeModule, PdpModule, CartModule, CheckoutModule, NotFoundModule],
})
export class PagesModule {}
