import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-most-followed',
  templateUrl: './most-followed.component.html',
  styleUrls: ['./most-followed.component.css']
})
export class MostFollowedComponent implements OnInit {

  tokenValue = '';
  loading = true;
  most_followed: any = [];

  constructor(
    private cookieService: CookieService,
    private token: TokenService,
    private requester: RequestsService,
  ) { }

  ngOnInit() {
    this.tokenValue = this.token.getToken();
    this.token.checkToken(this.tokenValue);
    this.mostFollowed();
  }

  mostFollowed() {
    let req: any;
    req =  this.requester.getMostFollowed();
    this.handleMostFollowedResponse(req);
    return req;
  }

  handleMostFollowedResponse(req) {
    req.subscribe( response => {
      this.most_followed = response['body']['results'];
      this.loading = false;
    });
  }

}
