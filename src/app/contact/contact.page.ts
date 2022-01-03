import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initialize,site_configurations,Site_Configurations } from '../services/bucket';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
contact:Site_Configurations[]
contactText:{};
cord:any;
cord2:any;
link:any;
Url:any;
  constructor() {
    initialize({identity:environment.token})
   }

  async ngOnInit() {
    this.contact = await this.getContact();
    console.log(this.contact);
    this.contactText = {
      phone:this.contact[0].contact.phone_number,
      location:this.contact[0].contact.adress,
      facebook:this.contact[0].contact.facebook_link,
      instagram:this.contact[0].contact.instagram_link,
      mail:this.contact[0].contact.mail,
    }
    this.cord=this.contact[0].contact.adress_map.coordinates[0];
    this.cord2=this.contact[0].contact.adress_map.coordinates[1];

    this.link ="http://maps.google.com/?q="+this.cord+','+this.cord2;
    console.log(this.link);
    

    

    
  }


  async getContact() {
    return site_configurations.getAll();
  }

}
