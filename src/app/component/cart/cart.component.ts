import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/model/CartItem';
import { Client } from 'src/app/model/Client';
import { CartService } from 'src/app/service/cart.service';
import { NewClientService } from 'src/app/service/new-client.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  panier!:Observable<CartItem[]>;
  cartItemPreview$!:Observable<CartItem>;
  // priceform$!:Observable<number>;
  total!:number;
  currentClient!:Client;

  constructor(private cartService:CartService,private newClientService:NewClientService) { }

  ngOnInit(): void {
    this.panier=of(this.cartService.panier);
    // this.priceform$=of(this.cartItem.product.price);
    this.total=0;
    this.total=this.cartService.getTotal();
    this.currentClient=this.newClientService.loggedCient;
  }

  modAmount(cartItem:CartItem){
    if(cartItem.amount==0){
      this.cartService.removeItem(cartItem);

    }
    this.cartService.updateItem(cartItem);
    this.total=this.cartService.getTotal();

  }

  

}
