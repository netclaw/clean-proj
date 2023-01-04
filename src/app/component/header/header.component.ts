import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/model/Client';
import { NewClientService } from 'src/app/service/new-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentClient!:Observable<Client>;

    


  constructor(private newclientService:NewClientService) { 
  }

  ngOnInit(): void {
    // of(this.newclientService.loggedCient);
    
  }
  ngOnChanges(){
    this.currentClient=of(this.newclientService.loggedCient);

  }


}
