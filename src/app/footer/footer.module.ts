import { NgModule } from '@angular/core';

import { FooterComponent }   from './footer.component';
import {FooterCopyrightComponent} from './footer-copyright/footer-copyright.component';
import {FooterDetailsComponent} from './footer-details/footer-details.component';
import {FooterLatestComponent} from './footer-latest/footer-latest.component';
import {FooterLinksComponent} from './footer-links/footer-links.component';
import {FooterSocialComponent} from './footer-social/footer-social.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ SharedModule ],
  exports: [
    FooterComponent
  ],
  declarations: [
    FooterComponent,
    FooterCopyrightComponent,
    FooterDetailsComponent,
    FooterLatestComponent,
    FooterLinksComponent,
    FooterSocialComponent
  ],
  providers: [],
})
export class FooterModule { }
