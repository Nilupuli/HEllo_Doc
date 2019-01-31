import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterService } from '../../shared/services/register.service'


@Component({
    selector: 'app-register3',
    templateUrl: './register3.component.html',
    styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {


    constructor(
        private authService: AuthService,
        private regPatient: RegisterService,
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

   

    ngOnInit() {

    }

    logIn(credentials){
        console.log(credentials)
      
          }



}