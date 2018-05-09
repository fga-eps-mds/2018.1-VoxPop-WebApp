import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { PropositionModel } from '../../models/proposition';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { UpdateVoteModel } from '../../models/vote';

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
  votePosition: number;

  propositionVote: any;
  proposition: any = [
    {
      option: null,
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
    this.votePosition = 0;
    this.propositions(1);
  }

  searchPL() {
    this.propositionsSearch(1);
  }

  propositions(offset: number) {
    let req: any;
    this.pages = [1];
    this.numberPLsVoted = 1;
    this.proposition = [];
    req =  this.requester.getVotedProposition((offset - 1) * this.itemsPerPage);
    this.handlePropositionsResponse(req, offset);
    return req;
  }

  propositionsSearch(offset: number) {
    let req: any;
    this.pages = [1];
    this.numberPLsVoted = 1;
    this.proposition = [];
    req =  this.requester.getVotedProposition((offset - 1) * this.itemsPerPage);
    this.handlePropositionsSearchResponse(req, offset);
    return req;
  }

  handlePropositionsResponse(request, offset) {
    this.requester.getVotedProposition((offset - 1) * this.itemsPerPage).subscribe( response => {
      const body = response['body'];
      this.propositionVote = body['results'];
      this.numberPLsVoted = body['count'];
      for (let j = 0; j < this.numberPLsVoted; j++) {
        this.proposition.push(this.propositionVote[j]['proposition']);
        this.proposition[j]['option'] = this.propositionVote[j]['option'];
      }
      for (let i = 2; i <= Math.ceil(this.numberPLsVoted / this.itemsPerPage); i++) {
        this.pages.push(i);
      }
      console.log(this.proposition);
      console.log(this.numberPLsVoted);
    });
  }

  handlePropositionsSearchResponse(request, offset) {
    this.requester.getVotedProposition((offset - 1) * this.itemsPerPage).subscribe( response => {
      const body = response['body'];
      this.propositionVote = body['results'];
      this.numberPLsVoted = body['count'];
      for (let j = 0; j < this.numberPLsVoted; j++) {
        this.proposition.push(this.propositionVote[j]['proposition']);
        this.proposition[j]['option'] = this.propositionVote[j]['option'];
      }
      for (let i = 2; i <= Math.ceil(this.numberPLsVoted / this.itemsPerPage); i++) {
        this.pages.push(i);
      }
      console.log(this.proposition);
      console.log(this.numberPLsVoted);
    });
  }

  specifyProposition(position) {
    this.votePosition = position;
  }

  editVote(opinion: string) {
    let status;
     const vote: UpdateVoteModel = {
       user: 10,
       proposition: this.proposition[this.votePosition].id,
       option: opinion
    };

    this.requester.updateVote(vote, this.propositionVote[this.votePosition]['id']).subscribe(response => {
      status = response.status;

      if (!this.requester.didSucceed(status)) {
        alert('Voto não editado, favor tentar de novo mais tarde');
      } else {
        alert('Voto editado com sucesso!');
        this.propositions(1);
      }

    });

  }

}
