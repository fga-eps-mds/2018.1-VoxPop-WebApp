import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './token.service';

import { UserModel } from '../models/user';
import { SocialInformationModel } from '../models/socialInformation';
import { LoginModel } from '../models/login';
import { VoteModel } from '../models/vote';

@Injectable()
export class RequestsService {

  constructor(
            private http: HttpClient,
            private token: TokenService,
            private cookieService: CookieService
  ) { }
  tokenValue = '';
  baseURL: string = environment.baseURL;
  headers = {'Content-Type': 'application/json'};
  header = {'Content-Type': 'application/json', 'Authorization': 'Token ' + this.tokenValue};
  tokenHeader: any;

  getUser(userId) {
    this.tokenValue = this.cookieService.get('token');
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': ' Token ' + this.tokenValue};
    const endpoint = this.baseURL.concat('users/' + userId.toString() + '/');
    return this.http.get(endpoint,  {headers: this.tokenHeader, observe: 'response'});
  }

  getVotedProposition(offset) {
    const endpoint = this.baseURL.concat('user_votes/?limit=10&offset=' + offset);
    console.log('Making GET REQUEST VOTED PROPOITION ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.header});
  }

  getProjects() {
    this.tokenValue = this.cookieService.get('token');
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': ' Token ' + this.tokenValue};
    const endpoint = this.baseURL.concat('propositions/non_voted/');
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  postUser(user: UserModel) {
    const endpoint = this.baseURL.concat('users/');
    console.log('Making POST REQUEST USER ON URL: ' + endpoint);
    return this.http.post(endpoint, JSON.stringify(user), {headers: this.headers, observe: 'response'});
  }

  postSocialInformation(socialInformation: SocialInformationModel) {
    const endpoint = this.baseURL.concat('social_informations/');
    console.log('Making POST REQUEST SOCIAL_INFORMATION ON URL: ' + endpoint);
    return this.http.post(endpoint, JSON.stringify(socialInformation), {headers: this.headers, observe: 'response'});
  }

  putUser(user: UserModel, userId) {
    const endpoint = this.baseURL.concat('users/' + userId.toString() + '/');
    this.tokenValue = this.cookieService.get('token');
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': ' Token ' + this.tokenValue};
    console.log('Making PUT REQUEST USER ON URL: ' + endpoint);
    return this.http.put(endpoint, JSON.stringify(user),  {headers: this.tokenHeader, observe: 'response'});
  }

  postAuthentication(login: LoginModel) {
    const endpoint = this.baseURL.concat('token_auth/');
    console.log('Making POST AUTHENTICATION REQUEST ON URL: ' + endpoint);
    return this.http.post(endpoint, JSON.stringify(login), {headers: this.headers, observe: 'response'});
  }

  postVote(vote: VoteModel) {
    this.tokenValue = this.cookieService.get('token');
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': ' Token ' + this.tokenValue};
    const endpoint = this.baseURL.concat('user_votes/');
    console.log('Making POST REQUEST VOTE ON URL: ' + endpoint);
    console.log(vote);
    return this.http.post(endpoint, JSON.stringify(vote), {headers: this.tokenHeader, observe: 'response'});
  }

  updateVote(vote: VoteModel, id: number) {
    console.log(id);
    const endpoint = this.baseURL.concat('user_votes/' + id + '/');
    console.log('Making PUT REQUEST VOTE ON URL: ' + endpoint);
    console.log(vote);
    return this.http.put(endpoint, JSON.stringify(vote), {headers: this.header, observe: 'response'});
  }

  didSucceed(status) {
    switch (status) {
      case 0:
        // CHECK RESPONSE BEFORE CHANGING SCREENS
        console.log('Request failed with status code: ' + status + '. Please check the request and try again.');
        return false;
      case 200:
        // redirect token on the login request
        return true;
      case 201:
        // redirect user to main or authentication page..
        return true;
      case 301:
        // Redirect user to error page
        console.log('Failed with status code 301: Resourced moved permanently. This may be a CORS problem.');
        return false;
      case 400:
        // Badrequest, some input send was wrong
        return false;
      default:
        // Redirect user to error page
        console.log('Unspecified error. Please inspect network traffic to investigate this issue further');
        return false;
    }
  }
}
