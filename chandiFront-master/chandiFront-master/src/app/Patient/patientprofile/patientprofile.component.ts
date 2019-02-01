import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../shared/services/register.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {

  constructor(private _router:Router,
    private _services : RegisterService,) { }

  ngOnInit() { 

    const id  = localStorage.getItem('email');
    this._services.viewPatientDetails(id)
    .subscribe(res=>console.log(res))


  }

  moveToBasicHealthInfo(){
    this._router.navigate(['/basicinfo']);
  }

   
  moveToPrescription(){
    this._router.navigate(['/prescription']);
    
  }

  
  moveToCurrentState(){
    this._router.navigate(['/currentstate']);
    
  }

  
  moveToLabReports(){
    this._router.navigate(['/lab']);
    
  }

  moveToMakeAppointment(){
    this._router.navigate(['/makeapp']);
    
  }

  moveToPatientHome(){
    this._router.navigate(['/patientprofile']);
    
  }

  moveToDiseaseHistroy(){
    this._router.navigate(['/histroy']);
    
  }


}