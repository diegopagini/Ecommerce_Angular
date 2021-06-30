import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { StoreModule } from '@ngrx/store';
import { accountReducer } from 'src/app/store/reducers/account.reducer';
import { MyDataModule } from './my-data/my-data.module';
import { MyOrdersModule } from './my-orders/my-orders.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    MyDataModule,
    MyOrdersModule,
    RouterModule,
    StoreModule.forFeature('account', accountReducer),
  ],
  exports: [MyAccountComponent],
})
export class MyAccountModule {}
