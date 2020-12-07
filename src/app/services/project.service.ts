import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiURL: String = 'https://fusepongticket.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getProjects(){
    return this.http.get<Project[]>(`${this.apiURL}/project`)
  }
  getCompanyProject(company:any){
    return this.http.get<Project[]>(`${this.apiURL}/projectc/${company}`)
  }
}
