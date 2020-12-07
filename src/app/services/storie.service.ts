import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storie } from '../models/storie';

@Injectable({
  providedIn: 'root'
})
export class StorieService {

  apiURL: String = 'https://fusepongticket.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getStories(){
    return this.http.get<Storie[]>(`${this.apiURL}/storie`)
  }

  getProjectStorie(project:any){
    return this.http.get<Storie[]>(`${this.apiURL}/storiep/${project}`)
  }
}
