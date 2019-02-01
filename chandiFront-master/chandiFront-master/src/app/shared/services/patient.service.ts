import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class PatientService {

    constructor(
        private http: Http,
        private router: Router,
    ){ }

    private headers = new Headers({'content-Type':'application/json'});
    private option = new RequestOptions({headers:this.headers});
    url = "https://hello-doc-app.herokuapp.com";
    
    login(user){
        console.log(user);
        return this.http.post(`${this.url}/users/login`,user,{
            headers:this.headers
        });
    }
    addBasicInfo(data){
        console.log(data)
        return this.http.post(`${this.url}/patient/addpatientbasichealthinfo`, data,{
            headers: this.headers
        });
    }

}