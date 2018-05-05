import { TestBed, inject } from '@angular/core/testing';

import { InputValidatorService } from './input-validator.service';

describe('InputValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputValidatorService]
    });
  });

  it('should be created', inject([InputValidatorService], (service: InputValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
