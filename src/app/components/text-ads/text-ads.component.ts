import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service'


@Component({
  selector: 'app-text-ads',
  templateUrl: './text-ads.component.html',
  styleUrls: ['./text-ads.component.css']
})
export class TextAdsComponent implements OnInit {

  Messages:any = {};
  msg:string[] = [];

  constructor(public restApi: RestApiService) { }
  ngOnInit(): void {
    // console.log("Init ** text-ads");
    // this.loadData();
  }

  loadData() {
    return this.restApi.getAdvertisings().subscribe((data) => {
      data.forEach(d => this.msg.push(d.ad));
      this.Messages = data;
      // console.log(this.msg);
    });
  }

}
