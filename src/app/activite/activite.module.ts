import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitePageRoutingModule } from './activite-routing.module';

import { ActivitePage } from './activite.page';
import { FooterComponent } from '../footer/footer.component';
import { ImagesComponent } from '../images/images.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitePageRoutingModule
  ],
  declarations: [ActivitePage,FooterComponent,ImagesComponent]
})
export class ActivitePageModule {}
