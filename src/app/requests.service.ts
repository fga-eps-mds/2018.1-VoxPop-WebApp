import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import { map } from 'rxjs/operators'

import { UserModel } from '../models/user';
import { SocialInformationModel } from '../models/socialInformation';

@Injectable()
export class RequestsService {

  constructor(private http: HttpClient) { }

  baseURL : string = environment.baseURL
  headers = {'Content-Type': 'application/json'}


  getUser(userId) {
     return this.http.get(this.baseURL.concat("users/${userId}"))
  }


  postUser(user: UserModel) {
    var endpoint = this.baseURL.concat('users/')
    console.log("Making POST REQUEST USER ON URL: " + endpoint)
    return this.http.post(endpoint, JSON.stringify(user), {headers: this.headers})
  }

  postSocialInformation(socialInformation: SocialInformationModel){
    var endpoint = this.baseURL.concat('socialInformation/')
    console.log("Making POST REQUEST SOCIAL_INFORMATION ON URL: " + endpoint)
    return this.http.post(endpoint, JSON.stringify(socialInformation), {headers: this.headers})
  }
}
