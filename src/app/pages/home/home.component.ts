import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.interfacte';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public listOneProducts$: Observable<Product[]>;
  public listTwoProducts$: Observable<Product[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.listOneProducts$ = this.apiService
      .getProducts()
      .pipe(map((products) => products.slice(0, 10)));

    this.listTwoProducts$ = this.apiService
      .getProducts()
      .pipe(map((products) => products.slice(10, products.length)));
  }
}
