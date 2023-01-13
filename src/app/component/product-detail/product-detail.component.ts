import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/model/CartItem';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/repository/product.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!:Product;
  mess:string='Ajouter au panier';

  constructor(private productService:ProductService,private router:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    const productId=+this.router.snapshot.params['id'];
    this.product=this.productService.getProductById(productId);
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
      this.cartService.addItem(new CartItem(1,p));
      this.mess='Retirer du panier';
    }
    else{
      this.cartService.removeItem(new CartItem(-1,p));
      this.mess='Ajouter au panier';
    }
  }

}
