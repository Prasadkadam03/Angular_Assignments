import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: any[]): number
  { 

    return value + args[0];
  }

}
