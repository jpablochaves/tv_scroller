import { Component, OnInit } from '@angular/core';


interface Image {
  id: string;
  src?: string;
  alt?: string;
  title?: string;
}
@Component({
  selector: 'app-images',
  templateUrl: './ad-images.component.html',
  styleUrls: ['./ad-images.component.css']
})
export class AdImagesComponent implements OnInit {

  imagesData: Image[] = [
    { id: 'Slide1', src: 'assets/logos/sponsors/00_CLUB_ACTIVO.png', alt: '', title: 'one'},
    { id: 'Slide2', src: 'assets/logos/sponsors/00_TELETON.png', alt: '', title: 'two'},
    { id: 'Slide3', src: 'assets/logos/sponsors/01_BCR.png', alt: '', title: 'three'},
    { id: 'Slide4', src: 'assets/logos/sponsors/02_KOLBI.png', alt: '', title: 'four'},
    { id: 'Slide5', src: 'assets/logos/sponsors/03_IECSA.png', alt: '', title: 'five'},
  ];

  constructor() {
    console.log("image constructor***");
  }

  
  ngOnInit() {
    console.log(this.imagesData)
  }

}
