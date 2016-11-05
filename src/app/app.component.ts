import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase'; // Firebase does not support named exports, but we can use the default syntax

const firebaseconfig = {
  apiKey: 'AIzaSyATVo4-ToKFGqopE4MMQbqeWSO70Dn_9hE',
  authDomain: 'learning-journal.firebaseapp.com',
  databaseURL: 'https://learning-journal.firebaseio.com',
  storageBucket: 'learning-journal.appspot.com'
};

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    firebase.initializeApp(firebaseconfig);


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
