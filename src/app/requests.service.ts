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
import { MessageModel } from '../models/message';

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
  tokenHeader: any;

  getUser(userId) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('users/' + userId.toString() + '/');
    console.log('Making GET REQUEST USER ON URL: ' + endpoint);
    return this.http.get(endpoint,  {headers: this.tokenHeader, observe: 'response'});
  }

  getVotedProposition(offset) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('user_votes/?limit=10&offset=' + offset);
    console.log('Making GET REQUEST VOTED PROPOITION ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  getSearchVotedProposition(offset, keyword) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('user_votes/?limit=10&offset=' + offset + '&query=' + keyword);
    console.log('Making GET REQUEST SEARCH VOTED PROPOITION ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  getProposition(limit, offset) {
    this.tokenHeader = {'Content-Type': 'application/json'};
    const endpoint = this.baseURL.concat('propositions/voted_by_parliamentary/?limit=' + limit + '&offset=' + offset);
    console.log('Making GET REQUEST PREPOSITIONS ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  getMostActive(limit, offset) {
    this.tokenHeader = {'Content-Type': 'application/json'};
    const endpoint = this.baseURL.concat('statistics/most_active/?limit=' + limit + '&offset=' + offset);
    console.log('Making GET MOST ACTIVE REQUEST ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  getMostFollowed() {
    this.tokenHeader = {'Content-Type': 'application/json'};
    const endpoint = this.baseURL.concat('statistics/most_followed/');
    console.log('Making GET MOST FOLLOWED REQUEST ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  getMostCompatible() {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('statistics/most_compatible/');
    console.log('Making GET MOST COMPATIBLE REQUEST ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  getProjects() {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('propositions/non_voted_by_user/');
    console.log('Making GET PROJECTS REQUEST ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  getParliamentarian (limit, offset) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('parliamentarians/?limit=' + limit + '&offset=' + offset);
    console.log('Making GET PARLIAMENTERIAN REQUEST ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  getSearchedParliamentarian (limit, offset, keyword: string) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('parliamentarians/?limit=' + limit + '&offset=' + offset + '&query=' + keyword);
    console.log('Making QUERY REQUEST USER ON URL: ' + endpoint);
    this.headers = (this.tokenValue === '') ? this.headers : this.tokenHeader;
    return this.http.get(endpoint, {headers: this.headers, observe: 'response'});
  }

  getParlimentarianSpecific(parlimentaryId) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('parliamentarians/' + parlimentaryId + '/');
    this.headers = (this.tokenValue === '') ? this.headers : this.tokenHeader;
    return this.http.get(endpoint, {headers: this.headers, observe: 'response'});
  }

  getPropositionSpecific(propositionId) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('propositions/' + propositionId + '/');
    this.headers = (this.tokenValue === '') ? this.headers : this.tokenHeader;
    return this.http.get(endpoint, {headers: this.headers, observe: 'response'});
  }

  getPropositionSpecificSocialInfo(propositionId) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('propositions/' + propositionId + '/social_information_data/');
    this.headers = (this.tokenValue === '') ? this.headers : this.tokenHeader;
    return this.http.get(endpoint, {headers: this.headers, observe: 'response'});
  }

  getFollow(id) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('user_following/' + id + '/');
    this.headers = (this.tokenValue === '') ? this.headers : this.tokenHeader;
    console.log('Making GET FOLLOW REQUEST ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.headers, observe: 'response'});
  }

  getFollowingParliamentarians(limit, offset) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('user_following/?limit=' + limit + '&offset=' + offset);
    console.log('Making POST REQUEST USER ON URL: ' + endpoint);
    this.headers = (this.tokenValue === '') ? this.headers : this.tokenHeader;
    console.log('Making GET FOLLOWING PARLIAMENTERIANS REQUEST ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.headers, observe: 'response'});
  }

  getSearchFollowingParliamentarians(limit, offset, keyword) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('user_following/?limit=' + limit + '&offset=' + offset + '&query=' + keyword);
    console.log('Making POST REQUEST USER ON URL: ' + endpoint);
    this.headers = (this.tokenValue === '') ? this.headers : this.tokenHeader;
    console.log('Making GET SEARCH FOLLOWING PARLIAMENTARIAN REQUEST ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.headers, observe: 'response'});
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
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    console.log('Making PUT REQUEST USER ON URL: ' + endpoint);
    return this.http.patch(endpoint, JSON.stringify(user),  {headers: this.tokenHeader, observe: 'response'});
  }

  postAuthentication(login: LoginModel) {
    const endpoint = this.baseURL.concat('token_auth/');
    console.log('Making POST AUTHENTICATION REQUEST ON URL: ' + endpoint);
    return this.http.post(endpoint, JSON.stringify(login), {headers: this.headers, observe: 'response'});
  }

  postVote(vote: VoteModel) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('user_votes/');
    console.log('Making POST REQUEST VOTE ON URL: ' + endpoint);
    console.log(vote);
    return this.http.post(endpoint, JSON.stringify(vote), {headers: this.tokenHeader, observe: 'response'});
  }

  postFollow(id: Number) {
    const jsonString = '{"parliamentary": ' + id + '}';
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('user_following/');
    console.log('Making POST REQUEST FOLLOW ON URL: ' + endpoint);
    console.log(jsonString);
    return this.http.post(endpoint, jsonString, {headers: this.tokenHeader, observe: 'response'});
  }

  postMessage(msg: MessageModel){
    const endpoint = this.baseURL.concat('contact_us/');
    console.log('Making POST REQUEST MESSAGE ON URL: ' + endpoint);
    return this.http.post(endpoint, JSON.stringify(msg), {headers: this.headers, observe: 'response'});
  }

  deleteFollow(id: Number) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('user_following/' + id + '/');
    console.log('Making DELETE FOLLOW REQUEST ON URL: ' + endpoint);
    return this.http.delete(endpoint, {headers: this.tokenHeader, observe: 'response'});
  }

  updateVote(vote: VoteModel, id: number) {
    this.tokenValue = this.token.getToken();
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': this.tokenValue};
    const endpoint = this.baseURL.concat('user_votes/' + id + '/');
    console.log('Making PUT REQUEST VOTE ON URL: ' + endpoint);
    console.log(vote);
    return this.http.put(endpoint, JSON.stringify(vote), {headers: this.tokenHeader, observe: 'response'});
  }

  convertToken(accessToken: string) {
    const endpoint = this.baseURL.concat('oauth/convert-token/');
    console.log('Making POST REQUEST ON URL: ' + endpoint);
    var data = {
      'grant_type': 'convert_token',
      'client_id': 'Ykp0QxJhZoe8WZ4G32V06Mr2o8VaMFNfipNcdgSu',
      'client_secret': 'Gvqi0s5pklY7fqemR9EiW2pUgTzUmK032IaTgJawHp9CPjM4pZOa8AyMTPckyuHOOBIrunxATFaxAy444HdnRomhdozHR2gKeAcjGRRw5QhuHOy9j0KiWstsO2wwP4YZ',
      'backend': 'facebook',
      'token': accessToken
    }
    console.log(data);
    return this.http.post(endpoint, data, {observe: 'response'});
  }

  getActualUser(accessToken: string) {
    const endpoint = this.baseURL.concat('users/actual_user/');
    this.tokenHeader = {'Content-Type': 'application/json', 'Authorization': ' Bearer ' + accessToken};
    console.log(this.tokenHeader);
    console.log('Making GET REQUEST ON URL: ' + endpoint);
    return this.http.get(endpoint, {headers: this.tokenHeader, observe: 'response'});
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
