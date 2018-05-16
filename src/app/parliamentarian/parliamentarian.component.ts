import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { PropositionModel } from '../../models/proposition';

@Component({
  selector: 'app-parliamentarian',
  templateUrl: './parliamentarian.component.html',
  styleUrls: ['./parliamentarian.component.css']
})
export class ParliamentarianComponent implements OnInit {

  pages = 1;
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
  auxParliamentarian: any = [
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
    this.loadPage(1);
  }

  loadPage(offset: number) {
    let req: any;
    console.log(Number(offset));
    if (offset < 1 || isNaN(Number(offset))) {
      alert('Número de páginas inválido, favor digitar um número positivo');
      return -1;
    }
    this.offset = Number(offset);
    console.log(this.offset);
    req =  this.requester.getParliamentarian(this.itemsPerPage, (this.offset - 1) * this.itemsPerPage);
    this.handleParliamentariansResponse(req, this.offset);
    return req;
  }

  loadPageSearch(offset: number, term) {
    let req: any;
    console.log(Number(offset));
    if (offset < 1 || isNaN(Number(offset))) {
      alert('Número de páginas inválido, favor digitar um número positivo');
      return -1;
    }
    this.offset = Number(offset);
    console.log(this.offset);
    req =  this.requester.getSearchedParliamentarian(this.itemsPerPage, (this.offset - 1) * this.itemsPerPage, term);
    this.handleParliamentariansSearchResponse(req, this.offset, term);
    return req;
  }

  handleParliamentariansResponse(request, offset) {
    this.requester.getParliamentarian(this.itemsPerPage, (offset - 1) * this.itemsPerPage).subscribe( response => {
      this.auxParliamentarian = response['body']['results'];
      this.pages = Math.ceil(response['body']['count'] / this.itemsPerPage);
      if (this.auxParliamentarian.length <= 0) {
        alert('Número da página inválido, favor digitar entre 1 e ' + this.pages)
        return;
      }
      this.updateButtonsAppearence(this.offset, this.pages);
      this.parliamentarians = this.auxParliamentarian;
      console.log(this.parliamentarians);
      console.log(this.pages);
    });
  }

  handleParliamentariansSearchResponse(request, offset, term) {
    this.requester.getSearchedParliamentarian(this.itemsPerPage, (offset - 1) * this.itemsPerPage, term).subscribe( response => {
      this.auxParliamentarian = response['body']['results'];
      this.pages = Math.ceil(response['body']['count'] / this.itemsPerPage);
      if (this.auxParliamentarian.length <= 0) {
        alert('Número da página inválido, favor digitar entre 1 e ' + this.pages)
        return;
      }
      this.updateButtonsAppearence(this.offset, this.pages);
      this.parliamentarians = this.auxParliamentarian;
      console.log(this.parliamentarians);
      console.log(this.pages);
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

  }

}

