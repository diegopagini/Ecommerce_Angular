import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ProductCardModule } from './product-card/product-card.module';
import { CarouselModule } from './carousel/carousel.module';
import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ProductCardModule,
    CarouselModule,
    SpinnerModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
    ProductCardModule,
    CarouselModule,
    SpinnerModule,
  ],
})
export class SharedModule {}
