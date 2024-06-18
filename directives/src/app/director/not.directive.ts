import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[Not]'
})
export class NotDirective {
  hasView:boolean=false
  constructor(
    private templateRef: TemplateRef<any>,
    
  ) { }

}
