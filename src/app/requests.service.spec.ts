import { TestBed, inject } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './token.service';
import { RequestsService } from './requests.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('RequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        RequestsService,
        CookieService,
        TokenService
      ]
    });
  });

  it('should be created', inject([RequestsService], (service: RequestsService) => {
    expect(service).toBeTruthy();
  }));

  it('should check if status is succeed', inject([RequestsService], (service: RequestsService) => {
    expect(service.didSucceed(0)).toBeFalsy('on 0');
    expect(service.didSucceed(200)).toBeTruthy('on 200');
    expect(service.didSucceed(201)).toBeTruthy('on 201');
    expect(service.didSucceed(301)).toBeFalsy('on 301');
    expect(service.didSucceed(400)).toBeFalsy('on 400');
    expect(service.didSucceed(404)).toBeFalsy('on any other');
  }));

  it('getUser should return a promise', inject([RequestsService], (service: RequestsService) => {
    const userID = 1;

    const promise = service.getUser(userID);
    expect(promise).toBeDefined();
  }));

  it('getVotedProposition should return a promise', inject([RequestsService], (service: RequestsService) => {
    const offset = 1;

    const promise = service.getVotedProposition(offset);
    expect(promise).toBeDefined();
  }));

  it('getSearchVotedProposition should return a promise', inject([RequestsService], (service: RequestsService) => {
    const offset = 1;
    const keyword = 'teste';
    const promise = service.getSearchVotedProposition(offset, keyword);
    expect(promise).toBeDefined();
  }));
});
