import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPlsComponent } from './minhas-pls.component';
import { RequestsService } from '../requests.service';
import { HttpClientModule } from '@angular/common/http';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';

describe('MinhasPlsComponent', () => {
  let component: MinhasPlsComponent;
  let fixture: ComponentFixture<MinhasPlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ MinhasPlsComponent ],
      providers: [
        CookieService,
        RequestsService,
        TokenService,
      ]
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

  it('should change variable on click', () => {
    component.specifyProposition(42, false);
    expect(component.votePosition).toBe(42);
  });

  it('should update buttons appearence', () => {
    component.pages = 10;
    expect(component.updateButtonsAppearence(1, 2)).toBeUndefined();
    expect(component.updateButtonsAppearence(2, 3)).toBeUndefined();
    expect(component.updateButtonsAppearence(2, 2)).toBeUndefined();
    component.pages = 1;
    expect(component.updateButtonsAppearence(3, 10)).toBeUndefined();
  });
});
