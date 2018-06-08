import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePlComponent } from './see-pl.component';
import { RequestsService } from '../requests.service';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SeePlComponent', () => {
  let component: SeePlComponent;
  let fixture: ComponentFixture<SeePlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ SeePlComponent ],
      providers: [
        RequestsService,
        TokenService,
        CookieService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loadPage return error code', () => {
    expect(component.loadPage(0)).toBeUndefined();
  });

  it('should handlePropositionsReponse return error code', () => {
    component.auxProposition = [];
    expect(component.handlePropositionsResponse(0, '')).toBeUndefined();
  });

  it('should updateButton return true', () => {
    expect(component.updateButtonsAppearence(1, 2)).toBeTruthy();
    expect(component.updateButtonsAppearence(2, 2)).toBeTruthy();
    expect(component.updateButtonsAppearence(3, 2)).toBeTruthy();
    component.pages = 3;
    expect(component.updateButtonsAppearence(3, 2)).toBeTruthy();
  });
});
