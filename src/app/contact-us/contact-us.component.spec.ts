import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsComponent } from './contact-us.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestsService } from '../requests.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '../token.service';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ ContactUsComponent ],
      providers: [
        RequestsService,
        CookieService,
        TokenService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should post a message', () => {
    expect(component.postMsg()).toBeDefined();
  });

  it('should set a error message', () => {
    expect(component.errorHandler(401)).toBeDefined();
    expect(component.errorHandler(500)).toBeDefined();
    expect(component.errorHandler(400)).toBeDefined();
    expect(component.errorHandler(201)).toBeDefined();
  });

  it('should go to back page', () => {
    expect(component.back()).toBeUndefined();
  });

});
