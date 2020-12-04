import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  

  projects: Project[] = [] ;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit(){
    this.fetchProject();
  }
  fetchProject(): void {
    this.projectService.getProjects()
    .subscribe(projects =>{
      this.projects = projects;
      console.log(projects)
    })
  }

}
