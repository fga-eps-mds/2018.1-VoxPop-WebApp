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

  // it('should check if status is succeed', () => {
  //   let http : HttpClient;
  //   let cookie : CookieService;
  //   let token : TokenService;
  //   let service = new RequestsService(http, cookie, token);
  //   expect(service.didSucceed(0)).toBeFalsy('on 0');
  //   expect(service.didSucceed(201)).toBeTruthy('on 201');
  //   expect(service.didSucceed(301)).toBeFalsy('on 301');
  //   expect(service.didSucceed(404)).toBeFalsy('on any other');
  // })
});
