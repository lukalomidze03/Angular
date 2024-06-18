import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-pipes';

  person1={ name:'luka' , age:21}

  name$=new BehaviorSubject<string>('') 

  public setName(): void {
    this.name$.next('john Doe');
  } 
dater: Date= new Date()

price: number = 12345.6789;

myNumber: number = 0.23;

myArray: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];

myString: string = 'this is a sentence in lowercase.';

mynimbr:number[]=[1,2,3,4,5]
public changeArray():void{
  this.mynimbr.push(4)
  this.mynimbr=[...this.mynimbr]
}
}



