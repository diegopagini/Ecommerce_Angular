import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interfacte';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.products$ = this.apiService.getProducts();
  }
}
