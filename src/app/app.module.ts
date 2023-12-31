import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodocompletedComponent } from './todocompleted/todocompleted.component';
import { TodopendingComponent } from './todopending/todopending.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodocompletedComponent,
    TodopendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
