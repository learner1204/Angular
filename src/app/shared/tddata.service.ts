import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TddataService {
  todos = [
    { id:0,task: "Learn Angular", status: false },
    { id:1,task: "Learn Python", status: true },
    { id:2,task: "Learn HTML", status: false },
    { id:3,task:"Learn Java", status: true }
  ];

  //get comppleted todos
  todos_pending = this.todos.filter(function(todo:any){return todo.status == false})

  //get comppleted todos
  todos_completed = this.todos.filter(function(todo:any){return todo.status == true})

  get_all_todos(){
    return this.todos;
  }

  get_pending_todos(){
    return this.todos_pending;
  }

  get_completed_todos(){
    return this.get_completed_todos;
  }

  toggle_task(id:number):void {
    //Changing the status to true <->false
    this.todos[id].status = !this.todos[id].status;
  }
  constructor() { }
}
