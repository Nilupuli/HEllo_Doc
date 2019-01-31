import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: Http
  ) { }

  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});

  docRegister(user: any) {
    console.log(user);
    return this.http.post("http://localhost:3000/doctor/addDoctor", user ).pipe(map(res => 
    console.log(res.json())));
  }

  patientRegister(user:any){
    console.log(user);
    return this.http.post("http://localhost:3000/patient/addPatient",user,{
      headers:this.headers
    });
  }

}


