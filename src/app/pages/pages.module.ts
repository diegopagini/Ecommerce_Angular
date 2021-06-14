import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PdpModule } from './pdp/pdp.module';

@NgModule({
  imports: [CommonModule, HomeModule, PdpModule],
  exports: [HomeModule, PdpModule],
})
export class PagesModule {}
