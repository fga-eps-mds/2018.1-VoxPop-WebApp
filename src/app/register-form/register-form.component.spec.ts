import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router'
import { RequestsService } from '../requests.service';
import { HttpClientModule } from '@angular/common/http';

import { RegisterFormComponent } from './register-form.component';
import { Http } from '@angular/http';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ RegisterFormComponent ],
    providers: [ RequestsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check username lenght', () => {
    expect(component.isUsernameSizeValid('top')).toBeFalsy('short username');
    expect(component.isUsernameSizeValid('')).toBeFalsy('void username');
    expect(component.isUsernameSizeValid('thisIsASuperLargeUsernameThatShouldNotBeAcceptd')).toBeFalsy('too long username');
    expect(component.isUsernameSizeValid('ValidUserName')).toBeTruthy('valid username');
  })

  it('should not accept username with special characters', () => {
    expect(component.isUsernameValid('two words')).toBeFalsy('two words username');
    expect(component.isUsernameValid('V1D@_LoK4')).toBeFalsy('username with special characters');
    expect(component.isUsernameValid(' spacebefore')).toBeFalsy('space before username');
    expect(component.isUsernameValid('spaceafter ')).toBeFalsy('space after username');
    expect(component.isUsernameValid('User42')).toBeTruthy('valid username');
  })

  it('should check password lenght', () => {
    expect(component.isValidPassword('1aA*')).toBeFalsy('short password');
    expect(component.isValidPassword('')).toBeFalsy('empty password');
    expect(component.isValidPassword('All Letters without a Number!')).toBeFalsy('no number password');
    expect(component.isValidPassword('GfBirthdate0616')).toBeFalsy('No special characters');
    expect(component.isValidPassword('superpassword123!@#')).toBeFalsy('no uppercase letters');
    expect(component.isValidPassword('MINIPASSWORD123!@#')).toBeFalsy('no lowercase letters');
    expect(component.isValidPassword('GfBirthdate:06/16')).toBeTruthy('Good password');
  })

  it('should check if password is confirmed', () => {
    expect(component.isConfirmedPassword('firstOne', 'secondOne')).toBeFalsy();
    expect(component.isConfirmedPassword('twoEquals', 'twoEquals')).toBeTruthy;
  })

  it('should check email syntax', () => {
    expect(component.isEmailValid('email.com.br')).toBeFalsy('no "@"');
    expect(component.isEmailValid('@twitter.io')).toBeFalsy;('no text before "@"')
    expect(component.isEmailValid('trust.This@email')).toBeFalsy('no "." after "@"');
    expect(component.isEmailValid('email@true.com')).toBeTruthy('valid email');
  })
});
