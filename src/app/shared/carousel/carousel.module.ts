import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, NgxUsefulSwiperModule, ProductCardModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
