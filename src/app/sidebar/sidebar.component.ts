import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebar = ''

  constructor(
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
    this.sidebar = this.cookieService.get('sidebar');
    if(this.sidebar == 'false') {
      var sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle("active");
      var content = document.getElementById("content");
      content.classList.toggle("active");
    }
  }

}
