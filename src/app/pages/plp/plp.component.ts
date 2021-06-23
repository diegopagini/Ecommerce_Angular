import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss'],
})
export class PlpComponent implements OnInit {
  public categories$: Observable<any[]>;
  public products$: Observable<any[]>;

  constructor(private apiSerice: ApiService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getAllProducts();
  }

  getCategories() {
    this.categories$ = this.apiSerice.getCategories();
  }

  getAllProducts() {
    this.products$ = this.apiSerice.getProducts();
  }

  changeCategory(category: number) {
    switch (category) {
      case 0:
        return (this.products$ =
          this.apiSerice.getProductsByCategory('electronics'));
      case 1:
        return (this.products$ =
          this.apiSerice.getProductsByCategory('jewelery'));
      case 2:
        return (this.products$ =
          this.apiSerice.getProductsByCategory("men's clothing"));
      case 3:
        return (this.products$ =
          this.apiSerice.getProductsByCategory("women's clothing"));
      default:
        return (this.categories$ = this.apiSerice.getCategories());
    }
  }

  sortHigher() {
    this.products$ = this.products$.pipe(
      map((products) =>
        products.sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          } else if (a.price > b.price) {
            return -1;
          }
          return 0;
        })
      )
    );
  }

  sortLower() {
    this.products$ = this.products$.pipe(
      map((products) =>
        products.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          } else if (a.price < b.price) {
            return -1;
          }
          return 0;
        })
      )
    );
  }
}
