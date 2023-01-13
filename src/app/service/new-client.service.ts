import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import {Client} from "../model/Client";
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class NewClientService {
  allclients : Client[] = [new Client("net","a.gmail.com","ysf","0661233452","","alfonso")];
  loggedCient : Client=new Client("","","","","","");
  public getLoggedInName = new Subject<Client>();
  public logged = new Subject<boolean>();
  islogged:boolean=false;

  constructor(private cartService:CartService) {
   
  }

  addNewClient(client : {
    userId : String,
    userEmail : String,
    userName : String,
    userTel : String,
    userAddress : String,userP : String}){
    // @ts-ignore
    const newClient : Client = {...client};
    this.allclients.push(newClient);
  }
  loginClient(client : {userId : String,userP:String}){
    for(let i=0; i<this.allclients.length; i++){
      if (this.allclients[i].userId == client.userId){
        this.loggedCient=this.allclients[i];
        this.logged.next(true);
        this.islogged=true;
      }
    }
    if (this.loggedCient==null){console.log("error no such client")}
    this.getLoggedInName.next(this.loggedCient);
    this.cartService.loadClientCart(this.loggedCient);
  }

  public saveCart(client:Client){
    this.loggedCient=client;
    this.allclients=this.allclients.filter(x=>x.userEmail!=client.userEmail);
    this.allclients.push(this.loggedCient);

  }

  logoutClient(){
    this.islogged=false;
    console.log("unloged");
    this.loggedCient=new Client("","","","","","");
    this.getLoggedInName.next(this.loggedCient);
    this.logged.next(false);
    this.cartService.panier=[];
  }
}
