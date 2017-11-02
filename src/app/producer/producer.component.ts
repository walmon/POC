import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { MockService } from '../services/mock.service';
import { Project } from '../services/project';

@Component({
  selector: 'app-producer-home',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit {

  items: Project[];
  version: string = environment.version;
  constructor(private _mockService: MockService) { }

  ngOnInit() {
    this._mockService.getProjects().then(
      projects => this.items = projects);
  }
  notInterested(id: string) {
    console.log(id);
    this._mockService.removeProject(id).then(projects => {
      this.items = projects;
      console.log(projects);
    });
  }

}
