import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Product } from 'src/app/models/product.interfacte';
import { buyOrder } from '../../../store/actions/account.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent implements OnInit {
  public checkoutForm: FormGroup;
  private isLoggedIn$: Observable<boolean>;
  private cartProducts$: Observable<Product[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ cart; login }>,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [Validators.required, Validators.minLength(5), Validators.email],
      ],
      card: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select('login').pipe(
      map((store) => store.isLoggedIn),
      take(1)
    );

    this.cartProducts$ = this.store.select('cart').pipe(
      map((cart) => cart.cart),
      take(1)
    );
  }

  get nameNoValid(): boolean {
    return (
      this.checkoutForm.get('name').invalid &&
      this.checkoutForm.get('name').touched
    );
  }

  get lastNameNoValid(): boolean {
    return (
      this.checkoutForm.get('lastName').invalid &&
      this.checkoutForm.get('lastName').touched
    );
  }

  get addressNoValid(): boolean {
    return (
      this.checkoutForm.get('address').invalid &&
      this.checkoutForm.get('address').touched
    );
  }

  get phoneNoValid(): boolean {
    return (
      this.checkoutForm.get('phone').invalid &&
      this.checkoutForm.get('phone').touched
    );
  }

  get emailNoValid(): boolean {
    return (
      this.checkoutForm.get('email').invalid &&
      this.checkoutForm.get('email').touched
    );
  }

  get cardNoValid(): boolean {
    return (
      this.checkoutForm.get('card').invalid &&
      this.checkoutForm.get('card').touched
    );
  }

  submit() {
    if (this.checkoutForm.valid) {
      this.isLoggedIn$.subscribe((isLogged) => {
        if (!isLogged) {
          Swal.fire({
            icon: 'error',
            title: 'You must be logged in to buy',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          this.cartProducts$.subscribe((products) => {
            this.store.dispatch(buyOrder({ payload: products }));
          });
          Swal.fire({
            icon: 'success',
            title: 'You will receive your order very soon',
            showConfirmButton: false,
            timer: 1500,
          });

          this.router.navigate(['/']);
        }
      });
    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }
}
