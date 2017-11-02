import { Injectable } from '@angular/core';
import { PROJECTS, PEOPLE } from './mock-data';
import { Project } from './project';

@Injectable()
export class MockService {
    getLatestId() {
        let latest: number = localStorage.getItem('latestId') ?
            Number(localStorage.getItem('latestId')) :
            0;
        if (latest === 0) {
            localStorage.setItem('latestId',
                JSON.stringify(7));
            return 7;
        } else {
            localStorage.setItem('latestId',
                JSON.stringify(latest + 1));
            return latest + 1;
        }

    }
    updateDatabase(_projects: Project[]) {
        localStorage.setItem('projects', JSON.stringify(_projects));
    }
    retrieveDatabase(): Project[] {
        if (!localStorage.getItem('projects')) {
            this.updateDatabase(PROJECTS);
        }
        return JSON.parse(localStorage.getItem('projects'));
    }
    getProjects(): Promise<Project[]> {
        return Promise.resolve(this.retrieveDatabase());
    }

    getProject(id: string): Promise<Project> {
        return Promise.resolve(this.retrieveDatabase())
            .then(projects => projects.find(x => x.id === id));
    }

    removeProject(id: string) {
        return Promise.resolve(this.getProjects()).then(
            projects => {
                let proj = projects.find(x => x.id === id)[0];
                let index = projects.indexOf(proj);
                projects.splice(index, 1);
                this.updateDatabase(projects);
                return projects;
            }
        );
    }

    insertProject(entity: any) {
        entity.id = JSON.stringify(this.getLatestId());

        entity.featured = 'Featured for you';
        entity.title = entity.quantity + ' tons of ' + entity.product + ' by ' + entity.deliveryTime;
        entity.text = 'Deliver on ' + entity.incoterm + ', baseline price of $' + entity.price;
        entity.daysAgo = '0';

        Promise.resolve(this.getProjects()).then(
            projects => {
                projects.unshift(entity);
                this.updateDatabase(projects);
            }
        );
    }

    getPeople() {
        return Promise.resolve(PEOPLE);
    }
}
