import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/model/CartItem';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  
 @Input() product!:Product;
 @Output() clickedProduct=new EventEmitter<CartItem>();
  mess!:string;


  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    if(this.cartService.panier.every(x=>x.product.id!=this.product.id)){
      this.mess='Ajouter au panier';
    }else{
      this.mess='Retirer du panier';

    }
    
  }

  getColor():string{
    return this.product.availability ? 'green' : 'red';
  }

  clicked(p:Product){
    if(this.mess=='Ajouter au panier'){
      this.clickedProduct.emit(new CartItem(1,p));
      this.mess='Retirer du panier';
    }
    else{
      this.clickedProduct.emit(new CartItem(-1,p));
      this.mess='Ajouter au panier';
      
      

    }

  }
}
