import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from "rxjs";
import firebase from 'firebase';

/*
 Generated class for the UserService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class TaskService {
    firebaseRef: any;
    firebaseAuth: any;
    firebaseDb: any;
    userTasksIdsArr:any;
    userTasksPath:any;
    userTasksIds:any;
    tasksPath:any;
    tasks:any;
    tasksIds:any;
    public filteredTasks:any;

    public userTasks: ReplaySubject<any> = new ReplaySubject(1);

    constructor() {
        this.firebaseRef = firebase;
        this.firebaseAuth = firebase.auth();
        this.firebaseDb = firebase.database().ref();

    };

   getUserTasks(){
       this.userTasksPath = this.firebaseDb.child(`/users/${this.firebaseAuth.currentUser.uid}/tasks`);
       this.tasksPath = this.firebaseDb.child(`/tasks`);

       this.getRecords(this.userTasksPath).subscribe((userTasks)=> {
           var userTasksIdsArr = [];
           for (let taskId in userTasks) {
               userTasksIdsArr.push(userTasks[taskId].taskId);
           }
           this.userTasksIds = userTasksIdsArr;

           this.getRecords(this.tasksPath).subscribe((tasks)=> {
               this.tasks= tasks;
               var filteredTasks = [];
               var tasksIds = this.userTasksIds;
               for (let taskId in tasks) {
                   if (tasksIds.includes(taskId)) {
                       let newTask = tasks[taskId];
                       newTask["$key"] = taskId;
                       filteredTasks.push(newTask);
                   }
               }
               this.filteredTasks = filteredTasks;
               this.userTasks.next(this.filteredTasks);

           });
       });
   }


    getRecords(ref) {
        return Observable.create(function (observer: any) {
            function value(snapshot) {
                observer.next(snapshot.val());
            }

            ref.on('value', value);
            return (()=> {
                ref.off('value', value);

            })
        });
    }

}
