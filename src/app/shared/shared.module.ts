import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    ProfileComponent
  ],
  exports: [
    LoaderComponent,
    ProfileComponent
  ]
})
export class SharedModule { }
