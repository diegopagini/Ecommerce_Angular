import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiKey: string = 'AIzaSyAYKodqWbqPSv3Yz75fjNxMNI1YSJerBac';
  private url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  register(user: User) {
    const authData = {
      ...user,
      displayName: user.name,
      returnSecureToken: true,
    };

    return this.http.post(this.url, authData);
  }
}
