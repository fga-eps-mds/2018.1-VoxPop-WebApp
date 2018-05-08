import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePoliticianComponent } from './see-politician.component';

describe('SeePoliticianComponent', () => {
  let component: SeePoliticianComponent;
  let fixture: ComponentFixture<SeePoliticianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePoliticianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePoliticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
