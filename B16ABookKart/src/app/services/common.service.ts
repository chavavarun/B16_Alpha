import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiPath = 'https://bookcart.azurewebsites.net/api/';
  userId = localStorage.getItem('userId');

  constructor(private _http: HttpClient) { }

  login(data:any): Observable<any>{
    return this._http.post<any>(this.apiPath + 'Login', data);
  }
  register(data:any):Observable<any>{
    return this._http.post<any>(this.apiPath + 'User', data);
  }

  getAllBooks(): Observable<any> {
    return this._http.get<any>(this.apiPath + 'book');
  }

  addToWishlist(bookId:any): Observable<any>{
    return this._http.post<any>(this.apiPath + 'Wishlist/ToggleWishlist/'+ this.userId + '/' + bookId,{});
  }
  addToCartlist(bookId:any): Observable<any>{
    return this._http.post<any>(this.apiPath + 'ShoppingCart/AddToCart/'+ this.userId + '/' + bookId,{});
  }

  getFavorites(): Observable<any>{
    return this._http.get<any>(this.apiPath + 'Wishlist/'+ this.userId);
  }
  getOrders(): Observable<any>{
    return this._http.get<any>(this.apiPath + 'Order/'+ this.userId);
  }
  getCartItems(): Observable<any>{
    return this._http.get<any>(this.apiPath + 'ShoppingCart/'+ this.userId);
  }
}
