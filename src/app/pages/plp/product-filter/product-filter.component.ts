import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent {
  @Input() categories: string[] = [];
  @Output() selectedCategory: EventEmitter<number> = new EventEmitter();
  @Output() sortHigherToLower: EventEmitter<any> = new EventEmitter();
  @Output() sortLowerToHigher: EventEmitter<any> = new EventEmitter();

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
