import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.cookieService.set('token', '');
  }

  toggleMenu() {
     const sidebar = document.getElementById('sidebar');
     sidebar.classList.toggle('active');
     const content = document.getElementById('content');
     content.classList.toggle('active');
     //
     if (sidebar.classList.contains('active')) {
       this.cookieService.set('sidebar', 'false');
     } else {
       this.cookieService.set('sidebar', 'true');
     }
  }

}
