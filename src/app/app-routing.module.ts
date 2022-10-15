import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardService } from './login-guard.service';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path: 'products', component: ProductComponent,canActivate:[LoginGuardService] },
  {path: '', component:HomeComponent },
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent,canActivate:[LoginGuardService]},
  {path:'offers',loadChildren:()=>import('./offers/offers.module').then(m =>m.OffersModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
