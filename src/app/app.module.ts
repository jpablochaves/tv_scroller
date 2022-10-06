import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Necesario para poder usar animations como en el fader */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AdImagesComponent } from './components/ad-images/ad-images.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DonationInfoComponent } from './components/donation-info/donation-info.component';
import { TextAdsComponent } from './components/text-ads/text-ads.component';
import { HttpClientModule } from '@angular/common/http';
import { MarqueeComponent } from './marquee/marquee.component';
import { MarqueeAdvertisingComponent } from './marquee-advertising/marquee-advertising.component';
import { ImagesCarouselComponent } from './components/images-carousel/images-carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    AdImagesComponent,
    MessagesComponent,
    DonationInfoComponent,
    TextAdsComponent,
    MarqueeComponent,
    MarqueeAdvertisingComponent,
    ImagesCarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
