import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/login';
import { RequestsService } from '../requests.service';
import { HttpResponseBase } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

    valueInvalid = 'Usuário ou senha inválida';
    tokenValue = '';
    registerSuccess = '';
    logging = false;

    constructor(private router: Router,
                private requester: RequestsService,
                private token: TokenService,
                private cookieService: CookieService,
                private appComponent: AppComponent,) { }

    ngOnInit() {
        this.tokenValue = this.token.getToken();
        this.token.checkToken(this.tokenValue);
        this.token.filterLoginPage(this.tokenValue);
        this.registerSuccess = this.cookieService.get('success');
        this.checkRegister(this.registerSuccess);
    }

    login(username: string, password: string) {
        this.logging = true;
        this.cookieService.set('success', 'false');
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

    checkRegister(success) {
        if (success === 'true') {
            let registerAlert = document.getElementById('registerAlert').style.display = 'block';
        }
    }

    handleLoginResponse(request) {
      request.subscribe(response => {
          if (this.requester.didSucceed(response.status)) {
              this.cookieService.set('basic_token', response.body['token']);
              this.cookieService.set('userID', response.body['id']);
              this.cookieService.set('userUsername', response.body['username']);
              this.cookieService.set('userFirstName', response.body['first_name']);
              this.cookieService.set('userLastName', response.body['last_name']);
              this.router.navigate(['']);
              this.logging = false;
          }
      },
      error => {
          console.log(error);
          const statusAuth = error.status;
          this.errorHandler(statusAuth);
          this.logging = false;
      });
    }

    errorHandler (status) {
        if (status === 400) {
            document.getElementById('alert-invalid').style.display = 'block';
            return false;
        }
    }
}
