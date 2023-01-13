import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, Subject, takeUntil } from 'rxjs';
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
  total!:number;
  wantToSave:boolean=false;
  saveText:string="Save Cart";
  currentClient!:Client;
  private destroy$!: Subject<boolean>;
  isLoaded:boolean=false;

  constructor(private cartService:CartService,private newClientService:NewClientService,private router: Router) { }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.panier=of(this.cartService.panier);
    this.total=0;
    this.total=this.cartService.getTotal();
    this.currentClient=this.newClientService.loggedCient;
    this.newClientService.getLoggedInName.pipe(takeUntil(this.destroy$)).subscribe(x=>this.currentClient=x);
  }

  modAmount(cartItem:CartItem){
    if(cartItem.amount==0){
      this.cartService.removeItem(cartItem);

    }
    this.cartService.updateItem(cartItem);
    this.total=this.cartService.getTotal();

  }
  save(){
    if(!this.wantToSave){
      this.wantToSave=!this.wantToSave;
      this.currentClient.panier=this.cartService.panier;
      this.newClientService.saveCart(this.currentClient);
    }
    if(this.wantToSave){
      this.saveText="Saved"
    }

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  loadcart(){
    this.cartService.isLoaded=true;
    this.cartService.loadClientCart(this.currentClient);
    this.router.navigateByUrl("");
    this.cartService.isLoaded=false;
    

  }

  

}
