import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}


  form = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required]),
    role: new FormControl('') 

  })

  createContact(){

let contact  = {
    Email:  "d2@gmaigcl.com",
    Password: "asdfdsg"

  };

  console.log(contact);
  // this.authService.login(contact).subscribe(
  //   (response) => console.log(response)
  // )
  };

logIn(credentials){
  console.log(credentials)
  this.authService.login(credentials)
    .subscribe(result => {

      console.log(result);
      // if(result)
      //   this.validLogin=true;
      // else
      //   this.invalidLogin= true;
    })

    }



  ngOnInit() {
  }




  







}