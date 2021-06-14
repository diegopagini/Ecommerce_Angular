import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ProductCardModule } from './product-card/product-card.module';
import { CarouselModule } from './carousel/carousel.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ProductCardModule,
    CarouselModule,
  ],
  exports: [HeaderModule, FooterModule, ProductCardModule, CarouselModule],
})
export class SharedModule {}
