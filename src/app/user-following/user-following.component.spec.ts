import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowingComponent } from './user-following.component';
import { RouterModule } from '@angular/router';

describe('UserFollowingComponent', () => {
  let component: UserFollowingComponent;
  let fixture: ComponentFixture<UserFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
      ],
      declarations: [ UserFollowingComponent ]
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
});
