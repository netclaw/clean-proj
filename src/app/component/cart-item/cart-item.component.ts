import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { CartItem } from 'src/app/model/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!:CartItem;
  itemform!:FormGroup;
  priceform$!:Observable<number>;

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.priceform$=of(this.cartItem.product.price);
    this.itemform=this.formBuilder.group({
      amount:[1],
      price:[this.cartItem.product.price]
    },
    {
      updateOn:'blur'
    });
    this.priceform$=this.itemform.valueChanges.pipe(map(x=>x.amount*this.cartItem.product.price));
  }

  onAmountChange(){


  }

}
