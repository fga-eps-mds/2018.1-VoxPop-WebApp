import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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
import { ProfileComponent } from './profile/profile.component';
import { MinhasPlsComponent } from './minhas-pls/minhas-pls.component';
import { PropositionsComponent } from './propositions/propositions.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { InputValidatorService } from './input-validator.service';

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
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'propositions',
    component: PropositionsComponent
  },
  {
    path: 'profile/edit',
    component: EditPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent,
    MainPageComponent,
    LoginComponent,
    ProfileComponent,
    MinhasPlsComponent,
    PropositionsComponent,
    SidebarComponent,
    EditPageComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    RequestsService,
    CookieService,
    TokenService,
    InputValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
