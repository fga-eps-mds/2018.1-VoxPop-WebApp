import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
import { map } from 'rxjs/operators'

import { UserModel } from '../models/user';

@Injectable()
export class RequestsService {

  constructor(private http: HttpClient) { }

  baseURL : string = environment.baseURL
  headers = {'Content-Type': 'application/json'}


  getUser(userId) {
     return this.http.get(this.baseURL.concat("users/${userId}"))
  }


  postUser(user: UserModel) {
    var endpoint = this.baseURL.concat('users/'+user.id)
    console.log("Making POST REQUEST ON URL: " + endpoint)
    return this.http.post(endpoint, JSON.stringify(user), {headers: this.headers})
  }
}
