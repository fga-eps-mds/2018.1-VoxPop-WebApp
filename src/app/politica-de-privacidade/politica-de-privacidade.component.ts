import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-politica-de-privacidade',
  templateUrl: './politica-de-privacidade.component.html',
  styleUrls: ['./politica-de-privacidade.component.css']
})
export class PoliticaDePrivacidadeComponent implements OnInit {

  tokenValue = '';

  constructor(private requester: RequestsService,
              private cookieService: CookieService,
              private token: TokenService) { }

  ngOnInit() {
    this.tokenValue = this.token.getToken();
    this.token.checkToken(this.tokenValue);
  }

}
