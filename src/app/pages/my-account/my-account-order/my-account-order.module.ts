import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountOrderComponent } from './my-account-order.component';

@NgModule({
  declarations: [MyAccountOrderComponent],
  imports: [CommonModule],
  exports: [MyAccountOrderComponent],
})
export class MyAccountOrderModule {}
