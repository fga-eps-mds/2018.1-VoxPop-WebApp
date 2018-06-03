import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SeePoliticianDetailedComponent } from './see-politician-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { InputValidatorService } from '../input-validator.service';
import { RequestsService } from '../requests.service';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs/observable/of';

describe('SeePoliticianDetailedComponent', () => {
  let component: SeePoliticianDetailedComponent;
  let fixture: ComponentFixture<SeePoliticianDetailedComponent>;
  let element;
  let requestService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        InputValidatorService
      ],
      declarations: [ SeePoliticianDetailedComponent ],
      providers: [
        RequestsService,
        TokenService,
        CookieService
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([RequestsService], s => {
    requestService = s;
    fixture = TestBed.createComponent(SeePoliticianDetailedComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call followParliamentarian', () => {
    expect(component.followParliamentarian()).toBeTruthy();
  });

  it('should call unfollowParliamentarian', () => {
    expect(component.unfollowParliamentarian()).toBeTruthy();
  });

  it('should call renderUnfollowButton', () => {
    expect(component.renderUnfollowButton()).toBeTruthy();
  });

  it('should call renderFollowButton', () => {
    expect(component.renderFollowButton()).toBeTruthy();
  });

  it('should call derrenderBothButtons', () => {
    expect(component.derrenderBothButtons()).toBeTruthy();
  });

  it('should call checkParliamentarianFollowed', async(() => {
    const response: any[] = [];

    spyOn(requestService, 'getFollow').and.returnValue(of(response));

    component.checkParliamentarianFollowed();

    fixture.detectChanges();

    expect(component.checkParliamentarianFollowed()).toEqual(response);
  }));

});
