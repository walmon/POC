import { Injectable } from '@angular/core';
import { PROJECTS, PEOPLE } from './mock-data';
import { Project } from './project';

@Injectable()
export class MockService {
    getLatestProjectId() {
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
    getLatestCrowdfundingId() {
        let latest: number = localStorage.getItem('latestCrId') ?
            Number(localStorage.getItem('latestCrId')) :
            0;
        if (latest === 0) {
            localStorage.setItem('latestCrId',
                JSON.stringify(1));
            return 1;
        } else {
            localStorage.setItem('latestCrId',
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
    retrieveCrowdfunding(): any[] {
        if (!localStorage.getItem('crowdfunding')) {
            this.updateCrowdfunding([]);
        }
        return JSON.parse(localStorage.getItem('crowdfunding'));
    }
    updateCrowdfunding(items: any[]) {
        localStorage.setItem('crowdfunding', JSON.stringify(items));
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
        entity.id = JSON.stringify(this.getLatestProjectId());

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

    insertCrowdfunding(crowdfunding: any) {
        let items = this.retrieveCrowdfunding();
        crowdfunding.id = JSON.stringify(this.getLatestCrowdfundingId());
        items.unshift(crowdfunding);
        this.updateCrowdfunding(items);
        return items;
    }
    getCrowdfundings(): any[] {
        return this.retrieveCrowdfunding();
    }
    getCrowdfunding(id: string): any {
        console.log(id);
        let crowdfundings = this.retrieveCrowdfunding() || [];
        console.log(crowdfundings);
        return crowdfundings.filter(x =>
            x.id === id)[0];
    }
}
