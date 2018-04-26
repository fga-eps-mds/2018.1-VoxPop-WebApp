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

    valueInvalid = 'Usuário ou senha inválida'
    constructor(private router: Router,
                private requester: RequestsService,
                private cookieService: CookieService) { }

    ngOnInit() {
    }

    login(username: string, password: string) {
        let user: LoginModel;
        user = {
            username: username,
            password: password
        };

        return this.requester.postAuthentication(user);

    }

    handleLoginResponse(request) {
      let statusAuthentication;
      let token;

      request.subscribe(response => {
          statusAuthentication = response.status;
          token = response.body['token'];
          console.log(response);


          if (this.requester.didSucceed(statusAuthentication)){
              this.cookieService.set('token', token);
              this.router.navigate(['']);
          } else {
              alert('Email ou senha inválido');
          }
      },
      error => {
          console.log(error);
          const statusAuth = error.status;
          this.errorHandler(statusAuth);
      });
    }

    errorHandler (status) {
        if (status === 400) {
            document.getElementById('alert-invalid').style.display = 'block';
            return false;
        }
    }

}
