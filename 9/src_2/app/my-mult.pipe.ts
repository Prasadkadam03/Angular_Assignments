import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: any[]): unknown 
  {
    let Temp : number = value * args[0];
    return Temp;
  }

}
