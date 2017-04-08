import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


/*
  Generated class for the ItemDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  title;
  before;
  after;
  isTime;
  isDate;
  isSell;

  constructor(public http:Http,public navParams: NavParams){

    this.before = this.navParams.get('item').before;
    this.after = this.navParams.get('item').after;


    this.http.get('http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%3D%22'+this.before+this.after+'%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').map(res => res.json()).subscribe(data => {
      this.isTime = data.query.results.rate.Time;
      this.isDate = data.query.results.rate.Date;
      this.isSell = data.query.results.rate.Rate;

      alert(JSON.stringify(data.query.results));
    });
  }



}
