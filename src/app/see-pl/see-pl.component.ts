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
  pages = 1;
  itemsPerPage = 20;
  offset = 1;

  proposition: any = [
    {
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

  auxProposition: any = [
    {
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
  ) { }


  ngOnInit() {
    this.loadPage(1);
  }

  loadPage(offset: number) {
    let req: any;
    console.log(Number(offset));
    if (offset < 1 || isNaN(Number(offset))) {
      alert("Número de páginas inválido, favor digitar um número positivo");
      return -1;
    }
    this.offset = Number(offset);
    req =  this.requester.getProposition(this.itemsPerPage, (this.offset - 1) * this.itemsPerPage);
    this.handlePropositionsResponse(req, this.offset);
    return req;
  }

  handlePropositionsResponse(request, offset) {
    this.requester.getProposition(this.itemsPerPage, (offset - 1) * this.itemsPerPage).subscribe( response => {
      this.auxProposition = response['results'];
      this.numberPLs = response['count'];
      this.pages = Math.ceil(this.numberPLs/this.itemsPerPage);
      if (this.auxProposition.length <= 0) {
        alert("Número da página inválido, favor digitar entre 1 e " + this.pages)
        return
      }
      this.proposition = this.auxProposition;
      console.log(this.proposition);
      console.log(this.numberPLs);
    });
  }

}

