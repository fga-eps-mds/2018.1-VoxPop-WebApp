import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePlComponent } from './see-pl.component';

describe('SeePlComponent', () => {
  let component: SeePlComponent;
  let fixture: ComponentFixture<SeePlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePlComponent ]
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
