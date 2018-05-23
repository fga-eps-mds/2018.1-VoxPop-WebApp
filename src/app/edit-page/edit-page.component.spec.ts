import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPageComponent } from './edit-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestsService } from '../requests.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';
import { InputValidatorService } from '../input-validator.service';

describe('EditPageComponent', () => {
  let component: EditPageComponent;
  let fixture: ComponentFixture<EditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
