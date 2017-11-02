import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorComponent } from './investor.component';
import { InvestorDetailComponent } from './investor-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    InvestorRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    InvestorComponent,
    InvestorDetailComponent
  ]
})
export class InvestorModule { }
