import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { appRoutingModule } from './app.routing';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
