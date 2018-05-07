import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { PropositionModel } from '../../models/proposition';

@Component({
  selector: 'app-see-pl',
  templateUrl: './see-pl.component.html',
  styleUrls: ['./see-pl.component.css']
})
export class SeePlComponent implements OnInit {

  numberPLs: number;
  pages: Array<number> = [1];
  itemsPerPage = 50;
  offset = 1;

  parliamentarians: any = [
    {
      parliamentarian_id: null,
      name: '',
      gender: '',
      federal_unit: '',
      photo: '',
    }
  ];

  constructor(
    private requester: RequestsService,
  ) { }


  ngOnInit() {
    this.propositions(1);
  }

  propositions(offset: number) {
    let req: any;
    this.parliamentarians = [];

    req =  this.requester.getParliamentarian();
    this.handleParliamentariansResponse(req, this.offset);
    return req;
  }

  handleParliamentariansResponse(request, offset) {
    this.requester.getParliamentarian().subscribe( response => {
      this.parliamentarians = response['results'];
      this.numberPLs = response['count'];
      console.log(this.parliamentarians);
      console.log(this.numberPLs);
    });
  }

}

