import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tokenValue = '';

  constructor(
    private cookieService:CookieService,
    private token:TokenService
  ) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);   
  }

  logout(){
    this.cookieService.set('token', '');
  }

}
