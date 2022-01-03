import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  @Input() room:any;
  constructor() { }
  @ViewChild('mySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  swipePrev(){
    this.slides.slidePrev();
  }

  ngOnInit() {

    
  }

}
