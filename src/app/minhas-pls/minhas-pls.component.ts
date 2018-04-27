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

  constructor(private requester: RequestsService,) { }

  ngOnInit() {
    this.numberPLsVoted = 0;
    for (let i = 2; i <= this.numberPLsVoted / 10; i++) {
      this.pages.push(i);
    }
  }

  proposition(offset: number) {
    this.requester.getVotedProposition(offset);
  }

}
