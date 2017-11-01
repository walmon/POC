import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-producer-home',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit {

  items: any[];

  version: string = environment.version;

  constructor(private _mockService: MockService) { }

  ngOnInit() {
    this._mockService.getProjects().then(projects => this.items = projects);
  }


}
