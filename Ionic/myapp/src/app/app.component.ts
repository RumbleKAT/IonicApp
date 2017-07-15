import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ListPage } from '../pages/list/list';
import { AlarmPage } from '../pages/alarm/alarm';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginPage;

  constructor(platform: Platform, public navCtrl: NavController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  GoAlarm(){
    this.navCtrl.push(AlarmPage);
  }
}
