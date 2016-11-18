import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {TaskService} from "../../providers/task-service";
import {TranslatePipe} from "../../providers/translate/translate.pipe";


@Component({
    selector: 'page-edit-task',
    templateUrl: 'edit-task.html'
})
export class EditTaskPage {
    userTasks: any;
    task:any;
    value:any;
    constructor(public navCtrl: NavController, public params: NavParams, private taskService: TaskService) {

    }
    ngOnInit(){
        this.task=this.params.get('task');
        if(!this.task){
            this.task={
                title: "",
                content:  "",
                type: [],
                reason:  "",
                products:  "",
                conclusions: "",
                featuredImage: "",
                phrases:  "",
                community:  ""
            }
        }
        
        
        

    }

}