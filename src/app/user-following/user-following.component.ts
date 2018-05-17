import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-user-following',
  templateUrl: './user-following.component.html',
  styleUrls: ['./user-following.component.css']
})
export class UserFollowingComponent implements OnInit {

  tokenValue = '';

  constructor(private requester: RequestsService,
    private cookieService: CookieService,
    private token: TokenService) { }

  ngOnInit() {
  }

}
