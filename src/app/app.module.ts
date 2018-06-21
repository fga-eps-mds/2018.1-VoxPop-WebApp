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
import { ParliamentarianComponent } from './parliamentarian/parliamentarian.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { InputValidatorService } from './input-validator.service';
import { SeePlComponent } from './see-pl/see-pl.component';
import { SeePoliticianDetailedComponent } from './see-politician-detail/see-politician-detail.component';
import { UserFollowingComponent } from './user-following/user-following.component';
import { SeeCompatibleParliamenterianComponent } from './see-compatible-parliamenterian/see-compatible-parliamenterian.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { TermosDeServicoComponent } from './termos-de-servico/termos-de-servico.component';
import { MostFollowedComponent } from './most-followed/most-followed.component';
import { PropositionComponent } from './proposition/proposition.component';

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
    path: 'parliamentarians',
    component: ParliamentarianComponent
  },
  {
    path: 'profile/edit',
    component: EditPageComponent
  },
  {
    path: 'seepl',
    component: SeePlComponent
  },
  {
    path: 'parliamentarians/:id',
    component: SeePoliticianDetailedComponent
  },
  {
    path: 'user-following',
    component: UserFollowingComponent
  },
  {
    path: 'user-compatible',
    component: SeeCompatibleParliamenterianComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'politica-de-privacidade',
    component: PoliticaDePrivacidadeComponent
  },
  {
    path: 'termos-de-servico',
    component: TermosDeServicoComponent
  },
  {
    path: 'most-followed',
    component: MostFollowedComponent
  },
  {
    path: 'propositions/:id',
    component: PropositionComponent
  },
];

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
    ParliamentarianComponent,
    EditPageComponent,
    SeePlComponent,
    SeePoliticianDetailedComponent,
    UserFollowingComponent,
    SeeCompatibleParliamenterianComponent,
    ContactUsComponent,
    PoliticaDePrivacidadeComponent,
    TermosDeServicoComponent,
    MostFollowedComponent,
    PropositionComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RoundProgressModule
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
