import { Component } from '@angular/core';

import { NavController,ModalController ,AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import {ItemDetailPage} from '../item-detail/item-detail';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public items = [];


  constructor(public alertcontrol:AlertController,public navCtrl: NavController,public modalCtrl: ModalController , public dataService: Data) {
    this.dataService.getData().then((todos) => {
    if(todos){
     this.items = JSON.parse(todos);
   }
  });
  }
  ionViewDidLoad(){

  }

  addItem(){
    let addModal = this.modalCtrl.create(ContactPage);
 // call back when modal dismissed
    addModal.onDidDismiss((item) => {
   if(item){
     this.saveItem(item);
   }
   });
   addModal.present();
  }

  viewItem(item){ //댓글 보기 기능 
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
  editItem(item){

    let prompt = this.alertcontrol.create({
      title: 'Edit Data',
      inputs: [{
        name: 'title'
      },{
        name: 'description'
      }],
      buttons:[{
        text: 'Cancel'
      },
      {
        text: 'Save',
        handler: data => {
          let index = this.items.indexOf(item);
          if(index > -1)
          {
            this.items[index] = data;
          }
        }
      }
    ]
    });
    this.dataService.save(this.items);
    prompt.present();
  }

  removeItem(item){
    let index = this.items.indexOf(item);
    if(index > -1)
    {
      this.items.splice(index,1);
    }
    this.dataService.save(this.items);
  }
}
