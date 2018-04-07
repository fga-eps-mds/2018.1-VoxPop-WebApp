import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

@Injectable()
export class RequestsService {

  constructor(private http: HttpClient) { }

  baseURL : string = environment.baseURL
  headers : Headers = 



  getUser(userId) {
     return this.http.get(this.baseURL.concat("users/${userId}"))
 }

  postUser() {
    this.http.post()
  }

}
