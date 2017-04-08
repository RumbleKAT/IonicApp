import { Component } from '@angular/core';

import { NavController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

 title;
 after;
 before;


  constructor(public navCtrl: NavController, public vc:ViewController) {

  }
  saveItem(){

      let newItem = {

        title: this.title,
        after: this.after,
        before: this.before

      };

      this.vc.dismiss(newItem);

    }

    close(){
      this.vc.dismiss();
    }
}
