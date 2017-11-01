import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { ProducerComponent } from './producer.component';
import { ProducerDetailComponent } from './producer-detail.component';


const routes: Routes = Route.withShell([
  {
    path: 'producer',
    component: ProducerComponent,
    data: {
      title: extract('Producer')
    }
  },
  {
    path: 'producer/:id',
    component: ProducerDetailComponent,
    data: {
      title: extract('Producer')
    }
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProducerRoutingModule { }
