import { Component, OnInit } from '@angular/core';

import { FirebaseService } from './../../core/firebase.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  extErr;
  constructor(private fb: FirebaseService) { }

  ngOnInit() {
  }
  pushCategory(category) {
    console.log(category.value);
  }
  upload(file: File, allowedExt: string[]) {
    const extSplit = file.name.split('.');
    const ext = extSplit[extSplit.length - 1].toLowerCase();
    console.log(ext);
    const errMessage = 'invalid extension please use these extensions: ' + allowedExt.join();
    for (let i = 0; i < allowedExt.length; i++) {
      if (ext === allowedExt[i]) {
        if (this.extErr === errMessage) {
          this.extErr = '';
        }
        break;
      } else {
        this.extErr = errMessage;
      }
    }
  }
  uploadThumbnail(tn) {
    if (tn.files[0]){
      this.upload(tn.files[0], ['jpg', 'jpeg', 'png']);
    }
  }
  uploadVideo(video){
      if(video.files[0]){
        this.upload(video.files[0], ['mp4']);
      }
    }
}
