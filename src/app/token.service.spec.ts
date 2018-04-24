import { TestBed, inject } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenService,
      ]
    });
  });

  it('should be created', inject([TokenService], (service: TokenService) => {
    expect(service).toBeTruthy();
  }));

  it('should return false for user that it is not authenticated', inject([TokenService], (service: TokenService) => {
    expect(service.checkToken('')).toBeFalsy('token is null');
  }));

});
