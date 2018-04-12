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
    expect(component.isUsernameValid('top')).toBeFalsy;
    expect(component.isUsernameValid('')).toBeFalsy;
    expect(component.isUsernameValid('thisIsASuperLargeUsernameThatShouldNotBeAcceptd')).toBeFalsy;
    expect(component.isUsernameValid('ValidUserName')).toBeTruthy;
  })

  it('should not accept username with special characters', () => {
    expect(component.isUsernameValid('two words')).toBeFalsy;
    expect(component.isUsernameValid('V1D@_LoK4')).toBeFalsy;
    expect(component.isUsernameValid('User42')).toBeTruthy;
  })

  it('should check password lenght', () => {
    expect(component.isValidPassword('123')).toBeFalsy;
    expect(component.isValidPassword('')).toBeFalsy;
    expect(component.isValidPassword('if your password is that big, another thing may not to be')).toBeFalsy;
    expect(component.isValidPassword('MyGirlfriendBirthDate')).toBeTruthy;
  })

  it('should check if password is confirmed', () => {
    expect(component.isConfirmedPassword('firstOne', 'secondOne')).toBeFalsy;
    expect(component.isConfirmedPassword('twoEquals', 'twoEquals')).toBeTruthy;
  })

  it('should check email syntax', () => {
    expect(component.isEmailValid('email.com.br')).toBeFalsy;
    expect(component.isEmailValid('email@true.com')).toBeTruthy;
  })
});
