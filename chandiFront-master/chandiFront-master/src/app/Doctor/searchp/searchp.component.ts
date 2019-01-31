import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../shared/services/register.service';

@Component({
  selector: 'app-searchp',
  templateUrl: './searchp.component.html',
  styleUrls: ['./searchp.component.css']
})
export class SearchpComponent implements OnInit {


  constructor(
    private _router:Router,
    private _services : RegisterService,
    ) {

      

     }

  ngOnInit() {
    const id  = localStorage.getItem('email');
    this._services.viewDoctorDetails(id)
    .subscribe(res=>console.log(res))



  }

  moveToAppointmentList(){
    this._router.navigate(['/applist']);
  }

 


  moveToUserPage(){
    this._router.navigate(['/user']);
  }
  
}
