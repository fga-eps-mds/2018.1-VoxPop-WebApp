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
        RouterModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ ParliamentarianComponent ],
      providers: [
        RequestsService,
        TokenService,
        CookieService
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
});
