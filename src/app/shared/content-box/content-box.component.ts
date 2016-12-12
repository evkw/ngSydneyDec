import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class BoxComponent {
  @Input() heading;
  @Input() body;
  @Input() link;
}
