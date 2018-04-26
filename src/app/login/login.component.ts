import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login';
import { RequestsService } from '../requests.service';
import { HttpResponseBase } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

    valueInvalid = "Usuário ou senha inválida"
    constructor(private router:Router,
                private requester:RequestsService,
                private cookieService:CookieService){ }

    ngOnInit() {
    }

    login(e: any){
        var user: LoginModel;
        user = {
            username: e.target.elements[0].value,
            password: e.target.elements[1].value
        }

        this.requester.postAuthentication(user).subscribe(response => {
            let statusAuthentication = response.status;
            let token = response.body["token"];
            console.log(response);
            

            if(this.requester.didSucceed(statusAuthentication)){
                this.cookieService.set('token', token);
                this.router.navigate(['']);
                return true;
            }else{
                alert("Email ou senha inválido");
                return false;
            }
        },
        error => {
            console.log(error);
            let statusAuthentication = error.status;
            this.errorHandler(statusAuthentication);
            return false;
        })
    }

    errorHandler (status){
        if(status == 400){
            document.getElementById('alert-invalid').style.display="block";
            return false;
        }
    }

}
