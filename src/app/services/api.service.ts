import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private URL_API = `https://fakestoreapi.com/`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}products`);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}products/categories`);
  }
}
