import { Injectable } from '@angular/core';
import { PROJECTS } from './mock-data';

@Injectable()
export class MockService {
    getProjects() {
        return Promise.resolve(PROJECTS);
    }

    getProject(id: string) {
        console.log(id);
        console.log(PROJECTS);
        return Promise.resolve(PROJECTS)
            .then(projects => projects.find(x => x.id === id));
    }

    insertProject(entity: any) {
        entity.id = PROJECTS[PROJECTS.length - 1].id;
        entity.featured = 'Featured for you';
        entity.title = entity.quantity + ' tons of ' + entity.product + ' by ' + entity.deliveryTime;
        entity.text = 'Deliver on ' + entity.incoterm + ', baseline price of $' + entity.price;
        entity.daysAgo = '0',
            PROJECTS.unshift(entity);
    }
}
