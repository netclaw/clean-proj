import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CartItem } from 'src/app/model/CartItem';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  panier!:Observable<CartItem[]>;
  cartItemPreview$!:Observable<CartItem>;
  // priceform$!:Observable<number>;
  // total!:number;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    // total=
    this.panier=of(this.cartService.panier);
    // this.priceform$=of(this.cartItem.product.price);
  }

  modAmount(cartItem:CartItem){
    if(cartItem.amount==0){
      this.cartService.removeItem(cartItem);

    }
    this.cartService.updateItem(cartItem);

  }

  

}
