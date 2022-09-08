import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '../../interfaces/tvscroller.interfaces'


@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.css']
})
export class ImagesCarouselComponent implements OnInit {

  @Input() images: Image[] = [];
  // 0 imagen cuadrada | 1 rectangular
  slideImages: Image[] = []

  constructor() {
    this.slideImages = [...this.images];
  }

  ngOnInit(): void {
    // this.slideImages = this.images;
    this.slideImages = [...this.images]
  }

  // Caputrar los cambios en el componente cuando se actualiza el input
  ngOnChanges(changes: SimpleChanges) {
    this.slideImages = [...this.images];
    console.log("Comp Changed", this.slideImages)
  }

  onSlide(evt: NgbSlideEvent) {
    //  console.log("Slide finished!", evt);
    //  console.log(this.slideImages.length)
    // Probar un observable para mandar a solicitar más datos
  }

  imgNotFound(event: any) {
    // console.log("Image not found", event)
    let imgNotFound: string = event.target.alt;
    // Quitar del arreglo la imagen no encontrada
    this.slideImages = this.slideImages.filter(logo => logo.name != imgNotFound);
    // console.log(this.slideImages);
  }

}
