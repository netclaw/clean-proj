import { Injectable } from '@angular/core';
import {Client} from "../model/Client";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class NewClientService {
  allclients : Client[] = new Array<Client>();
  loggedCient !: Client;

  constructor() { }

  addNewClient(client : {
    userId : String,
    userEmail : String,
    userName : String,
    userTel : String,
    userAddress : String,userP : String}){
    // @ts-ignore
    //const newClient : Client = new Client(client.value.get('userId'),client.get('userEmail')?.value, client.get('userName')?.value, client.get('userTel')?.value, client.get('userAddress')?.value, client.get('userP')?.value);
    const newClient : Client = {...client};
    this.allclients.push(newClient);
    console.log(this.allclients);
  }
  loginClient(client : {userId : String,userP:String}){
    for(let i=0; i<this.allclients.length; i++){
      if (this.allclients[i].userId == client.userId){
        this.loggedCient=this.allclients[i];
      }
    }
    if (this.loggedCient==null){console.log("error no such client")}
  }
}
