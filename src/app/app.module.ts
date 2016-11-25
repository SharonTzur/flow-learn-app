import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {TasksPage} from '../pages/tasks/tasks';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {UserService} from "../providers/user-service";
import {TaskService} from "../providers/task-service";/*
import {TranslatePipe} from "../providers/translate/translate.pipe";
import {TranslateService} from "../providers/translate/translate.service";
import {TRANSLATION_PROVIDERS} from "../providers/translate/translations";*/
import {EditTaskPage} from "../pages/edit-task/edit-task";

import {Form1} from "../pages/edit-task/form1";
import {Form2} from "../pages/edit-task/form2";
import {Form3} from "../pages/edit-task/form3";
import {Form4} from "../pages/edit-task/form4";
import {Form5} from "../pages/edit-task/form5";
import {Form6} from "../pages/edit-task/form6";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        TasksPage,
        HomePage,
        TabsPage,
        EditTaskPage,
        Form1,
        Form2,
        Form3,
        Form4,
        Form5,
        Form6

    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        TasksPage,
        HomePage,
        TabsPage,
        EditTaskPage,
        Form1,
        Form2,
        Form3,
        Form4,
        Form5,
        Form6
    ],
    providers: [UserService, TaskService]
})
export class AppModule {
}
