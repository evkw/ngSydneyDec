import { Component, OnInit } from '@angular/core';
import { data } from './home.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public boxContent = data;
}
