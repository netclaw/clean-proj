import { Injectable } from '@angular/core';
import { CartItem } from '../model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  panier:CartItem[]=new Array<CartItem>();

  constructor() { }

  addItem(item:CartItem){
    this.panier.push(item);
  }
  removeItem(item:CartItem){
    this.panier=this.panier.filter(x=>x.product.id!=item.product.id);
  }

  
}
