import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCompatibleParliamenterianComponent } from './see-compatible-parliamenterian.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TokenService } from '../token.service';
import { RequestsService } from '../requests.service';
import { CookieService } from 'ngx-cookie-service';

describe('SeeCompatibleParliamenterianComponent', () => {
  let component: SeeCompatibleParliamenterianComponent;
  let fixture: ComponentFixture<SeeCompatibleParliamenterianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'parliamentarians/:id', component: SeeCompatibleParliamenterianComponent}]),
        HttpClientModule,
        HttpClientTestingModule,
      ],
      declarations: [ SeeCompatibleParliamenterianComponent ],
      providers: [
        CookieService,
        TokenService,
        RequestsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeCompatibleParliamenterianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the page', () => {
    component.tokenValue = 'teste';
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

});
