import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { PropositionModel } from '../../models/proposition';
import { CookieService } from 'ngx-cookie';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-minhas-pls',
  templateUrl: './minhas-pls.component.html',
  styleUrls: ['./minhas-pls.component.css']
})
export class MinhasPlsComponent implements OnInit {

  tokenValue = '';
  numberPLsVoted: number;
  pages: Array<number> = [1];
  itemsPerPage = 10;

  proposition: Array<PropositionModel> = [
    {
      proposition_id: null,
      proposition_type: '',
      proposition_type_initials: '',
      number: null,
      year: null,
      abstract: '',
      processing: '',
      situation: '',
      url_full: ''
    }
  ];

  constructor(
    private requester: RequestsService,
    private cookieService: CookieService,
    private token: TokenService
  ) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);
    this.numberPLsVoted = 1;
    this.propositions(0);
  }

  propositions(offset: number) {
    this.pages = [1];
    this.requester.getVotedProposition((offset - 1) * this.itemsPerPage).subscribe( response => {
      this.proposition = response['results'];
      this.numberPLsVoted = response['count'];
      for (let i = 2; i <= this.numberPLsVoted / this.itemsPerPage; i++) {
        this.pages.push(i);
      }
      console.log(this.proposition);
      console.log(this.numberPLsVoted);
    });
  }

}
