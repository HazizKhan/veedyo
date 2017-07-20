import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './../../components/home/home.component';
import { PublicHeaderComponent } from './../../shared/public-header/public-header.component';
const children: Routes = [
  { path: '', component: PublicHeaderComponent, outlet: 'public-header'}
];
const routes: Routes = [
  { path: '', component: HomeComponent, children }
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
export class HomeRouterModule { }
