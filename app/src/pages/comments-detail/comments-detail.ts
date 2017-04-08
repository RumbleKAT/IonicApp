import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the CommentsDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comments-detail',
  templateUrl: 'comments-detail.html'
})
export class CommentsDetailPage {

posts:any;
    query;

  constructor(public http:Http ,public navCtrl: NavController, public navParams: NavParams,public vc:ViewController) {
    this.query = this.navParams.get('query');//제목의 정보를 알아냄
    console.log(this.query);
    this.searchMovies();
  }

  searchMovies() {
        var url = 'http://localhost:3000/news?query=' + encodeURI(this.query);
        this.http.get(url).map(res => res.json()).subscribe(data => {
            //alert(JSON.stringify(data));
            this.posts = data.items;
        });
    }

}
