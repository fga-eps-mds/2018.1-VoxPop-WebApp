import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-minhas-pls',
  templateUrl: './minhas-pls.component.html',
  styleUrls: ['./minhas-pls.component.css']
})
export class MinhasPlsComponent implements OnInit {

  numberPLsVoted: number;
  pages: Array<number> = [1];

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
  };

  constructor(private requester: RequestsService) { }

  ngOnInit() {
    this.numberPLsVoted = 100;
    this.propositions(10);
  }

  propositions(offset: number) {
    this.requester.getVotedProposition(offset).subscribe( response => {
      this.proposition = response;
      this.numberPLsVoted = this.proposition.count;
      for (let i = 2; i <= this.numberPLsVoted / 10; i++) {
        this.pages.push(i);
      }
      console.log(this.proposition);
      console.log(this.numberPLsVoted);
    });
  }

}
