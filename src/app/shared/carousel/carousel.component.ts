import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interfacte';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() products: Product[];

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 40,
    slidesPerView: 4,
  };

  constructor() {}

  ngOnInit(): void {}
}
