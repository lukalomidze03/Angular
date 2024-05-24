import { Component, Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-from-3',
  templateUrl: './from-3.component.html',
  styleUrls: ['./from-3.component.scss']
})
export class From3Component {

  public toDo: string = '';

  submitForm(form: NgForm): void {
    if (form.valid) {
      this.saveToDo(form.form.controls['to-do'].value);
      form.reset();
    } else {
      console.log('inValid');
    }
  }

  saveToDo(toDo: string) {
    let toDoList:string[]=[];
    let todo: string | null  = localStorage.getItem('todo');
    if(todo){
      toDoList=JSON.parse(todo);
      toDoList.push(toDo);
      localStorage.setItem('todo', JSON.stringify(toDoList));
    }
    else{
      toDoList.push(toDo);
      localStorage.setItem('todo', JSON.stringify(toDoList));
    }
  }








}
