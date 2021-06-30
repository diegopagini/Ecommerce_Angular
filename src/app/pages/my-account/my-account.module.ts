import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { StoreModule } from '@ngrx/store';
import { accountReducer } from 'src/app/store/reducers/account.reducer';

@NgModule({
  declarations: [MyAccountComponent],
  imports: [CommonModule, StoreModule.forFeature('account', accountReducer)],
  exports: [MyAccountComponent],
})
export class MyAccountModule {}
