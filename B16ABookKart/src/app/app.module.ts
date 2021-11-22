import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './secure/home-page/home-page.component';
import { CartItemsPageComponent } from './secure/cart-items-page/cart-items-page.component';
import { WishlistComponent } from './secure/wishlist/wishlist.component';
import { OrdersPageComponent } from './secure/orders-page/orders-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TopNavComponent } from './top-nav/top-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    CartItemsPageComponent,
    WishlistComponent,
    OrdersPageComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
