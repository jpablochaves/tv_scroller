import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { interval } from 'rxjs';
import { RestApiService } from '../../services/rest-api.service'
import { Donation } from '../../interfaces/tvscroller.interfaces'
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-donation-info',
  templateUrl: './donation-info.component.html',
  styleUrls: ['./donation-info.component.css'],
  animations: [
    trigger("fadeAnimation", [
      transition("false=>true", [
        style({ opacity: 0 }),
        animate("1000ms", style({ opacity: 1 }))
      ]),
      //when we write '500ms  100ms' means that the animation spend 500ms, and start afer 100ms
      transition("true=>false", [animate("5000ms 1000ms", style({ opacity: 0 }))])
    ])
  ]
})
export class DonationInfoComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("donationInfo", { static: false }) wordCarouselEl: ElementRef | undefined;

  donationsInfo: Donation[] = [];
  donations:string[] = []
  wordCounter = -1;
  animationStarter: boolean = true;
  interval: any | undefined;

  constructor(private apiService: RestApiService) {
    this.donations = ['',];
    this.loadDonationInfo();
   }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationStarter = false;
    })
  }

  ngOnInit(): void {
    // Cada minuto va a estar revisando si hay cambios en los textos de donaciones
    this.interval = setInterval(() => {
      this.loadDonationInfo();
    }, 60000)
  }

  getNextDonationInfo(event: any): void {
    this.animationStarter = !this.animationStarter;
    if (event.fromState)
      this.wordCounter = (this.wordCounter + 1) % this.donations.length;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadDonationInfo(): void {
    this.apiService.getDonations().subscribe(resp => {
        this.donations = resp.map(d=>d.info);
    });
  }




}
