import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pearent',
  templateUrl: './pearent.component.html',
  styleUrls: ['./pearent.component.scss']
})
export class PearentComponent implements OnInit {

  txt:string = 'hello i am luke'
public txt2:string = '1000'

ngOnInit(): void {
  
}
}
