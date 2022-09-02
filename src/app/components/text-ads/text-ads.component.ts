import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service'


@Component({
  selector: 'app-text-ads',
  templateUrl: './text-ads.component.html',
  styleUrls: ['./text-ads.component.css']
})
export class TextAdsComponent implements OnInit {

  Messages:any = {};

  constructor(public restApi: RestApiService) { }
  ngOnInit(): void {
    console.log("Init ** text-ads");
    this.loadData();
  }

  loadData() {
    return this.restApi.getMessages().subscribe((data: {}) => {
      this.Messages = data;
      console.log(this.Messages);
    });
  }

}
