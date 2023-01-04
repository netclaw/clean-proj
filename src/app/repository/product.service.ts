import { Injectable } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';
import { Product } from '../model/Product';
import { HttpClient} from '@angular/common/http';
import { Product2 } from '../model/Product2';
import { RequestProduct } from '../model/RequestProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  // [new Product(1,"ipad","iphone de balur",6000,0,0,0,"null","null","https://n9.cl/w4iwu",[""],true),new Product(2,"iphone","iphone de balur",9000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(3,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(4,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(5,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(6,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(7,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true)]
  products$:Observable<Product[]>=this.getAllProducts();
  categoryProducts:Product[]=new Array<Product>();
  
  constructor(private http:HttpClient) { }

  getProductById(idc:number){
   
    return this.products.filter(x=>x.id==idc)[0];

  }


   getAllProducts():Observable<Product[]>{
    let products=new Array<Product2>();
    let productsf=new Array<Product>();
    this.http.get<RequestProduct>('https://dummyjson.com/products').subscribe(x=>{
         for(let i in x.products) { 
          products.push(x.products[i]); 
         }; 
         for (let i = 0; i < products.length; i++){
          productsf.push(new Product(products[i].id,
            products[i].title,
            products[i].description,
            products[i].price,
            products[i].discountPercentage,
            products[i].rating,
            products[i].stock,
            products[i].brand,
            products[i].category,
            products[i].thumbnail,
            products[i].images
            ,true));
         }
    });
    this.products=productsf;
    return of(productsf)
   }

   getAllProductsS():Product[]{
    let products=new Array<Product2>();
    let productsf=new Array<Product>();
    this.http.get<RequestProduct>('https://dummyjson.com/products').subscribe(x=>{
         for(let i in x.products) { 
          products.push(x.products[i]); 
         }; 
         for (let i = 0; i < products.length; i++){
          productsf.push(new Product(products[i].id,
            products[i].title,
            products[i].description,
            products[i].price,
            products[i].discountPercentage,
            products[i].rating,
            products[i].stock,
            products[i].brand,
            products[i].category,
            products[i].thumbnail,
            products[i].images
            ,true));
         }
    });
    this.products=productsf;
    return productsf;
   }
 
}
