import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebar = '';
  tokenValue = '';

  constructor(
    private cookieService: CookieService,
    private token: TokenService,
  ) { }

  ngOnInit() {
    this.sidebar = this.cookieService.get('sidebar');
    this.setSidebar(this.sidebar);
  }

  setSidebar(sidebarCookie) {
    if (sidebarCookie === 'false') {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
      const content = document.getElementById('content');
      content.classList.toggle('active');
    }
  }

  getStyle() {
    let style = '';
    if (this.token.getToken() === '') {
      style = 'disabled';
    }
    return style;
  }

  isLogged() {
    if (this.token.getToken() === '') {
      return false;
    }
    return true;
  }
}
