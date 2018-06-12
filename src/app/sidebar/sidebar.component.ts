import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

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
    if (this.cookieService.get('token') === '') {
      style = 'none';
    }
    return style;
  }

  getActive() {
    let style = 1;
    if (this.cookieService.get('token') === '') {
      style = 0.6;
    }
    return style;
  }


}
