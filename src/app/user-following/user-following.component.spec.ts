import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowingComponent } from './user-following.component';
import { RouterModule } from '@angular/router';
import { RequestsService } from '../requests.service';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserFollowingComponent', () => {
  let component: UserFollowingComponent;
  let fixture: ComponentFixture<UserFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'parliamentarians/:id', component: UserFollowingComponent}]),
        HttpClientModule,
        RouterModule,
      ],
      declarations: [ UserFollowingComponent ],
      providers: [
        RequestsService,
        TokenService,
        CookieService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should updateButton return true', () => {
    expect(component.updateButtonsAppearence(1, 2)).toBeUndefined();
    expect(component.updateButtonsAppearence(2, 2)).toBeUndefined();
    expect(component.updateButtonsAppearence(3, 2)).toBeUndefined();
    component.pages = 3;
    expect(component.updateButtonsAppearence(3, 2)).toBeUndefined();
  });

  it('should loadPage return error code', () => {
    expect(component.loadPage(0, '')).toBeUndefined();
    expect(component.loadPage(2, '')).toBeUndefined();
  });

});
