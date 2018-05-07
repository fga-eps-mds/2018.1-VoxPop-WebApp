import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { PropositionModel } from '../../models/proposition';

@Component({
  selector: 'app-parliamentarian',
  templateUrl: './parliamentarian.component.html',
  styleUrls: ['./parliamentarian.component.css']
})
export class ParliamentarianComponent implements OnInit {

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
    this.getParliamentarians(1);
  }

  getParliamentarians(offset: number) {
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

