import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutGuardGuard } from './guards/checkout-guard.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PdpComponent } from './pages/pdp/pdp.component';
import { PlpComponent } from './pages/plp/plp.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pdp/:id', component: PdpComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  { path: 'plp', component: PlpComponent },
  {
    path: 'my-account',
    component: MyAccountComponent,
    canActivate: [CheckoutGuardGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
