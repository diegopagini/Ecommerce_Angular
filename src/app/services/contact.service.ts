import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url: string =
    'https://ecommerce-angular-aba12-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  sendMessage(message: Message) {
    return this.http.post(`${this.url}/Messages.json`, message);
  }
}
