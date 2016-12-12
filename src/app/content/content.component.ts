import { Component, OnInit } from '@angular/core';

import {data} from './content.data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public boxContent = data;
}
