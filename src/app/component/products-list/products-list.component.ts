import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/repository/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products$!:Observable<Product[]>;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products$=this.productService.products$;
  }

}
