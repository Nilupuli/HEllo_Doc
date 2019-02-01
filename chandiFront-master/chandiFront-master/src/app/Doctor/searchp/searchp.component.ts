import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../shared/services/register.service';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-searchp',
  templateUrl: './searchp.component.html',
  styleUrls: ['./searchp.component.css'],
  providers: [PatientService]
})
export class SearchpComponent implements OnInit {

  email:''
  name:''
  address:''
  contactNo:''
  dateOdBirth:''
  occupation:''
  maritalState:''
  bloodGroup:''
  bloodSugar:''
  bloodPresure:''
  ScopedCredentialInfo:''
  weight:''
  height:''
  colesterol:''
  allergy:''

  constructor(
    private _router:Router,
    private _services : RegisterService,
    private Patient: PatientService
    ) {
     }

  ngOnInit() {
    const id  = localStorage.getItem('email');
    this._services.viewDoctorDetails(id)
    .subscribe(res=>{
      console.log(res.json().msg[0])
      this.email = res.json().msg[0].email
      this.name = res.json().msg[0].name 
      this.address = res.json().msg[0].addStreet
      this.contactNo = res.json().msg[0].contactNo
      // this.dateOdBirth = res.json().msg[0].name
      // this.occupation = res.json().msg[0].name
      // this.maritalState = res.json().msg[0].name
      // this.bloodGroup = res.json().msg[0].name
      // this.bloodPresure = res.json().msg[0].name
      // this.bloodSugar = res.json().msg[0].name
      // this.weight = res.json().msg[0].name
      // this.height = res.json().msg[0].name
      // this.colesterol = res.json().msg[0].name
      // this.allergy = res.json().msg[0].name

    })
  }

  moveToAppointmentList(){
    this._router.navigate(['/applist']);
  }

  Addprescription(){
    this._router.navigate(['/addprescription'])
  }


  moveToUserPage(){
    this._router.navigate(['/user']);
  }

  moveToAddprescription(){
    this._router.navigate(['/addprescription']);
  }

  getPatientData(email){
    this.Patient.getPatientData(email)
      .subscribe(responce => {
        console.log(responce)
        console.log(responce.json().msg)
      })
  }
  
}
