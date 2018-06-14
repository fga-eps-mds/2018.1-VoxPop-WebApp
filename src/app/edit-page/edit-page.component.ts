import { Component, OnInit } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { UserModel } from '../../models/user';
import { InputValidatorService } from '../input-validator.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})

export class EditPageComponent implements OnInit {

  tokenValue = '';
  userID = 0;

  user: any = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    social_information: {
        id: 0,
        owner: 0,
        federal_unit: null,
        city: '',
        income: null,
        education: null,
        job: '',
        birth_date: 0,
    },
  };

  constructor(private router: Router,
              private requester: RequestsService,
              private cookieService: CookieService,
              private token: TokenService,
              private validator: InputValidatorService
  ) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);
    this.token.filterRestrictPage(this.tokenValue);
    this.userID = +this.cookieService.get('userID');
    this.requester.getUser(this.userID).subscribe( response => {
      this.user = response['body'];
      // console.log(this.user);
    });
  }

  updateUser() {
    console.log(this.user);
    const request = this.requester.putUser(this.user, this.userID);
    this.updateUserHandler(request);
    return request;
  }


  updateUserHandler(request) {
    request.subscribe(response => {
      const statusUser = response.status;
      // console.log('STATUS CODE RETURNED ON USER: ' + statusUser);
      if (this.requester.didSucceed(statusUser)) {
        this.router.navigate(['']);
      }
    }, error => {
      this.errorHandler(error.status);
    });
  }

  errorHandler(status) {
    if (status === 401) {
      document.getElementById('alert-invalid').style.display = 'block';
      return true;
    }
    if (status === 500) {
      document.getElementById('alert-invalid').style.display = 'block';
      return true;
    }
    if (status === 400) {
      document.getElementById('alert-invalid').style.display = 'block';
      return true;
    }
    return false;
  }
}
