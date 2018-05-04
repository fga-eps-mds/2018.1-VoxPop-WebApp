import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userID : number;
  user : any = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    social_information: {
        federal_unit: '',
        city: '',
        income: 0,
        education: '',
        job: '',
        birth_date: '',
    }
  }
  social_information : any = {
    federal_unit: '',
    city: '',
    income: 0,
    education: '',
    job: '',
    birth_date: '',
  }
  tokenValue = '';

  constructor(private router: Router,
              private cookieService: CookieService,
              private token: TokenService,
              private requester: RequestsService) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);
    this.userID = +this.cookieService.get('userID');
    this.requester.getUser(this.userID).subscribe( response => {
      console.log(response);
      this.user = response;
      this.social_information = this.user.social_information;
      console.log(this.user);
      console.log(this.social_information);
    }, error => {
      console.log("something wrong")
      alert("Algo de errado não está certo!");
    });
  }

  edit(){
    this.router.navigate(['profile/edits']);
  }
}
