import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';
import { HttpClientModule } from '@angular/common/http';

import { RegisterFormComponent } from './register-form.component';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { FormsModule } from '@angular/forms';
import { InputValidatorService } from '../input-validator.service';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        InputValidatorService
      ],
      declarations: [ RegisterFormComponent ],
      providers: [
        RequestsService,
        CookieService,
        TokenService,
        InputValidatorService,
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register user', () => {

    component.user = {
      username: 'johndoe',
      first_name: 'john',
      last_name: 'doe',
      email: 'john@doe.com',
      password: '123qwe!@#QWE',
      social_information: {
        region: null,
        income: null,
        education: null,
        race: null,
        gender: null,
        birth_date: null
      }
    };
    const statusCode = 0;
    component.registerUser().subscribe( (resp) => {
      //  = resp.status;
      expect(component.registerUser().statusUser).not.toBe(0);
    });

  });

  it('should register user', () => {

    component.user = {
      username: 123,
      first_name: 'john',
      last_name: 'doe',
      email: 'john',
      password: '123qwe!@#QWE',
      social_information: {
        region: null,
        income: null,
        education: null,
        race: null,
        gender: null,
        birth_date: null
      }
    };
    const statusCode = 0;
    component.registerUser().subscribe( (resp) => {
      //  = resp.status;
      expect(component.registerUser().statusUser).not.toBe(0);
    });

  });
});
