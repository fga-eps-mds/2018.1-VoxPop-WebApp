import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { UserModel } from '../../models/user';
import { SocialInformationModel } from '../../models/socialInformation'
import { and } from '@angular/router/src/utils/collection';
import { InputValidatorService } from '../input-validator.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user: any = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    social_information: {
      region: null,
      income: null,
      education: null,
      race: null,
      gender: null,
      birth_date: null
    }
  };

  constructor(private router: Router,
    private requester: RequestsService,
    private validator: InputValidatorService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
  }


  registerUser() {
    if(this.user.social_information.region == 'null') {
      this.user.social_information.region = null;
    }
    if(this.user.social_information.income == 'null') {
      this.user.social_information.income = null;
    }
    if(this.user.social_information.education == 'null') {
      this.user.social_information.education = null;
    }
    if(this.user.social_information.race == 'null') {
      this.user.social_information.race = null;
    }
    if(this.user.social_information.gender == 'null') {
      this.user.social_information.gender = null;
    }
    let req;
    req = this.requester.postUser(this.user);
    this.registerUserHandler(req);
    return req;
  }

  registerUserHandler(request) {
    request.subscribe(response => {
      const statusUser = response.status;
      if (this.requester.didSucceed(statusUser)) {
        this.router.navigate(['login']);
        this.cookieService.set('success', 'true');
      }
    },
    error => {
      const statusAuth = error.status;
      this.validator.errorHandler(statusAuth);
    });
  }
}
