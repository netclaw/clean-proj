import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm!: FormGroup;
userId!: FormControl;
email!: FormControl;
name!: FormControl;
tel!: FormControl;
addresseFacturation!: FormControl;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userId: [null, [Validators.required, Validators.minLength(6)]],
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required]],
      tel: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      addresseFacturation: [null, [Validators.required]]
    });
  }

  onSubmit(){
    
  }

}
