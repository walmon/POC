import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
    selector: 'app-buyer-home',
    templateUrl: './buyer.component.html',
    styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
    buyerform = {
        price : 0
    };
    version: string = environment.version;

    constructor() { }

    ngOnInit() { }

}
