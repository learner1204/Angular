import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todocompleted',
  templateUrl: './todocompleted.component.html',
  styleUrls: ['./todocompleted.component.css']
})
export class TodocompletedComponent implements OnInit {

  todos = [
    { id:0,task: "Learn Angular", status: false },
    { id:1,task: "Learn Python", status: true },
    { id:2,task: "Learn HTML", status: false },
    { id:3,task:"Learn Java", status: true }
  ];

  //get comppleted todos
  todos_completed = this.todos.filter(function(todo:any){return todo.status == true})
  constructor() { }


  toggle_task(id:number):void {
        //Changing the status to true <->false
    this.todos[id].status = !this.todos[id].status;
  }


  ngOnInit(): void {
  }

}
