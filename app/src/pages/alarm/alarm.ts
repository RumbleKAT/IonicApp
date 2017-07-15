import { Component } from '@angular/core';
import { Platform, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {InAppBrowser} from 'ionic-native';
import { CommentsPage } from '../comments/comments';
import { CommentsDetailPage } from '../comments-detail/comments-detail';


/*
  Generated class for the Alarm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage {

  posts:any;
  post:any;
  category;
  image;
  title;
  date;
  times;
  query;
  comment_count;
  likes;
  search_url;
  mycolor:string;

  search_data;


  constructor(public platform: Platform, public loadingCtrl: LoadingController,public http:Http,public navCtrl: NavController, public navParams: NavParams) {
    this.comment_count = 0;
    this.category = "BBC";
    this.image = "assets/image/bbc.png";
    this.likes = 0;
    this.mycolor = "light";

    this.date = new Date().toString();
    var first = this.date.search(":");
    var nowTime = this.date.slice(first-2,first);
   this.times = nowTime;
    this.http.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=b3c2e4d351ec4a56bf403743d6056888').map(res => res.json()).subscribe(data => {
        this.posts = data.articles;
    });
    this.load();
    this.getComments();
}

 private load(){
  console.log("dddd \n");
}


  presentLoading() {
       let loader = this.loadingCtrl.create({
           content: "Please wait...",
           duration: 3000
       });
       loader.present();

       setTimeout(() => {
        loader.dismiss();
      }, 5000);

   }

  launch(url) {
       this.platform.ready().then(() => {
           open(url, "_blank", "location=no");
       });
   }

   setLikes(likes){
     this.likes += 1;
     console.log(this.likes);
     if(this.likes % 2 == 0){
       this.mycolor = "primary";
    //   this.posts = data.articles;

     }else{
      this.mycolor = "light";
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
       var count = 0;

       for(var i=1;i<counting+1;i++){
         console.log(JSON.stringify(data["index"+i]));
         if(data["index"+i].title == this.title){
            count++;
         }
       }
       this.comment_count = count;
       console.log(this.comment_count);
     });
   }

  select(){
    if(this.category == "CNN")
    {
      this.http.get('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=b3c2e4d351ec4a56bf403743d6056888').map(res => res.json()).subscribe(data => {
          //alert(JSON.stringify(data));
          this.posts = data.articles;
          this.image = "assets/image/cnn.png";
      });

    } else if(this.category == "BBC")
    {
      this.http.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=b3c2e4d351ec4a56bf403743d6056888').map(res => res.json()).subscribe(data => {
          //alert(JSON.stringify(data));
          this.posts = data.articles;
          this.image = "assets/image/bbc.png";
      //    this.times = this.post.publishedAt;
        //  alert(JSON.stringify(this.times));
      });
    }
  }

  search(query){
    this.navCtrl.push(CommentsDetailPage, {
      query:query
    });
  }

  showComments(post){ //댓글 보기 기능
    this.navCtrl.push(CommentsPage, {
      title: post.title,
      description :post.description, //넘겨줄 변수를 이렇게 만듬
      publishedAt : post.publishedAt,
      urlToImage : post.urlToImage,
      url : post.url,
      category : this.category
    });
  }

}
