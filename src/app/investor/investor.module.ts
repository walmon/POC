import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorComponent } from './investor.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    InvestorRoutingModule
  ],
  declarations: [
    InvestorComponent
  ]
})
export class InvestorModule { }
