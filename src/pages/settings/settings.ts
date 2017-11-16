import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  toppings:string = 'Bacon';
  distanceUnit: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.distanceUnit = 'KM';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
