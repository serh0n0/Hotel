import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { initialize,room,Room,properties,Properties } from '../services/bucket';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.page.html',
  styleUrls: ['./room-details.page.scss'],
})
export class RoomDetailsPage implements OnInit {
id:any;
room: Room;
headImage:any;
properties:Properties[];

constructor(private router: ActivatedRoute) { 
  initialize({identity:environment.token})
   }

  async ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.room= await this.getRoom();
    console.log(this.room);
    this.headImage=this.room.head_image;
    this.properties = await this.getProperties();    
    console.log(this.properties);
    
  }
  
  async getRoom() {
    return room.get(this.id);
  }
  async getProperties() {
    return properties.getAll({queryParams:{filter:{_id:this.properties}}})
  }
  imageChange(item:any) {
    this.headImage=item;      
  }

}
