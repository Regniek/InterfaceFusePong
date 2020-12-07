import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User,User1 } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: String = 'https://fusepongticket.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getOneUser(filter:any){
    return this.http.get<User>(`${this.apiURL}/user/${filter}`)
  }
  postUser(user:User1){
    return this.http.post(`${this.apiURL}/user`, user)
  }
  getEmailUser(email:any){
    return this.http.get<User[]>(`${this.apiURL}/usere/${email}`)
  }
}
