import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionComponent } from './proposition.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestsService } from '../requests.service';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from '../token.service';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PropositionComponent', () => {
  let component: PropositionComponent;
  let fixture: ComponentFixture<PropositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'proposition/:id', component: PropositionComponent}]),
        HttpClientModule
      ],
      declarations: [ PropositionComponent ],
      providers: [
        ActivatedRoute,
        RequestsService,
        CookieService,
        TokenService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () =>{
    expect(component.ngOnInit).toBeDefined();
  });
});
