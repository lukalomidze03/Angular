import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[BackgroundRed]'
})
export class BackgroundRedDirective {

  constructor(private eleRef: ElementRef) { }
  @Input() set BackgroundRed(color :string){
   console.log(color);
   
    const element=this.eleRef.nativeElement;
element.style.background=color
  console.log(this.eleRef);
  
  }
}
