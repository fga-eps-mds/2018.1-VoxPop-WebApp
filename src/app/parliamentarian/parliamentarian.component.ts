import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { Token } from '@angular/compiler';
import { RequestsService } from '../requests.service';
import { PropositionModel } from '../../models/proposition';

@Component({
  selector: 'app-parliamentarian',
  templateUrl: './parliamentarian.component.html',
  styleUrls: ['./parliamentarian.component.css']
})
export class ParliamentarianComponent implements OnInit {

  tokenValue = '';
  idValue: Number;
  pages = 1;
  itemsPerPage = 36;
  offset = 1;
  term = '';
  loading = true;

  parliamentarians: any = [
    {
      parliamentarian_id: null,
      name: '',
      gender: '',
      federal_unit: '',
      photo: '',
      compatibility: '',
    }
  ];
  auxParliamentarian: any = [
    {
      parliamentarian_id: null,
      name: '',
      gender: '',
      federal_unit: '',
      photo: '',
      compatibility: '',
    }
  ];

  constructor(
    private cookieService: CookieService,
    private token: TokenService,
    private requester: RequestsService,
  ) { }


  ngOnInit() {
    this.tokenValue = this.token.getToken();
    // console.log(this.tokenValue);
    this.token.checkToken(this.tokenValue);
    this.idValue = +this.cookieService.get('userID');
    this.loadPage(1, '');
    if (this.tokenValue === '') {
      return false;
    } else {
      document.getElementById('userFollowing').style.display = 'block';
      return true;
    }
  }

  loadPage(offset: number, term) {
    let req: any;
    this.term = term.toUpperCase();
    // console.log(Number(offset));
    if (offset < 1 || isNaN(Number(offset))) {
      alert('Número de páginas inválido, favor digitar um número positivo');
      return;
    }
    this.offset = Number(offset);
    // console.log(this.offset);
    req =  this.requester.getSearchedParliamentarian(this.itemsPerPage, (this.offset - 1) * this.itemsPerPage, this.term);
    this.handleParliamentariansSearchResponse(req, this.offset, this.term);
  }

  handleParliamentariansSearchResponse(request, offset, term) {
    this.requester.getSearchedParliamentarian(this.itemsPerPage, (offset - 1) * this.itemsPerPage, term).subscribe( response => {
      this.auxParliamentarian = response['body']['results'];
      const auxPages = Math.ceil(response['body']['count'] / this.itemsPerPage);
      if (auxPages === 0) {
        alert('A pesquisa não retornou resultados');
        return;
      } else if (this.auxParliamentarian.length <= 0) {
        alert('Número da página inválido, favor digitar entre 1 e ' + this.pages);
        return;
      }
      this.pages = auxPages;
      this.updateButtonsAppearence(this.offset, this.pages);
      this.parliamentarians = this.auxParliamentarian;
      this.loading = false;
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
    if (this.pages < 2) {
      document.getElementById('pageBtn1').style.display = 'none';
      document.getElementById('pageBtn2').style.display = 'none';
    } else {
      document.getElementById('pageBtn1').style.display = 'block';
      document.getElementById('pageBtn2').style.display = 'block';
    }
    return true;

  }

}
