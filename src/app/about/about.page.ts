import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { initialize,site_configurations,Site_Configurations } from '../services/bucket';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  @ViewChild('MySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev();
  }
about:Site_Configurations[];
logo:any;
image:any;
text:any;
images:any;
  constructor() {
    initialize({identity:environment.token})
   }

  async ngOnInit() {
    this.about = await this.getAbout();
    console.log(this.about);
    this.logo = this.about[0].homepage.logo;
    this.image = this.about[0].homepage.slides[0];
    this.text = this.about[0].about;
  this.images={
    images:this.about[0].homepage.slides
  }
  console.log(this.images);
      
  }
  async getAbout() {
    return site_configurations.getAll();
  }

}
