import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './token.service';
import { RequestsService } from './requests.service';
import { Router } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RegisterFormComponent,
        MainPageComponent,
        SidebarComponent
      ],
      providers: [
        CookieService,
        TokenService,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'VoxPop'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('VoxPop');
  }));
});
