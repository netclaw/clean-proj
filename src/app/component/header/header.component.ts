import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/model/Client';
import { NewClientService } from 'src/app/service/new-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentClient$!:Observable<Client>;
  ClientForm!:FormGroup;

    


  constructor(private newclientService:NewClientService,private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    // of(this.newclientService.loggedCient);
    this.ClientForm=this.formBuilder.group({
      currentClient:Client
    });
    this.newclientService.loggedCient=this.ClientForm.value;
    this.currentClient$=this.ClientForm.valueChanges.pipe();
    
  }
  // ngOnChanges(){
  //   console.log("hjendr");
  //   console.log(this.currentClient);
  //   this.currentClient=of(this.newclientService.loggedCient);

  // }


}
