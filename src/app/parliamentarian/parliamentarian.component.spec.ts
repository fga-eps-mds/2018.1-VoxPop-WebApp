import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentarianComponent } from './parliamentarian.component';

describe('ParliamentarianComponent', () => {
  let component: ParliamentarianComponent;
  let fixture: ComponentFixture<ParliamentarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParliamentarianComponent ]
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
