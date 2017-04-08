import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { CommentsDetailPage } from '../comments-detail/comments-detail';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import {InAppBrowser} from 'ionic-native';


@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {

  tabBarElement: any;
  posts:any;
  title;
  description;
  publishedAt;
  urlToImage;
  url;
  articles:any;
  category;

  userID;
  text;
  date;
  image;
  news_image;
  query;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController,public dataService:Data,public http:Http) {
    this.userID = "user";
    this.title = this.navParams.get('title');//제목의 정보를 알아냄
    this.description = this.navParams.get('description');//제목의 정보를 알아냄
    this.publishedAt = this.navParams.get('publishedAt');//제목의 정보를 알아냄
    this.urlToImage = this.navParams.get('urlToImage');//제목의 정보를 알아냄
    this.url = this.navParams.get('url');//제목의 정보를 알아냄
    this.category = this.navParams.get('category');
    this.image = "assets/image/user.png";
    this.getComments();
    this.get_newsImage();
  }

get_newsImage(){
  if(this.category == "BBC"){
    this.news_image = "assets/image/bbc.png";
  } else{
    this.news_image = "assets/image/cnn.png";
  }
}


getComments(){
  var arr = new Array();
  this.http.get('http://localhost:3000/getcomments').map(res => res.json()).subscribe(data => {
    var counting = Object.keys(data).length;
    console.log(counting);
    var index = "index1";
    console.log(JSON.stringify(data));

    var arr = new Array();

    for(var i=1;i<counting+1;i++){
      console.log(JSON.stringify(data["index"+i]));
      if(data["index"+i].title == this.title){
        arr.push(data["index"+i].text);
      }
    }
    this.posts = arr;
  });
}

  send(){
    this.text = this.query;
    this.date = new Date().toString();
    this.http.get('http://localhost:3000/setcomments?user='+this.userID+'&title='+this.title+'&text='+this.text+'&date='+this.date).map(res => res.json()).subscribe(data => {
    });
    alert("댓글이 입력되었습니다.");
    this.getComments();
}


}
