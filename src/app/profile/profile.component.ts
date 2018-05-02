import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userID : number;
  user : any;
  tokenValue = '';

  constructor(private cookieService: CookieService,
              private token: TokenService,
              private requester: RequestsService) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);
    this.userID = +this.cookieService.get('userID');
    this.requester.getUser(this.userID).subscribe( response => {
      console.log("Estou aqui!");
      this.user = response['body'];
    }, error => {
      console.log("something wrong")
      //alert("Algo de errado não está certo!");
    });
  }
}
