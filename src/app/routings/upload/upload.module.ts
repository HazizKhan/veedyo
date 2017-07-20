import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { UploadComponent } from './../../components/upload/upload.component';
import { UploadRouterModule } from './upload-router.module';


@NgModule({
  imports: [
    CommonModule,
    UploadRouterModule,
    SharedModule,
  ],
  declarations: [
    UploadComponent
  ]
})
export class UploadModule { }
