import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  cookieValue = '';

  constructor(
    private cookieService:CookieService
  ) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('token');
    console.log(this.cookieValue);
  }

  
  

}
