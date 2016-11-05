import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import {UserService} from "../../providers/user-service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @Input() user: any;
  currentUser:any;
  tasksAmount:any;
  communitiesIds:any;
  constructor(public navCtrl: NavController, private userService: UserService) {
    this.currentUser = userService.getUser();
    this.tasksAmount = Object.keys(this.currentUser.tasks).length;

    this.userService.userCommunities.subscribe((userCommunities) => {
      this.communitiesIds = userCommunities;
    });

    this.userService.getUserCommunities();
  }
}
