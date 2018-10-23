import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInRight', [
      transition(':enter', [
        style({opacity:0, transform:'translateX(-15px)'}),
        animate("300ms 100ms", style({opacity:1, transform:'translateX(0)'})) 
      ]),
      transition(':leave', [
        animate(500, style({opacity:0, transform:'translateX(-15px)'})) 
      ])
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({opacity:0, transform:'translateX(15px)'}),
        animate("300ms 100ms", style({opacity:1, transform:'translateX(0)'})) 
      ]),
      transition(':leave', [
        animate(500, style({opacity:0, transform:'translateX(15px)'})) 
      ])
    ]),
  ]
})
export class AppComponent {
  showSocial = false;
  isPhone = true;

  constructor() {
    if(window.innerWidth >= 600) {
      this.isPhone = false;
    }
  }

  getWidth() {
    return window.innerWidth <= 390 ? window.innerWidth*0.7 + "px" : "320px";
  }

  getBoobyWidth() {
    return window.innerWidth <= 390 ? window.innerWidth*0.5 : 200;
  }
  
  showSocialIcons(event:Event) {
    this.showSocial = this.showSocial ? false : true;
    return false;
  }
}
