import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { PropositionModel } from '../../models/proposition';

@Component({
  selector: 'app-parliamentarian',
  templateUrl: './parliamentarian.component.html',
  styleUrls: ['./parliamentarian.component.css']
})
export class ParliamentarianComponent implements OnInit {

  itemsPerPage = 36;
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

    req =  this.requester.getParliamentarian(this.itemsPerPage, (offset - 1) * this.itemsPerPage);
    this.handleParliamentariansResponse(req, this.offset);
    return req;
  }

  handleParliamentariansResponse(request, offset) {
    this.requester.getParliamentarian(this.itemsPerPage, (offset - 1) * this.itemsPerPage).subscribe( response => {
      this.parliamentarians = response['body']['results'];
      console.log(this.parliamentarians);
      console.log(this.parliamentarians.length);
    });
  }

}

