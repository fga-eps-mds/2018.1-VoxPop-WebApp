import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentarianComponent } from './parliamentarian.component';
import { RouterModule } from '@angular/router';

describe('ParliamentarianComponent', () => {
  let component: ParliamentarianComponent;
  let fixture: ComponentFixture<ParliamentarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
      ],
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
