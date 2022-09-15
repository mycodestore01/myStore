import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutDeactivateGuard } from './checkout-deactivate.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { FillupDetailsComponent } from './fillup-details/fillup-details.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'personal-info', component: PersonalInfoComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-details/:productId', component: ProductDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'fillup-details', component: FillupDetailsComponent},
  {path: '*', component: ProductListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
