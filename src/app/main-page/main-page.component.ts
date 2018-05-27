import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { Token } from '@angular/compiler';
import { RequestsService } from '../requests.service';

declare var Chart:any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  tokenValue = '';
  idValue: Number;
  ctx: HTMLElement;
  chart: any;

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

  most_actives: any = [
    {
      parliamentary: null,
      votes: '',
    }
  ];

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
    this.mostActives(3, 0);
    this.ctx = document.getElementById('myChart');
  }

  propositions(limit: number, offset: number) {
    let req: any;
    this.proposition = [];
    req =  this.requester.getProposition(limit, offset);
    this.handlePropositionsResponse(req, limit, offset);
    return req;
  }

  mostActives(limit: number, offset: number) {
    let req: any;
    this.most_actives = [];
    req =  this.requester.getMostActive(limit, offset);
    this.handleMostActivesResponse(req, limit, offset);
    return req;
  }

  handlePropositionsResponse(request, limit, offset) {
      this.requester.getProposition(limit, offset).subscribe( response =>{
      const body = response['body'];
      this.proposition = body['results'];
    });
  }

  handleMostActivesResponse(request, limit, offset) {
      this.requester.getMostActive(limit, offset).subscribe( response =>{
      const body = response['body'];
      this.most_actives = body['results'];

      var i, labels_list = [], data_list = [];
      for (i = 0; i < this.most_actives.length; i++) {
          labels_list.push(this.most_actives[i]['parliamentary'].name);
          data_list.push(this.most_actives[i].votes);
      }
      data_list.push(200);
      this.chart = new Chart(this.ctx, {
          // The type of chart we want to create
          type: 'horizontalBar',

          // The data for our dataset
          data: {
              labels: labels_list,
              datasets: [{
                  label: "Quantidade de votos",
                  backgroundColor: 'rgb(51,122,183)',
                  borderColor: 'rgb(255, 255, 255)',
                  data: data_list,
              }]
          },

          // Configuration options go here
          options: {}
      });
    });
  }


}
