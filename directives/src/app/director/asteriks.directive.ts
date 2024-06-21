import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[asterisk]'
})
export class AsteriskDirective {

  constructor(
    private elementRef:ElementRef
  ) { }

  @Input() set asterisk(count:number){
    let aster=''
    for(let i=0; i<count; i++){aster+='*'};
    this.elementRef.nativeElement.textContent=aster;
  }
}
