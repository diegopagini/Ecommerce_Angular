import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PdpModule } from './pdp/pdp.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';
import { NotFoundModule } from './not-found/not-found.module';
import { PlpModule } from './plp/plp.module';
import { MyAccountModule } from './my-account/my-account.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ContactModule } from './contact/contact.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    PdpModule,
    CartModule,
    CheckoutModule,
    NotFoundModule,
    PlpModule,
    MyAccountModule,
    LoginModule,
    RegisterModule,
    ContactModule,
    AdminModule,
  ],
  exports: [
    HomeModule,
    PdpModule,
    CartModule,
    CheckoutModule,
    NotFoundModule,
    PlpModule,
    MyAccountModule,
    LoginModule,
    RegisterModule,
    ContactModule,
    AdminModule,
  ],
})
export class PagesModule {}
