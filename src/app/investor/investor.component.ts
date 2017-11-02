import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-investor-home',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent implements OnInit {

  version: string = environment.version;
  items: any[] = [];

  constructor(private _mockService: MockService) { }

  ngOnInit() {
    this.items = this._mockService.getCrowdfundings();
  }

}
