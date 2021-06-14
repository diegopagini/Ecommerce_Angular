import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { ProductCardModule } from '../product-card/product-card.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    ProductCardModule,
    NgxUsefulSwiperModule,
    HttpClientModule,
  ],
  exports: [CarouselComponent],
})
export class CarouselModule {}
