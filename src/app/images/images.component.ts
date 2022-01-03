import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
@Input() images:any;
  
headerImage : any; 

sliderOpts = {
  slidesPerView: 4.3,
  spaceBetween: 7,
}
constructor() { }

async ngOnInit() {

  
}

changeImage(item:any) {
  
    this.headerImage=item;

}
}
