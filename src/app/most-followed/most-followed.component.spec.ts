import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostFollowedComponent } from './most-followed.component';

describe('MostFollowedComponent', () => {
  let component: MostFollowedComponent;
  let fixture: ComponentFixture<MostFollowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostFollowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostFollowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
