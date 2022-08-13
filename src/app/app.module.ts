import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdImagesComponent } from './components/ad-images/ad-images.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DonationInfoComponent } from './components/donation-info/donation-info.component';
import { TextAdsComponent } from './components/text-ads/text-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    AdImagesComponent,
    MessagesComponent,
    DonationInfoComponent,
    TextAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
