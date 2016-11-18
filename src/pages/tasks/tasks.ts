import { Component, ChangeDetectionStrategy } from '@angular/core';

import { NavController } from 'ionic-angular';
import {TaskService} from "../../providers/task-service";
import {TranslatePipe} from "../../providers/translate/translate.pipe";
import {EditTaskPage} from "../edit-task/edit-task";


@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
  changeDetection: ChangeDetectionStrategy.Default,

})
export class TasksPage {
  userTasks:any;
  grid:boolean;
  constructor(public navCtrl: NavController, private taskService: TaskService) {
    this.grid = false;
    this.taskService.userTasks.subscribe((userTasks) => {
      this.userTasks = userTasks;
    });
  }
  ngOnInit(){
    this.taskService.getUserTasks();
  }

  editTask(event, item) {
    this.navCtrl.push(EditTaskPage, {
      task: item
    });
  }
}
