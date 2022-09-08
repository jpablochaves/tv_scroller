import { AfterViewInit, Component } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Image } from '../../interfaces/tvscroller.interfaces';


@Component({
  selector: 'app-images',
  templateUrl: './ad-images.component.html',
  styleUrls: ['./ad-images.component.css']
})
export class AdImagesComponent implements AfterViewInit {

  imagesFromService: Image[] = [];
  refreshedImages: Image[] = []; // Se pasa al componente app-images-carousel como param
  constructor(private apiService: RestApiService) {
    this.apiService.getImages().subscribe(response => {
      this.refreshedImages = [...response]
    });
  }


  ngAfterViewInit(): void {
    console.log("AfterViewInit");
    setInterval(() => {
      this.loadImagesToCarousel()
    }, 20000);
  }

  loadImagesToCarousel(): void {
    this.apiService.getImages().subscribe(response => {
      // console.log('resp', response);
      if (response === null) {
        this.fillDefaultDataWhenNull()
      } else {
        response.forEach((data) => {
          this.imagesFromService.push(data);
        });
      }
    });
    this.refreshedImages = [...this.imagesFromService]
    // this.checkChangesOnImages()
  }

  checkChangesOnImages(): void {
    const copyArr = [...[...this.refreshedImages, ...this.imagesFromService]]
    this.refreshedImages = copyArr.filter((v, i, a) => a.findIndex(v2 => (v2.name === v.name)) === i)
    this.imagesFromService = [];
  }

  fillDefaultDataWhenNull(): void {
    this.imagesFromService.push({ path: 'assets/logos/sponsors/00_CLUB_ACTIVO.png', name: "00_CLUB_ACTIVO.png", shape: 0 })
    this.imagesFromService.push({ path: 'assets/logos/sponsors/00_TELETON.png', name: "00_TELETON.png", shape: 1 })
  }

}
