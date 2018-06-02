import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestsService } from '../requests.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginModel } from '../../models/login';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TokenService } from '../token.service';

class MockLoginComponent {
  login(user: LoginModel) {
    if (user.username === '' || user.password === '') {
      return false;
    } else {
      return true;
    }
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let login: MockLoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let request: RequestsService;
  let submitEl: DebugElement;
  let usernameEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async(() => {
    login = new MockLoginComponent();

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        RequestsService,
        CookieService,
        TokenService,
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    submitEl = fixture.debugElement.query(By.css('#loginBtn'));
    usernameEl = fixture.debugElement.query(By.css('input[type=username]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () =>  {
    usernameEl.nativeElement.value = 'teste';
    passwordEl.nativeElement.value = 'teste';

    var user;
    user = {
      username: 'teste',
      password: 'teste'
    }

    expect(component.login(usernameEl.nativeElement.value, passwordEl.nativeElement.value)).toBeTruthy();

  });

  it('should return false on status 400', () => {
    const status = 400;
    expect(component.errorHandler(status)).toBeFalsy();
  });

  it('should auth with post authentication service', () => {
    const user = {
      username: 'potato',
      password: '123qwe!@#QWE'
    };
    var statusCode = 0;
    var token = 'token';

    component.login(user.username, user.password).subscribe( (resp) => {
      this.statusCode = resp.status;
      this.token = resp.body['token'];
      expect(this.token).not.toBe('token');
    });
  });

});
