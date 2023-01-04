import { Injectable } from '@angular/core';
import { CartItem } from '../model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  panier:CartItem[]=new Array<CartItem>();
  total!:number;
  

  constructor() { }

  addItem(item:CartItem){
    this.panier.push(item);
  }
  removeItem(item:CartItem){
    this.panier=this.panier.filter(x=>x.product.id!=item.product.id);
  }

  updateItem(item:CartItem){
    this.panier.map(x=>x.product.id==item.product.id?item:x);

  }

  getTotal():number{
    return this.total=this.panier.reduce((a, b)=> a + b.amount*b.product.price,0);
  }

  
}
