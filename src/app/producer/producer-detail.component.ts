import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { environment } from '../../environments/environment';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-producer-detail',
  templateUrl: './producer-detail.component.html',
  styleUrls: ['./producer-detail.component.scss']
})
export class ProducerDetailComponent implements OnInit {

  buyerform: any = {};

  producerForm = {
    price: 0,
    crowdfunding: 0
  };
  version: string = environment.version;

  constructor(private _mockService: MockService,
    private _routeParams: ActivatedRoute) { }

  ngOnInit() {
    this._routeParams.params.subscribe((params: Params) => {
      const id = params['id'];
      this._mockService.getProject(id).then(item => {
        console.log(item);
        this.buyerform = item;
      });
    });
  }

}
