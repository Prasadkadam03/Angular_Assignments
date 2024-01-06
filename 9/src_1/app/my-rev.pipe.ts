import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown 
  { 
      let temp  = value;
      let temp2 : string = "";

      for (let i : number = temp.length-1; i >= 0; i--)
      {
        temp2 = temp2 + temp[i];
      }   
    return temp2;
  }

}