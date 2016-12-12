import { Component } from '@angular/core';

import { appRoutes } from './app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public routes;

  constructor() {
    this.routes = appRoutes.filter(route => route.path != '');
    console.log(this.routes);
  }
}
