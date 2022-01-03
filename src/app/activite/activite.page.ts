import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { initialize,activities,Activities } from '../services/bucket';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.page.html',
  styleUrls: ['./activite.page.scss'],
})
export class ActivitePage implements OnInit {
id:any;
activite:Activities;
@ViewChild('MySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev();
  }
  constructor(private router: ActivatedRoute) {
    initialize({identity:environment.token})
   }

  async ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.activite = await this.getActivite();
    console.log(this.activite);
    
  }
  
  async getActivite() {
    return activities.get(this.id);
  }

}
