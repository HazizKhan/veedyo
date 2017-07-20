import { PublicHeaderComponent } from './../../shared/public-header/public-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './../../components/upload/upload.component';
import { Routes, RouterModule } from '@angular/router';

const children: Routes = [
  { path: '', component: PublicHeaderComponent, outlet: 'public-header'}
]
const routes: Routes = [
  { path: '', component: UploadComponent, children}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UploadRouterModule { }
