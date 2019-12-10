import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
//Define items property to store the list(array) of the currebt products in the cart.
items = [];

constructor(
    private http: HttpClient
  ) { }
//Define methods to add items to the cart, return cart items, and clear the cart items:
addToCart(product){
  this.items.push(product);
}
getItems() {
  return this.items;
}
clearCart() {
  this.items = [];
  return this.items;
}
getShippingPrices(){
  return this.http.get('/assets/shipping.json');
}
  

}