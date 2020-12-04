import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: String = 'https://fusepongticket.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  findOne(formData){
    return this.http.post<Login>(`${this.apiURL}/login`, formData)
  }
}
