import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,FormControlName} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { rezervasyon,Rezervasyon,initialize } from '../services/bucket';
import { ModalController, NavParams} from '@ionic/angular';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent {

  constructor(public alertController: AlertController,
    private modalController: ModalController
    ) {
    initialize ({identity: environment.token})

    }
date:any;  
text:any;
test=true;
dt:any;
loginForm = new FormGroup({
  adult:new FormControl('',[Validators.required]),
  children:new FormControl('',[Validators.required]),
  name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  phoneNumber:new FormControl('',[Validators.required,Validators.pattern("^((\\+0-?)|0)?[0-9]{10}$")]),
  checkIn:new FormControl('',[Validators.required]),
  checkOut:new FormControl('',[Validators.required]),


  

})


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.

  this.date = new Date().toJSON().split('T')[0];

    
}

getErrorMessageAdult() {
  if (this.adult.hasError('required')) {
    return 'Boş alan bırakmayınız.';
  }
}
getErrorMessageChildren () {
  if (this.children.hasError('required')) {
    return 'Boş alan bırakmayınız.';
  }
}
getErrorMessageName () {
  if (this.name.hasError('required')) {
    return 'Boş alan bırakmayınız.';
  }
  if (this.name.hasError('minlength')) {
    return 'En az 3 karakter girmelisiniz.';
  }
}
getErrorMessageEmail () {
  if (this.email.hasError('required')) {
    return 'Boş alan bırakmayınız.';
  }
  if (this.email.hasError('email')) {
    return 'Geçersiz bir e-posta adresi girdiniz.';
  }
}

getErrorMessagePhoneNumber () {
  if (this.phoneNumber.hasError('required')) {
    return 'Boş alan bırakmayınız.';
  }
  if (this.phoneNumber.hasError('pattern')) {
    return 'Geçersiz bir telefon numarası girdiniz..';
  }
}
getErrorMessageCheckIn() {
  if (this.checkIn.hasError('required')) {
    return 'Boş alan bırakmayınız.';
  }
}
  
getErrorMessageCheckOut() {
  if (this.checkOut.hasError('required')) {
    return 'Boş alan bırakmayınız.';
  }
}
   

dateControl() {
  console.log(this.checkIn.value);
  
      if(this.checkIn.valid && this.checkOut.valid) {
        if (this.checkIn.value > this.checkOut.value) 
         {
           this.dt = this.checkIn.value;
           
         }
         
      }
      else if (this.checkIn.valid &&this.checkOut.invalid)
          {
            this.dt = this.checkIn.value;
          }
      
  }

  loginUser() {
      
    
    if(this.loginForm.invalid) {  


      this.loginForm.markAllAsTouched();
      

      
    }
    else {
      this.text = "Rezervasyon talebiniz alındı.";
      rezervasyon.insert({
        adult:Number (this.loginForm.get('adult').value),
        children:Number (this.loginForm.get('children').value),
        name:this.loginForm.get('name').value,
        mail:this.loginForm.get('email').value,
        phone_number:this.loginForm.get('phoneNumber').value,
        check_in: new Date(this.loginForm.get('checkIn').value).toISOString(),
        check_out: new Date (this.loginForm.get('checkOut').value).toISOString(),
      })  
      
      this.presentAlert();  
      this.loginForm.reset();      
    }
    
  }
  get adult () {
    return this.loginForm.get('adult');
  }
  get children () {
    return this.loginForm.get('children')
  }
  get name () {
    return this.loginForm.get('name')
  }
  get email () {
    return this.loginForm.get('email')
  }
  get phoneNumber () {
    return this.loginForm.get('phoneNumber')
  }
  get checkIn() {
    return this.loginForm.get('checkIn')
  }
  get checkOut() {
    return this.loginForm.get('checkOut')
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: 'Bilgi',
      message: this.text,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
}
