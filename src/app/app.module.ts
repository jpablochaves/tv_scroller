import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Necesario para poder usar animations como en el fader */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdImagesComponent } from './components/ad-images/ad-images.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DonationInfoComponent } from './components/donation-info/donation-info.component';
import { TextAdsComponent } from './components/text-ads/text-ads.component';
import { HttpClientModule } from '@angular/common/http';
import { MarqueeComponent } from './marquee/marquee.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    AdImagesComponent,
    MessagesComponent,
    DonationInfoComponent,
    TextAdsComponent,
    MarqueeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
