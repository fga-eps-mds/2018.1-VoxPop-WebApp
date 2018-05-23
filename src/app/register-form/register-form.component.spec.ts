import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router'
import { RequestsService } from '../requests.service';
import { HttpClientModule } from '@angular/common/http';

import { RegisterFormComponent } from './register-form.component';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { FormsModule } from '@angular/forms';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [ RegisterFormComponent ],
      providers: [ 
        RequestsService,
        CookieService,
        TokenService,  
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
