import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
public toDo:string="";

subbutom(form:NgForm) :void{
  if (form.valid) {
    this.saveToDo(form.form.controls["to-do"].value)
    form.reset()
  }
  else{
    console.log('inVaild');
    
  }
}

saveToDo( toDo:string){
  let toDoLister:string[]=[]
  let todo:string | null =localStorage.getItem('todo')
  if (todo) {
    toDoLister=JSON.parse(todo)
    toDoLister.push(toDo)
    localStorage.setItem('todo',JSON.stringify(toDoLister))
  }
  else{
toDoLister.push(toDo)
localStorage.setItem('todo',JSON.stringify(toDoLister))
  
}
}


}
