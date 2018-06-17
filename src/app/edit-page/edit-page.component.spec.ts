import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { EditPageComponent } from './edit-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestsService } from '../requests.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { InputValidatorService } from '../input-validator.service';

describe('EditPageComponent', () => {
  let component: EditPageComponent;
  let fixture: ComponentFixture<EditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        InputValidatorService
      ],
      declarations: [ EditPageComponent ],
      providers: [
        RequestsService,
        TokenService,
        CookieService,
        InputValidatorService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // beforeEach(fakeAsync( () => {
  //   // fixture = TestBed.createComponent(EditPageComponent);
  //   component.ngOnInit();
  //   // fixture.detectChanges();
  // }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check status error', () => {
    expect(component.errorHandler(401)).toBeTruthy();
    expect(component.errorHandler(500)).toBeTruthy();
    expect(component.errorHandler(400)).toBeTruthy();
    expect(component.errorHandler(404)).toBeFalsy();
  });

  it('should update the user', () => {
    component.user = {
      username: 'potato',
      first_name: 'Mr Potato',
      last_name: 'Bread',
      email: 'french@fries.com',
      password: '123qwe!@#QWE',
      social_information: {
        region: null,
        income: null,
        education: null,
        race: null,
        gender: null,
        birth_date: null
      },
    };
    let statusCode = 0;
    let token = 'token';

    component.updateUser().subscribe( (resp) => {
      statusCode = resp.status;
      token = resp.body['token'];
      expect(token).not.toBe('token');
    });
  });
});
