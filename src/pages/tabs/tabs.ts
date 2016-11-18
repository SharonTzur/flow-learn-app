import { Component, ChangeDetectionStrategy } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import {UserService} from "../../providers/user-service";
import {TasksPage} from "../tasks/tasks";

@Component({
  templateUrl: 'tabs.html',
  selector: 'page-tabs',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = TasksPage;
  tab3Root: any = AboutPage;
  showLogin:boolean=true;

  constructor(private userService : UserService) {
    if(localStorage.getItem('currentUser')){
      this.showLogin = false;
    }
  }

  ngOnInit(){

  }
}
