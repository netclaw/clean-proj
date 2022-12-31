import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.panier=of(this.cartService.panier);
  }

  onCLickreduce(pi:CartItem){
    // this.panier.forEach(x=>{if(x==pi){pi.amount=pi.amount-1;x=pi}});
    // this.panier$=of(this.panier);


  }

  onclickadd(pi:CartItem){
    // this.panier.forEach(x=>{if(x==pi){pi.amount=pi.amount+1;x=pi}});
    // this.panier$=of(this.panier);

  }

}
