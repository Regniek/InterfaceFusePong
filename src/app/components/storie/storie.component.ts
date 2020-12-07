import { Component, OnInit ,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StorieService } from '../../services/storie.service';
import { Storie } from '../../models/storie';

@Component({
  selector: 'app-storie',
  templateUrl: './storie.component.html',
  styleUrls: ['./storie.component.css']
})
export class StorieComponent implements OnInit {
  @Input() storie: Storie;
  stories: Storie[] = [];
  project = sessionStorage.getItem('project');

  constructor(
    private storieService: StorieService,
    private route: ActivatedRoute,
    private router: Router
  ) {

   }

  ngOnInit(){
    this.fetchProject(this.project);
  }
  fetchProject(projectId:any) {
    this.storieService.getProjectStorie(projectId)
    .subscribe(stories =>{
      this.stories = stories;
      console.log(stories)
    })
  }

  sessionId(projectId:any){
    console.log(projectId)
    sessionStorage.setItem('storie',projectId);
    this.redirect();
  }

  redirect() {
    this.router.navigate(['ticket']);
}

}
