import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interfacte';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private URL_API = `https://fakestoreapi.com/`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL_API}products`);
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.URL_API}products/${productId}`);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}products/categories`);
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.URL_API}products/category/${category}`);
  }
}
