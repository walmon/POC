import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-investor-home',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}
