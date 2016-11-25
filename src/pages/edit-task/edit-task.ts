import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {TaskService} from "../../providers/task-service";
import {TranslatePipe} from "../../providers/translate/translate.pipe";
import {UserService} from "../../providers/user-service";

import {Form1} from "./form1";
import {Form2} from "./form2";
import {Form3} from "./form3";
import {Form4} from "./form4";
import {Form5} from "./form5";
import {Form6} from "./form6";


@Component({
    selector: 'page-edit-task',
    templateUrl: 'edit-task.html'
})
export class EditTaskPage {
    userTasks: any;
    task:any;
    value:any;

    tab1Root: any = Form1;
    tab2Root: any = Form2;
    tab3Root: any = Form3;
    tab4Root: any = Form4;
    tab5Root: any = Form5;
    tab6Root: any = Form6;

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