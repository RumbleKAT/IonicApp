import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the MovieInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-movie-info',
  templateUrl: 'movie-info.html'
})
export class MovieInfoPage {

  movie: {};

  constructor(public navCtrl: NavController, private navParams: NavParams) {
      this.movie = navParams.get('movie');
  }

}
