import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders.component';
import { MyAccountOrderModule } from '../my-account-order/my-account-order.module';

@NgModule({
  declarations: [MyOrdersComponent],
  imports: [CommonModule, MyAccountOrderModule],
  exports: [MyOrdersComponent],
})
export class MyOrdersModule {}
