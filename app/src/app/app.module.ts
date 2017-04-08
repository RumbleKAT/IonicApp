import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { IonicStorageModule } from '@ionic/storage';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { AlarmPage } from '../pages/alarm/alarm';
import { HomePage } from '../pages/home/home';
import { Data } from '../providers/data';
import { CommentsPage } from '../pages/comments/comments';
import { CommentsDetailPage } from '../pages/comments-detail/comments-detail';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    ItemDetailPage,
    HomePage,
    AlarmPage,
    CommentsPage,
    CommentsDetailPage
  //  ParallaxHeader
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    ItemDetailPage,
    AlarmPage,
    HomePage,
    CommentsPage,
    CommentsDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Data]
})
export class AppModule {}
