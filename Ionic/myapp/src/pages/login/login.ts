import { Component } from '@angular/core';
import { NavController , NavParams , AlertController  } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import { MovieInfoPage } from '../movie-info/movie-info';
import { MovieListPage } from '../movie-list/movie-list';
import { SearchListPage } from '../search-list/search-list';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openFilters(){
    this.navCtrl.push(MovieListPage);
  }
  searchFilters(){
    this.navCtrl.push(SearchListPage);
  }

}
