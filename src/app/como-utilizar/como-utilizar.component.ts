import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-como-utilizar',
  templateUrl: './como-utilizar.component.html',
  styleUrls: ['./como-utilizar.component.css']
})
export class ComoUtilizarComponent implements OnInit {

  tokenValue = '';

  constructor(private token: TokenService) { }

  ngOnInit() {
    this.tokenValue = this.token.getToken();
    this.token.checkToken(this.tokenValue);
  }

}
