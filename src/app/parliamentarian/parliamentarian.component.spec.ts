import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentarianComponent } from './parliamentarian.component';
import { RouterModule } from '@angular/router';
import { RequestsService } from '../requests.service';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ParliamentarianComponent', () => {
  let component: ParliamentarianComponent;
  let fixture: ComponentFixture<ParliamentarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'parliamentarians/:id', component: ParliamentarianComponent}]),
        HttpClientModule,
        RouterModule,
      ],
      declarations: [ ParliamentarianComponent ],
      providers: [
        RequestsService,
        TokenService,
        CookieService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should updateButton return true', () => {
    expect(component.updateButtonsAppearence(1, 2)).toBeTruthy();
    expect(component.updateButtonsAppearence(2, 2)).toBeTruthy();
    expect(component.updateButtonsAppearence(3, 2)).toBeTruthy();
    component.pages = 3;
    expect(component.updateButtonsAppearence(3, 2)).toBeTruthy();
  });

  it('should loadPage return error code', () => {
    expect(component.loadPage(0, '')).toBeUndefined();
    expect(component.loadPage(2, '')).toBeUndefined();
  });

});
