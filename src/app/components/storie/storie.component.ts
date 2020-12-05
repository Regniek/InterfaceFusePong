import { Component, OnInit ,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(
    private storieService: StorieService,
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit(){
    this.fetchProject();
  }
  fetchProject() {
    this.storieService.getStories()
    .subscribe(stories =>{
      this.stories = stories;
      console.log(stories)
    })
  }
}
