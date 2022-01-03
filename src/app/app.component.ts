import { Component } from '@angular/core';
import { Router } from '@angular/router'; //private _router: Router
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _router: Router ,private menu: MenuController) {

  }
  ngOnInit() {
    this._router.navigate(["/home"])
  }

  onMenuClick(){
    this.menu.close()
  }
}
