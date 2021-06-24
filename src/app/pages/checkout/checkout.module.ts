import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutFormModule } from './checkout-form/checkout-form.module';
import { CheckoutResumeModule } from './checkout-resume/checkout-resume.module';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, CheckoutFormModule, CheckoutResumeModule],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
