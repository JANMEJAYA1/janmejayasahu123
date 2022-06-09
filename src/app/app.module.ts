import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { SettingComponent } from './component/setting/setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClassesComponent } from './component/classes/classes.component';
import { ResourcesComponent } from './component/resources/resources.component';
import { ChatComponent } from './component/chat/chat.component';
import { LearningplanComponent } from './component/learningplan/learningplan.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent, 
    SettingComponent,
    DashboardComponent,
    ClassesComponent,
    ResourcesComponent,
    ChatComponent,
    LearningplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
