import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-1',
  templateUrl: './table-1.component.html',
  styleUrls: ['./table-1.component.scss']
})
export class Table1Component implements OnInit {
  todoList:string[]=[]

  ngOnInit(): void {
    this.getTodo('todo')
  }



  getTodo(key:string):void{
    let toDo:string | null =localStorage.getItem(key)
  if (toDo) {
      this.todoList=JSON.parse(toDo)
  }
    
  }
}
