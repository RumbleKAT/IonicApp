import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { FormControl } from '@angular/forms';

/*
  Generated class for the SearchList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-list',
  templateUrl: 'search-list.html'
})
export class SearchListPage {

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  ioncs: string[];
  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public select:Data) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.setFilteredItems();

  }

  Selected(event,item)
  {
    event.stopPropagation();
    alert(item.title); //select 될때 사용
  }

  onSearchInput()
  {
    this.searching = false;
  }

  setFilteredItems()
  {
    this.items = this.select.filterItems(this.searchTerm);
  }

}
