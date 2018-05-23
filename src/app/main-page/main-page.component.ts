import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { Token } from '@angular/compiler';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  tokenValue = '';
  idValue: Number;

  proposition: any = [{
    proposition_id: 0,
    proposition_type: '',
    proposition_type_initials: '',
    number: 0,
    year: 0,
    abstract: '',
    processing: '',
    situation: '',
    url_full: ''
  }];

  constructor(
    private cookieService: CookieService,
    private token: TokenService,
    private requester: RequestsService
  ) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);
    this.idValue = +this.cookieService.get('userID');
    this.propositions(3, 0);
  }

  propositions(limit: number, offset: number) {
    let req: any;
    this.proposition = [];
    req =  this.requester.getProposition(limit, offset);
    this.handlePropositionsResponse(req, limit, offset);
    return req;
  }

  handlePropositionsResponse(request, limit, offset) {
      this.requester.getProposition(limit, offset).subscribe( response => {
      const body = response['body'];
      this.proposition = body['results'];
    });
  }

}
