import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './component/chat/chat.component';
import { ClassesComponent } from './component/classes/classes.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LearningplanComponent } from './component/learningplan/learningplan.component';
import { ResourcesComponent } from './component/resources/resources.component';

import { SettingComponent } from './component/setting/setting.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path:"dashboard",component:DashboardComponent},
  {path:"classes",component:ClassesComponent},
  {path:"resources",component:ResourcesComponent},
  {path:"learningplan",component:LearningplanComponent},
  {path:"chat",component:ChatComponent},
  {path:"Setting",component:SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
