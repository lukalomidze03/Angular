import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-from-2',
  templateUrl: './from-2.component.html',
  styleUrls: ['./from-2.component.scss']
})
export class From2Component {
  submit(from:NgForm):void{
    console.log(from.value);
    
    
    
    }
    
}
