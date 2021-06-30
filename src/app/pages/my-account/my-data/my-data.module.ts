import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDataComponent } from './my-data.component';

@NgModule({
  declarations: [MyDataComponent],
  imports: [CommonModule],
  exports: [MyDataComponent],
})
export class MyDataModule {}
