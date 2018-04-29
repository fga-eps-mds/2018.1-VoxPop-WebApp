import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { RequestsService } from './requests.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './token.service';
import { MinhasPlsComponent } from './minhas-pls/minhas-pls.component';
import { PropositionsComponent } from './propositions/propositions.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mypls',
    component: MinhasPlsComponent
  },
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'propositions',
    component: PropositionsComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent,
    MainPageComponent,
    LoginComponent,
    MinhasPlsComponent,
    PropositionsComponent,
    SidebarComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    RequestsService,
    CookieService,
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
