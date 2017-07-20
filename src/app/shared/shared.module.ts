import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PublicHeaderComponent } from './public-header/public-header.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PublicHeaderComponent
  ],
  exports: []
})
export class SharedModule { }
