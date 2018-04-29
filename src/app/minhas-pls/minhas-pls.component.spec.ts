import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPlsComponent } from './minhas-pls.component';

describe('MinhasPlsComponent', () => {
  let component: MinhasPlsComponent;
  let fixture: ComponentFixture<MinhasPlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasPlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasPlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
