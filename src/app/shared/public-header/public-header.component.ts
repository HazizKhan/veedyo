import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.body.style.paddingTop = '75px';
  }
  ngOnDestroy(){
    document.body.style.paddingTop = '0';
  }

}
