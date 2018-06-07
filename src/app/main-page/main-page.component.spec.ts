import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { RequestsService } from '../requests.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http, ResponseOptions, Jsonp } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let requests: MockBackend;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'parliamentarians/:id', component: MainPageComponent}]),
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        RequestsService,
        CookieService,
        TokenService,
        MockBackend,
      ],
      declarations: [ MainPageComponent ]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the page', () => {
    component.tokenValue = 'token';
    component.idValue = 1;
    component.proposition(3, 0);
    component.mostActives(3, 0);
    const url = 'teste.com';
    component.openProposition(url);
    component.ngOnInit();

    expect(component).toBeTruthy();
  });

  it('should return a preposition', fakeAsync (() => {
    const response = {
      "results": [
        {
          'proposition_id': 12,
          "proposition_type": 'Teste',
          "proposition_type_initials": 'T',
          "number": 32,
          "year": 2009,
          "abstract": 'Testando o response de uma preposition',
          "processing": 'Teste',
          "situation": 'Em espera',
          "url_full": 'Teste'
        }]
    };

    component.handlePropositionsResponse(response, 1, 0);
  }));

});
