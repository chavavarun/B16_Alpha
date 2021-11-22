import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartItemsPageComponent } from './secure/cart-items-page/cart-items-page.component';
import { HomePageComponent } from './secure/home-page/home-page.component';
import { OrdersPageComponent } from './secure/orders-page/orders-page.component';
import { WishlistComponent } from './secure/wishlist/wishlist.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component:HomePageComponent},
  {path:'favorite', component: WishlistComponent},
  {path:'cart-items', component:CartItemsPageComponent},
  {path:'orders', component:OrdersPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
