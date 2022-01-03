import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import {initialize,site_configurations,Site_Configurations,room,Room,activities,Activities} from '../services/bucket';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('mySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev();
  }
  constructor() {
    initialize ({identity: environment.token})

    }
date:any = new Date().toISOString();
site:Site_Configurations[];
logo:any;
room: Room [];
activities:Activities[];

    
  async  ngOnInit() {
    this.site = await this.getSiteConfig();
    this.logo = this.site[0].homepage.logo;    
    this.room = await this.getRoom();
    this.activities = await this.getActivities();
    
    
  
    
    }

  async getSiteConfig() {
    return site_configurations.getAll();
  }
 
  async getRoom() {
    return room.getAll();
  }
  async getActivities() {
    return activities.getAll();
  }
  
  sliderOpts = {
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    autoplay: true,
  }

}