import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { MockService } from '../services/mock.service';
import { Project } from '../services/project';

@Component({
    selector: 'app-buyer-home',
    templateUrl: './buyer.component.html',
    styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
    buyerForm: Project = {};
    version: string = environment.version;

    constructor(private _mockService: MockService) { }

    ngOnInit() {
        this.buyerForm.price = '0';
    }

    draft() {
        alert('Saved as draft');
    }
    submit(entity: Project) {
        this._mockService.insertProject(entity);
        alert('Inserted to the chain');
    }

}
