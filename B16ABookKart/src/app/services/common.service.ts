import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiPath = 'https://bookcart.azurewebsites.net/api/';
  userId: any;

  constructor(private _http: HttpClient) {}

  getAllBooks(): Observable<any> {
    return this._http.get<any>(this.apiPath + 'book');
  }

  addToWishlist(bookId: any): Observable<any> {
    return this._http.post<any>(
      this.apiPath + 'Wishlist/ToggleWishlist/' + this.userId + '/' + bookId,
      {}
    );
  }
  addToCartlist(bookId: any): Observable<any> {
    return this._http.post<any>(
      this.apiPath + 'ShoppingCart/AddToCart/' + this.userId + '/' + bookId,
      {}
    );
  }
}
