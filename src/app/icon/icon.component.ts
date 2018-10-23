import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() xHeight = "0.85em";
  @Input() xWidth = "0.85em";
  xHeightOriginal = "99.113";
  xWidthOriginal = "63.797";

  constructor() { }

}
