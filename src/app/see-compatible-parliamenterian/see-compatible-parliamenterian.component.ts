import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RequestsService } from '../requests.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-see-compatible-parliamenterian',
  templateUrl: './see-compatible-parliamenterian.component.html',
  styleUrls: ['./see-compatible-parliamenterian.component.css']
})
export class SeeCompatibleParliamenterianComponent implements OnInit {

  term = '';
  loading = true;
  most_compatible: any = [
  ];

  constructor(
    private cookieService: CookieService,
    private token: TokenService,
    private requester: RequestsService,
  ) { }

  ngOnInit() {
    this.mostCompatible();
  }

  mostCompatible() {
    let req: any;
    this.most_compatible = [];
    req =  this.requester.getMostCompatible();
    this.handleMostCompatibleResponse(req);
    return req;
  }

  handleMostCompatibleResponse(req) {
    req.subscribe( response => {
      const body = response['body'];
      this.most_compatible = body['results'];
      this.loading = false;
    });
  }
}
