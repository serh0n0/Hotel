import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomDetailsPageRoutingModule } from './room-details-routing.module';

import { RoomDetailsPage } from './room-details.page';
import { FooterComponent } from '../footer/footer.component';
import { ImagesComponent } from '../images/images.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomDetailsPageRoutingModule
  ],
  declarations: [RoomDetailsPage,FooterComponent,ImagesComponent]
})
export class RoomDetailsPageModule {}
