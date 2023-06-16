import { ExpressionType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos = [
    { id:0,task: "Learn Angular", status: false },
    { id:1,task: "Learn Python", status: true },
    { id:2,task: "Learn HTML", status: false },
    { id:3,task:"Learn Java", status: true }
  ];

  constructor() { }

  add_task(new_task:string):void {
    if(new_task==""){
      alert("Invalid Task Name");
      return;
    }
    //compose new task object
    let new_todo = {id:this.todos.length,task:new_task,status:false};

    //Add new task object to list
    this.todos.push(new_todo);
  }

  toggle_task(id:number):void {
    //Changing the status to true <->false
    this.todos[id].status = !this.todos[id].status;

  }

  ngOnInit(): void {
  }

}
