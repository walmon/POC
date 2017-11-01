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
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/