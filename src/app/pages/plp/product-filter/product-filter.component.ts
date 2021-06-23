import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  @Input() categories: string[] = [];
  @Output() selectedCategory: EventEmitter<number> = new EventEmitter();
  @Output() sortHigherToLower: EventEmitter<any> = new EventEmitter();
  @Output() sortLowerToHigher: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sortBy(index: number) {
    this.selectedCategory.emit(index);
  }

  sortHigher() {
    this.sortHigherToLower.emit();
  }

  sortLower() {
    this.sortLowerToHigher.emit();
  }
}
