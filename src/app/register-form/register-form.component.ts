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
      federal_unit: null,
      city: null,
      income: null,
      education: null,
      job: '',
      birth_date: ''
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
    console.log(this.user);
    this.requester.postUser(this.user).subscribe(response => {
      const statusUser = response.status;
      console.log('STATUS CODE RETURNED ON USER: ' + statusUser);

        if (this.requester.didSucceed(statusUser)) {
          this.router.navigate(['']);
        }
    });

  }

 clickReturnButton() {
      document.getElementById('firstPart').style.display = 'block';
      document.getElementById('secondPart').style.display = 'none';
      document.querySelector('#registerBtn').setAttribute('disabled', 'disabled');
}

}
