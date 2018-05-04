import { Component, OnInit } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})

export class EditPageComponent implements OnInit {

  valuePassword = '';
  valueInvalidPassword = '';
  valueUsername = '';
  valueEmail = '';
  valueInvalidInput = '';
  password = '';
  confirmPassword = '';
  username = '';
  statusPassword = false;
  statusValidPassword = false;
  statusUsername = false;
  statusEmail = false;
  danger = '#d9534f';
  sucess = '#5cb85c';
  first_name  = '';
  last_name = '';
  email = '';

  tokenValue = '';
  idValue = 0;

  user: any = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    social_information: {
        state: '',
        city: '',
        income: 0,
        education: '',
        job: '',
        birth_date: 0,
    },
  };

  constructor(private router: Router,
              private requester: RequestsService,
              private cookieService: CookieService,
              private token: TokenService) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);
    this.idValue = +this.cookieService.get('userID');
    console.log(this.idValue);
    this.requester.getUser(this.idValue).subscribe( response => {
      this.user = response['body'];
      console.log(this.user);
      this.username = this.user['username'];
      this.first_name = this.user['first_name'];
      this.last_name = this.user['last_name'];
      this.email = this.user['email'];
    });
  }

}
