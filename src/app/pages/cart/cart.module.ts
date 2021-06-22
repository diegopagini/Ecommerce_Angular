import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartListModule } from './cart-list/cart-list.module';
import { ResumeModule } from 'src/app/shared/resume/resume.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartListModule, ResumeModule],
  exports: [CartComponent],
})
export class CartModule {}
