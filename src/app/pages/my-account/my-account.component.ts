import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.interfacte';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public accountData$: Observable<User>;
  public accountOrders$: Observable<Product[]>;

  constructor(private store: Store<{ login; account }>) {}

  ngOnInit(): void {
    this.accountData$ = this.store
      .select('login')
      .pipe(map((login) => login.user));

    this.accountOrders$ = this.store
      .select('account')
      .pipe(map((account) => account.orders));
  }
}
