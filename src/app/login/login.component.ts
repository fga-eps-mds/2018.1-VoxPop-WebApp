import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(private router:Router,
                private requester:RequestsService){ }

    ngOnInit() {
    }

    login(e: any){
        var user: LoginModel;
        user = {
            username: e.target.elements[0].value,
            password: e.target.elements[1].value
        }
        console.log(user);

        this.requester.postAuthentication(user).subscribe(response => {
            let statusAuthentication = response.status;
            let token = response.headers["token"];

            if(this.requester.didSucceed(statusAuthentication)){
                this.router.navigate(['main-page']);
            }else{
                alert("Email ou senha inválido")
            }
        })
    }


}
