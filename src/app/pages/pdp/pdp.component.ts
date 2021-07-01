import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interfacte';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { AddToCartService } from 'src/app/services/add-to-cart.service';

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
    private addToCartService: AddToCartService
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

      this.addToCartService.addToCart(productToAdd);

      Swal.fire({
        icon: 'success',
        title: 'your product(s) have been added to the cart',
        showConfirmButton: false,
        timer: 1500,
      });

      this.quantity = 1;
    });
  }
}
