import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePlComponent } from './see-pl.component';
import { RequestsService } from '../requests.service';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

describe('SeePlComponent', () => {
  let component: SeePlComponent;
  let fixture: ComponentFixture<SeePlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
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
});
