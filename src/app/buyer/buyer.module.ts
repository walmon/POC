import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';


import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    BuyerRoutingModule,
    FormsModule
  ],
  declarations: [
    BuyerComponent
  ]
})
export class BuyerModule { }
