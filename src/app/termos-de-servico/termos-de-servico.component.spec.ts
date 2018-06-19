import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosDeServicoComponent } from './termos-de-servico.component';

describe('TermosDeServicoComponent', () => {
  let component: TermosDeServicoComponent;
  let fixture: ComponentFixture<TermosDeServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermosDeServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
