import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todopending',
  templateUrl: './todopending.component.html',
  styleUrls: ['./todopending.component.css']
})
export class TodopendingComponent implements OnInit {
  todos = [
    { id:0,task: "Learn Angular", status: false },
    { id:1,task: "Learn Python", status: true },
    { id:2,task: "Learn HTML", status: false },
    { id:3,task:"Learn Java", status: true }
  ];

  //get comppleted todos
  todos_pending = this.todos.filter(function(todo:any){return todo.status == false})


  toggle_task(id:number):void {
        //Changing the status to true <->false
    this.todos[id].status = !this.todos[id].status;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
