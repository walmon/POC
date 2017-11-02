import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { environment } from '../../environments/environment';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-investor-detail',
  templateUrl: './investor-detail.component.html',
  styleUrls: ['./investor-detail.component.scss']
})
export class InvestorDetailComponent implements OnInit {

  buyerform: any = {};
  crowdfundingform: any = {};

  people: any = {};
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
      this.crowdfundingform = this._mockService.getCrowdfunding(id);
      console.log(this.crowdfundingform);
      this._mockService.getProject(this.crowdfundingform.projectId).then(item => {
        this.buyerform = item;
      });
    });
    this._mockService.getPeople().then(
      people => {
        console.log(people);
        this.people = people;
      }
    );
  }

  startCrowdfunding(form: any) {
    this._mockService.insertCrowdfunding(form);
    alert('Crowdfunding started');
  }

}
