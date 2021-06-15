import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interfacte';
import { ApiService } from 'src/app/services/api.service';
import { addToCart } from '../../store/actions/cart.actions';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss'],
})
export class PdpComponent implements OnInit {
  private productId: number;
  public product$: Observable<Product>;
  public quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    this.product$ = this.apiService.getProduct(this.productId);
  }

  addToCart() {
    this.product$.subscribe((prod) => {
      const productToAdd = {
        ...prod,
        quantity: Number(this.quantity),
      };
      this.store.dispatch(addToCart({ payload: productToAdd }));
    });
  }
}
