import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[new Product(1,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(1,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(1,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(1,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(1,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(1,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(1,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true)]
  products$:Observable<Product[]>=of(this.products);
  constructor() { }
}
