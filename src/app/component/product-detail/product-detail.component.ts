import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/repository/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!:Product;
  mess:string='Ajouter au panier';

  constructor(private productService:ProductService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    const productId=+this.router.snapshot.params['id'];
    // this.productService.getProductById2(productId).subscribe(x=>this.p=x)
    this.product=this.productService.getProductById(productId);
    console.log(this.product);
  }

  getColor():string{
    return this.product.availability ? 'green' : 'red';
  }
  clicked(p:Product){
    

  }

}
