import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  constructor() { }


  getLogoWidth() {
    return window.innerWidth <= 390 ? window.innerWidth*0.7 : 320;
  }

}
