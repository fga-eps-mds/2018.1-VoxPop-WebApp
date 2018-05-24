import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { PropositionModel } from '../../models/proposition';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-see-pl',
  templateUrl: './see-pl.component.html',
  styleUrls: ['./see-pl.component.css']
})
export class SeePlComponent implements OnInit {

  tokenValue = '';
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
    private cookieService: CookieService,
    private token: TokenService,
  ) { }


  ngOnInit() {
    this.loadPage(1);
    this.tokenValue = this.cookieService.get('token');
    this.token.checkToken(this.tokenValue);
  }

  loadPage(offset: number) {
    let req: any;
    if (offset < 1 || isNaN(Number(offset))) {
      alert('Número de páginas inválido, favor digitar um número positivo');
      return -1;
    }
    this.offset = Number(offset);
    req =  this.requester.getProposition(this.itemsPerPage, (this.offset - 1) * this.itemsPerPage);
    this.handlePropositionsResponse(req, this.offset);
    return req;
  }

  handlePropositionsResponse(request, offset) {
    this.requester.getProposition(this.itemsPerPage, (offset - 1) * this.itemsPerPage).subscribe( response => {
      this.auxProposition = response['body']['results'];
      this.pages = Math.ceil(response['body']['count'] / this.itemsPerPage);
      if (this.auxProposition.length <= 0) {
        alert('Número da página inválido, favor digitar entre 1 e ' + this.pages);
        return -1;
      }
      this.updateButtonsAppearence(this.offset, this.pages);
      this.proposition = this.auxProposition;
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
    return true;
  }

}
