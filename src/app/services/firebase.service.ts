import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interfacte';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private collection: AngularFirestoreCollection<any>;
  public products$: Observable<any>;

  constructor(private db: AngularFirestore) {
    this.collection = this.db.collection<any>('products');
    this.products$ = db.collection('products').valueChanges();
  }

  addNewProduct(product: Product) {
    this.collection.add(product);
  }

  getProduct(id: string) {
    const docRef = this.db.collection('products');
    return docRef.valueChanges();
  }
}
