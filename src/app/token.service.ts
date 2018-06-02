import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor() { }

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

}
