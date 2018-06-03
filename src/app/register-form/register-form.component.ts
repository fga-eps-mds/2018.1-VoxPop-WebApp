import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { UserModel } from '../../models/user';
import { SocialInformationModel } from '../../models/socialInformation'
import { and } from '@angular/router/src/utils/collection';
import { InputValidatorService } from '../input-validator.service';

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
      federal_unit: 'N',
      city: '',
      income: '-1',
      education: 'N',
      job: '',
      birth_date: '0001-01-01',
    }
  };

  constructor(private router: Router,
    private requester: RequestsService,
    private validator: InputValidatorService,
  ) { }

  ngOnInit() {
  }


  registerUser() {
    // TODO - adicionar validação de criação. Checar http status code = 201.
    // AINDA é TODO /\
    // console.log(this.user);
    let req;
    req = this.requester.postUser(this.user);
    this.registerUserHandler(req);
    return req;
  }

  registerUserHandler(request) {
    request.subscribe(response => {
      const statusUser = response.status;
      // console.log('STATUS CODE RETURNED ON USER: ' + statusUser);

        if (this.requester.didSucceed(statusUser)) {
          this.router.navigate(['']);
        }
    },
    error => {
        console.log(error);
        const statusAuth = error.status;
        this.validator.errorHandler(statusAuth);
    });
  }
}
