import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../interfaces/tvscroller.interfaces'
import { interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'marquee-component',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit, OnDestroy {

  messages: string[] = ['Hola', 'Vamos a donar', 'Prueba'];
  marquee_default:string = 'Teletón 2022, ¡Juntos todo es Posible!';
  interval:any;

  constructor() {
    console.log("marquee constructor")
  }

  ngOnInit(): void {
    //this.loadMarquee()
    //this.initMarqueeObserver();

  }

  ngOnDestroy(){
    clearInterval(this.interval);
    console.log("marquee destroyed");
  }

  initMarqueeObserver() {
    console.log("Init observable");
    interval(1000).pipe(take(this.messages.length)).subscribe(i => {
        console.log('obs:',this.messages[i])
        if (i<1){
          console.log("New data")
          this.messages.push(`Data: ${i}`)
        }
    });

    // const source = Observable.interval(1000).take(this.messages.length);
    // const sub = source.finally(this.messages).subscribe((i:number) => console.log(this.messages[i]));
  }


  loadMarquee() {
   this.interval = setInterval(() => {
      console.log('Marquee loaded')
     // this.messages.push("sdadasda")
    }, 20000);
  }







}
