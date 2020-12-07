import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() user: User[]=[];
  @Input() company1: Company;

  emailX = sessionStorage.getItem('userEmail');
  projects: Project[] = [] ;
  company = sessionStorage.getItem('userCompany');
  
  constructor(
    private projectService: ProjectService,
    private companyService: CompanyService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {

   }

  ngOnInit(){
    this.fetchProjectByCompany(this.company)
    this.fetchCompany(this.company)
  }

   fetchProjectByCompany(company:any) {
    this.projectService.getCompanyProject(company)
    .subscribe(projects =>{
      this.projects = projects;
    });
  }
  fetchCompany(company1:any) {
    this.companyService.getOneCompany(company1)
    .subscribe(company1 =>{
      this.company1 = company1;
    });
  }
  
  sessionId(projectId:any){
    sessionStorage.setItem('project',projectId);
    this.redirect();
  }

  redirect() {
    this.router.navigate(['storie']);
}


}
