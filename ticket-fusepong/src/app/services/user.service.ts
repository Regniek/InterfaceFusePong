import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: String = 'https://fusepongticket.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getOneUser(filter){
    return this.http.get<User>(`${this.apiURL}/user/${filter}`)
  }
}
