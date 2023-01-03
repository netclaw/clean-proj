import {FormControl} from "@angular/forms";
import {CartItem} from "./CartItem";


  export class Client {

    userP !: String;
    userId !: String;
    userEmail !: String;
    userName !: String;
    userTel !: String;
    userAddress !: String;

    panier:CartItem[]=new Array<CartItem>();

    constructor(userId: String,
                userEmail: String,
                userName: String,
                userTel: String,
                userAddress: String, userP: String) {
      this.userId = userId;
      this.userEmail = userEmail;
      this.userTel = userTel;
      this.userAddress = userAddress;
      this.userName = userName;
      this.userP = userP;


    }

  }

