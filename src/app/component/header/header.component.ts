import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Client } from 'src/app/model/Client';
import { NewClientService } from 'src/app/service/new-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentClient$!:Observable<Client>;
  // logged$!:Observable<boolean>;
  logged:boolean=false;
  private destroy$!: Subject<boolean>;

    


  constructor(private newclientService:NewClientService) { 
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.currentClient$=this.newclientService.getLoggedInName;
    this.newclientService.logged.subscribe(x=>this.logged=x);
    // this.logged$=this.newclientService.logged;
    

    
    
  }

  logOut(){
    this.newclientService.logoutClient();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
}


}
