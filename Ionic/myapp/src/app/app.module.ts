import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { MovieListPage } from '../pages/movie-list/movie-list'
import { SearchListPage } from '../pages/search-list/search-list';
import { LoginPage } from '../pages/login/login';
import { Data } from '../providers/data';
import { ListPage } from '../pages/list/list';
import { AlarmPage } from '../pages/alarm/alarm';


@NgModule({
  declarations: [
    MyApp,
    MovieInfoPage,
    MovieListPage,
    LoginPage,
    SearchListPage,
    ListPage,
    AlarmPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MovieInfoPage,
    MovieListPage,
    LoginPage,
    SearchListPage,
    ListPage,
    AlarmPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Data]
})
export class AppModule {}
