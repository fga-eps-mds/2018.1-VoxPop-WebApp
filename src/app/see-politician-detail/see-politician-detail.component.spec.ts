import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePoliticianDetailedComponent } from './see-politician-detail.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestsService } from '../requests.service';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

describe('SeePoliticianDetailedComponent', () => {
  let component: SeePoliticianDetailedComponent;
  let fixture: ComponentFixture<SeePoliticianDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'parliamentarians/:id', component: SeePoliticianDetailedComponent}]),
        HttpClientModule,
      ],
      declarations: [ SeePoliticianDetailedComponent ],
      providers: [
        RequestsService,
        TokenService,
        CookieService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePoliticianDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
