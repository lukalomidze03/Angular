import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Output() btndata = new EventEmitter<string>();

@Input() public txtC:string=''

public btnClicker():void{

  this.btndata.emit('hello luke in child 2')


}



}
