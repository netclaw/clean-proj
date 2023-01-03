import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Form, FormBuilder} from '@angular/forms';
import {NewClientService} from "../../service/new-client.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm !: FormGroup;

  userId!:FormControl;
  userP!:FormControl;

  constructor(private formBuilder : FormBuilder,private clientService : NewClientService) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      userId: [null, [Validators.required, Validators.minLength(6)]],
      userP: [null, [Validators.required]]
    });
  }
  onSubmit(){
    this.clientService.loginClient(this.signInForm.value);
    console.log(this.clientService.loggedCient)


  }


}
