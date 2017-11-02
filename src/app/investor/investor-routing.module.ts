import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { InvestorComponent } from './investor.component';
import { InvestorDetailComponent } from './investor-detail.component'

const routes: Routes = Route.withShell([
  {
    path: 'investor',
    component: InvestorComponent,
    data: { title: extract('Investor') }
  },
  {
    path: 'investor/:id',
    component: InvestorDetailComponent,
    data: {
      title: extract('Investor')
    }
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class InvestorRoutingModule { }
