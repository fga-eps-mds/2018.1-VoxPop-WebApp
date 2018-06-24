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
  tokenValue = '';
  showEditButtons = false;
  pages = 1;
  offset = 0;
  itemsPerPage = 10;
  votePosition: number;
  userId: number;
  numberPLsVoted: number;
  propositionVote: any;
  loading = true;

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
    this.tokenValue = this.token.getToken();
    this.userId = Number(this.cookieService.get('userID'));
    this.token.checkToken(this.tokenValue);
    this.token.filterRestrictPage(this.tokenValue);
    this.votePosition = 0;
    this.propositions(1, '');
  }

  propositions(offset: number, term) {
    if (offset < 1 || isNaN(Number(offset)) || offset > this.pages) {
      alert('Número de páginas inválido, favor digitar um número positivo');
      return;
    }
    this.term = term.toUpperCase();
    let req: any;
    this.pages = 1;
    this.numberPLsVoted = 1;
    this.proposition = [];
    req =  this.requester.getSearchVotedProposition((offset - 1) * this.itemsPerPage, this.term);
    this.handlePropositionsSearchResponse(req, offset);
    return req;
  }

  handlePropositionsSearchResponse(request, offset) {
    request.subscribe( response => {
      const body = response['body'];
      this.propositionVote = body['results'];
      // console.log(this.propositionVote);
      this.offset = offset;
      this.pages = Math.ceil(response['body']['count'] / this.itemsPerPage);
      this.loading = false;
    });
  }

  specifyProposition(position, showButtons) {
    this.votePosition = position;
    this.showEditButtons = showButtons;
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
