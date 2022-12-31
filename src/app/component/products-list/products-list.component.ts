import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/model/CartItem';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/repository/product.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products$!:Observable<Product[]>;

  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.products$=this.productService.products$;
  }

  modProduct(cartItem:CartItem){
    if(cartItem.amount==1){
      this.cartService.addItem(cartItem);

    }else{//-1
      this.cartService.removeItem(cartItem);
  
    }

  }

}
