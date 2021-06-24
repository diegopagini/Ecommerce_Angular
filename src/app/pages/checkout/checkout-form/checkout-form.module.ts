import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutFormComponent } from './checkout-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CheckoutFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [CheckoutFormComponent],
})
export class CheckoutFormModule {}
