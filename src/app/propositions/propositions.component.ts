import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service'
import { Router } from '@angular/router';
import { PropositionModel } from '../../models/proposition'
import { VoteModel } from '../../models/vote'
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.css']
})
export class PropositionsComponent implements OnInit {

  tokenValue = '';

  proposition: any = {
    proposition_id: 0,
    proposition_type: '',
    proposition_type_initials: '',
    number: 0,
    year: 0,
    abstract: '',
    processing: '',
    situation: '',
    url_full: ''
  }

  constructor( 
    private router:Router,
    private requester:RequestsService,
    private cookieService:CookieService,
    private token:TokenService
  ) { }

  ngOnInit() {
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);
    this.requester.getProjects().subscribe( response =>{
      this.proposition = response;
      console.log(this.proposition);
    });
  }

  answerPL(opinion){
     var vote : any = {
       proposition_id: this.proposition.proposition_id,
       vote: opinion
    }
    this.requester.postVote(vote);
  }
}
