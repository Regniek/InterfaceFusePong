import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiURL: String = 'https://fusepongticket.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getCompanys(){
    return this.http.get<Company[]>(`${this.apiURL}/company`)
  }

  getOneCompany(filter:String){
    return this.http.get<Company>(`${this.apiURL}/company/${filter}`)
  }
}
