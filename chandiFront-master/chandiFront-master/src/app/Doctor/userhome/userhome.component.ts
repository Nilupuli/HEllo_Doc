import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  userId:''
  name:''
  email:''
  phone:''
  profession:''

  constructor(private _router:Router) { }

  ngOnInit() {
    // var userData = localStorage.getItem('loggedUser');
    // console.log(userData)
  }
  moveToViewPatient(){
    this._router.navigate(['/searchp']);
  }

  moveToAppointmentList(){
    this._router.navigate(['/applist']);
  }

 

}
