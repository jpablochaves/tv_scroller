import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-marquee-advertising',
  templateUrl: './marquee-advertising.component.html',
  styleUrls: ['./marquee-advertising.component.css']
})
export class MarqueeAdvertisingComponent implements OnInit, OnDestroy {

  messages:string[] = [];
  separator: string = '🔸';
  marquee_txt: string = '';
  interval: any | undefined;

  constructor(private apiService: RestApiService) {
    this.messages = ['',];
    // this.loadAdvertisingInfo();
  }

  ngOnInit(): void {
      this.loadAdvertisingInfo();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadAdvertisingInfo(): void {
    console.log('Loading advertising info')
    this.messages = [];
    this.apiService.getAdvertisings().subscribe((data) => {
      data.forEach((obj) => {
        let {ad} = obj;
        this.messages.push(ad);
        this.marquee_txt += ad + ' ';
      })
    });
    console.log('messages',this.marquee_txt)
  }

}
