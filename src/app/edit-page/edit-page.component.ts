import { Component, OnInit } from '@angular/core';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { UserModel } from '../../models/user';

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


  tokenValue = '';
  userID = 0;

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
              private token: TokenService,
  ) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);
    this.userID = +this.cookieService.get('userID');
    this.requester.getUser(this.userID).subscribe( response => {
      this.user = response['body'];
      console.log(this.user);
    });
  }

  updateUser(e: any) {
    let user: UserModel;
    user = {
      username: e.target.elements[0].value,
      first_name: e.target.elements[1].value,
      last_name: e.target.elements[2].value,
      password: e.target.elements[3].value,
      email: e.target.elements[5].value,
      social_information: {
        state: e.target.elements[6].value,
        city: e.target.elements[7].value,
        income: e.target.elements[8].value,
        education: e.target.elements[8].value,
        job: e.target.elements[10].value,
        birth_date: e.target.elements[11].value
      }
     };
     this.requester.putUser(user, this.userID).subscribe(response => {
        const statusUser = response.status;
        console.log('STATUS CODE RETURNED ON USER: ' + statusUser);

        if (this.requester.didSucceed(statusUser)) {
          this.router.navigate(['']);
        }
     });
  }

}
