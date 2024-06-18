import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doublePure',
  pure:false
})
export class DoublePurePipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): unknown {
    console.log('DoublePurePipe call');
    return value.map((el:number)=>el*2);
    
  }

}
