import { TestBed, inject } from '@angular/core/testing';

import { TokenService } from './token.service';
import { Mock } from 'protractor/built/driverProviders';

class MockTokenService { 
  token = '';

  checkToken(token) {
    if(token == ''){
      return false;
    } else {
      return true;
    }
  }
}

describe('TokenService', () => {
  let service: MockTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenService,
      ]
    });
    service = new MockTokenService();
  });

  it('should be created', () => {
    service.token = '';
    expect(service.checkToken(service.token)).toBeFalsy();
  });

  it('should return true for user that it is authenticated', () => {
    service.token = '1234';
    expect(service.checkToken(service.token)).toBeTruthy();
  });

  it('should return false for user that it is not authenticated', inject([TokenService], (service: TokenService) => {
    expect(service.checkToken('')).toBeFalsy('token is null');
  }));

});
