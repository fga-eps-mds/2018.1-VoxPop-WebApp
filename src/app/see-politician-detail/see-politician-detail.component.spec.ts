import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePoliticianDetailedComponent } from './see-politician-detail.component';

describe('SeePoliticianDetailedComponent', () => {
  let component: SeePoliticianDetailedComponent;
  let fixture: ComponentFixture<SeePoliticianDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePoliticianDetailedComponent ]
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
