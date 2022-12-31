import { Product } from "./Product";

export class CartItem{
    amount:number;
    product:Product;

    constructor(amount:number,
        product:Product){
            this.amount=amount;
            this.product=product;

    }
}