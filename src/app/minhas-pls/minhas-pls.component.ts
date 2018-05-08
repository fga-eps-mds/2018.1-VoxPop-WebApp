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
  pages: Array<number> = [1];
  itemsPerPage = 10;
  votePosition: number;
  userId: number;

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
    this.propositions(1);
  }

  propositions(offset: number) {
    let req: any;
    this.pages = [1];
    this.proposition = [];
    req =  this.requester.getVotedProposition((offset - 1) * this.itemsPerPage);
    this.handlePropositionsResponse(req, offset);
    return req;
  }

  handlePropositionsResponse(request, offset) {
    this.requester.getVotedProposition((offset - 1) * this.itemsPerPage).subscribe( response => {
      const body = response['body'];
      this.propositionVote = body['results'];
      for (let i = 2; i <= Math.ceil(this.propositionVote.length / this.itemsPerPage); i++) {
        this.pages.push(i);
      }
      console.log(this.propositionVote);
      console.log(this.propositionVote.length);
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
        this.propositions(1);
      }

    });

  }

}