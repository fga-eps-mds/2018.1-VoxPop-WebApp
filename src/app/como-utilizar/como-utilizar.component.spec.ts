import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoUtilizarComponent } from './como-utilizar.component';

describe('ComoUtilizarComponent', () => {
  let component: ComoUtilizarComponent;
  let fixture: ComponentFixture<ComoUtilizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoUtilizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoUtilizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
