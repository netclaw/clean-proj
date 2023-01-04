import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewClientService} from "../../service/new-client.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;
userId!: FormControl;
userEmail!: FormControl;
userName!: FormControl;
userTel!: FormControl;
userAddress!: FormControl;

userP !: FormControl;

  constructor(private formBuilder:FormBuilder, private newClientService : NewClientService) { }




  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userId: [null, [Validators.required, Validators.minLength(6)]],
      userEmail: [null, [Validators.required, Validators.email]],
      userName: [null, [Validators.required]],
      userTel: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      userAddress: [null, [Validators.required]],
      userP: [null, [Validators.required]]
    });
  }

  onSubmit() {
    //console.log(this.signUpForm.value.get('userId').value);
    this.newClientService.addNewClient(this.signUpForm.value)
  }
  }

