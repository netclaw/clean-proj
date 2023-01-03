import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Product } from '../model/Product';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[new Product(1,"ipad","iphone de balur",6000,0,0,0,"null","null","https://n9.cl/w4iwu",[""],true),new Product(2,"iphone","iphone de balur",9000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(3,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(4,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(5,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(6,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true),new Product(7,"iphone","iphone de balur",6000,0,0,0,"null","null","https://rb.gy/hgf5rq",[""],true)]
  products$:Observable<Product[]>=of(this.products);
  constructor(private http:HttpClient) { }

  getProductById(idc:number){
    return this.products.filter(x=>x.id==idc)[0];

  }

  getAllProducts(){
    return this.http.get<Product[]>('https://dummyjson.com/products');

   }
}
