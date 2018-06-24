import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenService {

  tokenValue = ''

  constructor(
    private router: Router,
    private cookieService: CookieService,
  ) { }

  getToken() {
    this.tokenValue = this.cookieService.get('basic_token');

    if(this.tokenValue != '') {
      return 'Token ' + this.tokenValue;
    }
    else {
      this.tokenValue = this.cookieService.get('bearer_token');

      if(this.tokenValue != '') {
        return 'Bearer ' + this.tokenValue;
      }
    }

    return '';
  }

  checkToken(token) {
    if (token === '') {
      return false;
    } else {
      document.getElementById('register').style.display = 'none';
      document.getElementById('login').style.display = 'none';
      document.getElementById('deSuaOpiniao').style.display = 'block';
      document.getElementById('profile').style.display = 'block';
      document.getElementById('logout').style.display = 'block';
      return true;
    }
  }

  filterRestrictPage(token) {
    if (token === '') {
      this.router.navigate(['login']);
      return true;
    }
  }

  filterLoginPage(token) {
    if (token !== '') {
      this.router.navigate(['']);
      return true;
    }
  }

}
