import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  tokenValue = '';
  idValue = 0;

  input = {
    topic: '',
    email: '',
    choice: '',
    text: ''
  };

  constructor(private router: Router,
              private requester: RequestsService,
              private cookieService: CookieService,
              private token: TokenService) { }

  ngOnInit() {
    this.tokenValue = this.token.getToken();
    this.token.checkToken(this.tokenValue);
    this.idValue = +this.cookieService.get('userID');
  }

  postMsg() {
    const request = this.input;
    const response = this.requester.postMessage(this.input);
    this.postMsgHandler(response);
    return request;
  }

  postMsgHandler(request) {
    request.subscribe(response => {
      const statusMsg = response.status;
      // console.log('STATUS CODE RETURNED ON USER: ' + statusUser);
      if (this.requester.didSucceed(statusMsg)) {
        document.getElementById('contactSuccess').style.display = 'block';
      }
    }, error => {
      this.errorHandler(error.status);
    });
  }

  back() {
    this.router.navigate(['']);
  }

  errorHandler(status) {
    if (status === 401) {
      document.getElementById('contactFail').style.display = 'block';
      return true;
    }
    if (status === 500) {
      document.getElementById('contactFail').style.display = 'block';
      return true;
    }
    if (status === 400) {
      document.getElementById('contactFail').style.display = 'block';
      return true;
    }
    return false;
  }

}
