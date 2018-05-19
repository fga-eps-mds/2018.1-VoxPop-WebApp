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

  term = '';
  offset = 1;
  tokenValue = '';
  pages = 1;
  itemsPerPage = 10;
  votePosition: number;
  userId: number;
  numberPLsVoted: number;
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
    this.userId = Number(this.cookieService.get('userID'));
    this.token.checkToken(this.tokenValue);
    this.votePosition = 0;
    this.propositions(1, '');
  }

  propositions(offset: number, term) {
    this.term = term;
    let req: any;
    term = term.toUpperCase();
    if (offset < 1 || isNaN(Number(offset))) {
      alert('Número de páginas inválido, favor digitar um número positivo');
      return -1;
    }
    this.offset = Number(offset);
    req =  this.requester.getSearchVotedProposition((offset - 1) * this.itemsPerPage, term);
    this.handlePropositionsSearchResponse(req, offset, term);
    return req;
  }

  handlePropositionsSearchResponse(request, offset, term) {
    this.requester.getSearchVotedProposition((offset - 1) * this.itemsPerPage, term).subscribe( response => {
      const body = response['body'];
      this.propositionVote = body['results'];
      this.numberPLsVoted = body['count'];
      for (let j = 0; j < this.numberPLsVoted; j++) {
        this.proposition.push(this.propositionVote[j]['proposition']);
        this.proposition[j]['option'] = this.propositionVote[j]['option'];
      }
    });
  }

  specifyProposition(position) {
    this.votePosition = position;
  }

  editVote(opinion: string) {
    let status;
     const vote: UpdateVoteModel = {
       user: this.userId,
       proposition: this.propositionVote[this.votePosition].proposition.id,
       option: opinion
    };

    this.requester.updateVote(vote, this.propositionVote[this.votePosition]['id']).subscribe(response => {
      status = response.status;

      if (!this.requester.didSucceed(status)) {
        alert('Voto não editado, favor tentar de novo mais tarde');
      } else {
        alert('Voto editado com sucesso!');
        this.propositions(1, '');
      }

    });

  }

}