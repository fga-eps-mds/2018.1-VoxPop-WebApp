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
  idValue = 0;

  proposition: any = {
    proposition_id: 0,
    proposition_type: '',
    proposition_type_initials: '',
    number: 0,
    year: 0,
    abstract: '',
    processing: '',
    situation: '',
    url_full: '',
    parliamentarians_approval: '',
    population_approval: '',
  }

  constructor(
    private router:Router,
    private requester:RequestsService,
    private cookieService:CookieService,
    private token:TokenService
  ) { }

  ngOnInit() {
    this.tokenValue = this.token.getToken();
    this.token.checkToken(this.tokenValue);
    this.token.filterRestrictPage(this.tokenValue);
    this.idValue = +this.cookieService.get('userID');
    this.projects();
  }

  projects(){
    const req = this.requester.getProjects();
    this.projectsHandler(req);
    return req;
  }

  projectsHandler(request){
    request.subscribe( response =>{
      response['parliamentarians_approval'] = parseFloat(response['parliamentarians_approval']);
      response['population_approval'] = parseFloat(response['population_approval']);
      this.proposition = response['body'];
    });
  }

  answerPL(opinion: string){
    var response;
    var request;
    var status;

     var vote : VoteModel = {
      //  user: this.idValue,
       proposition: this.proposition.id,
       option: opinion
    }
    this.requester.postVote(vote).subscribe(response => {
      status = response.status;

      if (!this.requester.didSucceed(status)){
        alert("Voto não registrado, favor tentar de novo mais tarde");
      } else {
        this.requester.getProjects().subscribe( response =>{
          this.proposition = response['body'];
          // console.log(response['body']);
        });
      }
    });

  }
}
