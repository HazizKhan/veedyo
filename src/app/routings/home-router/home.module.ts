import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './../../components/home/home.component';
import { HomeRouterModule } from './home.router.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
