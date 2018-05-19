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
      this.pages = Math.ceil(this.numberPLsVoted / this.itemsPerPage);
      if (this.numberPLsVoted <= 0 && this.pages > 0) {
        alert('Número da página inválido, favor digitar entre 1 e ' + this.pages);
        return;
      }
      this.updateButtonsAppearence(this.offset, this.pages);
    });
  }

  updateButtonsAppearence(offset, limit) {
    if (offset === 1) {
      document.getElementById('beforeBtn1').style.display = 'none';
      document.getElementById('beforeBtn2').style.display = 'none';
    } else {
      document.getElementById('beforeBtn1').style.display = 'block';
      document.getElementById('beforeBtn2').style.display = 'block';
    }
    if (offset === limit) {
      document.getElementById('afterBtn1').style.display = 'none';
      document.getElementById('afterBtn2').style.display = 'none';
    } else {
      document.getElementById('afterBtn1').style.display = 'block';
      document.getElementById('afterBtn2').style.display = 'block';
    }
    if (this.pages < 2) {
      document.getElementById('pageBtn1').style.display = 'none';
      document.getElementById('pageBtn2').style.display = 'none';
    } else {
      document.getElementById('pageBtn1').style.display = 'block';
      document.getElementById('pageBtn2').style.display = 'block';
    }

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
