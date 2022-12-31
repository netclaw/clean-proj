import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[new Product(1,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(2,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(3,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(4,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(5,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(6,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(7,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true)]
  products$:Observable<Product[]>=of(this.products);
  constructor() { }

  getProductById(idc:number){
    return this.products.filter(x=>x.id==idc)[0];

  }
}
