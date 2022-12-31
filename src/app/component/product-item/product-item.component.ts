import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  
 @Input() product!:Product;
 @Output() clickedProduct=new EventEmitter<Product>();
  mess:string='Ajouter au panier';


  constructor() { }

  ngOnInit(): void {
  }

  getColor():string{
    return this.product.availability ? 'green' : 'red';
  }

  clicked(p:Product){
    // if(this.mess=='Ajouter au panier'){
    //   this.clickedProduct.emit(p);
    //   this.mess='Retirer du panier';
    // }
    // else{
    //   this.mess='Ajouter au panier';
    //   this.panierService.panier=this.panierService.panier.filter(x=>x.product.id!=p.id);
      

    // }

  }
}
