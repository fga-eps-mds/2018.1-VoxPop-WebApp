import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCompatibleParliamenterianComponent } from './see-compatible-parliamenterian.component';

describe('SeeCompatibleParliamenterianComponent', () => {
  let component: SeeCompatibleParliamenterianComponent;
  let fixture: ComponentFixture<SeeCompatibleParliamenterianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeCompatibleParliamenterianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeCompatibleParliamenterianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
