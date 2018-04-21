import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import { map } from 'rxjs/operators'

import { UserModel } from '../models/user';
import { SocialInformationModel } from '../models/socialInformation';

@Injectable()
export class RequestsService {

  constructor(private http: HttpClient,) { }

  baseURL : string = environment.baseURL
  headers = {'Content-Type': 'application/json'}


  getUser(userId) {
     return this.http.get(this.baseURL.concat("users/${userId}"));
  }

  getProjects() {
    var endpoint = this.baseURL.concat('propositions/1/');
    return this.http.get(endpoint);//.subscribe(response => {
      // return this.dataHandler.filterPropositions(response);
    // });

  }

  postUser(user: UserModel) {
    var endpoint = this.baseURL.concat('users/')
    console.log("Making POST REQUEST USER ON URL: " + endpoint)
    return this.http.post(endpoint, JSON.stringify(user), {headers: this.headers, observe: 'response'})
  }

  postSocialInformation(socialInformation: SocialInformationModel){
    var endpoint = this.baseURL.concat('social_informations/')
    console.log("Making POST REQUEST SOCIAL_INFORMATION ON URL: " + endpoint)
    return this.http.post(endpoint, JSON.stringify(socialInformation), {headers: this.headers, observe: 'response'})
  }

  didSucceed(status){
    switch (status) {
      case 0:
        //CHECK RESPONSE BEFORE CHANGING SCREENS
        console.log("Request failed with status code: " + status + ". Please check the request and try again.");
        return false;
      case 201:
        //redirect user to main or authentication page..
        return true;
      case 301:
        //Redirect user to error page
        console.log("Failed with status code 301: Resourced moved permanently. This may be a CORS problem.");
        return false;
      default:
        //Redirect user to error page
        console.log("Unspecified error. Please inspect network traffic to investigate this issue further");
        return false;
    }
  }
}
