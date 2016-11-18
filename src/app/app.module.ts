import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TasksPage } from '../pages/tasks/tasks';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {UserService} from "../providers/user-service";
import {TaskService} from "../providers/task-service";
import {TranslatePipe} from "../providers/translate/translate.pipe";
import {TranslateService} from "../providers/translate/translate.service";
import {TRANSLATION_PROVIDERS} from "../providers/translate/translations";
import {EditTaskPage} from "../pages/edit-task/edit-task";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TasksPage,
    HomePage,
    TabsPage,
    EditTaskPage

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
    EditTaskPage
  ],
  providers: [UserService,TaskService]
})
export class AppModule {}
