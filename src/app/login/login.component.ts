import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login';
import { RequestsService } from '../requests.service';
import { HttpResponseBase } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

    valueInvalid = 'Usuário ou senha inválida';
    tokenValue = '';

    constructor(private router: Router,
                private requester: RequestsService,
                private token: TokenService,
                private cookieService: CookieService) { }

    ngOnInit() {
        this.tokenValue = this.cookieService.get('token');
        this.token.checkToken(this.tokenValue);
    }

    login(username: string, password: string) {
        let user: LoginModel;
        let req: any;
        user = {
            username: username,
            password: password
        };

        req =  this.requester.postAuthentication(user);
        this.handleLoginResponse(req);
        return req;

    }

    handleLoginResponse(request) {
      let statusAuthentication;
      let token;
      let userID;
      let userUsername;
      let userFirstName;
      let userLastName;

      request.subscribe(response => {
          statusAuthentication = response.status;
          token = response.body['token'];
          userID = response.body['id'];
          userUsername = response.body['username'];
          userFirstName = response.body['first_name'];
          userLastName = response.body['last_name'];

          if (this.requester.didSucceed(statusAuthentication)) {
              this.cookieService.set('token', token);
              this.cookieService.set('userID', userID);
              this.cookieService.set('userUsername', userUsername);
              this.cookieService.set('userFirstName', userFirstName);
              this.cookieService.set('userLastName', userLastName);
              this.router.navigate(['']);
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
