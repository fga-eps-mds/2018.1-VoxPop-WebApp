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

  it('should check username lenght', inject([InputValidatorService], (service: InputValidatorService) => {
    expect(service.isUsernameSizeValid('top')).toBeFalsy('short username');
    expect(service.isUsernameSizeValid('')).toBeFalsy('void username');
    expect(service.isUsernameSizeValid('thisIsASuperLargeUsernameThatShouldNotBeAcceptd')).toBeFalsy('too long username');
    expect(service.isUsernameSizeValid('ValidUserName')).toBeTruthy('valid username');
  }));

  it('should not accept username with special characters', inject([InputValidatorService], (service: InputValidatorService) => {
    expect(service.isUsernameValid('two words')).toBeFalsy('two words username');
    expect(service.isUsernameValid('V1D@_LoK4')).toBeFalsy('username with special characters');
    expect(service.isUsernameValid(' spacebefore')).toBeFalsy('space before username');
    expect(service.isUsernameValid('spaceafter ')).toBeFalsy('space after username');
    expect(service.isUsernameValid('User42')).toBeTruthy('valid username');
  }));

  it('should check password lenght', inject([InputValidatorService], (service: InputValidatorService) => {
    expect(service.isValidPassword('1aA*')).toBeFalsy('short password');
    expect(service.isValidPassword('')).toBeFalsy('empty password');
    expect(service.isValidPassword('All Letters without a Number!')).toBeFalsy('no number password');
    expect(service.isValidPassword('GfBirthdate0616')).toBeFalsy('No special characters');
    expect(service.isValidPassword('superpassword123!@#')).toBeFalsy('no uppercase letters');
    expect(service.isValidPassword('MINIPASSWORD123!@#')).toBeFalsy('no lowercase letters');
    expect(service.isValidPassword('GfBirthdate:06/16')).toBeTruthy('Good password');
  }));

  it('should check if password is confirmed', inject([InputValidatorService], (service: InputValidatorService) => {
    expect(service.isConfirmedPassword('firstOne', 'secondOne')).toBeFalsy();
    expect(service.isConfirmedPassword('twoEquals', 'twoEquals')).toBeTruthy;
  }));

  it('should check email syntax', inject([InputValidatorService], (service: InputValidatorService) => {
    expect(service.isEmailValid('email.com.br')).toBeFalsy('no "@"');
    expect(service.isEmailValid('@twitter.io')).toBeFalsy;('no text before "@"')
    expect(service.isEmailValid('trust.This@email')).toBeFalsy('no "." after "@"');
    expect(service.isEmailValid('email@true.com')).toBeTruthy('valid email');
  }));

});
