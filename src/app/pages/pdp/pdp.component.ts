import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interfacte';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss'],
})
export class PdpComponent implements OnInit {
  private productId: number;
  public product$: Observable<Product>;
  public quantity: number = 1;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    this.product$ = this.apiService.getProduct(this.productId);
  }

  addToCart() {
    console.log(this.quantity);
  }
}
