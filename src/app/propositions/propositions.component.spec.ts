import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PropositionsComponent } from './propositions.component';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
 
describe('PropositionsComponent', () => {
  let component: PropositionsComponent;
  let fixture: ComponentFixture<PropositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PropositionsComponent ],
      providers: [
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } },
        RequestsService,
        CookieService,
        TokenService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get users', inject([HttpTestingController, RequestsService],
    (httpMock: HttpTestingController, apiService: RequestsService) => {
      expect(apiService).toBeTruthy();
    }
  )
);

});
