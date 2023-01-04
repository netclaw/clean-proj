import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {NewClientService} from "../../service/new-client.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private newClientService : NewClientService,private router:Router) { }




  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userId: [null, [Validators.required, Validators.minLength(6)]],
      userEmail: [null, [Validators.required, Validators.email]],
      userName: [null, [Validators.required]],
      userTel: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      userAddress: [null],
      userP: [null, [Validators.required,Validators.minLength(6)]]
    });

    
  }

  onSubmit() {
    //console.log(this.signUpForm.value.get('userId').value);
    this.newClientService.addNewClient(this.signUpForm.value)
    this.router.navigateByUrl("login");
    
  }
  }

