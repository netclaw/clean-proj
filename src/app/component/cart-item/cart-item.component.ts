import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  amount!:number;
  @Output() changeProductAmount=new EventEmitter<CartItem>();

  constructor(private formBuilder: FormBuilder,private host: ElementRef<HTMLElement>) { 
    
  }

  ngOnInit(): void {
    this.amount=this.cartItem.amount;
    
  }

  onAmountChange(){
    console.log(this.amount);
    this.cartItem.amount=this.amount;
    this.changeProductAmount.emit(this.cartItem);
    if(this.amount==0){
      this.host.nativeElement.remove();

    }
    


  }

}
