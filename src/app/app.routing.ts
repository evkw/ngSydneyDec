import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const appRoutingModule = RouterModule.forRoot(appRoutes);
