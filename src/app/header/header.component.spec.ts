import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CookieService } from 'ngx-cookie-service';

class MockCookieService {
  token = '1234';

  get() {
    return this.token;
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let service: MockCookieService;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    service = new MockCookieService();

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        CookieService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expand sidebar', () => {
    const dummySidebar = document.createElement('nav').setAttribute('id', 'sidebar');
    const dummyContent = document.createElement('div').setAttribute('id', 'content');
    document.getElementById = jasmine.createSpy('sidebar').and.returnValue(dummySidebar);
    document.getElementById = jasmine.createSpy('content').and.returnValue(dummyContent);
    component.toggleMenu();
    expect(component).toBeTruthy();
  });

  it('should return null', () => {
    component.callLogout();
    service.token = '';
    const token = service.get();
    expect(token).toBe('');
  });

});
