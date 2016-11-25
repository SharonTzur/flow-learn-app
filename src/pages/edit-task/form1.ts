import {Component, Input} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TaskService} from "../../providers/task-service";

@Component({
    selector: 'form1',
    templateUrl: 'form.html'

})
export class Form1 {
    @Input() task: any;
    section: any;
    typeOpts: any = [
        {
            subject: 'math',
            showDetails: false,
            icon: 'ios-add-circle-outline',
            choices: ['multiple', 'diversion'],
            chosen: []
        },
        {
            subject: 'physics',
            showDetails: false,
            icon: 'ios-add-circle-outline',
            choices: ['light', 'matter'],
            chosen: []
        }];


    reasonOpts: any = [
        {
            subject: 'self',
            showDetails: false,
            icon: 'ios-add-circle-outline',
            choices: ['exploration', 'practice'],
            chosen: []
        },
        {
            subject: 'outer',
            showDetails: false,
            icon: 'ios-add-circle-outline',
            choices: ['homework', 'test'],
            chosen: []
        }]

    private navCtrl: NavController = null;

    constructor(navCtrl: NavController, public params: NavParams, private taskService: TaskService) {
        this.navCtrl = navCtrl;
    }

    ngOnInit() {
        this.section = this.navCtrl["index"];
        this.task = this.params.data;
        if (!this.task) {
            this.task = {
                title: "",
                content: {
                    text:"",
                    url:"",
                    relatedFile:""
                },
                type: [],
                reason: [],
                products: {
                    text:"",
                    url:"",
                    relatedFile:""
                },
                conclusions: "",
                featuredImage: "",
                phrases: "",
                community: ""
            }
        }
    }


    updateTaskType(ev) {
        this.task.type = [];
        this.typeOpts.forEach((type)=> {
            type.chosen.forEach((subj)=> {
                this.task.type.push(subj);
            });
        })
    }

    updateReasonType(ev) {
        this.task.reason = [];
        this.reasonOpts.forEach((option)=> {
            option.chosen.forEach((subj)=> {
                this.task.reason.push(subj);
            });
        })
    }

}

