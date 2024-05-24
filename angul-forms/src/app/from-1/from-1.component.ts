import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-from-1',
  templateUrl: './from-1.component.html',
  styleUrls: ['./from-1.component.scss']
})
export class From1Component {

  name:string='luka'
  changeN():void{
   this.name='giorgi' 
  }
  
}
