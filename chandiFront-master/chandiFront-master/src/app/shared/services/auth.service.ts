import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class AuthService {

    constructor(
        private http: Http,
        private router: Router,
    ){ }

    private headers = new Headers({'content-Type':'application/json'});
    private option = new RequestOptions({headers:this.headers});

    register(user){
        console.log(user);
        return this.http.post("http://blooming-dusk-12909/register", {user});
    }

    // login(user){
    //     console.log(user);
    //     return this.http.post("http://blooming-dusk-12909/login", {user});
    // }

    
    login(user){
        console.log(user);
        return this.http.post("http://localhost:3000/users/login",user,{
            headers:this.headers
        });
    }
    

}