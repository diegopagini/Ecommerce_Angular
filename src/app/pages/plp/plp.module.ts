import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlpComponent } from './plp.component';
import { ProductGridModule } from './product-grid/product-grid.module';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { ProductFilterModule } from './product-filter/product-filter.module';

@NgModule({
  declarations: [PlpComponent],
  imports: [
    CommonModule,
    ProductGridModule,
    SpinnerModule,
    ProductFilterModule,
  ],
  exports: [PlpComponent],
})
export class PlpModule {}
