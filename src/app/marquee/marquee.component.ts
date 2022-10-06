import { Component, OnInit, AfterViewInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { RestApiService } from '../services/rest-api.service';


@Component({
  selector: 'marquee-component',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit, AfterViewInit {

  messages: string[] = [];
  refreshedSMS: string[] = [];
  marquee_default: string = 'Teletón 2022, ¡Juntos todo es Posible!';
  MARQUEE_SMS_COUNT: number = 50;

  constructor(private apiService: RestApiService) {
    console.log("marquee constructor")
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log("Getting new messages");
      this.loadMoreMessages();
    }, 50000)
  }

  ngOnInit(): void {
    this.loadInitialMessages();
  }

  loadMoreMessages(): void {
    if (this.refreshedSMS.length <= 10) {
      this.apiService.getMessages().subscribe({
        next: (response) => {
          response.forEach((data) => {
            this.refreshedSMS.push(data.sms);
          });
        },
        complete: () => {
          this.messages = [...this.refreshedSMS.splice(0, this.MARQUEE_SMS_COUNT)]
          console.log("More messages fetched complete:",this.messages);
        }
      });
    } else {
      this.messages = [...this.refreshedSMS.splice(0, this.MARQUEE_SMS_COUNT)]
    }
  }

  loadInitialMessages(): void {
    this.apiService.getMessages().subscribe({
      next: (response) => {
        response.forEach((data) => {
          this.refreshedSMS.push(data.sms);
        });
      },
      complete: () => {
        this.messages = [...this.refreshedSMS.splice(0, this.MARQUEE_SMS_COUNT)]
        console.log("LoadInit Complete: ", this.messages);
      },
    })
  }




}
