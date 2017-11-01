import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { BuyerComponent } from './buyer.component';

const routes: Routes = Route.withShell([
  { path: 'buyer', component: BuyerComponent, data: { title: extract('Buyer') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BuyerRoutingModule { }
